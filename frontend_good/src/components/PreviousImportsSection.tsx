import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function PreviousImportsSection() {
  const navigate = useNavigate();

  const featuredImports = [
    {
      id: 'g63',
      name: 'Mercedes-Benz G63 AMG',
      date: 'June 2024',
      image: '/sold_cars/G63/PHOTO-2024-06-12-00-34-54.jpg'
    },
    {
      id: 'a45',
      name: 'Mercedes-Benz A45 AMG',
      date: 'June 2023',
      image: '/sold_cars/A45/LOADING 9634A.jpg'
    }
  ];

  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Previous Imports</h2>
          <p className="text-xl text-gray-300">
            Our track record of successful imports from South Korea
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredImports.map((car) => (
            <div 
              key={car.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => navigate('/previous-imports')}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{car.name}</h3>
                <p className="text-green-400">{car.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/previous-imports')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-black font-bold rounded-lg hover:bg-green-500 transition-colors"
          >
            View All Previous Imports
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}