import React, { useState } from 'react';

function TrackMyCar() {
  const [orderNumber, setOrderNumber] = useState('');
  const [vin, setVin] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(
      "We couldn't find your order. Please contact our support team at admin@sgsupercars.ca."
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4">
      <div className="max-w-md w-full bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-white font-bold mb-2 text-center">
          Track Your Order
        </h2>
        <p className="text-white/60 text-center mb-6">
          Enter your order details to check the status.
        </p>

        {errorMessage && (
          <div className="bg-red-600/70 text-red-100 p-3 rounded mb-6 text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Order Number */}
          <div>
            <label
              htmlFor="orderNumber"
              className="block text-white mb-1 font-semibold"
            >
              Order #
            </label>
            <input
              id="orderNumber"
              type="text"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="E.g. #12345"
              className="w-full p-3 rounded bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* VIN */}
          <div>
            <label
              htmlFor="vin"
              className="block text-white mb-1 font-semibold"
            >
              VIN
            </label>
            <input
              id="vin"
              type="text"
              value={vin}
              onChange={(e) => setVin(e.target.value)}
              placeholder="17-character Vehicle Identification Number"
              className="w-full p-3 rounded bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-white mb-1 font-semibold"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full p-3 rounded bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Track Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default TrackMyCar;