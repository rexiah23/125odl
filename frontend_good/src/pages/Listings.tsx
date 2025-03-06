import React, { useState, useEffect, useContext } from 'react';
import { Car } from '../types';
import { SearchFilters, FilterState, MIN_PRICE, MAX_PRICE, MIN_YEAR, MAX_YEAR, MIN_MILEAGE, MAX_MILEAGE } from '../components/SearchFilters';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ConfigContext } from '../contexts/ConfigContext';
import { Gauge, Fuel, ZoomIn } from 'lucide-react';

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

  // Add scroll to top effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cars`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Sort cars by price in ascending order
        const sortedCars = data.sort((a: Car, b: Car) => a.priceCad - b.priceCad);
        setAllCars(sortedCars);
      } catch (error) {
        console.error('Error fetching all cars:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchAllCars();
  }, []);

  const filteredCars = allCars.filter((car) => {
    // Make filter
    if (filters.make && !car.make.toLowerCase().includes(filters.make.toLowerCase())) {
      return false;
    }

    // Model filter
    if (filters.model && !car.model.toLowerCase().includes(filters.model.toLowerCase())) {
      return false;
    }

    // Trim filter
    if (filters.trim && !car.trim.toLowerCase().includes(filters.trim.toLowerCase())) {
      return false;
    }

    // Fuel type filter
    if (filters.fuelType && car.fuelType.toLowerCase() !== filters.fuelType.toLowerCase()) {
      return false;
    }

    // Price filter
    const carPrice = car.priceCad || Number(car.price);
    if (filters.minPrice && carPrice < Number(filters.minPrice)) return false;
    if (filters.maxPrice && carPrice > Number(filters.maxPrice)) return false;

    // Year filter
    const carYear = Number(car.year);
    if (filters.minYear && carYear < Number(filters.minYear)) return false;
    if (filters.maxYear && carYear > Number(filters.maxYear)) return false;

    // Mileage filter
    if (filters.minMileage && car.mileage < Number(filters.minMileage)) return false;
    if (filters.maxMileage && car.mileage > Number(filters.maxMileage)) return false;

    return true;
  });

  const handleSearch = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold text-white">Available Cars</h1>
          <p className="text-xl text-green-400 font-semibold">
            {filteredCars.length}{' '}
            {filteredCars.length === 1 ? 'Vehicle' : 'Vehicles'} Ready To Be Imported
          </p>
        </div>

        <div className="mb-8">
          <SearchFilters initialFilters={filters} onSearch={handleSearch} />
        </div>

        <div className="space-y-6">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-white text-xl">Loading cars...</div>
            </div>
          ) : filteredCars.length === 0 ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-white text-xl">No cars match your search criteria</div>
            </div>
          ) : (
            filteredCars.map((car) => {
              const carPrice = car.priceCad || Number(car.price);
              const finalPrice = config
                ? calculateTotalPrice(
                    carPrice,
                    config.chargesByProvince['British Columbia']
                  )
                : carPrice;

              return (
                <div
                  key={car.carId}
                  className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-700 hover:border-green-500/30 transition-all duration-300 transform hover:scale-[1.01]"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 lg:w-2/5">
                      <Link to={`/listings/${car.carId}`} className="relative pt-[75%] md:pt-0 md:h-full block">
                        <img
                          src={
                            car.carPhotos[0]?.photoUrl ||
                            'https://via.placeholder.com/800x600?text=No+Image'
                          }
                          alt={`${car.year} ${car.make} ${car.model}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-black/70 rounded-full p-3 text-white flex items-center gap-2">
                            <ZoomIn size={20} />
                            <span>View Details</span>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="p-6 md:w-2/3 lg:w-3/5">
                      <div className="mb-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h2 className="text-2xl font-bold text-white">
                              {car.year} {car.make} {car.model}
                            </h2>
                            <p className="text-green-400 font-medium">{car.trim}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-300">
                              Delivered, Cleared, & After Taxes:
                            </p>
                            <div className="flex items-center gap-1">
                              <span className="text-sm">🇨🇦</span>
                              <span className="text-2xl font-bold text-white">
                                ${finalPrice.toLocaleString()}
                                <span className="text-sm ml-1">CAD</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                        <div>
                          <p className="text-gray-300">Stock</p>
                          <p className="text-white font-medium">#{car.carId}</p>
                        </div>
                        <div>
                          <p className="text-gray-300">Mileage</p>
                          <p className="text-white font-medium">
                            {car.mileage.toLocaleString()} km
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-300">Fuel Type</p>
                          <p className="text-white font-medium">{car.fuelType}</p>
                        </div>

                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Link 
                          to={`/listings/${car.carId}`}
                          className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-lg transition-colors text-center"
                        >
                          View Details
                        </Link>
                        <a 
                          href={`https://wa.me/4374638189?text=Hi,%20I'm%20interested%20in%20the%20${car.year}%20${car.make}%20${car.model}%20(Stock%20%23${car.carId})`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-6 rounded-lg transition-colors border border-zinc-700 text-center"
                        >
                          Inquire
                        </a>
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