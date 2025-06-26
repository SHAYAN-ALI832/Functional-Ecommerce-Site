import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AccountPage from './Profile';
import Profile from './Profile';
import AddressBook from './Addressbook';
import Wishlist from './Mywishlist';
// import Payment if you have it

const AllRoutes = () => {
  return (
    <Routes>
     <Route path="/account" element={<AccountPage />}>
  <Route path="profile" element={<Profile />} />
  <Route path="address" element={<AddressBook />} />
  <Route path="wishlist" element={<Wishlist />} />
</Route>

    </Routes>
  );
};

export default AllRoutes;
