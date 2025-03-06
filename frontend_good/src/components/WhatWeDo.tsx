import React from 'react';
import { Globe, ShieldCheck, Truck, Wrench, FileCheck, DollarSign } from 'lucide-react';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const services: ServiceCard[] = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Car Sourcing",
    description: "Access exclusive vehicle auctions and private sellers across South Korea, connecting you with rare and premium vehicles at competitive prices.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Comprehensive Verification",
    description: "Every vehicle undergoes a rigorous 360-point inspection, complete history check, and live video inspection before purchase.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80"
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Door-to-Door Delivery",
    description: "Full-service international shipping with real-time tracking, customs clearance, and direct delivery to your location.",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Compliance & Modifications",
    description: "Complete handling of all necessary modifications and certifications to meet local safety and emissions standards.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Documentation Support",
    description: "Expert assistance with all registration paperwork, insurance, and warranty documentation for a smooth ownership transfer.",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Transparent Pricing",
    description: "Clear, upfront pricing with no hidden fees. All import duties, taxes, and service charges are included in your quote.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
  }
];

export function WhatWeDo() {
  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We simplify the process of importing premium vehicles from South Korea, 
            handling everything from sourcing to delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-50 border border-green-600/20 hover:border-green-600/40 transition-all duration-300"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-white/20"></div>
              </div>

              <div className="relative z-10 p-8">
                <div className="bg-green-600/10 w-16 h-16 rounded-xl flex items-center justify-center text-green-500 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-600/0 via-green-600/40 to-green-600/0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}