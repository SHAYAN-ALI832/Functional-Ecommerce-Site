import React from 'react'

function Sidebar() {
  return (
    <div className="w-full md:w-1/4 space-y-6 text-sm font-medium">
          <div>
            <p className="mb-2 text-black">Manage My Account</p>
            <ul className="space-y-1">
              <li className="text-red-600">My Profile</li>
              <li className="text-gray-500 cursor-pointer hover:text-black">Address Book</li>
              <li className="text-gray-500 cursor-pointer hover:text-black">My Payment Options</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 text-black">My Wishlist</p>
          </div>
        </div>
  )
}

export default Sidebar
