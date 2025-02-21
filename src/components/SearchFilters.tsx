import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchFiltersProps {
  isHomepage?: boolean;
  initialFilters?: FilterState;
}

export interface FilterState {
  minPrice: string;
  maxPrice: string;
  minYear: string;
  maxYear: string;
  make: string;
  model: string;
  trim: string;
  fuelType: string;
  transmission: string;
  minMileage: string;
  maxMileage: string;
  engine: string;
  color: string;
  bodyStyle: string;
}

const carMakes = {
  'Porsche': ['911', 'Cayenne', 'Panamera'],
  'Ferrari': ['F8', '488', 'SF90'],
  'Lamborghini': ['Huracán', 'Aventador', 'Urus'],
  'McLaren': ['720S', '570S', 'GT'],
};

const transmissions = ['Manual', 'Automatic', 'DCT', 'PDK'];
const fuelTypes = ['Gasoline', 'Hybrid', 'Electric'];
const bodyStyles = ['Coupe', 'Convertible', 'SUV', 'Sedan'];
const colors = ['Black', 'White', 'Red', 'Blue', 'Silver', 'Yellow', 'Green'];
const engines = ['V6', 'V8', 'V10', 'V12', 'Flat-6', 'Hybrid'];

export const MIN_PRICE = 16990;
export const MAX_PRICE = 1997000;
export const MIN_YEAR = 1990;
export const MAX_YEAR = new Date().getFullYear() + 1;
export const MIN_MILEAGE = 0;
export const MAX_MILEAGE = 100000;

export function SearchFilters({ isHomepage = false, initialFilters }: SearchFiltersProps) {
  const navigate = useNavigate();
  const [showMakeDropdown, setShowMakeDropdown] = useState(false);
  const [showModelDropdown, setShowModelDropdown] = useState(false);
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

  useEffect(() => {
    if (initialFilters) {
      setFilters(initialFilters);
    }
  }, [initialFilters]);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const makeInputRef = useRef<HTMLInputElement>(null);
  const modelInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowMakeDropdown(false);
        setShowModelDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMakeInputClick = () => {
    setShowMakeDropdown(!showMakeDropdown);
    setShowModelDropdown(false);
  };

  const handleModelInputClick = () => {
    if (filters.make) {
      setShowModelDropdown(!showModelDropdown);
      setShowMakeDropdown(false);
    }
  };

  const handleMakeSelect = (make: string) => {
    setFilters(prev => ({ ...prev, make, model: '' }));
    setShowMakeDropdown(false);
    if (modelInputRef.current) {
      modelInputRef.current.focus();
    }
  };

  const handleModelSelect = (model: string) => {
    setFilters(prev => ({ ...prev, model }));
    setShowModelDropdown(false);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    
    navigate(`/listings?${params.toString()}`);
  };

  const renderDropdown = (options: string[], field: keyof FilterState) => {
    const getDisplayName = (fieldName: string) => {
      switch(fieldName) {
        case 'bodyStyle':
          return 'Body Style';
        case 'fuelType':
          return 'Fuel Type';
        default:
          return fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
      }
    };

    return (
      <div className="relative">
        <select
          value={filters[field]}
          onChange={(e) => setFilters(prev => ({ ...prev, [field]: e.target.value }))}
          className="w-full px-4 py-3 bg-gray-50 border border-green-600/20 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent appearance-none"
        >
          <option value="">{getDisplayName(field)}</option>
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
      </div>
    );
  };

  return (
    <div className="bg-black p-6 rounded-xl shadow-sm border border-green-600/20">
      <div className="space-y-6">
        {/* Search Button at the top */}
        <div className="flex justify-center">
          <button 
            onClick={handleSearch}
            className="btn-primary flex items-center gap-2 text-lg px-12 py-4 rounded-full"
          >
            <Search size={24} />
            <span>Find Your Dream Car</span>
          </button>
        </div>

        {/* Make and Model Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" ref={dropdownRef}>
          <div className="relative">
            <input
              ref={makeInputRef}
              type="text"
              placeholder="Make"
              className="w-full px-4 py-3 bg-gray-50 border border-green-600/20 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              value={filters.make}
              onChange={(e) => setFilters(prev => ({ ...prev, make: e.target.value, model: '' }))}
              onClick={handleMakeInputClick}
            />
            {showMakeDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-black border border-green-600/20 rounded-lg shadow-lg max-h-60 overflow-auto">
                {Object.keys(carMakes)
                  .filter(make => make.toLowerCase().includes(filters.make.toLowerCase()))
                  .map((make) => (
                    <button
                      key={make}
                      className="w-full px-4 py-2 text-left text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
                      onClick={() => handleMakeSelect(make)}
                    >
                      {make}
                    </button>
                  ))}
              </div>
            )}
          </div>

          <div className="relative">
            <input
              ref={modelInputRef}
              type="text"
              placeholder="Model"
              className="w-full px-4 py-3 bg-gray-50 border border-green-600/20 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              value={filters.model}
              onChange={(e) => setFilters(prev => ({ ...prev, model: e.target.value }))}
              onClick={handleModelInputClick}
              disabled={!filters.make}
            />
            {showModelDropdown && filters.make && (
              <div className="absolute z-10 w-full mt-1 bg-black border border-green-600/20 rounded-lg shadow-lg max-h-60 overflow-auto">
                {carMakes[filters.make as keyof typeof carMakes]
                  ?.filter(model => model.toLowerCase().includes(filters.model.toLowerCase()))
                  .map((model) => (
                    <button
                      key={model}
                      className="w-full px-4 py-2 text-left text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
                      onClick={() => handleModelSelect(model)}
                    >
                      {model}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>

        {!isHomepage && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {renderDropdown(transmissions, 'transmission')}
              {renderDropdown(bodyStyles, 'bodyStyle')}
              {renderDropdown(fuelTypes, 'fuelType')}
              {renderDropdown(engines, 'engine')}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderDropdown(colors, 'color')}
              <input
                type="text"
                placeholder="Trim"
                value={filters.trim}
                onChange={(e) => setFilters(prev => ({ ...prev, trim: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-50 border border-green-600/20 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-gray-900 font-medium mb-2">Year</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Min Year"
                    value={filters.minYear}
                    onChange={(e) => setFilters(prev => ({ ...prev, minYear: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-50 border border-green-600/20 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    min={MIN_YEAR}
                    max={MAX_YEAR}
                  />
                  <input
                    type="number"
                    placeholder="Max Year"
                    value={filters.maxYear}
                    onChange={(e) => setFilters(prev => ({ ...prev, maxYear: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-50 border border-green-600/20 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    min={MIN_YEAR}
                    max={MAX_YEAR}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-900 font-medium">Price</h3>
                  <div className="flex items-center gap-2 text-gray-900">
                    <input
                      type="text"
                      value={`$${parseInt(filters.minPrice).toLocaleString()}`}
                      className="w-28 px-3 py-1 bg-gray-50 border border-green-600/20 rounded text-right"
                      readOnly
                    />
                    <span>-</span>
                    <input
                      type="text"
                      value={`$${parseInt(filters.maxPrice).toLocaleString()}`}
                      className="w-28 px-3 py-1 bg-gray-50 border border-green-600/20 rounded text-right"
                      readOnly
                    />
                  </div>
                </div>
                
                <div className="relative h-4">
                  <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-green-600/20 rounded-full" />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-1 bg-green-600 rounded-full"
                    style={{
                      left: `${((parseInt(filters.minPrice) - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
                      right: `${100 - ((parseInt(filters.maxPrice) - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%`
                    }}
                  />
                  <input
                    type="range"
                    name="minPrice"
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    value={filters.minPrice}
                    onChange={handlePriceChange}
                    className="absolute top-0 left-0 w-full h-4 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-600 [&::-webkit-slider-thumb]:cursor-pointer hover:[&::-webkit-slider-thumb]:bg-green-500 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
                    style={{ zIndex: 3 }}
                  />
                  <input
                    type="range"
                    name="maxPrice"
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    value={filters.maxPrice}
                    onChange={handlePriceChange}
                    className="absolute top-0 left-0 w-full h-4 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-600 [&::-webkit-slider-thumb]:cursor-pointer hover:[&::-webkit-slider-thumb]:bg-green-500 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
                    style={{ zIndex: 4 }}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-gray-900 font-medium mb-2">Mileage</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Min Mileage"
                    value={filters.minMileage}
                    onChange={(e) => setFilters(prev => ({ ...prev, minMileage: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-50 border border-green-600/20 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    min={MIN_MILEAGE}
                    max={MAX_MILEAGE}
                  />
                  <input
                    type="number"
                    placeholder="Max Mileage"
                    value={filters.maxMileage}
                    onChange={(e) => setFilters(prev => ({ ...prev, maxMileage: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-50 border border-green-600/20 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    min={MIN_MILEAGE}
                    max={MAX_MILEAGE}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}