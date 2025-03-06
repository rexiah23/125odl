import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchFilters.module.css';

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

export default function SearchFiltersMini({ isHomepage = false, initialFilters }: SearchFiltersProps) {
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
    <div className="flex items-center justify-center gap-4">
      <select
        className={styles['filter-select']}
        value={filters.make}
        onChange={(e) => setFilters({ ...filters, make: e.target.value })}
      >
        <option value="">MAKE</option>
        <option value="Porsche">Porsche</option>
        <option value="Ferrari">Ferrari</option>
        {/* Add more options here */}
      </select>
      <select
        className={styles['filter-select']}
        value={filters.model}
        onChange={(e) => setFilters({ ...filters, model: e.target.value })}
      >
        <option value="">MODEL</option>
        <option value="911">911</option>
        <option value="Cayenne">Cayenne</option>
        {/* Add more options here */}
      </select>
      <button className={styles['search-button']} onClick={handleSearch}>
        SEARCH →
      </button>
    </div>
  );
}