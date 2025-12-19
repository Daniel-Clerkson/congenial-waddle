"use client"

import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    phoneNumber: '',
    hearAbout: '',
    reasonForEnquiry: '',
    tellUsAbout: '',
    website: ''
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-[#1D042A] px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Text Content */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We're here to <span className="italic font-serif text-grad">help</span>
          </h1>
          
          <p className="text-purple-200 leading-relaxed mb-12">
            After signing up, your Account Manager will match you with a dedicated 
            assistant who grows with your business. Need more skills? Add another 
            assistant for free
          </p>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-2 text-purple-300">Phone Contact</h3>
              <p className="text-lg">+234 000 000 00</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2 text-purple-300">Email Address</h3>
              <p className="text-lg">hello@reliassist.co</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2 text-purple-300">Address</h3>
              <p className="text-lg">Remote</p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Shuaib Ango"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <label className="text-xs text-gray-500 ml-1 mt-1 block">Name</label>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder=""
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <label className="text-xs text-gray-500 ml-1 mt-1 block">Email</label>
            </div>

            <div>
              <input
                type="text"
                name="businessName"
                placeholder=""
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <label className="text-xs text-gray-500 ml-1 mt-1 block">Business Name</label>
            </div>

            <div>
              <input
                type="tel"
                name="phoneNumber"
                placeholder=""
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <label className="text-xs text-gray-500 ml-1 mt-1 block">Phone Number</label>
            </div>

            <div>
              <input
                type="text"
                name="hearAbout"
                placeholder=""
                value={formData.hearAbout}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <label className="text-xs text-gray-500 ml-1 mt-1 block">How did you hear about us</label>
            </div>

            <div>
              <input
                type="text"
                name="reasonForEnquiry"
                placeholder=""
                value={formData.reasonForEnquiry}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <label className="text-xs text-gray-500 ml-1 mt-1 block">Reason for Enquiry</label>
            </div>

            <div>
              <textarea
                name="tellUsAbout"
                placeholder=""
                value={formData.tellUsAbout}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
              <label className="text-xs text-gray-500 ml-1 mt-1 block">Tell us about your need</label>
            </div>

            <div>
              <input
                type="url"
                name="website"
                placeholder=""
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <label className="text-xs text-gray-500 ml-1 mt-1 block">Website url/Linkedin url</label>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-lg mt-6"
            >
              Submit Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact