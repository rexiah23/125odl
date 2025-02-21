import React from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function AnimatedImage({ src, alt, className = '' }: AnimatedImageProps) {
  return (
    <div className="relative overflow-hidden group">
      <img
        src={src}
        alt={alt}
        className={`transform transition-all duration-700 hover:scale-110 ${className}`}
      />
      {/* Overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
}