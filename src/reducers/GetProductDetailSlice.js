import { createSlice } from "@reduxjs/toolkit"
import { getProductDetail } from "../API/ProductAPI";

const GetProductDetailSlice = createSlice({
    name: 'getProductDetail',
    initialState: {
        data: {}
    },
    extraReducers: (builder) => {
        builder.addCase(getProductDetail.pending, (state, action) => {
            console.log('loading');
        })
        builder.addCase(getProductDetail.fulfilled, (state, action) => {
            state.data = action.payload
            console.log('Success');
        })
        builder.addCase(getProductDetail.rejected, (state, action) => {
            console.log('Rejected');
        })
    }
})

export default GetProductDetailSlice.reducer