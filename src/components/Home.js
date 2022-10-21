import React from 'react'
import Balance from './Balance';
import History from './History';
import AddTransaction from './AddTransaction';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransaction } from '../store/balanceSlice';
import { useNavigate } from 'react-router-dom';

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.user.user);
    useEffect(() => {
        if (userInfo) {
            dispatch(getAllTransaction());
        }
        else {
            navigate("/login");
        }
    }, [userInfo])

    return (
        <>
            <Balance />
            <AddTransaction />
            <History />
        </>
    )
}

export default Home