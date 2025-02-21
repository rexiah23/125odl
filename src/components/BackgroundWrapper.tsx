import React from 'react';

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

export const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  // You can also extract the brandLogos array here if needed.
  return (
    <div className="min-h-screen relative">
      {/* Background Layers */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-500/5 via-transparent to-navy-500/5"></div>
        {/* If you want to include the animated brand logos, you can also add that code here */}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
