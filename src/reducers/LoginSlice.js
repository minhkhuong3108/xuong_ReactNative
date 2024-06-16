import { createSlice } from "@reduxjs/toolkit";
import { login } from "../API/UserAPI";

const initialState = {
    loginData: null,
    cart: [],
    products: [],
};

const appSlice = createSlice({
    name: "app",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            console.log('loading.....');
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loginData = action.payload
            console.log('success.....');
            console.log(state.user);
        })
        builder.addCase(login.rejected, (state, action) => {
            console.log('...rejected....');
        })

    }
});

export const { addItemToCart, logout } = appSlice.actions;
export default appSlice.reducer;