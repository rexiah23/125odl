import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './Partners.css'; // External CSS for styling

// Define partner groups with a specific logo for each partner
const partnerGroups = [
  {
    title: "Korean Auto Partners",
    partners: [
      { name: "Hyundai Motor Group", logo: '/hyundai_motor_group.png' },
      { name: "Genesis Korea", logo: '/genesis_korea.png' },
      { name: "SK Networks", logo: '/sk_networks.png' }
    ]
  },
  {
    title: "Shipping & Logistics",
    partners: [
      { name: "Hyundai Glovis", logo: '/hyundai_glovis.png' },
      { name: "Korean Air Cargo", logo: '/korean_air_cargo.png' },
      { name: "EUKOR Car Carriers", logo: '/eukor_car_carriers.png' }
    ]
  },
  {
    title: "Certification Partners",
    partners: [
      { name: "KATRI", logo: '/katri.png' },
      { name: "KAA", logo: '/kaa.png' },
      { name: "KAMA", logo: '/kama.png' }
    ]
  },
  {
    title: "Documentation & Insurance",
    partners: [
      { name: "KB Insurance", logo: '/kb_insurance.png' },
      { name: "NICE Information Service", logo: '/nice_information_service.png' },
      { name: "KCB", logo: '/kcb.png' }
    ]
  }
];

// Flatten the partner logos from all groups
const getPartnerLogos = () =>
  partnerGroups.flatMap(group =>
    group.partners.map(partner => ({ ...partner }))
  );

// A dedicated component for rendering a single partner logo with its name
const PartnerLogo = ({ name, logo }) => (
  <div className="partner-logo">
    <img
      src={logo}
      alt={name}
      onError={(e) => { e.target.style.display = 'none'; }}
    />
    <p className="partner-name">{name}</p>
  </div>
);

export function Partners() {
  const partnerLogos = getPartnerLogos();

  // Slider configuration settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="partners-container">
      <h2>Our Partners</h2>
      <Slider {...sliderSettings}>
        {partnerLogos.map((partner, index) => (
          <div key={index}>
            <PartnerLogo name={partner.name} logo={partner.logo} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
