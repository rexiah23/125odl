import React from 'react';
import { HowItWorks } from '../components/HowItWorks';
import WhyShipgrid from '../components/WhyShipgrid';
import { ArrowRight, FileCheck, DollarSign, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HowItWorksPage() {
  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury car being shipped" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Your Journey to Owning a Premium Vehicle
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              From selection to delivery, we handle every step of importing your dream car from South Korea with transparency and expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3 text-gray-300">
                <FileCheck className="text-green-500" size={24} />
                <span>150-Point Inspection</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <DollarSign className="text-green-500" size={24} />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Truck className="text-green-500" size={24} />
                <span>Door-to-Door Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <HowItWorks />

      {/* Why Choose Us */}
      <WhyShipgrid />

      {/* CTA Section */}
      <div className="bg-zinc-900 border-t border-green-600/20">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="bg-black/50 rounded-2xl p-8 md:p-12 border border-green-600/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Find Your Dream Car?
                </h2>
                <p className="text-gray-300 max-w-2xl">
                  Browse our curated selection of premium vehicles available for import. 
                  Each car comes with a detailed history report and comprehensive inspection documentation.
                </p>
              </div>
              <Link 
                to="/listings"
                className="btn-primary flex items-center gap-2 whitespace-nowrap text-lg px-8"
              >
                <span>View Available Cars</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}