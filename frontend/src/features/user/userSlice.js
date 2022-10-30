import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    user: {
        email: null,
        password: null,   
    }, 

    loggedIn: false,
    loggedInUser: null

}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        setEmail: (state, action) => {
            state.user.email = action.payload
        },

        setPassword: (state, action) => {
            state.user.password = action.payload
        }
    }
})

export default userSlice.reducer;
export const { setEmail, setPassword } = userSlice.actions