import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helpers/AxiosInstance";

export const login = createAsyncThunk(
    "user/login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance().post("/users/login", data);
            if (response.status == true) {
                return response.data;
            }
            else {
                return rejectWithValue(error);
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);
export const register = createAsyncThunk(
    "user/register",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance().post("/users/register", data)
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





