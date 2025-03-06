import React from 'react';
import { Shield, Clock, FileCheck, AlertCircle, Check, X, DollarSign, Truck, FileText, Scale } from 'lucide-react';

export function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">3-Day Return Guarantee</h1>
          <p className="text-xl text-gray-300">
            Your peace of mind is our priority. We offer a comprehensive 3-day return policy on all imported vehicles.
          </p>
        </div>

        {/* Policy Header */}
        <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-700 mb-8">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Shipgrid Solutions Inc. 3-Day Return Policy</h2>
          <p className="text-gray-300 text-center">
            This document outlines the terms and conditions under which customers may return a vehicle purchased from Shipgrid Solutions Inc.
          </p>
        </div>

        {/* Section 1: Eligibility and Timeframe */}
        <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-700 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-green-400 flex-shrink-0" />
            <h2 className="text-2xl font-bold text-white">1. Eligibility and Timeframe</h2>
          </div>
          
          <div className="space-y-4 pl-11">
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">1.1.</span>
              <p className="text-gray-300">
                The Buyer ("Customer") may return the vehicle within 3 calendar days from the date of delivery. The delivery date is deemed to be the day the vehicle arrives at the address specified by the Customer.
              </p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">1.2.</span>
              <p className="text-gray-300">
                To initiate a return, the Customer must notify Shipgrid Solutions Inc. in writing (email or other documented form) before the end of the third calendar day.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Vehicle Condition Requirements */}
        <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-700 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-green-400 flex-shrink-0" />
            <h2 className="text-2xl font-bold text-white">2. Vehicle Condition Requirements</h2>
          </div>
          
          <div className="space-y-4 pl-11">
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">2.1.</span>
              <p className="text-gray-300">
                The vehicle must be returned in the exact same condition as it was delivered, with no additional damage, unusual wear and tear, or missing parts.
              </p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">2.2.</span>
              <p className="text-gray-300">
                The odometer reading must not exceed 250 kilometers beyond what was recorded on the date of delivery (or any pre-agreed test-drive mileage limit stated in the purchase agreement).
              </p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">2.3.</span>
              <p className="text-gray-300">
                The vehicle must not have been involved in any accident, have had any bodywork or paint touch-ups, or undergone any mechanical repairs or modifications not authorized by Shipgrid Solutions Inc.
              </p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">2.4.</span>
              <p className="text-gray-300">
                Any manufacturer-installed components (e.g., stereo, navigation system, seats) or aftermarket additions included at the time of sale must remain fully intact and unaltered.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Inspection and Verification */}
        <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-700 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FileCheck className="w-8 h-8 text-green-400 flex-shrink-0" />
            <h2 className="text-2xl font-bold text-white">3. Inspection and Verification</h2>
          </div>
          
          <div className="space-y-4 pl-11">
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">3.1.</span>
              <p className="text-gray-300">
                Upon return, the vehicle will undergo a thorough inspection by Shipgrid Solutions Inc. or a certified third-party mechanic at Shipgrid Solutions Inc.'s discretion.
              </p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">3.2.</span>
              <p className="text-gray-300">
                If any evidence of damage, modification, tampering, missing parts, or excessive wear and tear is discovered—or if the vehicle does not meet the mileage requirement—the return will be refused, and no refund will be issued.
              </p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">3.3.</span>
              <p className="text-gray-300">
                The Customer is liable for any repair costs if damage is discovered upon inspection.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Fees, Shipping, and Associated Costs */}
        <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-700 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-8 h-8 text-green-400 flex-shrink-0" />
            <h2 className="text-2xl font-bold text-white">4. Fees, Shipping, and Associated Costs</h2>
          </div>
          
          <div className="space-y-4 pl-11">
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">4.1.</span>
              <p className="text-gray-300">
                The cost of returning the vehicle, including any shipping or transportation fees, is the responsibility of the Customer, unless otherwise specified in writing by Shipgrid Solutions Inc.
              </p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">4.2.</span>
              <p className="text-gray-300">
                If Shipgrid Solutions Inc. arranges return transportation at the Customer's request, all associated costs (e.g., shipping, insurance, handling) will be deducted from the Customer's refund or charged to the Customer in advance.
              </p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">4.3.</span>
              <p className="text-gray-300">
                A restocking fee of 2% of the total delivered cost of the car (the purchase price plus any shipping/transportation charges) will be deducted from the Customer's refund if the return is approved.
              </p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">4.4.</span>
              <p className="text-gray-300">
                Taxes, duties, and registration fees are nonrefundable unless the relevant authorities allow refunds; in that event, the Customer must pursue such refunds independently.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Insurance and Liability */}
        <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-700 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-green-400 flex-shrink-0" />
            <h2 className="text-2xl font-bold text-white">5. Insurance and Liability</h2>
          </div>
          
          <div className="space-y-4 pl-11">
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">5.1.</span>
              <p className="text-gray-300">
                The Customer is required to maintain comprehensive insurance coverage on the vehicle from the moment of delivery until the vehicle is returned to Shipgrid Solutions Inc.
              </p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">5.2.</span>
              <p className="text-gray-300">
                In the event of any theft, damage, or loss during the return period, the Customer bears full responsibility and any related costs.
              </p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">5.3.</span>
              <p className="text-gray-300">
                Shipgrid Solutions Inc. assumes no liability for accidents, traffic violations, or legal infractions incurred during the Customer's possession of the vehicle.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Refund Process */}
        <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-700 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Truck className="w-8 h-8 text-green-400 flex-shrink-0" />
            <h2 className="text-2xl font-bold text-white">6. Refund Process</h2>
          </div>
          
          <div className="space-y-4 pl-11">
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">6.1.</span>
              <p className="text-gray-300">
                If the vehicle passes inspection and meets all return conditions, Shipgrid Solutions Inc. will process a refund of the purchase price (minus the 2% restocking fee, any applicable shipping costs, and charges for damage) within 14 business days of the vehicle's arrival back at Shipgrid Solutions Inc.'s designated location.
              </p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">6.2.</span>
              <p className="text-gray-300">
                Refunds will be issued using the original form of payment unless otherwise agreed in writing.
              </p>
            </div>
          </div>
        </div>

        {/* Section 7: Exclusions and Voiding of Return Policy */}
        <div className="bg-zinc-900 rounded-xl p-8 border border-red-600/20 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-8 h-8 text-red-400 flex-shrink-0" />
            <h2 className="text-2xl font-bold text-white">7. Exclusions and Voiding of Return Policy</h2>
          </div>
          
          <div className="space-y-4 pl-11">
            <div className="flex items-start gap-2">
              <span className="text-red-400 font-bold">7.1.</span>
              <p className="text-gray-300">
                This 3-Day Return Policy is void if the Customer:
              </p>
            </div>
            
            <div className="pl-8 space-y-2">
              <div className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">
                  Fails to notify Shipgrid Solutions Inc. in writing of their intent to return within the 3-day period
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">
                  Exceeds the mileage limit stated in Section 2.2, or substantially damages or alters the vehicle
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">
                  Engages in fraud, misrepresentation, or illegal activity while the vehicle is in their possession
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-red-400 font-bold">7.2.</span>
              <p className="text-gray-300">
                Vehicles purchased for commercial use—such as rideshare, delivery, or rental—are not eligible for the 3-Day Return Policy unless explicitly agreed upon in writing.
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: Additional Terms */}
        <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-700 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-green-400 flex-shrink-0" />
            <h2 className="text-2xl font-bold text-white">8. Additional Terms</h2>
          </div>
          
          <div className="space-y-4 pl-11">
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">8.1.</span>
              <p className="text-gray-300">
                Shipgrid Solutions Inc. reserves the right to modify or terminate this 3-Day Return Policy at any time; however, any changes will not affect vehicles already sold under the existing terms.
              </p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold">8.2.</span>
              <p className="text-gray-300">
                This policy is governed by and interpreted under the laws and regulations of the jurisdiction where Shipgrid Solutions Inc. is registered.
              </p>
            </div>
          </div>
        </div>

        {/* Return Process Summary */}
        <div className="bg-zinc-900 rounded-xl p-8 border border-green-600/20">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Return Process Summary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/30 p-6 rounded-lg border border-green-600/10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">Step 1: Notify Us</h3>
              <p className="text-gray-300 text-center text-sm">
                Contact us in writing within 3 days of delivery to initiate the return process.
              </p>
            </div>
            
            <div className="bg-black/30 p-6 rounded-lg border border-green-600/10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">Step 2: Return Vehicle</h3>
              <p className="text-gray-300 text-center text-sm">
                Arrange for the vehicle to be returned in its original condition with all documentation.
              </p>
            </div>
            
            <div className="bg-black/30 p-6 rounded-lg border border-green-600/10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">Step 3: Inspection</h3>
              <p className="text-gray-300 text-center text-sm">
                We'll inspect the vehicle and process your refund within 14 business days if all conditions are met.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">
            For questions about our return policy or to initiate a return, please contact us:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:admin@sgsupercars.ca"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              admin@sgsupercars.ca
            </a>
            <span className="hidden sm:inline text-gray-500">|</span>
            <a 
              href="tel:+14374638189"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              +1 437-463-8189
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}