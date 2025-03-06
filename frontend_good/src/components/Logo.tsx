import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <img 
        src="/logo.svg" 
        alt="Shipgrid Logo" 
        className="h-16 w-auto transform transition-transform hover:scale-105"
      />
    </div>
  );
}