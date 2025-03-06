import React, { useState, useEffect, useContext } from 'react';
import { Car } from '../types';
import { ImageCarousel } from '../components/ImageCarousel';
import { PriceBreakdown } from '../components/PriceBreakdown';
import { DollarSign, Fuel, Gauge, ExternalLink, MessageCircle, Video, Calendar } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { ConfigContext } from '../contexts/ConfigContext';
import { convertFromKRW } from '../utils/currency';
import { Province } from '../types';
import { provinces } from '../constants/provinces';

export function CarDetails() {
  const { carId } = useParams();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const config = useContext(ConfigContext);
  const [selectedProvince, setSelectedProvince] = useState<Province>('BC');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    async function fetchCarDetails() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cars/${carId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCar(data);
      } catch (error) {
        console.error('Error fetching car details:', error);
        setError('Failed to load car details');
      } finally {
        setLoading(false);
      }
    }
    
    if (carId) {
      fetchCarDetails();
    }
  }, [carId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-white text-xl font-semibold">Loading car details...</div>
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-red-400 text-xl font-semibold">Error: {error || 'Car not found'}</div>
      </div>
    );
  }

  // URLs for actions
  const whatsappNumber = '+14374638189';
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${car.year} ${car.make} ${car.model} ${car.trim} (Stock #${car.carId})`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const calendlyUrl = 'https://calendly.com/admin-sgsupercars/15min';

  // Function to calculate final price with taxes/fees
  const calculateFinalPrice = () => {
    if (!config) return car.priceCad;
    const provinceData = provinces.find(p => p.value === selectedProvince)!;
    const charges = config.chargesByProvince[provinceData.label];

    return Math.round(
      car.priceCad +
        charges.reduce((total, charge) => {
          // Skip if it's not a number
          if (typeof charge.value !== 'number') {
            return total;
          }
          // If it's below 1, assume it's a percentage
          const numericValue = charge.value < 1
            ? car.priceCad * charge.value
            : charge.value;

          return total + numericValue;
        }, 0)
    );
  };

  const finalPrice = calculateFinalPrice();

  // 1) Handle deposit click
  //    Here we assume you have an endpoint like '/create-checkout-session' 
  //    that creates a Stripe Checkout session and returns the session URL.
  //    Adjust the code to match your actual backend route and params.
  const handleDepositClick = async () => {
    try {
      const lineItemDescription = 
  `Fully refundable deposit for the ${car.year} ${car.make} ${car.model} (Stock #${car.carId}).\n\n` +
  `Once paid, we'll contact you within 24 hours to begin the professional mechanic inspection.\n\n` +
  `If you have any questions, email admin@sgsupercars.ca or call/whatsapp Brian at (437)-463-8189.`;



      const lineItemName = `Deposit (Refundable) - ${car.year} ${car.make} ${car.model} (Stock #${car.carId})`;
      const depositAmount = 1000;
  
      const lineItems = [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: lineItemName,
              description: lineItemDescription,
            },
            unit_amount: depositAmount * 100,
          },
          quantity: 1,
        },
      ];
  
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/stripe/create-checkout-session`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lineItems }),
        }
      );
  
      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }
  
      const data = await response.json();
      // Open the Stripe Checkout URL in a new browser tab:
      window.open(data.url, '_blank');
    } catch (err) {
      console.error('Error creating Stripe Checkout session:', err);
      setError('Failed to initiate deposit payment');
    }
  };
  

  return (
    <div className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-zinc-900 rounded-xl shadow-md overflow-hidden border border-zinc-700">
              <ImageCarousel photos={car.carPhotos} />
              
              <div className="p-6 sm:p-8">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-bold text-white">
                        {car.year} {car.make} {car.model}
                      </h1>
                      <p className="mt-1 text-lg sm:text-xl text-green-400 font-semibold">{car.trim}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-sm text-gray-300">Delivered, Cleared, &amp; After Taxes:</p>
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <div className="flex items-center gap-1">
                          <span className="text-sm">🇨🇦</span>
                          <span className="text-2xl sm:text-3xl font-bold text-white">
                            ${finalPrice.toLocaleString()}
                            <span className="text-sm ml-1">CAD</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-3">
                      <Gauge className="text-green-400" size={24} />
                      <div>
                        <p className="text-sm text-gray-300">Mileage</p>
                        <p className="font-semibold text-white">
                          {car.mileage.toLocaleString()} km
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Fuel className="text-green-400" size={24} />
                      <div>
                        <p className="text-sm text-gray-300">Fuel Type</p>
                        <p className="font-semibold text-white">{car.fuelType}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 space-y-6 border-t border-zinc-700 pt-8">
                  <h2 className="text-xl font-semibold text-white">Additional Information</h2>
                  <div className="space-y-4">
                    <a
                      href={car.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>View Original Listing On Encar.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <PriceBreakdown 
              basePrice={car.priceCad}
              selectedProvince={selectedProvince}
              onProvinceChange={setSelectedProvince}
            />
            
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-700 space-y-4">

              {/* 2) The new button to request inspection w/ deposit */}
              <button
                onClick={handleDepositClick}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
              >
                <DollarSign size={20} />
                <span>Request Inspection W/ Deposit</span>
              </button>

              {/* Existing "WhatsApp Now" button */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Now</span>
              </a>

              <a 
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600/20 hover:bg-green-600/30 text-green-400 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                <span>Book A Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
