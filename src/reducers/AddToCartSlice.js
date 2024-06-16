import { createSlice } from "@reduxjs/toolkit"
import { addToCart } from "../API/CartAPI";

const  AddToCartSlice = createSlice({
    name:'addCart',
    initialState:{
        data:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(addToCart.pending,(state,action)=>{
            console.log('loading');
        })
        builder.addCase(addToCart.fulfilled,(state,action)=>{
            state.data = action.payload
            console.log('Success');
        })
        builder.addCase(addToCart.rejected,(state,action)=>{
            console.log('Rejected');
        })
    }
})

export default AddToCartSlice.reducer