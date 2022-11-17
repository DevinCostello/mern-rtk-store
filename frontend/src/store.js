import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import filterReducer from './features/filter/filterSlice'
import productReducer from './features/product/productSlice'
import modalReducer from './features/modal/modalSlice'
import { apiSlice } from './features/api/apiSlice'
import userReducer from './features/user/userSlice'



    export const store = configureStore({

reducer: {
    cart: cartReducer,
    user: userReducer,
    product: productReducer,
    modal: modalReducer,
    filter: filterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
},

middleware: getDefaultMiddleware =>
getDefaultMiddleware().concat(apiSlice.middleware)

})

