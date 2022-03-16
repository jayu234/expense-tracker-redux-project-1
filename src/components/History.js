import React from 'react'

function History() {
    return (
        <div style={{ margin: '1rem 0' }}>
            <h4>History</h4>
            <div style={{width: '100%',height: '2px', background: '#6e6c6c', margin: '0.5rem 0 1rem'}}></div>
            <ul style={{ width: '100%' }}>
                <li className='history-list' style={{ borderRight: '6px solid #e84b4b', borderRadius: '6px' }}>
                    <div className='history-list-item-1'>
                        <p>Chai</p>
                        <p>10</p>
                    </div>
                </li>
                <li className='history-list' style={{ borderRight: '6px solid #0a9f0a', borderRadius: '6px' }}>
                    <div className='history-list-item-1'>
                        <p>Chai</p>
                        <p>10</p>
                    </div>
                </li>
                <li className='history-list' style={{ borderRight: '6px solid #0a9f0a', borderRadius: '6px' }}>
                    <div className='history-list-item-1'>
                        <p>Chai</p>
                        <p>10</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default History