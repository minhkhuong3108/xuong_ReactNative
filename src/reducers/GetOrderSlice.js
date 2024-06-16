import { createSlice } from "@reduxjs/toolkit"
import { getOrder } from "../API/Order"

const initialState = {
    getOrderData: [],
    getOrderStatus: ""
}

const GetOrderSlice = createSlice({
    name: 'getOrder',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getOrder.pending, (state, action) => {
            console.log('....loading......');
            // state.getOrderStatus = 'Loading'
        })
        builder.addCase(getOrder.fulfilled, (state, action) => {
            state.getOrderData = action.payload
            console.log('....Success......');
            state.getOrderStatus = 'Success'
        })
        builder.addCase(getOrder.rejected, (state, action) => {
            console.log('....rejected......');
            state.getOrderStatus = 'Rejected'
        })
    }
})

export default GetOrderSlice.reducer