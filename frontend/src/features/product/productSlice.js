import { createSlice } from '@reduxjs/toolkit'


const initialState = {

    CreateOptions: {
        name: null,
        category: null,
        product_id: null,
        price: null,
        color: null,
        size: null,
        quantity: 1,
    },

}

const productSlice = createSlice({
    name: 'product',
    initialState,

    reducers: {

        setName: (state, action) => {
            state.CreateOptions.name = action.payload
        },

        setPrice: (state, action) => {
            state.CreateOptions.price = action.payload
        },

        setProductId: (state, action) => {
            state.CreateOptions.product_id = action.payload
        },

        setCategory: (state, action) => {
            state.CreateOptions.category = action.payload
        },

        setColor: (state, action) => {
            state.CreateOptions.color = action.payload
        },

        setSize: (state, action) => {
            state.CreateOptions.size = action.payload
        },

        setQuantity: (state, action) => {
            state.CreateOptions.quantity = action.payload
        },

        clearCart: (state) => {

            state.CreateOptions = {

                name: null,
                category: null,
                price: null,
                product_id: null,
                color: null,
                size: null,
                quantity: 1
            }
        }

    }
})

export const { setColor, setQuantity, setProductId, setSize, setName, setPrice, setCategory, clearCart } = productSlice.actions
export default productSlice.reducer