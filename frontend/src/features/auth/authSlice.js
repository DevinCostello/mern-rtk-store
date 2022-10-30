import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    name: null,
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, { payload }) => {
            state.email = payload.email
            state.name = payload.name
            state.user = payload._id
            state.token = payload.token
        }
    }
})

export default authSlice.reducer
export const { setCredentials } = authSlice.actions