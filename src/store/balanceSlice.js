import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import transactionService from "../apiFeature/transactionApi";


const initialState = {
    income: 0,
    expense: 0,
    transactions: [],
    isLoading: false,
    success: false,
    isError: false,
    error: {}
}

export const createTransaction = createAsyncThunk(
    'balance/createTransaction',
    async (data, thunkAPI) => {
        try {
            return await transactionService.addTransaction(data)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
)

export const getAllTransaction = createAsyncThunk(
    'balance/getAllTransaction',
    async (_, thunkAPI) => {
        try {
            return await transactionService.getAllTransaction()
        } catch (error) {
            const err = {
                status: error.response.status,
                message: error.response.data.message
            }
            return thunkAPI.rejectWithValue(err);
        }
    }
)

const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        reset: (state) => {
            console.log("inside balance state");
            state.income = 0
            state.expense = 0
            state.transactions = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTransaction.pending, (state) => {
                state.isLoading = true
                state.success = false
                state.isError = false
            })
            .addCase(createTransaction.fulfilled, (state, action) => {
                state.isLoading = false
                state.success = true
                const newTransaction = { 
                    summary: action.payload.newTransaction.summary,
                    type: action.payload.newTransaction.type,
                    amount: action.payload.newTransaction.amount
                }
                state.transactions.push(newTransaction)
                if(newTransaction.type==="income")
                    state.income += newTransaction.amount
                else
                    state.expense += newTransaction.amount
                state.isError = false
                state.error = {}
            })
            .addCase(createTransaction.rejected, (state, action) => {
                state.isLoading = false
                state.success = false
                state.isError = true
                state.error = { status: action.payload.status, message: action.payload.message }
            })

            .addCase(getAllTransaction.pending, (state) => {
                state.isLoading = true
                state.success = false
                state.isError = false
            })

            .addCase(getAllTransaction.fulfilled, (state, action) => {
                state.isLoading = false
                state.success = true
                state.error = {}
                state.isError = false
                state.transactions = action.payload.allTransaction

                action.payload.allTransaction.forEach((element) => {
                    if (element.type === "income") {
                        state.income += element.amount;
                    } else {
                        state.expense += element.amount;
                    }
                });
            })

            .addCase(getAllTransaction.rejected, (state, action) => {
                state.isLoading = false
                state.success = false
                state.isError = true
                state.error = { status: action.payload.status, message: action.payload.message }
            })
    }
})

export const { reset } = balanceSlice.actions;

export default balanceSlice.reducer;