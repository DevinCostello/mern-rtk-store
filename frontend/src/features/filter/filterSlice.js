import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    category: [],
    price: {
        gte: null,
        lte: null
    },

    size: {
        in: []
    },

    //pagination
    limit: 9,
    page: 1
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:
    {
        setCategory: (state, action) => {

            if (state.category.includes(action.payload)) {
                state.category = state.category.filter(val => val !== action.payload)
            } else {
                state.category.push(action.payload)
            }

            state.page = 1
        },

        setPrice: (state, { payload }) => {

            if (state.price.gte !== payload.filter.gte && state.price.lte !== payload.filter.lte) {
                state.price.gte = payload.filter.gte
                state.price.lte = payload.filter.lte
            } else {
                state.price.gte = null
                state.price.lte = null
            }

            state.page = 1

        },

        setSize: (state, action) => {

            if (state.size.in.includes(action.payload)) {
                state.size.in = state.size.in.filter(val => val !== action.payload)
            } else {
                state.size.in.push(action.payload)
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
        resetState: () => {
            return initialState
           
        }

    }
})

export const { setCategory, setPrice, setSize, setPage, setLimit, resetState } = filterSlice.actions
export default filterSlice.reducer