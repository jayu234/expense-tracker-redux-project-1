import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from './balanceSlice';
import userReducer from './userSlice';


const store = configureStore({
    reducer: {
        balance: balanceReducer,
        user: userReducer
    }
});

export default store;