import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import productReducer from './features/product/productSlice'
import filterReducer from './features/filter/filterSlice'
import modalReducer from './features/modal/modalSlice'
import { apiSlice } from './features/api/apiSlice'



    export const store = configureStore({

reducer: {
    cart: cartReducer,
    filter: filterReducer,
    product: productReducer,
    modal: modalReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
},

middleware: getDefaultMiddleware =>
getDefaultMiddleware().concat(apiSlice.middleware)

})

