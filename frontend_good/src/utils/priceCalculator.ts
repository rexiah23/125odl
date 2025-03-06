import { Province } from '../types';

export interface PriceBreakdown {
  basePrice: number;
  overseasFreight: number;
  importDuties: number;
  gst: number;
  pst: number;
  hst: number;
  inlandShipping: number;
  serviceFee: number;
  total: number;
}

const OVERSEAS_FREIGHT = 2500;
const IMPORT_DUTY_RATE = 0.061;
const SERVICE_FEE = 3000;

interface TaxRate {
  gst: number;
  pst: number;
  hst: number;
}

const TAX_RATES: Record<Province, TaxRate> = {
  'AB': { gst: 0.05, pst: 0, hst: 0 },
  'BC': { gst: 0.05, pst: 0.07, hst: 0 },
  'MB': { gst: 0.05, pst: 0.07, hst: 0 },
  'NB': { gst: 0, pst: 0, hst: 0.15 },
  'NL': { gst: 0, pst: 0, hst: 0.15 },
  'NT': { gst: 0.05, pst: 0, hst: 0 },
  'NS': { gst: 0, pst: 0, hst: 0.15 },
  'NU': { gst: 0.05, pst: 0, hst: 0 },
  'ON': { gst: 0, pst: 0, hst: 0.13 },
  'PE': { gst: 0, pst: 0, hst: 0.15 },
  'QC': { gst: 0.05, pst: 0.09975, hst: 0 },
  'SK': { gst: 0.05, pst: 0.06, hst: 0 },
  'YT': { gst: 0.05, pst: 0, hst: 0 }
};

function getInlandShippingCost(province: Province): number {
  if (province === 'BC') return 0;
  if (province === 'AB') return 2000;
  return 4000;
}

export function calculatePriceBreakdown(basePrice: number, province: Province): PriceBreakdown {
  const taxRates = TAX_RATES[province];
  const importDuties = basePrice * IMPORT_DUTY_RATE;
  const dutiableAmount = basePrice + importDuties + OVERSEAS_FREIGHT;
  const inlandShipping = getInlandShippingCost(province);
  
  const gst = taxRates.gst * dutiableAmount;
  const pst = taxRates.pst * dutiableAmount;
  const hst = taxRates.hst * dutiableAmount;

  const total = basePrice + 
                OVERSEAS_FREIGHT + 
                importDuties + 
                gst + 
                pst + 
                hst + 
                inlandShipping + 
                SERVICE_FEE;

  return {
    basePrice,
    overseasFreight: OVERSEAS_FREIGHT,
    importDuties,
    gst,
    pst,
    hst,
    inlandShipping,
    serviceFee: SERVICE_FEE,
    total
  };
}