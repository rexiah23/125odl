import React, { useState } from 'react';
import { Upload, Info, CheckCircle2 } from 'lucide-react';

interface FormData {
  make: string;
  model: string;
  year: string;
  mileage: string;
  price: string;
  description: string;
  name: string;
  email: string;
  phone: string;
  photos: File[];
}

const benefits = [
  {
    title: "Global Reach",
    description: "Access buyers from around the world through our international marketplace"
  },
  {
    title: "Hassle-Free Process",
    description: "We handle all paperwork, shipping logistics, and buyer negotiations"
  },
  {
    title: "Competitive Pricing",
    description: "Get the best value for your vehicle with our global market insights"
  },
  {
    title: "Quick Payment",
    description: "Secure and fast payment processing once your car is sold"
  }
];

export default function SellMyCar() {
  const [formData, setFormData] = useState<FormData>({
    make: '',
    model: '',
    year: '',
    mileage: '',
    price: '',
    description: '',
    name: '',
    email: '',
    phone: '',
    photos: []
  });

  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({ ...prev, photos: [...prev.photos, ...files] }));
    
    // Create preview URLs
    const newPreviewUrls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sell Your Car Globally
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            List your vehicle on our global marketplace and reach buyers worldwide. 
            We handle all the logistics, paperwork, and shipping.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-black rounded-xl shadow-sm border border-green-600/20 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Vehicle Information</h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
                        Make
                      </label>
                      <input
                        type="text"
                        id="make"
                        name="make"
                        value={formData.make}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                        Model
                      </label>
                      <input
                        type="text"
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                        Year
                      </label>
                      <input
                        type="number"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        min="1900"
                        max={new Date().getFullYear() + 1}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="mileage" className="block text-sm font-medium text-gray-700 mb-1">
                        Mileage (km)
                      </label>
                      <input
                        type="number"
                        id="mileage"
                        name="mileage"
                        value={formData.mileage}
                        onChange={handleInputChange}
                        min="0"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                      Asking Price (CAD)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        min="0"
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Vehicle Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="bg-black rounded-xl shadow-sm border border-green-600/20 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black rounded-xl shadow-sm border border-green-600/20 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Vehicle Photos</h2>
                
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                    <input
                      type="file"
                      id="photos"
                      name="photos"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="photos"
                      className="flex flex-col items-center justify-center cursor-pointer"
                    >
                      <Upload className="w-12 h-12 text-gray-400 mb-4" />
                      <span className="text-gray-600">Click to upload photos</span>
                      <span className="text-sm text-gray-500">or drag and drop</span>
                    </label>
                  </div>

                  {previewUrls.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {previewUrls.map((url, index) => (
                        <div key={index} className="relative aspect-w-3 aspect-h-2">
                          <img
                            src={url}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button type="submit" className="w-full btn-primary">
                Submit Listing
              </button>
            </form>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <div className="bg-black rounded-xl shadow-sm border border-green-600/20 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-6 h-6 text-green-600" />
                <h2 className="text-xl font-semibold text-gray-900">Why Sell With Us?</h2>
              </div>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-600 rounded-xl shadow-sm p-6 text-white">
              <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
              <p className="mb-6">
                Our team is here to assist you with the listing process. Contact us for any questions.
              </p>
              <div className="space-y-3">
                <a 
                  href="tel:+82010-2765-8189"
                  className="flex items-center gap-2 hover:underline"
                >
                  Call us: +82 010-2765-8189
                </a>
                <a 
                  href="mailto:sales@shipgrid.io"
                  className="flex items-center gap-2 hover:underline"
                >
                  Email: sales@shipgrid.io
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}