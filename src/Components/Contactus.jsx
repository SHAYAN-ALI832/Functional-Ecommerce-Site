import React from 'react';
import { FaShippingFast, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaShippingFast size={24} />,
    title: 'FREE AND FAST DELIVERY',
    desc: 'Free delivery for all orders over $140',
  },
  {
    icon: <FaHeadset size={24} />,
    title: '24/7 CUSTOMER SERVICE',
    desc: 'Friendly 24/7 customer support',
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: 'MONEY BACK GUARANTEE',
    desc: 'We return money within 30 days',
  },
];

function ServiceHighlights() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-6 bg-white">
      {services.map((service, index) => (
        <div key={index} className="text-center max-w-xs mx-auto">
          <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-[#D6D1CB]">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
              {service.icon}
            </div>
          </div>
          <h3 className="font-bold text-sm mb-1">{service.title}</h3>
          <p className="text-sm text-gray-600">{service.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default ServiceHighlights;
