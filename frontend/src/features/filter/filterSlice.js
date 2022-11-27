import { createSlice } from '@reduxjs/toolkit'

const initialState = {

category: [],
price: {
    gte: null,
    lte: null
},
size: [],

//pagination
limit: 9,
page: 1,
sort: null

}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: 
    {
        setCategory: (state, action) => {
           
            if(state.category.includes(action.payload)) {
                state.category = state.category.filter(val => val !== action.payload)            
            } else {
                state.category.push(action.payload)                
            }

            state.page = 1
        },

        setPrice: (state, { payload }) => {
        if(state.price.gte !== payload.filter.gte && state.price.lte  !== payload.filter.lte) {
            state.price.gte = payload.filter.gte
            state.price.lte = payload.filter.lte
        } else {
            state.price.gte = null
            state.price.lte = null
        }

        state.page = 1
            

        },

        setSize: (state, action) => {
            if(state.size.includes(action.payload)) {
                state.size = state.size.filter(val => val !== action.payload)            
            } else {
                state.size.push(action.payload)                
            }

            state.page = 1


        },
        //pagination
        setPage: (state, action) => {
            state.page = action.payload
        },
        setLimit: (state, action) => {
            state.limit = action.payload
        },
     
    }
})

export const { setCategory, setPrice, setSize, setPage } = filterSlice.actions
export default filterSlice.reducer