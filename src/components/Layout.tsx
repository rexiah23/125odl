import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import { Shield, FileCheck, CheckCircle2, Globe, Phone, Award, RefreshCw } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const brandLogos = [
    {
      url: "https://upload.wikimedia.org/wikipedia/en/d/df/Lamborghini_Logo.svg",
    },
    {
      url: "/brand_logos/ferrari2.png",
    },
    {
      url: "/brand_logos/mclaren.svg",
    },
    {
      url: "/brand_logos/porsche.svg",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Layers */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Grid of logos */}
        <div className="absolute inset-0 grid grid-cols-5 grid-rows-5">
          {Array.from({ length: 25 }).map((_, index) => {
            const logo = brandLogos[index % brandLogos.length];
            return (
              <div 
                key={index} 
                className="flex items-center justify-center"
              >
                <img
                  src={logo.url}
                  alt=""
                  className="w-32 opacity-10"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        <div className="bg-black/80">
          <div className="max-w-7xl mx-auto px-4 py-1.5 sm:px-6 lg:px-8">
            <div className="flex flex-col">
              <div className="flex justify-center items-center mb-4">
                <div className="flex items-center gap-2 text-base font-medium text-white">
                  <div className="flex items-center gap-1">
                    <span className="text-xl">🇰🇷</span>
                    <span className="text-white">South Korea</span>
                  </div>
                  <span className="text-white">→</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xl">🇨🇦</span>
                    <span className="text-white">Canada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-navy-200">
          <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-4 text-base font-medium text-white">
              <Globe className="w-5 h-5 text-white" />
              <p className="font-semibold tracking-wide text-white">
                Your Global Automotive Solutions
              </p>
              <div className="flex items-center gap-1.5 text-white">
                <Award size={20} className="text-white" />
                <span>Over 10 Years of Excellence</span>
              </div>
              <div className="flex items-center gap-1.5 text-white">
                <RefreshCw size={20} className="text-white" />
                <span>100% Satisfaction Guaranteed or Return Your Car</span>
              </div>
              <Globe className="w-5 h-5 text-white" />
            </div>
          </div>
        </div> */}

        <header className="bg-black/80">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center gap-6 text-base text-white">
              <div className="flex items-center gap-1 text-xl">
                <CheckCircle2 size={18} className="text-green-500" />
                <span className="text-white">Inspected</span>
              </div>
              <div className="flex items-center gap-1 text-xl">
                <CheckCircle2 size={18} className="text-green-500" />
                <span className="text-white">Customs Cleared</span>
              </div>
              <div className="flex items-center gap-1 text-xl">
                <CheckCircle2 size={18} className="text-green-500" />
                <span className="text-white">Safetied</span>
              </div>
              <div className="flex items-center gap-1 text-xl">
                <CheckCircle2 size={18} className="text-green-500" />
                <span className="text-white">Registration Ready</span>
              </div>

              </div>
              
              <Link to="/" className="group">
                <div className="flex items-center gap-12">
                  <img src="/sg_logo_white.png" alt="Shipgrid Logo" className="h-36 w-auto" />
                </div>
              </Link>

              <nav>
                <ul className="flex items-center gap-8 mb-4">
                  <li>
                    <Link to="/listings"      className="nav-link text-white hover:text-white font-bold bg-transparent hover:bg-[#870106] p-2 rounded transition-transform duration-200 hover:scale-150"     style={{ fontSize: '24px' }}>
                      Korean Inventory
                    </Link>
                  </li>
                  <li>
                    <Link to="/track"      className="nav-link text-white hover:text-white font-bold bg-transparent hover:bg-[#870106] p-2 rounded transition-transform duration-200 hover:scale-150"     style={{ fontSize: '24px' }}>
                      Track My Car
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery"      className="nav-link text-white hover:text-white font-bold bg-transparent hover:bg-[#870106] p-2 rounded transition-transform duration-200 hover:scale-150"     style={{ fontSize: '24px' }}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/about"      className="nav-link text-white hover:text-white font-bold bg-transparent hover:bg-[#870106] p-2 rounded transition-transform duration-200 hover:scale-150"     style={{ fontSize: '24px' }}>
                      Who We Are
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
