import React from 'react';
import { Link } from 'react-router-dom';
import ourstory from '../assets/Sliderimgs/ourstory.jpg'
function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 px-6 md:px-16 py-4">
        <Link to="/" className="text-gray-500">Home</Link> / <span className="text-black font-medium">About</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center flex-1">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 px-6 md:px-16 py-8 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a wide
            range of tailored marketing, data and service solutions, Exclusive has
            10,500 sellers and 300 brands and serves 3 million customers across the
            region.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Exclusive has more than 1 Million products to offer, growing at a very
            fast rate. Exclusive offers a diverse assortment in categories ranging
            from consumer.
          </p>
        </div>

        {/* Image Section - flush to right edge */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[28rem]">
          <img
            src={ourstory}
            alt="Our Story"
            className="w-full h-full object-cover object-center md:rounded-none"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
