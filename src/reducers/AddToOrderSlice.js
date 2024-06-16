import { createSlice } from "@reduxjs/toolkit"
import { addToOrder } from "../API/Order";


const AddToOrderSlice = createSlice({
    name: 'addToOrder',
    initialState: {
        data: []
    },
    extraReducers: (builder) => {
        builder.addCase(addToOrder.pending, (state, action) => {
            console.log('...loading.....');
        })
        builder.addCase(addToOrder.fulfilled, (state, action) => {
            state.data = action.payload
            console.log('...Success.....');

        })
        builder.addCase(addToOrder.rejected, (state, action) => {
            console.log('...Rejected.....');
        })
    }
})

export default AddToOrderSlice.reducer