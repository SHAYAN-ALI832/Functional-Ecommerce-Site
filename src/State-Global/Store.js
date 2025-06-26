// src/state/global/store.js
import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from '../State-Global/Slices/Productsslice';
import CartSlice from '../State-Global/Slices/cartslice';
import WishlistSlice from '../State-Global/Slices/Wishlist';
import Sliderproducts from '../State-Global/Slices/Sliderproducts';

const store = configureStore({
  reducer: {
    Products: ProductsSlice,
    Cart: CartSlice,
    Wishlist: WishlistSlice,
    Sliderproduct: Sliderproducts,
  },
});

export default store;
