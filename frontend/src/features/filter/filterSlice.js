import { createSlice } from '@reduxjs/toolkit'

const initialState = {

category: null,
"size.small": null,
"size.medium": null,
"size.large": null,
"price[lte]": null,
"price[gte]": null,
limit: null,
page: null,
sort: null

}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: 
    {

        setCategory: (state, action) => {
            state.category = action.payload
        },

        setPrice: (state, action) => {
            //set lte or gte or both
        },

    }
})

export const { setCategory } = filterSlice.actions
export default filterSlice.reducer