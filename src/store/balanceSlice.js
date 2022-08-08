import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
    name: 'balance',
    initialState: {
        income: 0,
        expence: 0,
        transactions: []
    },
    reducers: {
        addIncome: (state, actions) => {
            state.income += actions.payload;
        },
        addExpence: (state, actions) => {
            state.expence += actions.payload;
        },
        addTransaction: (state, actions) => {
            const transaction = actions.payload;

            state.transactions.push({
                summary: transaction.summary,
                amount: transaction.amount,
                type: transaction.type
            })
        }
    }
})

export const { addIncome, addExpence, addTransaction } = balanceSlice.actions;

export default balanceSlice.reducer;