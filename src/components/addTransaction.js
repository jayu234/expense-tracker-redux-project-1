import React from 'react'

function addTransaction() {
  return (
    <div className='transaction-form'>
      <h4 style={{ margin: '1rem 0rem 0.5rem' }}>Add a Transaction</h4>
      <form>
        <div className="transaction-summary">
          <label htmlFor='summary'>Summary</label>
          <input type='text' id='summary' />
        </div>
        <div className='transaction-amount'>
          <label htmlFor='amount'>Amount</label>
          <input type='text' id='amount' />
        </div>
        <div className="transaction-btn">
          <button className='add-transaction-btn' style={{backgroundColor: '#31cc31'}}>Add Income</button>
          <button className='add-transaction-btn' style={{backgroundColor: '#e55858'}}>Add Expense</button>
        </div>
      </form>
    </div>
  )
}

export default addTransaction