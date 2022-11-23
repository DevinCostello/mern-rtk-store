import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    content: null,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {

        setContent: (state, action) => {
            state.content = action.payload
        },
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },

    },
});

export const {openModal, closeModal, setContent} = modalSlice.actions;
export default modalSlice.reducer;