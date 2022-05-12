import React from 'react'
import { useSelector } from 'react-redux'

function Balance() {

    const income = useSelector(state => state.income);
    const expence = useSelector(state => state.expence);
    return (
        <div> 
            <div className='total-balance-history'>
                <h4>Your balance</h4>
                <h1>${income-expence}</h1>
            </div>
            <div className='balance-box'>
                <div className='balance-box-item' style={{borderBottom: '5px solid #0a9f0a'}}>
                    <p style={{ fontSize: '26px', fontWeight: '600', color: '#0a9f0a' }}>Income</p>
                    <p style={{fontSize:'23px'}}>${income}</p>
                </div>
                <div className='balance-box-item' style={{borderBottom: '5px solid #e84b4b'}}>
                    <p style={{ fontSize: '26px', fontWeight: '600', color: '#e84b4b' }}>Expense</p>
                    <p style={{fontSize:'23px'}}>${expence}</p>
                </div>
            </div>
        </div >
    )
}

export default Balance