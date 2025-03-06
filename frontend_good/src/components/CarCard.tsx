import React, { useContext } from 'react';
import { Car } from '../types';
import { DollarSign, Fuel, Gauge, Shield, CheckCircle2 } from 'lucide-react';
import { AnimatedImage } from './AnimatedImage';
import { ConfigContext } from '../contexts/ConfigContext';
import { convertFromKRW } from '../utils/currency';
import { Link } from 'react-router-dom';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const config = useContext(ConfigContext);
  console.log('CAR PHOTOS:', car);
  const firstPhotoUrl =
    car.carPhotos && car.carPhotos.length > 0
      ? car.carPhotos[0].photoUrl
      : 'https://via.placeholder.com/400?text=No+Image';

  return (
    <Link
      to={`/listings/${car.carId}`}
      key={car.carId}
      className="bg-black rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md border border-navy-200 block"
    >
      <div className="relative">
        <AnimatedImage
          src={firstPhotoUrl}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        <div className="absolute top-4 right-4 bg-navy-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
          <Shield className="w-3 h-3" />
          <span>Guaranteed Ready</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">
          {car.year} {car.make} {car.model}
        </h3>
        <p className="text-white font-medium">{car.trim}</p>

        <div className="mt-4 space-y-3">
          <div className="flex items-center text-white">
            <div className="flex flex-col">
              <span className="text-sm text-white">
                Delivered, Cleared, &amp; After Taxes:
              </span>
              <div className="flex items-center gap-1">
                <span className="text-sm">🇨🇦</span>
                <span className="font-semibold text-white">
                  ${car.priceCad.toLocaleString()} CAD
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Gauge size={18} className="text-white" />
              <span>{car.mileage.toLocaleString()} km</span>
            </div>
            <div className="flex items-center gap-2">
              <Fuel size={18} className="text-white" />
              <span>{car.fuelType}</span>
            </div>
          </div>

          <div className="border-t border-white/10 pt-3 mt-3">
            <div className="grid grid-cols-2 gap-2 text-xs text-white">
              <div className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-white" />
                <span>Inspected</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-white" />
                <span>Customs Cleared</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-white" />
                <span>Safety Ready</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-white" />
                <span>Registration Ready</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button className="btn-primary w-full">Details</button>
        </div>
      </div>
    </Link>
  );
}