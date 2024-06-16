import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helpers/AxiosInstance";

export const addToCart = createAsyncThunk(
    'addCart', async(data,{rejectWithValue})=>{
        try {
            const response = await AxiosInstance().post('/carts',data)
            if(response.status==true){
                return response.data
            }else{
                return rejectWithValue(error)
            }
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getCarts = createAsyncThunk(
    'getCart',async(data,{rejectWithValue})=>{
        try {
            const response = await AxiosInstance().get(`/carts?user=${data}`)
            if(response.status==true){
                return response.data
            }else{
                return rejectWithValue(error)
            }
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)