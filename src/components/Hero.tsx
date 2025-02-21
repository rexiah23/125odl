import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SearchFiltersMini from './SearchFiltersMini';

interface FeatureItemProps {
  icon: React.ReactNode;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => (
  <li className="flex items-center">
    {typeof icon === 'string' ? (
      <span className="mr-5 text-3xl sm:text-4xl">{icon}</span>
    ) : (
      React.cloneElement(icon as React.ReactElement, { className: "mr-5" })
    )}
    <span>{text}</span>
  </li>
);

interface HeroProps {
  isMobile?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isMobile }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.log('Auto-play prevented:', error);
      });
    }
  }, []);

  return (
    <div className="relative w-full min-h-[50vh] flex flex-col items-center justify-center text-white overflow-hidden">
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: isVideoLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        ref={videoRef}
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-7xl mx-auto mt-8 mb-8"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight mb-4 sm:mb-7 break-words whitespace-normal mt-1 sm:mt-2">
          Get Your Next Supercar
          <span className="block text-yellow-400">for up to 40% off</span>
        </h1>

        <p className="text-xl sm:text-3xl md:text-4xl font-semibold mt-2 sm:mt-4 mb-4 sm:mb-8">
          Imported from 🇰🇷 South Korea &rarr; 🇨🇦 Canada.
        </p>

        <div className="w-full max-w-xl mb-4 sm:mb-8">
          <ul className="flex flex-col items-start gap-2 sm:gap-5 text-xl sm:text-3xl md:text-4xl text-white">
            <FeatureItem icon={<CheckCircle className="w-10 h-10 sm:w-14 sm:h-14" color="#10B981" />} text="Inspected" />
            <FeatureItem icon={<CheckCircle className="w-10 h-10 sm:w-14 sm:h-14" color="#10B981" />} text="Custom Cleared" />
            <FeatureItem icon={<CheckCircle className="w-10 h-10 sm:w-14 sm:h-14" color="#10B981" />} text="Safetied" />
            <FeatureItem icon={<CheckCircle className="w-10 h-10 sm:w-14 sm:h-14" color="#10B981" />} text="Delivered To Your Door" />
          </ul>
        </div>

        <p 
          className="text-xl sm:text-3xl md:text-4xl text-yellow-300 font-bold mt-2 sm:mt-4 mb-4 sm:mb-6"
        >
          3-Day Return Policy.{" "}
          <span className="underline cursor-pointer" onClick={() => navigate('/shipping')}>
            Learn more
          </span>
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 sm:mt-8 px-8 sm:px-14 py-3 sm:py-5 bg-yellow-400 text-black text-xl sm:text-3xl font-bold rounded-full flex items-center transition-colors hover:bg-yellow-300"
          onClick={() => navigate('/inventory')}
        >
          View Inventory
          <ChevronRight className="ml-3 w-6 h-6 sm:w-8 sm:h-8" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
