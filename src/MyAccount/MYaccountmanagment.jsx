import React, { useState } from "react";
import Profile from "./Profile";
import AddressBook from "./Addressbook";
import Wishlistitems from "./Accountwishlist";
import { HandleRemoveItems } from "../State-Global/Slices/cartslice";

const sidebarLinks = [
  { title: "My Profile", content: <Profile /> },
  { title: "Address Book", content: <AddressBook /> },
  { title: "Wishlist", content:<Wishlistitems/> },
 
];

function AccountManagement() {
  let username = JSON.parse(localStorage.getItem("user")) || {};
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <p className="ml-10 mt-5">Hello! <span className="font-semibold text-red-600">{username.name}</span></p>
    <div className="min-h-screen bg-white p-4 md:p-10">
      <div className="flex flex-col md:flex-row bg-white  rounded-sm shadow-sm overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 border-r p-4 space-y-4 bg-gray-50">
          <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
          {sidebarLinks.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition ${
                activeIndex === index
                  ? "bg-red-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="w-full md:w-3/4 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {sidebarLinks[activeIndex].title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {sidebarLinks[activeIndex].content}
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default AccountManagement;
