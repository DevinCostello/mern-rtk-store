import { createSlice } from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('user'))


const initialState = {

    CreateOptions: {
        user: user ? user : null,
        name: null,
        category: null,
        product_id: null,
        price: null,
        color: null,
        size: null,
        quantity: null,
    },

}

const productSlice = createSlice({
    name: 'product',
    initialState,

    reducers: {

            setFixedVariables: (state,{ payload }) => {
                state.CreateOptions.name = payload.name
                state.CreateOptions.price = payload.price
                state.CreateOptions.category = payload.category
                state.CreateOptions.product_id = payload.product_id
            },

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

                user: user ? user : null,
                name: null,
                category: null,
                price: null,
                product_id: null,
                color: null,
                size: null,
                quantity: null
            }
        }

    }
})

export const {setFixedVariables, setColor, setQuantity, setProductId, setSize, setName, setPrice, setCategory, clearCart } = productSlice.actions
export default productSlice.reducer