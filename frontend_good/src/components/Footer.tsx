import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Footer() {
  const whatsappNumber = '+14374638189';
  const whatsappMessage = encodeURIComponent(`Hi, I'd like to learn about importing a supercar from S. Korea`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-gray-100 border-t border-navy-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Shipgrid</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p>809 9099 Cook Road, Richmond, BC</p>
              </div>
              <p className="text-gray-600">
                Specializing in importing and delivering premium supercars from South Korea to your doorstep.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-2 text-gray-600">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p>WhatsApp: Brian</p>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-600 hover:text-navy-700 transition-colors"
                  >
                    +1 437-463-8189
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <div>
                    <p className="text-sm">Sales:</p>
                    <a 
                      href="mailto:admin@sgsupercars.ca"
                      className="text-navy-600 hover:text-navy-700 transition-colors"
                    >
                      admin@sgsupercars.ca
                    </a>
                  </div>
                  <div>
                    <p className="text-sm">Vehicle Tracking:</p>
                    <a 
                      href="mailto:admin@sgsupercars.ca"
                      className="text-navy-600 hover:text-navy-700 transition-colors"
                    >
                      admin@sgsupercars.ca
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Hours</h3>
            <div className="flex items-start gap-2 text-gray-600">
              <Clock size={20} className="mt-1 flex-shrink-0" />
              <p>9:00 AM - 5:00 PM PST</p>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Our Legacy</h3>
            <p className="text-gray-600">
              We're the trusted name in premium vehicle imports from South Korea, delivering exceptional cars and service to our Canadian customers.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Shipgrid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}