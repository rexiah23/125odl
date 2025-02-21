import React, { useState, useEffect, useContext } from 'react';
import { Car } from '../types';
import { HowItWorks } from '../components/HowItWorks';
import WhyShipgrid from '../components/WhyShipgrid';
import { WhatWeDo } from '../components/WhatWeDo';
import { Partners } from '../components/Partners';
import { ContactSupport } from '../components/ContactSupport';
import { useNavigate } from 'react-router-dom';
import { ConfigContext } from '../contexts/ConfigContext';
import Hero from '../components/Hero';
import GuaranteeSection from '../components/GuaranteeSection';
import CarListSection from '../components/CarListSection';
import PriceComparison from '../components/PriceComparison';
import QualityComparison from '../components/QualityComparison';
import BreakSection from '../components/ViewInventoryBreak';
import { InfoBoxes } from '../components/InfoBoxes';
import { Link } from 'react-router-dom';
import WhyImportKorea from '../components/WhyImportKorea'

function calculateTotalPrice(basePrice: number, provinceCharges: any[]) {
  return Math.round(basePrice + provinceCharges.reduce((total, charge) => {
    const value = typeof charge.value === 'number' && charge.value < 1 
      ? basePrice * charge.value 
      : charge.value;
    return total + value;
  }, 0));
}

export function Home() {
  const navigate = useNavigate();
  const config = useContext(ConfigContext);
  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 8;
  const [recommendedCars, setRecommendedCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const totalPages = Math.ceil(recommendedCars.length / carsPerPage);

  useEffect(() => {
    async function fetchRecommendedCars() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cars/fetchRecommendedCars`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRecommendedCars(data);
      } catch (error) {
        console.error('Error fetching recommended cars:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchRecommendedCars();
  }, []);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="bg-transparent">
        <Hero isMobile={false} />
        {/* <InfoBoxes /> */}
        <CarListSection
          loading={loading}
          recommendedCars={recommendedCars}
          config={config}
          calculateTotalPrice={calculateTotalPrice}
          navigate={navigate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          carsPerPage={carsPerPage}
          prevPage={prevPage}
          nextPage={nextPage}
        />
        <WhyImportKorea />
        {/* <PriceComparison /> */}
        {/* <QualityComparison /> */}
        <BreakSection />
        <WhyShipgrid />
        {/* <WhatWeDo /> */}
        <HowItWorks />
        <Partners />
        <ContactSupport />
  
    </div>
  );
}