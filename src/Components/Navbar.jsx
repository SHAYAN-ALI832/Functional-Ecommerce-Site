import React, { useState, useEffect } from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import USerdropdown from "./USerdropdown";

const baseLinks = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "Sign Up", path: "/signup" },
];

const Navbar = () => {
  const wishlistLength = useSelector((state) => state.Wishlist.Wishlists);
  const Cartsitems = useSelector((state) => state.Cart.Cartsitems);
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navLinks, setNavLinks] = useState(baseLinks);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email) {
      setNavLinks(baseLinks.filter((link) => link.name !== "Sign Up"));
    } else {
      setNavLinks(baseLinks);
    }
  }, [pathname]);

  return (
    <nav className="border-b border-gray-300 px-4 sm:px-8 py-4 w-full shadow-sm bg-white z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">Exclusive</Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-md font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`pb-0.5 hover:text-gray-600 ${
                pathname === link.path
                  ? "border-b-2 border-black"
                  : "text-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          {/* <div className="hidden sm:flex items-center bg-gray-100 px-3 py-1.5 rounded">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-sm w-40"
            />
            <FiSearch size={20} className="text-gray-600 ml-2" />
          </div> */}

          {/* Wishlist Icon */}
          <Link to="/wishlistitems" className="relative flex items-center">
            <FiHeart size={20} className="cursor-pointer text-gray-800" />
            {Array.isArray(wishlistLength) && wishlistLength.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                {wishlistLength.length}
              </span>
            )}
          </Link>

          {/* Cart Icon */}
          <Link to="/cartsitems" className="relative flex items-center">
            <FiShoppingCart size={24} className="cursor-pointer text-gray-800" />
            {Array.isArray(Cartsitems) && Cartsitems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                {Cartsitems.length}
              </span>
            )}
          </Link>

          {/* User Dropdown */}
          <USerdropdown />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`md:hidden fixed top-16 right-0 h-full w-56 bg-gray-300 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="p-6 space-y-6 text-md font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block ${pathname === link.path ? "text-gray-800" : "text-black"}`}
            >
              {link.name}
            </Link>
          ))}
        </ul>

        {/* Mobile Wishlist & Cart Icons */}
        {/* <div className="flex justify-around p-4 border-t border-white text-white">
          <Link to="/wishlistitems" className="relative">
            <FiHeart size={22} />
            {Array.isArray(wishlistLength) && wishlistLength.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                {wishlistLength.length}
              </span>
            )}
          </Link>

          <Link to="/cartsitems" className="relative">
            <FiShoppingCart size={22} />
            {Array.isArray(Cartsitems) && Cartsitems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                {Cartsitems.length}
              </span>
            )}
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
