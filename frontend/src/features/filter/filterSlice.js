import { createSlice } from '@reduxjs/toolkit'

const initialState = {

category: null,
//would this work as a nested object?
"size.small": null,
"size.medium": null,
"size.large": null,

"price[lte]": null,
"price[gte]": null,

//pagination
limit: 12,
page: 1,
sort: null
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: 
    {
        setCategory: (state, action) => {
            if(state.category === action.payload) {
                state.category = null
            } else {
            state.category = action.payload
            }
            state.page = 1
        },
        setPrice: (state, { payload }) => {
        if(state['price[gte]'] !== payload.price.gte && state['price[lte]']  !== payload.price.lte) {
            state['price[gte]'] = payload.price.gte
            state['price[lte]'] = payload.price.lte
        } else {
            state['price[gte]'] = null
            state['price[lte]'] = null
        }

        state.page = 1
            

        },
        setSize: (state, action) => {
            const size = action.payload
            if(state[`size.${size}`] === true) { state[`size.${size}`] = false  } 
            else {  state[`size.${size}`] = true    }

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