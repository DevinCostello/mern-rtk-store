import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  CartOptions: {
    id: null,
    quantity: null
  },

 CartDuplicate: null,

 cartItems: [],
  
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
      state.cartItems = action.payload
    },

    // calculateTotals: (state) => {
    //   let amount = 0;
    //   let total = 0;
    //   state.cartItems.forEach((item) => {
    //     amount += item.amount;
    //     total += item.amount * item.price;
    //   });
    //   state.amount = amount;
    //   state.total = total;
    // },




  },
});

export const { setId, setCartQuantity, setCartDuplicate, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
