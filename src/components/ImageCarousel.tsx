import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  photoUrl: string;
  photoId: string;
  carId: string;
}

interface ImageCarouselProps {
  photos?: Photo[];
}

export function ImageCarousel({ photos = [] }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If no photos are provided, show a placeholder
  if (!photos || photos.length === 0) {
    return (
      <div className="relative pt-[56.25%]">
        <img
          src="https://via.placeholder.com/800x600?text=No+Images+Available"
          alt="No images available"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className="relative">
      <div className="relative pt-[56.25%]">
        <img
          src={photos[currentIndex].photoUrl}
          alt={`Photo ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {photos.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Photo counter */}
      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {photos.length}
      </div>
    </div>
  );
}