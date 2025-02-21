import React from 'react';
import { MessageCircle, Phone, Mail, Clock, MapPin, Globe2 } from 'lucide-react';

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
      text: "+82 010-2765-8189",
      href: "https://wa.me/82010-2765-8189"
    }
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    description: "Direct line to our team",
    action: {
      text: "+82 010-2765-8189",
      href: "tel:+82010-2765-8189"
    }
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    description: "For detailed inquiries",
    action: {
      text: "sales@shipgrid.io",
      href: "mailto:sales@shipgrid.io"
    }
  }
];

export function ContactSupport() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Contact & Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team is available 24/7 to assist you with any questions about importing your dream car.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-black rounded-xl shadow-sm border border-green-600/20 p-8 hover:border-green-600/40 transition-all duration-300"
            >
              <div className="bg-green-600/10 w-12 h-12 rounded-xl flex items-center justify-center text-green-600 mb-6">
                {method.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {method.description}
              </p>
              
              <a
                href={method.action.href}
                className="text-green-600 hover:text-green-700 font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {method.action.text}
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black rounded-xl shadow-sm border border-green-600/20 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-green-600" />
              <span>Business Hours</span>
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="text-gray-900 font-medium">9:00 AM - 5:00 PM EST</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Saturday</span>
                <span className="text-gray-900 font-medium">10:00 AM - 3:00 PM EST</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Sunday</span>
                <span className="text-gray-900 font-medium">Closed</span>
              </div>
              <p className="text-sm text-gray-500 pt-4 border-t border-gray-200">
                * WhatsApp support available 24/7 for urgent inquiries
              </p>
            </div>
          </div>

          <div className="bg-black rounded-xl shadow-sm border border-green-600/20 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Globe2 className="w-6 h-6 text-green-600" />
              <span>Global Offices</span>
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-gray-900 font-medium mb-2">
                  <span className="text-lg">🇨🇦</span>
                  Canada Office
                </div>
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <p>809 9099 Cook Road, Richmond, BC</p>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-gray-900 font-medium mb-2">
                  <span className="text-lg">🇰🇷</span>
                  South Korea Office
                </div>
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <p>219 Gangnam-daero, Seocho-gu, Seoul</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}