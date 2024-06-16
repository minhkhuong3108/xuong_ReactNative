import { createSlice } from "@reduxjs/toolkit"
import { deleteAllOrder } from "../API/Order";

const DeleteOrderSlice = createSlice({
    name:'deleteAllOrder',
    initialState:{
        data:{}
    },
    extraReducers:(builder)=>{
        builder.addCase(deleteAllOrder.pending, (state,action)=>{
            console.log('loading');
        })
        builder.addCase(deleteAllOrder.fulfilled, (state,action)=>{
            state.data =action.payload
            console.log('Success');
        })
        builder.addCase(deleteAllOrder.rejected, (state,action)=>{
            console.log('Reject');
        })
    }
})

export default DeleteOrderSlice.reducer