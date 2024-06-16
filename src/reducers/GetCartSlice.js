import { createSlice } from "@reduxjs/toolkit"
import { getCarts } from "../API/CartAPI";

const GetCartSlice = createSlice({
    name: 'getCart',
    initialState: {
        data: []
    },
    extraReducers: (builder) => {
        builder.addCase(getCarts.pending, (state, action) => {
            console.log('loading');
        })
        builder.addCase(getCarts.fulfilled, (state, action) => {
            state.data = action.payload
            console.log('Success');
        })
        builder.addCase(getCarts.rejected, (state, action) => {
            console.log('Rejected');
        })
    }
})

export default GetCartSlice.reducer