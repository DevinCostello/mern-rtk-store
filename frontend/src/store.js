import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import productReducer from './features/product/productSlice'
import modalReducer from './features/modal/modalSlice'
import { apiSlice } from './features/api/apiSlice'



    export const store = configureStore({

reducer: {
    cart: cartReducer,
    product: productReducer,
    modal: modalReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
},

middleware: getDefaultMiddleware =>
getDefaultMiddleware().concat(apiSlice.middleware)

})

