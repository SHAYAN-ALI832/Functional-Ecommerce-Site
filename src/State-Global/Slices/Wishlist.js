import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: {
    name: null,
  },
  Wishlists:[] // Example initial cart item
};


const HomeSlice = createSlice({
  name: 'Wishlist',
  initialState,
 reducers: {
 HandleWishlistitems: (state, action) => {
  const exists = state.Wishlists.find(item => item.id === action.payload.id);
  if (!exists) {
    state.Wishlists.push(action.payload);
  }
},
HandleRemoveCartsItems:(state,action)=>{
  state.Wishlists = state.Wishlists.filter(item => item.id !== action.payload.id);
}
 }
});

export const { HandleWishlistitems, HandleRemoveCartsItems } = HomeSlice.actions;
export default HomeSlice.reducer;
