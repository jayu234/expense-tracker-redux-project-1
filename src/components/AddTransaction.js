import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../store/balanceSlice';


const AddTransaction = () => {

  const [amount, setAmount] = useState('');
  const [summary, setSummary] = useState("");

  const dispatch = useDispatch();

  const addIncome = ()=>{
    dispatch( actions.addIncome(amount) );
    dispatch( actions.addTransaction({summary: summary, amount: amount, type: 'income'}) );
    setAmount('');
    setSummary('');
  }
  const addExpence = ()=>{
    dispatch( actions.addExpence(amount) );
    dispatch( actions.addTransaction({summary: summary, amount: amount, type: 'expence'}) );
    setAmount('');
    setSummary('');
  }
  const handleSummary = (e) => {
    setSummary(e.target.value);
  }
  const handleAmount = (e)=>{
    setAmount(e.target.valueAsNumber);
  }
  return (
    <div className='transaction-form'>
      <h4 style={{ margin: '1rem 0rem 0.5rem' }}>Add a Transaction</h4>
      <form>
        <div className="transaction-summary">
          <label htmlFor='summary'>Summary</label>
          <input type='text' id='summary' value={summary} onChange={handleSummary} />
        </div>
        <div className='transaction-amount'>
          <label htmlFor='amount'>Amount</label>
          <input type='number' id='amount' value={amount} onChange={handleAmount} />
        </div>
      </form>
      <div className="transaction-btn">
        <button className='add-transaction-btn' style={{ backgroundColor: '#31cc31'}} onClick={addIncome}>Add Income</button>
        <button className='add-transaction-btn' style={{ backgroundColor: '#e55858'}} onClick={addExpence}>Add Expense</button>
      </div>
    </div>
  )
}

export default AddTransaction;