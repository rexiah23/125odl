import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function KotsaInspections() {
  return (
    <div className="bg-transparent border border-white/30 rounded-lg p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Korea_Transportation_Safety_Authority_logo.svg"
          alt="KOTSA Logo"
          className="w-32 h-auto mb-4 md:mb-0 md:self-start flex-shrink-0"
        />
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">
            KOTSA’s Rigorous Inspections
          </h3>
          <p className="text-white/80 mt-2">
            The Korean Transport Safety Authority (KOTSA) mandates a{' '}
            <span className="font-semibold text-green-400">
              170+ point inspection
            </span>{' '}
            every two years for all vehicles.
          </p>
        </div>
      </div>

      {/* Inspection Details */}
      <div className="space-y-4">
        <p className="text-white/80 leading-relaxed">
          These government-enforced checks go beyond typical safety items
          (like brakes and tires) and include engine-specific tests often
          seen only in premium certifications. Some key inspections include:
        </p>

        <ul className="space-y-2 list-disc list-inside">
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-white/80">
              <strong>Engine oil quality &amp; filter condition</strong> 
              <span className="ml-1 text-white/50">(spectroscopic analysis for metal particles)</span>
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-white/80">
              <strong>Coolant system integrity</strong> &amp; fluid levels
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-white/80">
              <strong>Cylinder compression tests</strong> (checking ring wear &amp; valve seating)
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-white/80">
              <strong>Fuel system inspection</strong> for leaks &amp; proper pressure
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-white/80">
              <strong>Turbocharger inspection</strong> (where applicable)
            </span>
          </li>
        </ul>

        <p className="text-white/80 leading-relaxed">
          All findings are logged in standardized digital records, ensuring
          transparency for every vehicle. This far exceeds most Canadian
          inspection norms, making Korean-used exotics comparably more
          reliable and better maintained.
        </p>
      </div>
    </div>
  );
}
