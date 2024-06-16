// ConfigStore cho redux
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import Reducer
import getProductReducer from "./GetProductSlice";
import getProductDetailReducer from "./GetProductDetailSlice";
import searchProductlReducer from "./SearchProductSlice"
import registerReducer from "./RegisterSlice"
import loginReducer from "./LoginSlice"
import addOrderReducer from "./AddToOrderSlice"
import getOrderReducer from "./GetOrderSlice"
import addCartReducer from "./AddToCartSlice"
import getCartReducer from "./GetCartSlice"

// Khai báo rootReducer
const rootReducer = combineReducers({
    getProduct: getProductReducer,
    getProductDetail: getProductDetailReducer,
    searchProduct: searchProductlReducer,
    register: registerReducer,
    login: loginReducer,
    addOrder: addOrderReducer,
    getOrder: getOrderReducer,
    addCart: addCartReducer,
    getCart: getCartReducer,
})

// Khai báo store
const store = configureStore({
    reducer: rootReducer
})

export default store