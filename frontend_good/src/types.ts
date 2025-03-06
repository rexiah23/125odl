export interface CarPhoto {
  photoId: string;
  carId: string;
  photoUrl: string;
}

export type Province = 'BC' | 'AB' | 'ON' | 'QC' | 'MB' | 'SK' | 'NS' | 'NB' | 'PE' | 'NL' | 'YT' | 'NT' | 'NU';

export interface Car {
  carId: string;
  make: string;
  model: string;
  trim: string;
  year: number;
  mileage: number;
  price: number;
  priceKrw: number;
  priceCad: number;
  priceUsd: number;
  fuelType: string;
  newCarPriceUrl: string;
  optionsUrl: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  carPhotos: CarPhoto[];
  originalUrl: string;
}