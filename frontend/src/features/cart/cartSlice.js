import { createSlice } from "@reduxjs/toolkit";
import currency from 'currency.js'

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

    ClearUpdateOptions: (state, action) => {
      //doesnt work, why?
      state.UpdateOptions = { id: null, quantity: null }
      state.CartDuplicate = null
      state.UpdateOptions.quantity = null
    },

    calculateTotals: (state) => {

      if (state.CartItems !== "") {
        const SumData = state.SummaryData

        const prices = state.CartItems.map((item) => (currency(item.price).multiply(item.quantity)).value)
        SumData.ProductCost = prices.reduce((a, b) => currency(a).add(b).value, 0)
        SumData.Tax = currency(SumData.ProductCost).multiply(0.15).value
        SumData.Delivery = 9.99

        SumData.TotalCost = currency(SumData.ProductCost).add(SumData.Tax).add(SumData.Delivery).value
      }
    }




  },
});

export const { setId, setCartQuantity, setCartDuplicate, setCartItems, ClearUpdateOptions, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
