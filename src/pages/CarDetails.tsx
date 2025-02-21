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
    async function fetchCarDetails() {
      try {
        const response = await fetch(`http://localhost:4000/cars/${carId}`);
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
    return <div>Loading car details...</div>;
  }

  if (error || !car) {
    return <div>Error: {error || 'Car not found'}</div>;
  }

  const whatsappNumber = '16474378189';
  const whatsappMessage = encodeURIComponent(`Hi, I'm interested in the ${car.year} ${car.make} ${car.model} ${car.trim} (Stock #${car.carId})`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const calendlyUrl = "https://calendly.com/lewisjlee23/supercar-import-discovery-call";

  // Calculate final price based on selected province
  const calculateFinalPrice = () => {
    if (!config) return car.priceCad;
    const provinceData = provinces.find(p => p.value === selectedProvince)!;
    const charges = config.chargesByProvince[provinceData.label];
    
    return Math.round(car.priceCad + charges.reduce((total, charge) => {
      const value = typeof charge.value === 'number' && charge.value < 1 
        ? car.priceCad * charge.value 
        : charge.value;
      return total + value;
    }, 0));
  };

  const finalPrice = calculateFinalPrice();

  if (car) {
    return (
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden border border-green-600/20">
                <ImageCarousel photos={car.carPhotos} />
                
                <div className="p-8">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                          {car.year} {car.make} {car.model}
                        </h1>
                        <p className="mt-1 text-xl text-green-600 font-semibold">{car.trim}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Delivered, Cleared, & Register Ready:</p>
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex items-center gap-1">
                            <span className="text-sm">🇨🇦</span>
                            <span className="text-3xl font-bold text-gray-900">
                              ${finalPrice.toLocaleString()}
                              <span className="text-sm ml-1">CAD</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex items-center gap-8">
                      <div className="flex items-center gap-2">
                        <Gauge className="text-gray-400" size={24} />
                        <div>
                          <p className="text-sm text-gray-400">Mileage</p>
                          <p className="font-semibold text-gray-900">{car.mileage.toLocaleString()} km</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Fuel className="text-gray-400" size={24} />
                        <div>
                          <p className="text-sm text-gray-400">Fuel Type</p>
                          <p className="font-semibold text-gray-900">{car.fuelType}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 space-y-6 border-t border-green-600/20 pt-8">
                    <h2 className="text-xl font-semibold text-gray-900">Additional Information</h2>
                    <div className="space-y-4">
                      <a
                        href={car.newCarPriceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-600 hover:text-green-500 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span>Compare New Car Prices</span>
                      </a>
                      
                      <a
                        href={car.optionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-600 hover:text-green-500 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span>View Features and Options</span>
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
              
              <div className="bg-gray-50 rounded-xl p-6 border border-green-600/20 space-y-4">
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
                  className="w-full bg-green-600/10 hover:bg-green-600/20 text-green-600 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  <span>Book A Call</span>
                </a>

                <button 
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 border border-green-600/20"
                >
                  <Video size={20} />
                  <span>Order Detailed Inspection + Live Video Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}