import { createSlice } from "@reduxjs/toolkit"
import { getProduct } from "../API/ProductAPI"

const GetProductSlice = createSlice({
    name: 'getProducts',
    initialState: {
        data: []
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state, action) => {
            console.log('loading');
        })
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.data = action.payload
            console.log('Success');
        })
        builder.addCase(getProduct.rejected, (state, action) => {
            console.log('Rejected');
        })
    }
})

export default GetProductSlice.reducer