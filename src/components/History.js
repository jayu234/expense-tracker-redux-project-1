import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';


function History() {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerDirection: -1
            }
        }
    }
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    const transactions = useSelector(state => state.transactions);
    // console.log(transactions);
    return (
        <div style={{ margin: '1rem 0' }}>
            <h4>History</h4>
            <div style={{ width: '100%', height: '2px', background: '#6e6c6c', margin: '0.5rem 0 1rem' }}></div>
            {/* <motion.ul layout style={{ width: '100%' }}> */}
            <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                style={{ width: '100%' }}>
                {transactions.map((transaction, index) => (
                    <motion.li variants={item} size={50} key={index} className='history-list' style={{ borderRight: `6px solid ${transaction.type === 'income' ? '#0a9f0a' : '#e84b4b'} `, borderRadius: '6px' }}>
                        <div className='history-list-item-1'>
                            <p>{transaction.summary}</p>
                            <p>{transaction.amount}</p>
                        </div>
                    </motion.li>))}
            </motion.ul>
        </div>
    )
}

export default History