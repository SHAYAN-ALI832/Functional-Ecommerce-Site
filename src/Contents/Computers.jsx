import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Timer from '../Components/Timer';
import { HandleWishlistitems } from '../State-Global/Slices/Wishlist';
import { AiOutlineHeart } from 'react-icons/ai';
import { VscArrowRight, VscArrowLeft } from 'react-icons/vsc';

function Computers() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const wishlistItems = useSelector((state) => state.Wishlist.Wishlists);
  const computers = useSelector(
    (state) => state.Products.categories.Computers.products
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
      {/* 🔔 Alert if not logged in */}
      {showAlert && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white text-sm p-3 text-center flex justify-between items-center px-10">

          <div>
            You are not logged in. Please{' '}
            <Link to="/login" className="underline font-semibold">Log In</Link> or {" "}
            <Link to="/signup" className="underline font-semibold">Sign Up</Link> to add items to your wishlist.
          </div>
          <button onClick={() => setShowAlert(false)} className="ml-4 font-bold text-white">✕</button>
        </div>
      )}

      {/* Header */}
      {/* <div className="flex items-center gap-4 ml-6">
        <div className="w-6 h-10 rounded-sm bg-red-600"></div>
        <h1 className="text-3xl font-semibold">Today’s</h1>
      </div> */}

      {/* Title + Timer + Arrows */}
      <div className="flex items-center gap-4 ml-6 mt-3 pr-6">
        {/* <h1 className="text-4xl font-semibold">Fresh Sales</h1> */}
        {/* <Timer /> */}
        <div className="ml-auto hidden md:flex items-center gap-4">
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

      {/* Product Scroll Area */}
      <div className="relative px-6 mt-6">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-2"
        >
          {computers.map((product) => {
            const isWishlisted = wishlistItems.some((item) => item.id === product.id);

            return (
              <div
                key={product.id}
                className="min-w-[310px] max-w-[250px] flex-shrink-0 border rounded-sm shadow-md overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-52 group overflow-hidden">
                  <img
                  loading='lazy'
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Discount */}
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.Discount}% OFF
                  </div>

                  {/* Wishlist Icon */}
                  <div
                    onClick={() => handleAddToWishlist(product)}
                    className="absolute top-2 right-2 flex flex-col gap-2"
                  >
                    <AiOutlineHeart
                      size={30}
                      className={`text-white p-1 rounded-full cursor-pointer transition-colors duration-200 ${isWishlisted ? 'bg-pink-600' : 'bg-black/40 hover:bg-black/70'
                        }`}
                    />
                  </div>

                  {/* Add to Cart */}
                  <div className="absolute hidden bottom-[-40px] left-0 right-0 bg-black text-white text-center py-1 transition-all duration-300 group-hover:block group-hover:bottom-0">
                    <button
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="px-4 py-1 text-sm font-medium"
                    >
                    view Product
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold truncate">{product.title}</h2>
                  <p className="text-sm text-gray-600 mb-1">${product.price.toFixed(2)}</p>
                  <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
                   <button onClick={() => navigate(`/product/${product.id}`)} className='bg-red-600 text-sm mt-2 text-white px-2 py-1 rounded-sm'>Add To Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Show All Button */}
      {/* <div className="flex justify-center">
        <Link
          to="/fresh-sales"
          className="inline-block mt-6 px-6 py-3 text-white text-md font-medium bg-red-600 rounded-sm shadow-md hover:scale-105 transition-transform duration-300"
        >
          Show All Products
        </Link>
      </div> */}

      {/* Divider */}
      {/* <div className="h-[1px] bg-slate-300 mt-6 mb-2 w-[90%] mx-auto" /> */}
    </>
  );
}

export default Computers;
