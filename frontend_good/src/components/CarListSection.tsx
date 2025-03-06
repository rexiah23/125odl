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
      if (window.innerWidth < 640) {
        setCarsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCarsToShow(2);
      } else {
        setCarsToShow(4);
      }
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
      <section className="w-full mx-auto py-8 sm:py-12 bg-transparent">
        <div className="text-center text-gray-300">
          Loading recommended cars...
        </div>
      </section>
    );
  }

  return (
    <section className="w-full mx-auto py-8 sm:py-12 bg-transparent">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-white mb-4 sm:mb-8">
        Trending Vehicles
      </h2>
      <div className="w-full px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="text-white hover:scale-110 transition-transform mr-1 sm:mr-2 md:mr-4"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
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
            className="text-white hover:scale-110 transition-transform ml-1 sm:ml-2 md:ml-4"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
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
      onClick={() => navigate(`/listings/${car.carId}`)}
      className="flex-shrink-0 w-full sm:w-72 cursor-pointer text-center p-2 sm:p-4 bg-gray-900 rounded-lg"
    >
      {/* Car Image */}
      <img
        src={firstPhotoUrl}
        alt={`${car.year} ${car.make} ${car.model}`}
        className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg"
      />

      {/* Title */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-2 whitespace-normal break-words">
        {car.year} {car.make} {car.model}
      </h3>

      {/* Snippet */}
      <div className="flex flex-col justify-center items-center text-white mt-2">
        <span className="text-sm sm:text-base md:text-lg text-center">
          Delivered, Cleared, &amp; After Taxes:
        </span>
        <span className="flex items-center mt-1">
          <span className="text-lg sm:text-xl">🇨🇦</span>
          <span className="font-bold ml-2 text-xl sm:text-2xl md:text-3xl">
            ${car.priceCad.toLocaleString()} CAD
          </span>
        </span>
      </div>
    </div>
  );
}

export default CarListSection;