import { configureStore } from "@reduxjs/toolkit";
import balanceSlice from './balanceSlice';

const store = configureStore({
    reducer: balanceSlice.reducer
});

export default store;