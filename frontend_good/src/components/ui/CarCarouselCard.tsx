function CarCarouselCard({ car, navigate }) {
  const firstPhotoUrl =
    car.carPhotos && car.carPhotos.length > 0
      ? car.carPhotos[0].photoUrl
      : 'https://via.placeholder.com/400?text=No+Image';

  return (
    <div
      onClick={() => navigate(`/listings/${car.carId}`)}
      className="flex-shrink-0 w-72 cursor-pointer"
    >
      {/* Car Image */}
      <img
        src={firstPhotoUrl}
        alt={`${car.year} ${car.make} ${car.model}`}
        className="w-full h-48 object-cover rounded-lg"
      />

      {/* Title */}
      <h3 className="text-white text-xl font-semibold mt-2">
        {car.year} {car.make} {car.model}
      </h3>

      {/* Snippet */}
      <div className="flex items-center text-white mt-2">
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
    </div>
  );
}

export default CarCarouselCard;
