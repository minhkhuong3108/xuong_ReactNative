import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helpers/AxiosInstance";

export const addToOrder = createAsyncThunk(
    "addOrder", async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance().post('/orders', data)
            if (response.status == true) {
                return response.data
            } else {
                return rejectWithValue(error)
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue(error)
        }
    }
)

export const getOrder = createAsyncThunk(
    'getOrder', async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance().get(`/orders/${data}`)
            if (response.status == true) {
                return response.data
            } else {
                return rejectWithValue(error)
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue(error)
        }
    }
)

export const updateOrder = createAsyncThunk(
    'updateOrder', async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance().post(`/orders/update`, data)
            console.log(data);
            if (response.status == true) {
                return response.data
            } else {
                rejectWithValue(error)
                console.log(data);
            }
        } catch (error) {
            console.log(data);
            return rejectWithValue(error)
        }
    }
)

export const deleteOrder = createAsyncThunk(
    'deleteOrder', async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance().post(`/orders/${data}/delete`)
            if (response.status == true) {
                return response.data
            } else {
                rejectWithValue(error)
            }
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteAllOrder = createAsyncThunk(
    'deleteOrder', async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance().post(`/orders/${data}/deleteAll`)
            if (response.status == true) {
                return response.data
            } else {
                rejectWithValue(error)
            }
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)