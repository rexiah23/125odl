import React from 'react';
import { MessageCircle, Phone, Mail, Clock, MapPin, Globe2 } from 'lucide-react';

const whatsappNumber = '+14374638189';
const whatsappMessage = encodeURIComponent(`Hi, I'd like to learn about importing a supercar from S. Korea`);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: {
    text: string;
    href: string;
  };
}

const contactMethods: ContactMethod[] = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "WhatsApp",
    description: "Quick responses within 1 hour",
    action: {
      text: "+1 437-463-8189",
      href: whatsappUrl
    }
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    description: "Direct line to our team",
    action: {
      text: "+1 437-463-8189",
      href: "tel:+1437-463-8189"
    }
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    description: "For detailed inquiries",
    action: {
      text: "admin@sgsupercars.ca",
      href: "mailto:admin@sgsupercars.ca"
    }
  }
];

export function ContactSupport() {
  return (
    <div className="py-12 sm:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Contact & Support
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            Our team is available 24/7 to assist you with any questions about importing your dream car.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-black rounded-xl shadow-sm border border-green-600/20 p-6 sm:p-8 hover:border-green-600/40 transition-all duration-300"
            >
              <div className="bg-green-600/10 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-green-600 mb-4 sm:mb-6">
                {method.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {method.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-300 mb-4">
                {method.description}
              </p>
              
              <a
                href={method.action.href}
                className="text-green-400 hover:text-green-300 font-medium transition-colors text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                {method.action.text}
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <div className="bg-black rounded-xl shadow-sm border border-green-600/20 p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              <span>Business Hours</span>
            </h3>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="text-white font-medium">9:00 AM - 5:00 PM PST</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Saturday</span>
                <span className="text-white font-medium">10:00 AM - 3:00 PM PST</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Sunday</span>
                <span className="text-white font-medium">Closed</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 pt-3 sm:pt-4 border-t border-gray-800">
                * WhatsApp support available 24/7 for urgent inquiries
              </p>
            </div>
          </div>

          <div className="bg-black rounded-xl shadow-sm border border-green-600/20 p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              <span>Global Offices</span>
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div>
                <div className="flex items-center gap-2 text-white font-medium mb-2">
                  <span className="text-base sm:text-lg">🇨🇦</span>
                  Canada Office
                </div>
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base">809 9099 Cook Road, Richmond, BC</p>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-white font-medium mb-2">
                  <span className="text-base sm:text-lg">🇰🇷</span>
                  South Korea Office
                </div>
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base">219 Gangnam-daero, Seocho-gu, Seoul</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}