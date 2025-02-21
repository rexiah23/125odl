import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function CarListSection({
  loading,
  recommendedCars,
  config,
  calculateTotalPrice,
  navigate,
}) {
  console.log('recommendCars', recommendedCars);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [carsToShow, setCarsToShow] = useState(4);

  useEffect(() => {
    const updateCarsToShow = () => {
      setCarsToShow(window.innerWidth < 640 ? 1 : 4);
    };

    updateCarsToShow();
    window.addEventListener('resize', updateCarsToShow);

    return () => {
      window.removeEventListener('resize', updateCarsToShow);
    };
  }, []);

  const handleNext = () => {
    if (startIndex + carsToShow < recommendedCars.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  if (loading) {
    return (
      <section className="w-full mx-auto py-12 bg-transparent">
        <div className="text-center text-gray-300">
          Loading recommended cars...
        </div>
      </section>
    );
  }

  return (
    <section className="w-full mx-auto py-12 bg-transparent">
      <h2 className="text-3xl sm:text-5xl font-bold text-center text-white mb-8">
        Trending Vehicles
      </h2>
      <div className="w-full px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="text-white hover:scale-110 transition-transform mr-2 sm:mr-4"
            aria-label="Scroll left"
            style={{ fontSize: `calc(1.5rem * var(--scale-factor))` }}
          >
            <ChevronLeft size={48} sm:size={72} />
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex space-x-2 sm:space-x-4 overflow-x-auto scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {recommendedCars.slice(startIndex, startIndex + carsToShow).map((car) => {
              const finalPrice = config
                ? calculateTotalPrice(
                    car.priceCad,
                    config.chargesByProvince['British Columbia']
                  )
                : car.priceCad;

              const carWithFinalPrice = {
                ...car,
                priceCad: finalPrice,
              };

              return (
                <CarCarouselCard
                  key={car.carId}
                  car={carWithFinalPrice}
                  navigate={navigate}
                />
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="text-white hover:scale-110 transition-transform ml-2 sm:ml-4"
            aria-label="Scroll right"
            style={{ fontSize: `calc(1.5rem * var(--scale-factor))` }}
          >
            <ChevronRight size={48} sm:size={72} />
          </button>
        </div>
      </div>
    </section>
  );
}

function CarCarouselCard({ car, navigate }) {
  const firstPhotoUrl =
    car.carPhotos?.length > 0
      ? car.carPhotos[0].photoUrl
      : 'https://via.placeholder.com/400?text=No+Image';

  return (
    <div
      onClick={() => navigate(`/car/${car.carId}`)}
      className="flex-shrink-0 w-full max-w-xs sm:max-w-sm cursor-pointer text-center p-4 bg-gray-900 rounded-lg"
      style={{ fontSize: `calc(1rem * var(--scale-factor))` }}
    >
      {/* Car Image */}
      <img
        src={firstPhotoUrl}
        alt={`${car.year} ${car.make} ${car.model}`}
        className="w-full h-40 sm:h-48 object-cover rounded-lg"
      />

      {/* Title */}
      <h3 className="text-white text-xl sm:text-2xl font-bold mt-2 whitespace-normal break-words">
        {car.year} {car.make} {car.model}
      </h3>

      {/* Snippet */}
      <div className="flex flex-col justify-center items-center text-white mt-2">
        <span className="text-lg text-center">
          Delivered, Cleared, &amp; Register Ready:
        </span>
        <span className="flex items-center mt-1">
          <span className="text-xl">🇨🇦</span>
          <span className="font-bold ml-2 text-2xl sm:text-3xl">
            ${car.priceCad.toLocaleString()} CAD
          </span>
        </span>
      </div>
    </div>
  );
}

export default CarListSection;
