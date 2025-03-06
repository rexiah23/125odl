import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// If you want to use the Hero.module.css, import it here:
// import styles from './Hero.module.css';

interface FeatureItemProps {
  icon: React.ReactNode;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => (
  <li className="flex items-center">
    {typeof icon === 'string' ? (
      <span className="mr-2 sm:mr-5 text-xl sm:text-2xl md:text-3xl">{icon}</span>
    ) : (
      React.cloneElement(icon as React.ReactElement, {
        className: 'mr-2 sm:mr-5 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10',
      })
    )}
    <span className="text-base sm:text-lg md:text-xl">{text}</span>
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
      videoRef.current.play().catch((error) => {
        console.log('Auto-play prevented:', error);
      });
    }
  }, []);

  return (
    <div
      /* If using Hero.module.css, do: className={styles.hero} */
      className="relative w-full min-h-[50vh] sm:min-h-[60vh] flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* Background Video */}
      <motion.video
        ref={videoRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVideoLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        {/* IMPORTANT: Just use /hero.mp4 in Vite if the file is in public/hero.mp4 */}
        <source src="/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* Overlay (or use styles.overlay from Hero.module.css) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <motion.div
        /* If using Hero.module.css, do: className={styles.content} */
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-7xl mx-auto mt-4 sm:mt-8 mb-4 sm:mb-8"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold uppercase leading-tight mb-2 sm:mb-4 md:mb-7 break-words whitespace-normal">
          Get Your Next Supercar
          <span className="block text-yellow-400">for up to 40% off</span>
        </h1>

        <p className="text-base sm:text-lg md:text-2xl font-semibold mt-2 sm:mt-4 mb-2 sm:mb-4">
          Imported from 🇰🇷 South Korea &rarr; 🇨🇦 Canada.
        </p>

        <div className="w-full max-w-xl mb-2 sm:mb-4 md:mb-8">
          <ul className="flex flex-col items-start gap-2 sm:gap-4 text-sm sm:text-base md:text-xl text-white">
            <FeatureItem icon={<CheckCircle color="#10B981" />} text="Inspected" />
            <FeatureItem icon={<CheckCircle color="#10B981" />} text="Custom Cleared" />
            <FeatureItem icon={<CheckCircle color="#10B981" />} text="Safety Ready" />
            <FeatureItem icon={<CheckCircle color="#10B981" />} text="Delivered To Your Door" />
          </ul>
        </div>

        <p className="text-base sm:text-lg md:text-2xl text-yellow-300 font-bold mt-2 sm:mt-4 mb-2 sm:mb-4">
          3-Day Return Policy.{' '}
          <span className="underline cursor-pointer" onClick={() => navigate('/return-policy')}>
            Learn more
          </span>
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-2 sm:mt-4 md:mt-8 px-4 sm:px-6 md:px-10 py-2 sm:py-3 bg-yellow-400 text-black text-base sm:text-lg md:text-xl font-bold rounded-full flex items-center transition-colors hover:bg-yellow-300"
          onClick={() => navigate('/listings')}
        >
          View Inventory
          <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
