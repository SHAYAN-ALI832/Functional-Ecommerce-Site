import React, { useState } from 'react';
import Phones from '../Contents/Phones';
import Computers from '../Contents/Computers';
import Smartwatches from '../Contents/Smartwatch';
import Cameras from '../Contents/Camera';
import Headphones from '../Contents/Headphones';
import Gaming from '../Contents/Gaming';

import {
  MdPhoneAndroid,
  MdComputer,
  MdWatch,
  MdCameraAlt,
  MdHeadphones,
  MdSportsEsports,
} from 'react-icons/md';

const Links = [
  { icon: <MdPhoneAndroid size={40} />, label: 'Phones', content: <Phones /> },
  { icon: <MdComputer size={40} />, label: 'Computers', content: <Computers /> },
  { icon: <MdWatch size={40} />, label: 'Smartwatch', content: <Smartwatches /> },
  { icon: <MdCameraAlt size={40} />, label: 'Camera', content: <Cameras /> },
  { icon: <MdHeadphones size={40} />, label: 'Headphones', content: <Headphones /> },
  { icon: <MdSportsEsports size={40} />, label: 'Gaming', content: <Gaming /> },
];

function Home() {
  const [activesidebar, setActivesidebar] = useState(0);

  return (
    <div className="min-h-[500px] w-full bg-white px-4 md:px-8 py-6">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-6 h-10 bg-red-600 rounded-sm"></div>
        <h1 className="font-semibold text-2xl md:text-3xl">Browse By Category</h1>
      </div>

      {/* Icon Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {Links.map((link, index) => (
          <button
            key={index}
            onClick={() => setActivesidebar(index)}
            className={`w-full text-center border rounded-md p-4 transition-all duration-200 flex flex-col items-center justify-center ${
              activesidebar === index
                ? 'bg-red-600 text-white scale-105 font-semibold shadow-md'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {link.icon}
            <span className="mt-2 text-sm font-semibold">{link.label}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="w-full mt-10 text-gray-700 text-base sm:text-lg font-medium">
        {Links[activesidebar].content}
      </div>
    </div>
  );
}

export default Home;
