import React from 'react';
import { DollarSign, ExternalLink } from 'lucide-react';

function PriceComparison() {
  const importPrice = 79000;
  const localPrice = 122800;
  const savings = localPrice - importPrice;
  const savingsPercentage = Math.round((savings / localPrice) * 100);
  const importDate = "Dec 21, 2024";
  const autoTraderLink = "https://www.autotrader.ca/a/lamborghini/gallardo/montr%c3%a9al%20nord/quebec/5_61516273_20181130185823515/?showcpo=ShowCpo&ncse=no&ursrc=hl&orup=1_15_18&pc=V6Y%200G5&sprx=-1";

  return (
    <div className="bg-transparent py-6 px-6 sm:px-8 lg:px-10 mt-8 mb-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold text-white">Why Import From South Korea?</h1>
          <p className="text-3xl text-white max-w-3xl mx-auto">
            Lamborghini Gallardo Coupe Comparison
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Import Option */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-transparent border border-blue-100">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/imported_gallardo_photo_1.png"
                alt="Imported Lamborghini"
                className="w-full h-[350px] object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://flagcdn.com/w40/kr.png"
                    alt="Korean Flag"
                    className="w-8 h-5 rounded shadow-sm"
                  />
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xl font-semibold">
                    Korean Imported
                  </span>
                </div>
                <div className="flex items-center text-green-600">
                  <DollarSign className="w-6 h-6" />
                  <span className="font-semibold text-xl">Best Value</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-white">2008 Lamborghini Gallardo Coupe</h3>
                <p className="text-xl text-white">
                  Landed, After Registration Taxes:
                </p>
                <div className="text-5xl font-bold text-green-600">
                  ${importPrice.toLocaleString()} CAD
                </div>
                <p className="text-xl text-white">Imported on {importDate}</p>
              </div>
            </div>
          </div>

          {/* Local Option */}
          <a
            href={autoTraderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-transparent border border-gray-200 opacity-80 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gray-900/10 backdrop-grayscale"></div>
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="/local_gallardo.jpg"
                  alt="Local Lamborghini"
                  className="w-full h-[350px] object-cover filter grayscale contrast-75 group-hover:filter-none transition-all duration-300"
                />
              </div>
              <div className="relative p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-gray-500 text-white px-4 py-2 rounded-lg text-xl font-semibold">
                  🇨🇦 Lowest Priced In Canada
                  </span>
                  <div className="flex items-center space-x-6 text-blue-600">
                    <ExternalLink className="w-11 h-11" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h3 className="text-4xl font-bold text-white">
                        2007 Lamborghini Gallardo Coupe
                      </h3>
                      <p className="text-xl text-white">After Registration Taxes:</p>
                      <div className="text-5xl font-bold text-white">
                        ${localPrice.toLocaleString()} CAD
                      </div>
                    </div>
                    <div>
                      <img
                        src="/autotrader-logo.svg"
                        alt="AutoTrader Logo"
                        className="w-[200px] h-[200px]"
                      />
                    </div>
                  </div>
                  <p className="text-xl text-green-600 font-semibold mt-3">
                    Live on AutoTrader.ca - Click to View
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Savings Highlight */}
        <div className="bg-transparent p-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-4">
              Total Savings By Importing
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-white text-xl">Dollar Savings</p>
                <p className="text-5xl font-bold text-green-600">
                  + ${savings.toLocaleString()} CAD
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-white text-xl">Percentage Savings</p>
                <p className="text-5xl font-bold text-green-600">
                  {savingsPercentage}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceComparison;
