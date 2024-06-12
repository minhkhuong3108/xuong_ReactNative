// ConfigStore cho redux
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import Reducer
import getProductReducer from "./GetProductSlice";

// Khai báo rootReducer
const rootReducer = combineReducers({
    getProduct: getProductReducer,
})

// Khai báo store
const store = configureStore({
    reducer: rootReducer
})

export default store