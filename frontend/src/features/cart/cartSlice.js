import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  UpdateOptions: {
    id: null,
    quantity: null
  },

  SummaryData: {
    ProductCost: null,
    Tax: null,
    Delivery: null,
    TotalCost: null
  },

  CartItems: '',
  CartDuplicate: null,
  


};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setId: (state, action) => {
      const id = action.payload;
      state.UpdateOptions.id = id;
    },
    setCartQuantity: (state, action) => {
      const quantity = action.payload;
      state.UpdateOptions.quantity = quantity;
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
        const SumData = state.SummaryData

        SumData.ProductCost = parseInt(prices.reduce((a, b) => a + b, 0).toFixed(2))
        SumData.Tax = parseInt((SumData.ProductCost * 0.15).toFixed(2))
        SumData.Delivery = 9.99
        SumData.TotalCost = SumData.ProductCost + SumData.Tax + SumData.Delivery

      }
    }




  },
});

export const { setId, setCartQuantity, setCartDuplicate, setCartItems, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
