// src/components/HeroSlider.jsx
import React, { useState } from 'react';
import img from '/vite.svg'
import { useEffect } from 'react';

const slides = [
  {
    image: img,
    title: 'iPhone 14 Series',
    offer: 'Up to 10% off Voucher',
  },
  {
    image:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-storage-select-202209?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1660753619946',
    title: 'iPhone 14 Series',
    offer: 'Up to 10% off Voucher',
  },
  // You can add more slides here
];


const HeroSlider = (props) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // ✅ properly cleared
  }, [slides.length]); // include slides.length if it can change

  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full relative  overflow-hidden bg-black">
      <div className="w-full flex transition-all duration-500">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full  flex-shrink-0 transition-opacity duration-700 ${index === current ? 'opacity-100' : 'opacity-0 absolute'
              }`}
          >
            <img
              loading='lazy'
              src={props.img}
              alt="Slide"
              className="w-full  object-cover h-[380px]"
            />
            <div className="absolute top-10 left-10 text-white">
              <h3 className="text-white text-sm mb-2">{props.title}</h3>
              <h1 className="text-4xl font-bold mb-4">Upto {props.voucher} Off Voucher</h1>
              <button className="border-b text-sm hover:text-gray-400">Shop Now →</button>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === current ? 'bg-red-500' : 'bg-gray-300'
              }`}
            onClick={() => setCurrent(i)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
