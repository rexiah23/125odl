import React from 'react';
import { Search, FileCheck, DollarSign, ShieldCheck, Wrench, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HowItWorks() {
  const steps = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Reserve Your Car',
      description:
        'Provide a fully refundable deposit to secure your chosen vehicle. We’ll always confirm with you before finalizing any purchase.'
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Expert Inspection',
      description:
        'Our professional mechanic in Korea examines all mechanical and cosmetic details. Only vehicles meeting our strict standards become “Shipgrid Approved” and qualify for the 3-day return policy.'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Shipping & Delivery',
      description:
        'Choose RORO (ETA 2-3 months) or container shipping (ETA 1-2 months). We handle customs clearance and deliver to your home or arrange Vancouver pickup.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: '3-Day Guarantee',
      description:
        'For Shipgrid Approved cars, enjoy a 3-day window to ensure satisfaction. Complete your out-of-province inspection, register, and drive with confidence.'
    }
  ];

  return (
    <div className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-4">
            Your journey to owning a premium vehicle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-black rounded-xl border border-green-600/20 p-6 hover:border-green-600/40 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center text-green-500">
                    {step.icon}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-green-600/20" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/how-it-works"
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-black font-bold rounded-lg hover:bg-green-500 transition-colors"
          >
            View Full Process
          </Link>
        </div>
      </div>
    </div>
  );
}
