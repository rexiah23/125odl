import React, { useState, useEffect, useContext } from 'react';
import { Car } from '../types';
import { SearchFilters, FilterState, MIN_PRICE, MAX_PRICE, MIN_YEAR, MAX_YEAR, MIN_MILEAGE, MAX_MILEAGE } from '../components/SearchFilters';
import { useNavigate, useLocation } from 'react-router-dom';
import { ConfigContext } from '../contexts/ConfigContext';
import { Gauge, Fuel } from 'lucide-react';

function calculateTotalPrice(basePrice: number, provinceCharges: any[]) {
  return Math.round(
    basePrice +
      provinceCharges.reduce((total, charge) => {
        const value =
          typeof charge.value === 'number' && charge.value < 1
            ? basePrice * charge.value
            : charge.value;
        return total + value;
      }, 0)
  );
}

export function Listings() {
  const navigate = useNavigate();
  const location = useLocation();
  const config = useContext(ConfigContext);
  const [filters, setFilters] = useState<FilterState>({
    minPrice: MIN_PRICE.toString(),
    maxPrice: MAX_PRICE.toString(),
    minYear: MIN_YEAR.toString(),
    maxYear: MAX_YEAR.toString(),
    minMileage: MIN_MILEAGE.toString(),
    maxMileage: MAX_MILEAGE.toString(),
    make: '',
    model: '',
    trim: '',
    fuelType: '',
    transmission: '',
    engine: '',
    color: '',
    bodyStyle: '',
  });
  const [allCars, setAllCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const newFilters: Partial<FilterState> = {};

    // Extract all possible filter values from URL
    Object.keys(filters).forEach(key => {
      const value = params.get(key);
      if (value) {
        newFilters[key as keyof FilterState] = value;
      }
    });

    setFilters(prev => ({
      ...prev,
      ...newFilters,
    }));
  }, [location.search]);

  useEffect(() => {
    async function fetchAllCars() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cars`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('datA:', data);
        setAllCars(data);
      } catch (error) {
        console.error('Error fetching all cars:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchAllCars();
  }, []);

  console.log('allCars: ', allCars);

  // Fix: convert string values to numbers for filtering and use the correct price property.
  const filteredCars = allCars.filter((car) => {
    const matchesMake =
      !filters.make ||
      car.make.toUpperCase().includes(filters.make.toUpperCase());

    const matchesModel =
      !filters.model ||
      car.model.toUpperCase().includes(filters.model.toUpperCase());

    const matchesTrim =
      !filters.trim ||
      car.trim.toUpperCase().includes(filters.trim.toUpperCase());

    // Using a case-insensitive check for fuel type (optional)
    const matchesFuelType =
      !filters.fuelType ||
      car.fuelType.toUpperCase() === filters.fuelType.toUpperCase();

    // Determine the price to use (if priceCad exists, use it; otherwise, fallback to price)
    const carPrice = car.priceCad ? Number(car.priceCad) : Number(car.price);

    const matchesPrice =
      carPrice >= parseInt(filters.minPrice) &&
      carPrice <= parseInt(filters.maxPrice);

    // Ensure the car year is compared numerically
    const carYear = Number(car.year);
    const matchesYear =
      (!filters.minYear || carYear >= parseInt(filters.minYear)) &&
      (!filters.maxYear || carYear <= parseInt(filters.maxYear));

    const matchesMileage =
      (!filters.minMileage || car.mileage >= parseInt(filters.minMileage)) &&
      (!filters.maxMileage || car.mileage <= parseInt(filters.maxMileage));

    return (
      matchesMake &&
      matchesModel &&
      matchesTrim &&
      matchesFuelType &&
      matchesPrice &&
      matchesYear &&
      matchesMileage
    );
  });

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Available Cars</h1>
          <p className="text-xl text-green-500 font-semibold">
            {filteredCars.length}{' '}
            {filteredCars.length === 1 ? 'Vehicle' : 'Vehicles'} Ready To Be Imported
          </p>
        </div>

        <div className="mb-8">
          <SearchFilters initialFilters={filters} />
        </div>

        <div className="space-y-6">
          {loading ? (
            <div>Loading cars...</div>
          ) : (
            filteredCars.map((car) => {
              // Use the same carPrice for final price calculation.
              const carPrice = car.priceCad ? Number(car.priceCad) : Number(car.price);
              const finalPrice = config
                ? calculateTotalPrice(
                    carPrice,
                    config.chargesByProvince['British Columbia'] // Default to BC
                  )
                : carPrice;

              return (
                <div
                  key={car.carId}
                  className="bg-gray-50 rounded-lg overflow-hidden border border-green-600/20 hover:border-green-600/40 transition-colors cursor-pointer"
                  onClick={() => navigate(`/car/${car.carId}`)}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 lg:w-2/5">
                      <div className="relative pt-[75%] md:pt-0 md:h-full">
                        <img
                          src={
                            car.carPhotos[0]?.photoUrl ||
                            'https://via.placeholder.com/800x600?text=No+Image'
                          }
                          alt={`${car.year} ${car.make} ${car.model}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="p-6 md:w-2/3 lg:w-3/5">
                      <div className="mb-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                              {car.year} {car.make} {car.model}
                            </h2>
                            <p className="text-green-600 font-medium">{car.trim}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-400">
                              Delivered, Cleared, & Register Ready:
                            </p>
                            <div className="flex items-center gap-1">
                              <span className="text-sm">🇨🇦</span>
                              <span className="text-2xl font-bold text-gray-900">
                                ${finalPrice.toLocaleString()}
                                <span className="text-sm ml-1">CAD</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                        <div>
                          <p className="text-gray-400">Stock</p>
                          <p className="text-gray-900 font-medium">#{car.carId}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Mileage</p>
                          <p className="text-gray-900 font-medium">
                            {car.mileage.toLocaleString()} km
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Fuel Type</p>
                          <p className="text-gray-900 font-medium">{car.fuelType}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Transmission</p>
                          <p className="text-gray-900 font-medium">6 Speed Manual</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Engine</p>
                          <p className="text-gray-900 font-medium">3.2L V6</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Drivetrain</p>
                          <p className="text-gray-900 font-medium">RWD</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <button className="btn-primary">Inquire</button>
                        <button className="bg-green-600/10 hover:bg-green-600/20 text-green-500 font-semibold py-3 px-6 rounded-lg transition-colors">
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
