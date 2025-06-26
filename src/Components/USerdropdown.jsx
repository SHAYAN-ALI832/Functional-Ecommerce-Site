import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaBoxOpen, FaTimesCircle, FaStar, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HandleRemoveCartsItems } from '../State-Global/Slices/Wishlist';
import { HandleWishlistitems } from '../State-Global/Slices/Wishlist';

const UserDropdown = () => {
  let User = localStorage.getItem("user");
 
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    HandleRemoveCartsItems();
    HandleWishlistitems();
    localStorage.removeItem("user");
    window.location.reload();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${User ? 'block' : 'hidden'}`} ref={dropdownRef}>
      {/* Profile Icon */}
      <button
        onClick={handleToggle}
        className="bg-red-600 text-white p-2 rounded-full text-xl hover:bg-red-700 transition-all"
      >
        <FaUserCircle />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute bg-slate-500 right-0 mt-2 w-56  text-white rounded shadow-lg py-3 z-50">
          <ul className="space-y-2 text-sm font-medium px-4">
            <Link onClick={handleToggle} to="/myaccountmanagment" className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
              <FaUser /> Manage My Account
            </Link>
           
           
            <li
              onClick={handleLogout}
              className="flex items-center gap-2 hover:text-gray-300 cursor-pointer"
            >
              <FaSignOutAlt /> Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;