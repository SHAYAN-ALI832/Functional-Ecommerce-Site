import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: {
    name: null,
  },
  Cartsitems:[] // Example initial cart item
};


const HomeSlice = createSlice({
  name: 'cart',
  initialState,
 reducers: {
 Handlecartsitems: (state, action) => {
  const exists = state.Cartsitems.find(item => item.id === action.payload.id);
  if (!exists) {
    state.Cartsitems.push(action.payload);
  }
},
HandleRemoveItems:(state,action)=>{
  state.Cartsitems = state.Cartsitems.filter(item => item.id !== action.payload.id);
}
 }
});

export const { Handlecartsitems, HandleRemoveItems } = HomeSlice.actions;
export default HomeSlice.reducer;
