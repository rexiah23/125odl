import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import { Shield, FileCheck, CheckCircle2, Globe, Phone, Award, RefreshCw, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const menuItems = [
    { to: "/listings", label: "Korean Inventory" },
    { to: "/track", label: "Track My Car" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/return-policy", label: "3-Day Return Policy" },
    { to: "/recent-imports", label: "Recent Imports" }
    // { to: "/about", label: "Who We Are" }
  ];

  const statusItems = [
    { icon: <CheckCircle2 size={18} className="text-green-500" />, label: "Inspected" },
    { icon: <CheckCircle2 size={18} className="text-green-500" />, label: "Customs Cleared" },
    { icon: <CheckCircle2 size={18} className="text-green-500" />, label: "Safety Ready" },
    { icon: <CheckCircle2 size={18} className="text-green-500" />, label: "Registration Ready" }
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
          <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex flex-col">
              <div className="flex justify-center items-center mb-4 mt-4">
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

        <header className="bg-black/80">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-8">
              {/* Status Indicators - Desktop Only */}
              <div className="hidden md:flex items-center gap-6 text-base text-white">
                {statusItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-1 text-xl">
                    {item.icon}
                    <span className="text-white">{item.label}</span>
                  </div>
                ))}
              </div>
              
              {/* Mobile Header */}
              <div className="flex md:hidden w-full items-center justify-between">
                {/* Mobile Menu Button */}
                <button
                  className="text-white p-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X size={24} />
                  ) : (
                    <Menu size={24} />
                  )}
                </button>

                {/* Logo */}
                <Link to="/" className="group">
                  <img src="/sg_logo_white.png" alt="Shipgrid Logo" className="h-16 w-auto" />
                </Link>

                {/* Empty div for spacing */}
                <div className="w-10"></div>
              </div>

              {/* Desktop Logo */}
              <Link to="/" className="hidden md:block group">
                <div className="flex items-center gap-12">
                  <img src="/sg_logo_white.png" alt="Shipgrid Logo" className="h-36 w-auto" />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <ul className="flex items-center gap-8 mb-4">
                  {menuItems.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="nav-link text-white hover:text-white font-bold bg-transparent hover:bg-[#870106] p-2 rounded transition-transform duration-200 hover:scale-150"
                        style={{ fontSize: '24px' }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Navigation */}
              {isMobileMenuOpen && (
                <nav className="md:hidden fixed inset-0 bg-black/95 z-50">
                  <div className="flex flex-col items-center justify-center h-full">
                    <button
                      className="absolute top-6 right-6 text-white p-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X size={24} />
                    </button>
                    <ul className="flex flex-col items-center gap-8">
                      {menuItems.map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            className="text-white text-2xl font-bold hover:text-green-400 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              )}
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