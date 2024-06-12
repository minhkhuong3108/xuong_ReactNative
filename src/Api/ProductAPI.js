import { createAsyncThunk } from "@reduxjs/toolkit"
import AxiosInstance from "../helpers/AxiosInstance"

export const getProduct = createAsyncThunk(
    'getProduct', async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance().get(`/products`)
            if (response.status == true) {
                return response.data
            } else {
                return rejectWithValue(error)
            }
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)