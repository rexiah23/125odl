import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const partners = [
  { name: "Encar.com", logo: '/encar.png' },
  { name: "Hyundai Glovis", logo: '/hyundai_glovis.png' },
  { name: "Co Ship Canada", logo: '/coship.png' },
  { name: "KB Cha Cha Cha", logo: '/kbchachacha.png' },
];

const PartnerLogo = ({ name, logo }) => (
  <div className="partner-logo px-6 py-4 flex flex-col items-center justify-center">
    <div className="h-24 flex items-center justify-center">
      <img
        src={logo}
        alt={name}
        className="max-h-full w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
    </div>
  </div>
);

export function Partners() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: Math.min(partners.length, 4), // Ensuring only existing logos are shown per rotation
    slidesToScroll: Math.min(partners.length, 4), // Ensuring full rotation per cycle
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: Math.min(partners.length, 3) } },
      { breakpoint: 1024, settings: { slidesToShow: Math.min(partners.length, 3) } },
      { breakpoint: 768, settings: { slidesToShow: Math.min(partners.length, 2) } },
      { breakpoint: 480, settings: { slidesToShow: Math.min(partners.length, 1) } }
    ]
  };

  return (
    <div className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-gray-400">
            Working with industry leaders to deliver excellence
          </p>
        </div>

        <Slider {...sliderSettings}>
          {partners.map((partner, index) => (
            <PartnerLogo
              key={index}
              name={partner.name}
              logo={partner.logo}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
