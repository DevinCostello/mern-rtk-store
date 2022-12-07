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

    ClearUpdateOptions: (state, action) => {
      //doesnt work, why?
      state.UpdateOptions = { id: null, quantity: null }
      state.CartDuplicate = null
      state.UpdateOptions.quantity = null
    },

    calculateTotals: (state) => {

      if (state.CartItems !== "") {
        const SumData = state.SummaryData
        const pricesInCents = state.CartItems.map((item) => (item.price * item.quantity) * 100)
        console.log(pricesInCents);
        
        SumData.ProductCost = parseInt(pricesInCents.reduce((a, b) => a + b, 0))
        SumData.Tax = parseInt((SumData.ProductCost * 0.15))
        SumData.Delivery = 9.99
        SumData.TotalCost = SumData.ProductCost + SumData.Tax + SumData.Delivery

      }
    }




  },
});

export const { setId, setCartQuantity, setCartDuplicate, setCartItems, ClearUpdateOptions, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
