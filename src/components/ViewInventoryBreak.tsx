import { useNavigate } from "react-router-dom";
import React from "react";

const BreakSection = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-[25vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/blue_murci.png)',
        backgroundPosition: '15% 70%',
        backgroundSize: '100%',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Your Dream Exotic Is Waiting</h2>
        <button
          onClick={() => navigate("/listings")}
          className="bg-yellow-400 text-black px-6 py-3 text-lg font-semibold rounded-lg hover:bg-yellow-300 transition"
        >
          View Inventory
        </button>
      </div>
    </div>
  );
};

export default BreakSection;
