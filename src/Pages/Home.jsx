import React, { useState } from 'react';
import Freshsales from '../Components/Freshsales';
import Thismonthsales from '../Components/Thismonthsales';
import Browsebycategory from './../Components/Browsebycategory';
import MusicBanner from '../Components/Musicbaner';
import NewArrival from '../Components/NewArrival';
import Contactus from '../Components/Contactus';

import Womenfashion from '../Sliders.jsx/Womenfashion';
import Mensfashion from '../Sliders.jsx/Mensfashion';
import Electronics from '../Sliders.jsx/Electronics';
import Homeandlifestyle from '../Sliders.jsx/Homeaandlifestyle';
import Medicine from '../Sliders.jsx/Medicine';
import SportsandOutdoor from './Sportsoutdoor';

const Links = [
  { link: "Women's Fashion", Content: <Womenfashion /> },
  { link: "Men's Fashion", Content: <Mensfashion /> },
  { link: "Electronics", Content: <Electronics /> },
  { link: "Home & Lifestyle", Content: <Homeandlifestyle /> },
  { link: "Medicine", Content: <Medicine /> },
  { link: "Sports & Outdoor", Content: <SportsandOutdoor /> },
];

function Home() {
  const [activesidebar, setActivesidebar] = useState(0);

  return (
    <>
      {/* Responsive Sidebar + Content */}
      <div className="flex flex-col md:flex-row w-full bg-white min-h-[500px]">
        
        {/* Sidebar - Desktop */}
        <div className="hidden md:block md:w-1/4 px-6 py-6 space-y-6 border-r border-gray-200">
          {Links.map((link, index) => (
            <button
              key={index}
              onClick={() => setActivesidebar(index)}
              className={`w-full text-left font-semibold text-base transition-all duration-200 ${
                activesidebar === index
                  ? 'text-blue-600'
                  : 'text-gray-800 hover:text-pink-500'
              }`}
            >
              {link.link}
            </button>
          ))}
        </div>

        {/* Sidebar - Mobile Dropdown */}
        <div className="block md:hidden w-full p-4 border-b border-gray-200">
          <select
            value={activesidebar}
            onChange={(e) => setActivesidebar(parseInt(e.target.value))}
            className="w-full border rounded px-3 py-2 text-gray-700"
          >
            {Links.map((link, index) => (
              <option key={index} value={index}>
                {link.link}
              </option>
            ))}
          </select>
        </div>

        {/* Slider Content */}
        <div className="w-full md:w-3/4 p-4 md:p-8">
          {Links[activesidebar].Content}
        </div>
      </div>

      {/* Other Sections */}
      <Freshsales />
      <Thismonthsales />
      <Browsebycategory />
      <MusicBanner />
      <NewArrival />
      <Contactus />
    </>
  );
}

export default Home;
