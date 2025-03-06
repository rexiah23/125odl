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

  console.log('provinceCharges', provinceCharges);
  return (
    <div className="bg-zinc-900 p-6 rounded-xl shadow-md border border-zinc-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">I'm located in:</h3>
        <div className="relative w-48">
          <select
            value={selectedProvince}
            onChange={(e) => onProvinceChange(e.target.value as Province)}
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
          <span className="text-gray-300">Car Price:</span>
          <span className="text-white font-medium">${basePrice.toLocaleString()}</span>
        </div>

        {provinceCharges.map((charge, index) => {
  let value = charge.value;

  // Convert percentages (<1) to an absolute numeric value
  if (typeof value === 'number' && value < 1) {
    value = Math.round(basePrice * value);
  }

  // Decide how to display this value
  let displayValue;
  if (typeof value === 'number') {
    if (value === 0) {
      displayValue = <span className="text-green-400">FREE</span>;
    } else {
      displayValue = `$${value.toLocaleString()}`;
    }
  } else {
    // Value is not a number, so just display the text
    displayValue = <span className="whitespace-nowrap">{value}</span>;
  }

  return (
    <div key={index} className="flex justify-between items-center">
      <span className="text-gray-300">{charge.label}:</span>
      <div className="text-white font-medium text-right min-w-[140px]">{displayValue}</div>
    </div>
  );
})}

          <div className="pt-4 border-t border-zinc-700">
            <div className="flex justify-between items-center">
              <span className="text-lg text-white font-semibold">
                Delivered, Cleared, & After Taxes:
              </span>
              <div className="flex items-center gap-2">
                <span className="text-lg">🇨🇦</span>
                <span className="text-xl text-white font-bold">
                  $
                  {Math.round(
                    basePrice +
                      provinceCharges.reduce((total, charge) => {
                        // Only add if it's a number
                        if (typeof charge.value !== 'number') {
                          return total;
                        }

                        // If it's below 1, assume it's a percentage
                        const numericValue =
                          charge.value < 1
                            ? basePrice * charge.value
                            : charge.value;

                        return total + numericValue;
                      }, 0)
                  ).toLocaleString()}
                  {' '}CAD
                </span>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}