import React, { useState, useContext } from 'react';
import { Province } from '../types';
import { calculatePriceBreakdown } from '../utils/priceCalculator';
import { ChevronDown } from 'lucide-react';
import { ConfigContext } from '../contexts/ConfigContext';
import { provinces } from '../constants/provinces';

interface PriceBreakdownProps {
  basePrice: number;
  selectedProvince: Province;
  onProvinceChange: (province: Province) => void;
}

interface ProvinceOption {
  value: Province;
  label: string;
}

export function PriceBreakdown({ 
  basePrice,
  selectedProvince,
  onProvinceChange
}: PriceBreakdownProps) {
  const config = useContext(ConfigContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const selectedProvinceData = provinces.find(p => p.value === selectedProvince)!;

  if (!config) return null;

  const provinceCharges = config.chargesByProvince[selectedProvinceData.label];

  return (
    <div className="bg-black p-6 rounded-xl shadow-sm border border-green-600/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">I'm located in:</h3>
        <div className="relative w-48">
          <select
            value={selectedProvince}
            onChange={(e) => onProvinceChange(e.target.value as Province)}
            className="w-full px-4 py-3 bg-gray-50 border border-green-600/20 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          >
            {provinces.map(province => (
              <option key={province.value} value={province.value}>
                {province.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Car Price:</span>
          <span className="text-gray-900 font-medium">${basePrice.toLocaleString()}</span>
        </div>

        {provinceCharges.map((charge, index) => {
          let value = charge.value;
          if (typeof value === 'number' && value < 1) {
            // If value is a percentage (less than 1)
            value = Math.round(basePrice * value);
          }
          
          return (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-600">{charge.label}:</span>
              <span className="text-gray-900 font-medium">
                {value === 0 ? (
                  <span className="text-green-500">FREE</span>
                ) : (
                  `$${value.toLocaleString()}`
                )}
              </span>
            </div>
          );
        })}

        <div className="pt-4 border-t border-green-600/20">
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-900 font-semibold">Delivered, Cleared, & Register Ready:</span>
            <div className="flex items-center gap-2">
              <span className="text-lg">🇨🇦</span>
              <span className="text-xl text-gray-900 font-bold">
                ${Math.round(basePrice + provinceCharges.reduce((total, charge) => {
                  const value = typeof charge.value === 'number' && charge.value < 1 
                    ? basePrice * charge.value 
                    : charge.value;
                  return total + value;
                }, 0)).toLocaleString()} CAD
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}