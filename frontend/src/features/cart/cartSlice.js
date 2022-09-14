import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  //for updating items
  CartOptions: {
    id: null,
    quantity: null
  },

  CartDuplicate: null,
  
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
    }

  },
});

export const { setId, setCartQuantity, setCartDuplicate } = cartSlice.actions;
export default cartSlice.reducer;
