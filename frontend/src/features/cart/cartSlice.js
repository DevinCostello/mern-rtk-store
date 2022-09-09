import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  //for updating items
  CartOptions: {
    id: null,
    quantity: null
  },

  
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setId: (state, action) => {
      const id = action.payload;
      state.CartOptions.id = id;
    },
    setCartQuantity: (state, action) => {
      const quantity = action.payload;
      state.CartOptions.quantity = quantity;
    },

  },
});

export const { setId, setCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;
