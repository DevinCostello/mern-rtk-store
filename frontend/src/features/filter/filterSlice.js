import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  category: null,

  price: {
    gte: null,
    lte: null
  },



};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
   setCategory: (state, action) => {
    const category = action.payload
    state.category = category
  },
  setPrice: (state, {payload} ) => {
    const lower = payload.price.gte
    const upper = payload.price.lte
    state.price.gte = lower.toString()
    state.price.lte = upper.toString()
  },

  },
});

export const {setCategory, setPrice } = filterSlice.actions
export default filterSlice.reducer;
