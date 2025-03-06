import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);
  const imageRef = useRef<HTMLImageElement>(null);

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

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click from triggering zoom toggle
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click from triggering zoom toggle
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const handleZoomClose = () => {
    setIsZoomed(false);
    setZoomLevel(1.5);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !isZoomed) return;
    
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    setZoomPosition({ x, y });
  };

  const handleZoomLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZoomLevel(parseFloat(e.target.value));
  };

  return (
    <div className="relative">
      {/* Main image container */}
      <div
        className={`relative ${isZoomed ? 'fixed inset-0 z-50 bg-black flex items-center justify-center' : ''}`}
        onClick={toggleZoom}
      >
        {/* Close button for zoomed mode (visible only when zoomed) */}
        {isZoomed && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(false);
            }}
            className="absolute top-4 right-4 text-white z-50 p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        )}
        
        {/* Current image */}
        <img
          src={photos[currentIndex].photoUrl}
          alt={`Car photo ${currentIndex + 1}`}
          className={`w-full h-full ${isZoomed ? 'object-contain' : 'object-cover aspect-[16/9]'}`}
        />

        {/* Left arrow (always visible) */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors z-50"
        >
          <ChevronLeft size={24} />
        </button>
        
        {/* Right arrow (always visible) */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors z-50"
        >
          <ChevronRight size={24} />
        </button>

        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-50">
          {currentIndex + 1} / {photos.length}
        </div>
      </div>

      {/* Zoom indicator when not zoomed */}
      {!isZoomed && (
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full flex items-center gap-1">
          <ZoomIn size={16} />
          <span className="text-sm">Click to zoom</span>
        </div>
      )}

      {/* Zoomed view (overlay) */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={handleZoomClose}
          >
            <div 
              className="relative w-full h-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              onMouseMove={handleMouseMove}
            >
              {/* Zoomed image */}
              <motion.img
                ref={imageRef}
                src={photos[currentIndex].photoUrl}
                alt={`Photo ${currentIndex + 1} (zoomed)`}
                className="absolute w-full h-full object-contain"
                style={{
                  transformOrigin: `${zoomPosition.x * 100}% ${zoomPosition.y * 100}%`,
                  cursor: 'zoom-out'
                }}
                onClick={handleZoomClose}
                initial={{ scale: 1 }}
                animate={{ scale: zoomLevel }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />

              {/* Zoom controls */}
              <div 
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 rounded-full px-4 py-2 flex items-center gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-white text-sm">Zoom:</span>
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="0.1"
                  value={zoomLevel}
                  onChange={handleZoomLevelChange}
                  className="w-32 accent-green-500"
                />
                <span className="text-white text-sm">{zoomLevel.toFixed(1)}x</span>
              </div>

              {/* Navigation in zoom mode */}
              {photos.length > 1 && (
                <div className="absolute bottom-8 right-8 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevious(e);
                    }}
                    className="bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext(e);
                    }}
                    className="bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}

              {/* Close button in zoom mode */}
              <button
                onClick={handleZoomClose}
                className="absolute top-8 right-8 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Photo counter in zoom mode */}
              <div className="absolute top-8 left-8 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                {currentIndex + 1} / {photos.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
