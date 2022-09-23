import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  CartOptions: {
    id: null,
    quantity: null
  },

  CartItems: '',
  CartDuplicate: null,
  TotalCost: null,


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
    setCartDuplicate: (state, action) => {
      state.CartDuplicate = action.payload
    },

    setCartItems: (state, action) => {
      state.CartItems = action.payload
    },

    calculateTotals: (state) => {

      if (state.CartItems !== "") {
        const prices = state.CartItems.map((item) => item.price * item.quantity)
        state.TotalCost = prices.reduce((a, b) => a + b, 0).toFixed(2)
      }
    }




  },
});

export const { setId, setCartQuantity, setCartDuplicate, setCartItems, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
