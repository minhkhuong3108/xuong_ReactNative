import { createSlice } from "@reduxjs/toolkit"
import { register } from "../API/UserAPI"


const initialState = {
    registerData: null
}

const RegisterSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state, action) => {
            console.log('loading.....');
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.registerData = action.payload
            console.log('Success.....');
        })
        builder.addCase(register.rejected, (state, action) => {
            console.log('Rejected.......');
        })
    }
})

export default RegisterSlice.reducer