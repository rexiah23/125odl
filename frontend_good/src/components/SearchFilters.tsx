import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchFiltersProps {
  isHomepage?: boolean;
  initialFilters?: FilterState;
  onSearch?: (filters: FilterState) => void;
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
  'Porsche': ['911', 'Cayenne', 'Panamera', 'Cayman', 'Boxster', 'Macan', 'Taycan', '718'],
  'Ferrari': ['F8', '488', 'SF90', 'Roma', 'Portofino', '812', 'F12', 'LaFerrari'],
  'Lamborghini': ['Huracán', 'Aventador', 'Urus', 'Gallardo', 'Murciélago', 'Countach', 'Diablo'],
  'McLaren': ['720S', '570S', 'GT', '765LT', '600LT', 'Artura', 'P1', 'Senna'],
  'Aston Martin': ['DB11', 'Vantage', 'DBS', 'DBX', 'Valkyrie'],
  'Bentley': ['Continental GT', 'Flying Spur', 'Bentayga', 'Mulsanne'],
  'Rolls-Royce': ['Phantom', 'Ghost', 'Wraith', 'Cullinan', 'Dawn'],
  'Maserati': ['Ghibli', 'Quattroporte', 'Levante', 'MC20'],
  'Mercedes-Benz': ['AMG GT', 'S-Class', 'G-Class', 'SL', 'GT Black Series'],
  'BMW': ['M8', 'M5', 'M4', 'M3', 'X5 M', 'X6 M', 'i8'],
  'Audi': ['R8', 'RS e-tron GT', 'RS6', 'RS7', 'RS Q8'],
};

const transmissions = ['Manual', 'Automatic', 'DCT', 'PDK', 'SMG', 'F1', 'E-CVT'];
const fuelTypes = ['Gasoline', 'Hybrid', 'Electric', 'Plug-in Hybrid'];
const bodyStyles = ['Coupe', 'Convertible', 'SUV', 'Sedan', 'Shooting Brake', 'Spyder', 'Roadster'];
const colors = ['Black', 'White', 'Red', 'Blue', 'Silver', 'Yellow', 'Green', 'Orange', 'Grey', 'Purple', 'Bronze', 'Gold'];
const engines = ['V6', 'V8', 'V10', 'V12', 'Flat-6', 'Hybrid', 'Electric', 'W12', 'Inline-6'];

export const MIN_PRICE = 16990;
export const MAX_PRICE = 1997000;
export const MIN_YEAR = 1990;
export const MAX_YEAR = new Date().getFullYear() + 1;
export const MIN_MILEAGE = 0;
export const MAX_MILEAGE = 300000;

const initialFilterState: FilterState = {
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
};

export function SearchFilters({ isHomepage = false, initialFilters, onSearch }: SearchFiltersProps) {
  const navigate = useNavigate();
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>(initialFilters || initialFilterState);

  useEffect(() => {
    if (initialFilters) {
      setFilters(initialFilters);
    }
  }, [initialFilters]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== initialFilterState[key as keyof FilterState]) {
        params.append(key, value);
      }
    });
    
    if (onSearch) {
      onSearch(filters);
    } else {
      navigate(`/listings?${params.toString()}`);
    }
  };

  const clearFilters = () => {
    setFilters(initialFilterState);
    if (onSearch) {
      onSearch(initialFilterState);
    }
  };

  const hasActiveFilters = Object.entries(filters).some(([key, value]) => 
    value !== '' && value !== initialFilterState[key as keyof FilterState]
  );

  return (
    <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
      <div className="flex flex-wrap gap-4 items-center">
        {/* Basic Filters */}
        <div className="flex-1 min-w-[200px]">
          <select
            value={filters.make}
            onChange={(e) => setFilters(prev => ({ ...prev, make: e.target.value, model: '' }))}
            className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:border-green-500"
          >
            <option value="">Select Make</option>
            {Object.keys(carMakes).map(make => (
              <option key={make} value={make}>{make}</option>
            ))}
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <select
            value={filters.model}
            onChange={(e) => setFilters(prev => ({ ...prev, model: e.target.value }))}
            className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:border-green-500"
            disabled={!filters.make}
          >
            <option value="">Select Model</option>
            {filters.make && carMakes[filters.make as keyof typeof carMakes]?.map(model => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </div>

        <button
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className="px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-colors flex items-center gap-2"
        >
          <SlidersHorizontal size={20} />
          <span>Filters</span>
        </button>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg border border-red-600/20 hover:bg-red-600/30 transition-colors flex items-center gap-2"
          >
            <X size={20} />
            <span>Clear All</span>
          </button>
        )}

        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
        >
          <Search size={20} />
          <span>Search</span>
        </button>
      </div>

      {/* Advanced Filters */}
      {showAdvancedFilters && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 border-t border-zinc-800">
          <select
            value={filters.transmission}
            onChange={(e) => setFilters(prev => ({ ...prev, transmission: e.target.value }))}
            className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:border-green-500"
          >
            <option value="">Transmission</option>
            {transmissions.map(transmission => (
              <option key={transmission} value={transmission}>{transmission}</option>
            ))}
          </select>

          <select
            value={filters.bodyStyle}
            onChange={(e) => setFilters(prev => ({ ...prev, bodyStyle: e.target.value }))}
            className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:border-green-500"
          >
            <option value="">Body Style</option>
            {bodyStyles.map(style => (
              <option key={style} value={style}>{style}</option>
            ))}
          </select>

          <select
            value={filters.engine}
            onChange={(e) => setFilters(prev => ({ ...prev, engine: e.target.value }))}
            className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:border-green-500"
          >
            <option value="">Engine</option>
            {engines.map(engine => (
              <option key={engine} value={engine}>{engine}</option>
            ))}
          </select>

          <select
            value={filters.fuelType}
            onChange={(e) => setFilters(prev => ({ ...prev, fuelType: e.target.value }))}
            className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:border-green-500"
          >
            <option value="">Fuel Type</option>
            {fuelTypes.map(fuelType => (
              <option key={fuelType} value={fuelType}>{fuelType}</option>
            ))}
          </select>

          <select
            value={filters.color}
            onChange={(e) => setFilters(prev => ({ ...prev, color: e.target.value }))}
            className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:border-green-500"
          >
            <option value="">Color</option>
            {colors.map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}