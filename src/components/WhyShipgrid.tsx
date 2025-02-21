import React from 'react';
import { CheckCircle } from 'lucide-react';

function WhyShipgrid() {
  return (
    <section className="bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold text-white">Why Shipgrid?</h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Reason 1 */}
          <div className="bg-black rounded-xl border border-blue-100 p-5 shadow-sm flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-white">Global Expertise</h3>
            </div>
            <p className="text-white">
              With <strong>4+ years</strong> of experience exporting luxury vehicles from South Korea,
              we’ve successfully shipped <strong>40+ cars</strong> to <strong>5 countries</strong> worldwide.
              We know the ins and outs of international vehicle logistics.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="bg-black rounded-xl border border-blue-100 p-5 shadow-sm flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-white">Hassle-Free Customs</h3>
            </div>
            <p className="text-white">
              We specialize in navigating <strong>Canadian customs clearance</strong>, guaranteeing
              prompt processing without unexpected fines or delays—clearly stated in our sales contract.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="bg-black rounded-xl border border-blue-100 p-5 shadow-sm flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-white">Pre-Purchase Inspection</h3>
            </div>
            <p className="text-white">
              Our <strong>trained mechanic</strong> inspects any vehicle in South Korea <strong>before</strong> you buy. 
              We focus on condition above all, ensuring you get the best car for your money.
            </p>
          </div>

          {/* Reason 4 */}
          <div className="bg-black rounded-xl border border-blue-100 p-5 shadow-sm flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-white">End-to-End Service</h3>
            </div>
            <p className="text-white">
              From <strong>de-registering</strong> the car in Korea and <strong>ocean freight</strong> arrangements 
              to Canadian <strong>customs clearance</strong>, necessary <strong>modifications</strong>, 
              and door-to-door <strong>delivery</strong>—we handle every step. 
              You simply register at your local DMV.
            </p>
          </div>

          {/* Reason 5 */}
          <div className="bg-black rounded-xl border border-blue-100 p-5 shadow-sm flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-white">3-Day Return Policy</h3>
            </div>
            <p className="text-white">
              For a <strong>limited time</strong>, enjoy a <strong>3-day “no questions asked” return policy</strong>. 
              See the car in person, and if it’s not right for you, send it back—simple as that.
            </p>
          </div>

        </div>

        {/* Call to Action (optional) */}
        <div className="text-center">
          <p className="text-white text-lg">
            Ready to import your dream car? <strong>Let Shipgrid take care of the details</strong>, 
            so you can focus on enjoying your new ride.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyShipgrid;
