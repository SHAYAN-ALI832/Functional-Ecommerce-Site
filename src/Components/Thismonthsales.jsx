import React from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Thismonthsales() {
  const thisMonthSales = useSelector(
    (state) => state.Products.categories.Thismonthsales.products
  );

  return (
    <div className="px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 px-4 sm:px-6">
        {/* Left Side (Title) */}
        <div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-10 bg-red-600 rounded-sm"></div>
            <h1 className="text-2xl sm:text-3xl font-semibold">This Month</h1>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-2">Best Selling Products</h2>
        </div>

        {/* Right Side (Button) */}
        <Link
          to="/Thismonthsales"
          className="self-start md:self-auto bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
        >
          View All
        </Link>
      </div>


      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {thisMonthSales.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-sm p-2 shadow-sm border hover:shadow-lg transition  relative"
          >
            {/* Heart and Eye Icons */}


            {/* Product Image */}
            <div className="flex justify-center items-center h-52 mb-4  rounded">
              <img src={product.image} alt={product.title} loading='lazy' className='object-cover w-full h-full rounded-sm' />
            </div>

            {/* Title */}

            <h3 className="font-semibold text-base mb-1">{product.title}</h3>

            {/* Price */}
            <div className="flex items-center gap-2 text-sm mb-2">
              <span className="text-red-600 font-bold">${product.price}</span>
              <span className="line-through text-gray-400">${(product.price * 1.4).toFixed(0)}</span>
            </div>

            {/* Stars + Reviews */}
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
              <span className="text-gray-400 text-xs ml-1">(35)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Thismonthsales;
