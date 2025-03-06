import React from 'react';
import { ImageCarousel } from '../components/ImageCarousel';
import { FileCheck, Shield, Clock } from 'lucide-react';

interface ImportedCar {
  id: string;
  name: string;
  description: string;
  date: string;
  photos: { photoUrl: string; photoId: string; carId: string; }[];
  videoUrl?: string;
}

const previousImports: ImportedCar[] = [
  {
    id: "g63",
    name: "Mercedes-Benz G63 AMG",
    description: "Imported from South Korea to Vancouver, BC",
    date: "June 2024",
    photos: Array.from({ length: 14 }, (_, i) => ({
      photoUrl: `/sold_cars/G63/PHOTO-2024-06-12-00-34-5${i + 4}.jpg`,
      photoId: `g63-${i}`,
      carId: "g63"
    })),
    videoUrl: "/sold_cars/G63/VIDEO-2024-06-12-00-34-57.mp4"
  },
  {
    id: "a45",
    name: "Mercedes-Benz A45 AMG",
    description: "Imported from South Korea to Vancouver, BC",
    date: "June 2023",
    photos: Array.from({ length: 14 }, (_, i) => ({
      photoUrl: `/sold_cars/A45/LOADING 9634${String.fromCharCode(65 + i)}.jpg`,
      photoId: `a45-${i}`,
      carId: "a45"
    }))
  }
];

export function PreviousImports() {
  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Previous Imports</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record of successful imports from South Korea to Canada
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-zinc-900 rounded-xl p-6 border border-green-600/20">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-bold text-white">200+ Vehicles</h3>
            </div>
            <p className="text-gray-400">Successfully imported and delivered to satisfied clients worldwide since 2009.</p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6 border border-green-600/20">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-bold text-white">10+ Years</h3>
            </div>
            <p className="text-gray-400">Over a decade of specialized expertise in vehicle import and logistics.</p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6 border border-green-600/20">
            <div className="flex items-center gap-3 mb-2">
              <FileCheck className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-bold text-white">100%</h3>
            </div>
            <p className="text-gray-400">Flawless track record in customs clearance, ensuring smooth delivery every time.</p>
          </div>
        </div>


        {/* Previous Imports Gallery */}
        <div className="space-y-16">
          {previousImports.map((car) => (
            <div key={car.id} className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-700">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{car.name}</h2>
                <p className="text-gray-400 mb-4">{car.description}</p>
                <p className="text-green-400 font-semibold">{car.date}</p>
              </div>

              <ImageCarousel photos={car.photos} />

              {car.videoUrl && (
                <div className="p-6 border-t border-zinc-700">
                  <h3 className="text-xl font-bold text-white mb-4">Delivery Video</h3>
                  <video 
                    controls 
                    className="w-full rounded-lg"
                    poster={car.photos[0].photoUrl}
                  >
                    <source src={car.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}