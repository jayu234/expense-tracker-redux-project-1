import React from 'react'
import Balance from './Balance';
import History from './History';
import AddTransaction from './AddTransaction';

function Home() {
    return (
        <>
            <Balance />
            <AddTransaction />
            <History />
        </>
    )
}

export default Home