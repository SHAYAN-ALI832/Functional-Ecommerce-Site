import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="min-h-screen bg-white px-6 py-10">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-8">
        <span className="text-gray-400"><Link to="/">Home</Link></span> / <span className="text-black font-medium">Contact</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Left Contact Info */}
        <div className="bg-white border-gray-100 border-[1px] rounded-md p-6 shadow-sm col-span-1">
          {/* Call */}
          <div className="flex items-start gap-4 mb-6">
            <div className="text-red-600 bg-red-100 p-3 rounded-full">
              <FaPhoneAlt size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Call To Us</h3>
              <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
              <p className="text-sm text-gray-600 mt-1">Phone: +8801611112222</p>
            </div>
          </div>
          <hr className="my-4" />
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="text-red-600 bg-red-100 p-3 rounded-full">
              <FaEnvelope size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Write To Us</h3>
              <p className="text-sm text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-sm text-gray-600 mt-1">Emails: customer@exclusive.com</p>
              <p className="text-sm text-gray-600">support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="md:col-span-2 bg-white border-gray-100 border-[1px] rounded-md p-6 shadow-sm">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 border text-sm rounded-sm w-full bg-gray-50"
                />
                <span className="absolute top-1.5 right-3 text-red-500 text-lg">*</span>
              </div>

              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 border text-sm rounded-sm w-full bg-gray-50"
                />
                <span className="absolute top-1.5 right-3 text-red-500 text-lg">*</span>
              </div>

              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 border text-sm rounded-sm w-full bg-gray-50"
                />
                <span className="absolute top-1.5 right-3 text-red-500 text-lg">*</span>
              </div>

            </div>
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full p-3 border text-sm rounded-sm bg-gray-50"
            />
            <div className="text-right">
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 text-sm font-medium rounded-sm hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
