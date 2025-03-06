import React, { useState } from 'react';
import { DollarSign, ExternalLink, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/30">
      <button
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-white">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-white" />
        ) : (
          <ChevronDown className="h-5 w-5 text-white" />
        )}
      </button>
      {isOpen && <div className="pb-4 text-white/80">{children}</div>}
    </div>
  );
};

const ListItem = ({ children }) => (
  <li className="flex items-start mb-2">
    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
    <span className="text-white">{children}</span>
  </li>
);

function WhyImportFromSouthKorea() {
  // Pricing Data
  const importPrice = 79000;
  const localPrice = 122800;
  const savings = localPrice - importPrice;
  const savingsPercentage = Math.round((savings / localPrice) * 100);
  const importDate = "Dec 21, 2024";
  const autoTraderLink =
    "https://www.autotrader.ca/a/lamborghini/gallardo/montr%c3%a9al%20nord/quebec/5_61516273_20181130185823515/";

  return (
    <div className="bg-transparent py-12 px-6 sm:px-8 lg:px-10">
      {/* Banner */}
      <div className="bg-yellow-400 text-black text-center py-4 mb-12 rounded-lg shadow-lg">
        <p className="text-xl font-bold">
          RORO shipping now available. Contact Brian @ +1 437-463-8189
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Page Title */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-white">Why Import From South Korea?</h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            There are two main reasons why importing your exotic car from South Korea 
            might be the best choice:
          </p>
        </div>

        {/* Reason #1: Better Value */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white text-center">Reason #1: Better Value</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            Exotic cars from South Korea can often be imported and registered 
            at a lower overall cost than buying locally—without sacrificing quality.
          </p>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Imported Car Card */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-transparent border border-blue-300">
              <img
                src="/imported_gallardo_photo_1.png"
                alt="Imported Lamborghini"
                className="w-full h-[350px] object-cover"
              />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xl font-semibold">
                    🇰🇷 Korean Imported
                  </span>
                  <div className="flex items-center text-green-400">
                    <DollarSign className="w-6 h-6" />
                    <span className="font-semibold text-xl">Best Value</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-white">
                    2008 Lamborghini Gallardo Coupe
                  </h3>
                  <p className="text-xl text-white/80">
                    Landed, After Registration Taxes:
                  </p>
                  <div className="text-4xl font-bold text-green-400">
                    ${importPrice.toLocaleString()} CAD
                  </div>
                  <p className="text-md text-white/60">
                    Imported on {importDate}
                  </p>
                </div>
              </div>
            </div>

            {/* Local Car Card */}
            <a
              href={autoTraderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-transparent border border-white/40">
                <img
                  src="/local_gallardo.jpg"
                  alt="Local Lamborghini"
                  className="w-full h-[350px] object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-white/30 text-white px-4 py-2 rounded-lg text-xl font-semibold">
                      🇨🇦 Lowest Priced In Canada
                    </span>
                    <ExternalLink className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white">
                      2007 Lamborghini Gallardo Coupe
                    </h3>
                    <p className="text-xl text-white/80">
                      After Registration Taxes:
                    </p>
                    <div className="text-4xl font-bold text-red-400">
                      ${localPrice.toLocaleString()} CAD
                    </div>
                    <p className="text-md text-green-400">
                      Click to View on AutoTrader
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Savings Highlight */}
          <div className="bg-transparent border border-white/30 p-6 rounded-lg shadow text-center mt-8">
            <h2 className="text-2xl font-bold text-white">
              Total Savings By Importing
            </h2>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div>
                <p className="text-white/80 text-lg">Dollar Savings</p>
                <p className="text-4xl font-bold text-green-400">
                  + ${savings.toLocaleString()} CAD
                </p>
              </div>
              <div>
                <p className="text-white/80 text-lg">Percentage Savings</p>
                <p className="text-4xl font-bold text-green-400">
                  {savingsPercentage}%
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reason #2: Better Quality */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white text-center">
            Reason #2: Better Quality
          </h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            From government-enforced inspections to a culture that values 
            meticulous maintenance, cars from South Korea consistently meet 
            high standards of care and reliability.
          </p>

          {/* Quality / Inspection Section */}
          <div className="mt-8 bg-transparent border border-white/30 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Why Are Korean Exotics in Better Condition?
            </h3>
            <p className="text-center text-white/80 mb-8">
              Government-Enforced Inspections + Cultural Accountability = 
              Exceptional Quality
            </p>

            {/* Accordion */}
            <AccordionItem title="KOTSA's Rigorous Inspections">
              <div className="space-y-4">
                <p className="leading-relaxed">
                  The Korean Transport Safety Authority (KOTSA) mandates a 
                  <span className="font-semibold text-green-400"> 170+ point inspection </span> 
                  every two years for all vehicles. These government-enforced checks go 
                  far beyond typical safety items (like brakes and tires) and include 
                  engine-specific tests often seen only in premium certifications.
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <ListItem>
                    Engine oil quality & filter condition 
                    <span className="text-white/60"> (spectroscopic analysis for metal particles)</span>
                  </ListItem>
                  <ListItem>Coolant system integrity & fluid levels</ListItem>
                  <ListItem>Cylinder compression tests (checking ring wear & valve seating)</ListItem>
                  <ListItem>Fuel system inspection for leaks & pressure</ListItem>
                  <ListItem>Turbocharger inspection (where applicable)</ListItem>
                  <ListItem>Oil consumption rate monitoring</ListItem>
                </ul>
                <p className="leading-relaxed">
                  All findings are logged in standardized digital records, ensuring 
                  thorough transparency. This level of rigor greatly exceeds most 
                  Canadian inspections, which typically focus on basic items like 
                  brakes and tires.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem title="Meticulous Maintenance Culture">
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <ListItem>80% of luxury cars maintained at certified service centers</ListItem>
                <ListItem>Strict laws on vehicle modifications</ListItem>
                <ListItem>Indoor winter storage to prevent corrosion</ListItem>
              </ul>
            </AccordionItem>

            <AccordionItem title="KOTSA Inspection Example Video">
              <iframe
                className="w-full h-64 rounded-lg shadow-lg mt-2"
                src="https://www.youtube.com/embed/QcZAB3rQWNg"
                title="KOTSA Inspection Example Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AccordionItem>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WhyImportFromSouthKorea;