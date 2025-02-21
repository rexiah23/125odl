import React from 'react';
import { ShieldCheck, CheckCircle2, Shield, FileCheck } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <div className="p-8 bg-gray-100">
      <div className="flex items-center gap-3 mb-8">
        <ShieldCheck className="w-8 h-8 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-800">Shipgrid Guarantee</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-800">100% Satisfaction</h3>
            <p className="text-gray-700">7-day return policy with full refund</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <Shield className="w-6 h-6 text-green-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-800">Fully Protected</h3>
            <p className="text-gray-700">Comprehensive insurance and documentation</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <FileCheck className="w-6 h-6 text-green-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-800">Verified Quality</h3>
            <p className="text-gray-700">150-point inspection on every vehicle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection; 