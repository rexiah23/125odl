import React from 'react';
import { Link } from 'react-router-dom';

export function InfoBoxes() {
  // Define your items in the exact order you want them to appear
  const items = [
    {
      title: 'Exotics Ready For Import',
      link: '/listings', // or wherever you'd like to link
      image: '/blue_murci.png', // replace with your image
    },
    {
      title: 'How It Works',
      link: '/how-it-works',
      image: '/blue_murci.png', // replace with your imag
    },
    {
      title: 'About Us',
      link: '/about',
      image: '/blue_murci.png', // replace with your imag
    },
    {
      title: '3 Day Money Back Guarantee',
      link: '/money-back',
      image: '/blue_murci.png', // replace with your imag
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center bg-black py-4">
        {items.map((item, idx) => (
          <Link
            key={idx}
            to={item.link}
            className="relative group overflow-hidden h-48 sm:h-56 md:h-64 rounded-lg shadow flex-1 text-center mx-2 p-2"
          >
            <div className="border-4 border-white h-full w-full">
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-white text-xl font-bold text-center px-2">
                  {item.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
