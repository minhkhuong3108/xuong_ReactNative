import { createSlice } from "@reduxjs/toolkit"
import { searchProduct } from "../API/ProductAPI";

const SearchProductSlice = createSlice({
    name: 'searchProduct',
    initialState: {
        data: []
    },
    extraReducers: (builder) => {
        builder.addCase(searchProduct.pending, (state, action) => {
            console.log('loading');
        })
        builder.addCase(searchProduct.fulfilled, (state, action) => {
            state.data = action.payload
            console.log('Success');
        })
        builder.addCase(searchProduct.rejected, (state, action) => {
            console.log('Rejected');
        })
    }
})

export default SearchProductSlice.reducer