import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of your config data (update types as needed)
interface ProvinceCharge {
  baseCharge: number;
  taxRate: number;
  shippingFee: number;
}

interface ExchangeRates {
  CAD: number;
  USD: number;
}

export interface ConfigData {
  exchangeFromKrw: ExchangeRates;
  makeModelTrims: any; // update this type as needed
  chargesByProvince: { [province: string]: ProvinceCharge };
}

// Create a context with an initial value of null
export const ConfigContext = createContext<ConfigData | null>(null);

interface ConfigProviderProps {
  children: ReactNode;
}

export function ConfigProvider({ children }: ConfigProviderProps) {
  const [config, setConfig] = useState<ConfigData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/config`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const configData = await response.json();
        setConfig(configData);
      } catch (error) {
        console.error('Error fetching config:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchConfig();
  }, []);

  if (loading) {
    return <div>Loading configuration...</div>;
  }

  if (!config) {
    return <div>Error loading configuration</div>;
  }

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
} 