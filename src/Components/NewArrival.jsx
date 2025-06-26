import React from 'react';
import playstation from '../assets/ps5.jpg';
import perfume from '../assets/perfume.jpg';
import speakers from '../assets/speakers.jpg';
import womencll from '../assets/women collection.jpg'

function NewArrival() {
  return (
    <div className="px-6 py-10 bg-white">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className='w-6 rounded-sm h-10 bg-red-600'></div>
        <h1 className='font-semibold text-3xl'>Todays</h1>
      </div>
      <h1 className="text-3xl font-bold mb-8">New Arrival</h1>

      {/* Main Flex Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Big Card */}
        <div className="w-full lg:w-1/2 relative bg-black rounded-sm overflow-hidden h-[450px]">
          <img
          loading='lazy'
            src={playstation}
            alt="PlayStation 5"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute bottom-5 left-5 text-white">
            <h3 className="text-lg font-bold">PlayStation 5</h3>
            <p className="text-sm text-gray-300 mb-2">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="bg-white text-black px-4 py-1 text-sm font-medium rounded">
              Coming soon...
            </button>
          </div>
        </div>

        {/* Right: 3 Stacked Cards */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Top Card */}
          <div className="relative rounded-sm overflow-hidden bg-black h-[267px]">
            <img
              loading='lazy'
              src={womencll}
              alt="Women’s Collections"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold text-base">Women’s Collections</h3>
              <p className="text-xs text-gray-300">
                Featured woman collections that give you another vibe.
              </p>
              <button className="text-sm underline mt-1">Coming soon...</button>
            </div>
          </div>

          {/* Bottom Two Cards in Row */}
          <div className="flex gap-6">
            {/* Speakers */}
            <div className="relative rounded-sm overflow-hidden bg-black h-[160px] w-1/2">
              <img
                loading='lazy'
                src={speakers}
                alt="Speakers"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-sm">Speakers</h3>
                <p className="text-xs text-gray-300">Amazon wireless speakers</p>
                <button className="text-xs underline mt-1">Coming soon...</button>
              </div>
            </div>

            {/* Perfume */}
            <div className="relative rounded-sm overflow-hidden bg-black h-[160px] w-1/2">
              <img
                loading='lazy'
                src={perfume}
                alt="Perfume"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-sm">Perfume</h3>
                <p className="text-xs text-gray-300">GUCCI INTENSE OUD EDP</p>
                <button className="text-xs underline mt-1">Coming soon...</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
