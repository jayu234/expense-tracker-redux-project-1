import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from './balanceSlice';
import authReducer from './authSlice';
const store = configureStore({
    reducer: {
        balance: balanceReducer,
        auth: authReducer
    }
});

export default store;