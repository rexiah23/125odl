import React from 'react';
import { 
  Search, FileCheck, DollarSign, ShieldCheck, Wrench, 
  FileText, FileCheck2, PackageCheck, CheckCircle2 
} from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
  details: string[];
  documents?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Select Your Car',
    description: 'Browse our inventory of premium Korean vehicles',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    icon: <Search className="w-6 h-6" />,
    details: [
      'Live inventory updates',
      'Detailed vehicle history',
      'High-resolution photos'
    ]
  },
  {
    number: 2,
    title: 'Vehicle Inspection',
    description: '150-point inspection by certified mechanics',
    imageUrl: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80',
    icon: <FileCheck className="w-6 h-6" />,
    details: [
      'Mechanical inspection',
      'Damage assessment',
      'History verification'
    ],
    documents: [
      {
        icon: <FileText className="w-5 h-5" />,
        title: 'Commercial Invoice',
        description: 'Detailed document showing vehicle value, specifications, and buyer/seller information'
      },
      {
        icon: <FileCheck2 className="w-5 h-5" />,
        title: 'Bill of Lading',
        description: 'Official shipping receipt and contract of carriage'
      },
      {
        icon: <PackageCheck className="w-5 h-5" />,
        title: 'Packing List',
        description: 'Comprehensive inventory of vehicle and included components'
      }
    ]
  },
  {
    number: 3,
    title: 'Purchase & Ship',
    description: 'Secure payment and international shipping',
    imageUrl: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=1200&q=80',
    icon: <DollarSign className="w-6 h-6" />,
    details: [
      'Transparent pricing',
      'Full insurance coverage',
      'Real-time tracking'
    ]
  },
  {
    number: 4,
    title: 'Compliance Check',
    description: 'Meet all Canadian regulations and standards',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    icon: <Wrench className="w-6 h-6" />,
    details: [
      'Safety certification',
      'Emissions testing',
      'Registration prep'
    ]
  },
  {
    number: 5,
    title: 'Home Delivery',
    description: '7-day satisfaction guarantee',
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    icon: <ShieldCheck className="w-6 h-6" />,
    details: [
      'Door-to-door delivery',
      'Full orientation',
      'Return policy'
    ]
  }
];

// Evenly space steps vertically and alternate between two fixed horizontal positions
const getCoordinates = (index: number) => {
  const total = steps.length - 1;
  const y = total > 0 ? (index / total) * 100 : 50; // vertical percentage (0 to 100)
  const x = index % 2 === 0 ? 20 : 80; // even steps left, odd steps right
  return { x, y };
};

// Generate a quadratic Bézier curve between two points in normalized (0-100) space
const generatePath = (x1: number, y1: number, x2: number, y2: number) => {
  // Use a control point at the center (x=50) for a smooth curve.
  const cpX = 50;
  const cpY = (y1 + y2) / 2;
  return `M ${x1} ${y1} Q ${cpX} ${cpY} ${x2} ${y2}`;
};

export function HowItWorks() {
  return (
    <div className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey to owning a premium vehicle
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative w-full h-[600px]">
          {/* SVG overlay for connecting curves */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            {steps.slice(0, -1).map((_, index) => {
              const { x: x1, y: y1 } = getCoordinates(index);
              const { x: x2, y: y2 } = getCoordinates(index + 1);
              const d = generatePath(x1, y1, x2, y2);
              // Calculate the angle of the connector
              const angle = Math.atan2(y2 - y1, x2 - x1);
              // Offset the arrow head so it doesn't overlap the card (offset of 2 units)
              const arrowOffset = 2;
              const arrowX = x2 - arrowOffset * Math.cos(angle);
              const arrowY = y2 - arrowOffset * Math.sin(angle);
              return (
                <g key={index}>
                  <path
                    d={d}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="0.8"
                    style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))' }}
                  />
                  <polygon
                    points="0,0 -3,-2 -3,2"
                    fill="#3b82f6"
                    transform={`
                      translate(${arrowX},${arrowY})
                      rotate(${(angle * 180) / Math.PI})
                    `}
                  />
                </g>
              );
            })}
          </svg>

          {/* Render each step card */}
          {steps.map((step, index) => {
            const { x, y } = getCoordinates(index);
            return (
              <div
                key={step.number}
                className="absolute w-64 p-6 bg-black rounded-xl shadow-lg border border-gray-200 transition-transform hover:scale-105"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{step.description}</p>
                <ul className="mt-4 space-y-2">
                  {step.details.slice(0, 3).map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
                {step.documents && (
                  <div className="mt-4 space-y-2">
                    {step.documents.map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                        {doc.icon}
                        <span>{doc.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
