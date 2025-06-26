import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Timer from './Timer';
import { HandleWishlistitems } from '../State-Global/Slices/Wishlist';
import { AiOutlineHeart } from 'react-icons/ai';
import { VscArrowRight, VscArrowLeft } from 'react-icons/vsc';

function Freshsales() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const wishlistItems = useSelector((state) => state.Wishlist.Wishlists);
  const freshSales = useSelector(
    (state) => state.Products.categories.freshsales.products
  );

  const ifuserexist = localStorage.getItem('user');

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleAddToWishlist = (product) => {
    if (ifuserexist) {
      dispatch(HandleWishlistitems(product));
    } else {
      setShowAlert(true);
    }
  };

  return (
    <>
      {/* 🔔 Alert */}
      {showAlert && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white text-sm p-3 text-center flex justify-between items-center px-10">
          <div>
            You are not logged in. Please{' '}
            <Link to="/login" className="underline font-semibold">Log In</Link> or{' '}
            <Link to="/signup" className="underline font-semibold">Sign Up</Link> to add items to your wishlist.
          </div>
          <button onClick={() => setShowAlert(false)} className="ml-4 font-bold text-white">✕</button>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-4 ml-6">
        <div className="w-6 h-10 rounded-sm bg-red-600"></div>
        <h1 className="text-3xl font-semibold">Today’s</h1>
      </div>

      {/* Title + Timer + Arrows */}
      <div className="flex items-center  ml-6 mt-3 pr-6 flex-wrap sm:flex-nowrap">
        <h1 className="text-2xl md:text-4xl font-semibold">Fresh Sales</h1>
        <div className='-ml-12 md:ml-0'>
           <Timer />
        </div>
        
        <div className="ml-auto flex items-center gap-2 mt-4 sm:mt-0">
          <button
            onClick={() => scroll('left')}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <VscArrowLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <VscArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Scrollable Product Cards */}
      <div className="relative px-4 mt-6">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
        >
          {freshSales.map((product) => {
            const isWishlisted = wishlistItems.some((item) => item.id === product.id);

            return (
              <div
                key={product.id}
                className="min-w-[80%] sm:min-w-[300px] max-w-[300px] flex-shrink-0 border rounded shadow-md bg-white"
              >
                {/* Image */}
                <div className="relative h-52 group overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Discount */}
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -30%
                  </div>

                  {/* Wishlist Icon */}
                  <div
                    onClick={() => handleAddToWishlist(product)}
                    className="absolute top-2 right-2"
                  >
                    <AiOutlineHeart
                      size={28}
                      className={`text-white p-1 rounded-full cursor-pointer transition-colors duration-200 ${
                        isWishlisted ? 'bg-pink-600' : 'bg-black/40 hover:bg-black/70'
                      }`}
                    />
                  </div>

                  {/* Add to Cart */}
                  <div className="absolute hidden bottom-[-40px] left-0 right-0 bg-black text-white text-center py-1 transition-all duration-300 group-hover:block group-hover:bottom-0">
                    <button
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="px-4 py-1 text-sm font-medium"
                    >
                      View Product
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-3">
                  <h2 className="text-md font-semibold truncate">{product.title}</h2>
                  <p className="text-sm text-gray-600 mb-1">${product.price.toFixed(2)}</p>
                  <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
                   <button onClick={() => navigate(`/product/${product.id}`)} className='bg-red-600 text-sm mt-2 text-white px-2 py-1 rounded-sm'>Add To Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Show All */}
      <div className="flex justify-center mt-8">
        <Link
          to="/fresh-sales"
          className="inline-block px-6 py-3 text-white text-md font-medium bg-red-600 rounded shadow-md hover:scale-105 transition-transform duration-300"
        >
          Show All Products
        </Link>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-slate-300 mt-6 mb-2 w-[90%] mx-auto" />
    </>
  );
}

export default Freshsales;
