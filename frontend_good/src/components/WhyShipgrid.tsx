import React from 'react';
import { CheckCircle } from 'lucide-react';

function WhyShipgrid() {
  return (
    <section className="bg-black py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Why Shipgrid?
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {/* Experience */}
          <div className="bg-black rounded-xl border border-green-600/20 p-4 sm:p-6 hover:border-green-600/40 transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Global Experience</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  <span className="text-green-400">200+ vehicles</span> exported worldwide • 
                  <span className="text-green-400"> 5 countries</span> served • 
                  <span className="text-green-400"> 10+ years</span> of expertise
                </p>
              </div>
            </div>
          </div>

          {/* Customs */}
          <div className="bg-black rounded-xl border border-green-600/20 p-4 sm:p-6 hover:border-green-600/40 transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Seamless Customs</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  Guaranteed clearance • No surprise fees • 
                  <span className="text-green-400"> Contract-backed</span> processing
                </p>
              </div>
            </div>
          </div>

          {/* Inspection */}
          <div className="bg-black rounded-xl border border-green-600/20 p-4 sm:p-6 hover:border-green-600/40 transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Expert Inspection</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  <span className="text-green-400">On-site mechanic</span> • 
                  Pre-purchase verification • 
                  Quality-first approach
                </p>
              </div>
            </div>
          </div>

          {/* Service */}
          <div className="bg-black rounded-xl border border-green-600/20 p-4 sm:p-6 hover:border-green-600/40 transition-all duration-300">
            <div className="flex items-start gap-3 sm:gap-4">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Complete Service</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  Korean de-registration • 
                  <span className="text-green-400"> Door-to-door delivery</span> • 
                  DMV-ready paperwork
                </p>
              </div>
            </div>
          </div>

          {/* Return Policy */}
          <div className="bg-black rounded-xl border border-green-600/20 p-4 sm:p-6 hover:border-green-600/40 transition-all duration-300 col-span-1 sm:col-span-2">
            <div className="flex items-start gap-3 sm:gap-4">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">3-Day Return Guarantee</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  <span className="text-green-400">No questions asked</span> return policy • 
                  See it in person • 
                  Risk-free purchase
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-base sm:text-xl text-gray-400">
            Ready to import your dream car? <span className="text-green-400 font-semibold">Let us handle the details.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyShipgrid;