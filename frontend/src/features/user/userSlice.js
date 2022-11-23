import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {

    user: user ? user : null,

}

const userSlice = createSlice({
    name: "user",
    initialState,
   
})

export default userSlice.reducer;
