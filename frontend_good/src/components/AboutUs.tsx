import React from 'react';

export function AboutUs() {
  const teamMembers = [
    { name: "John Doe", title: "Founder & CEO", imageUrl: "https://via.placeholder.com/300" },
    { name: "Jane Smith", title: "Operations Manager", imageUrl: "https://via.placeholder.com/300" },
    { name: "Bob Johnson", title: "Chief Technician", imageUrl: "https://via.placeholder.com/300" },
    { name: "Alice Williams", title: "Customer Success", imageUrl: "https://via.placeholder.com/300" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">About Us</h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We are Shipgrid – your trusted partner in importing premium supercars.
          </p>
        </div>
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="px-6 py-8 bg-black rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-base md:text-lg">
              To provide access to the finest supercars directly imported from South Korea, with comprehensive inspections and transparent pricing.
            </p>
          </div>
          <div className="px-6 py-8 bg-black rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-base md:text-lg">
              To redefine the automotive import experience by ensuring quality, reliability, and a seamless journey for our customers.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-gray-900">Meet Our Team</h3>
            <p className="mt-2 text-lg text-gray-600">
              Dedicated professionals behind Shipgrid.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {teamMembers.map(member => (
              <div key={member.name} className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src={member.imageUrl} alt={member.name} className="object-cover w-full h-full"/>
                </div>
                <h4 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h4>
                <p className="mt-1 text-gray-500">{member.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <button className="bg-blue-600 text-white text-lg px-10 py-3 rounded-full shadow hover:bg-blue-700 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}