import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: {
    name: null,
  },
  Likeditems:[]
};


const HomeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    HanldeLikeitems: (state, action) => {
      state.user.name = action.payload.name;
    },
   
  },
});

export const { HanldeLikeitems } = HomeSlice.actions;
export default HomeSlice.reducer;
