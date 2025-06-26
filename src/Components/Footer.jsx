import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';
import qrcodeimg from '../assets/Sliderimgs/qrcode.png';

function Footer() {
  return (
    <footer className="bg-black text-white px-6 pt-12 pb-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {/* Exclusive */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Exclusive</h2>
          <p className="text-sm mb-2">Subscribe</p>
          <p className="text-xs text-gray-300 mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-white rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2 text-sm text-white outline-none w-full"
            />
            <button className="bg-transparent px-3 py-2">
              <IoIosSend size={18} />
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <p className="text-sm mb-1">111 Bijoy sarani, Dhaka,</p>
          <p className="text-sm mb-1">DH 1515, Bangladesh.</p>
          <p className="text-sm mb-1 mt-2">exclusive@gmail.com</p>
          <p className="text-sm mt-1">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Account</h2>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Link</h2>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
       {/* Download App */}
<div className="min-w-[220px]">
  <h2 className="text-lg font-semibold mb-4">Download App</h2>
  <p className="text-xs text-gray-300 mb-2">Save $3 with App New User Only</p>
  
 <div className="flex items-start gap-2 mb-4">
  {/* QR Code: Square and same height as badges */}
  <img
    src={qrcodeimg}
    alt="QR"
    className="w-24 h-24 object-cover rounded-sm"
  />

  {/* Download Badges - vertical stack with matching height */}
  {/* <div className="flex flex-col justify-between h-24">
    <img
      src="https://i.ibb.co/VHnX7qM/google-play.png"
      alt="Google Play"
      className="h-11 w-32 rounded-md"
    />
    <img
      src="https://i.ibb.co/GtK6jNv/app-store.png"
      alt="App Store"
      className="h-11 w-32 rounded-md"
    />
  </div> */}
</div>


  <div className="flex gap-4 text-white text-lg flex-wrap">
    <FaFacebookF className="cursor-pointer hover:text-gray-400" />
    <FaTwitter className="cursor-pointer hover:text-gray-400" />
    <FaInstagram className="cursor-pointer hover:text-gray-400" />
    <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
  </div>
</div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-2 text-center text-gray-500 text-sm">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}

export default Footer;
