import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { userLogin } from '../store/authSlice';
import { motion } from 'framer-motion';


const successColor = { text: "#0f5132", bg: "#d1e7dd"};
const failureColor = { text: "#842029", bg: "#f8d7da" }; 

function Login() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [alertBox, setAlertBox] = useState(false);
    const { user, loading, success, isError, message } = useSelector((state) => state.auth);
    const [alertColors, setColors] = useState({ });
    useEffect(() => {
        if (success) {
            setColors(successColor);
            setAlertBox(true)
            setTimeout(() => { navigate("/") }, 1500)
        }
        if (isError) {
            setColors(failureColor);
            setAlertBox(true)
            setTimeout(() => { setAlertBox(false) }, 1500)
        }
    }, [user, isError, success])
    return (
        <div className='login-form' style={{ margin: '3rem 0rem 2rem' }} >
            <h4 className='login-heading'>Login</h4>
            <p style={{ textAlign: 'center', fontSize: '18px', margin: '1rem 0rem' }}>to access the app.</p>
            {/* { isError && <p style={{ margin: '2.25rem 0rem', textAlign: 'center', fontSize: '18px', color: 'red'}} > { message } </p> } */}
            {alertBox && <motion.div variants={container}
                initial="hidden"
                animate="show" className='alert-box' style={{backgroundColor: alertColors.bg}}>
                {success ?
                    <p style={{ color: alertColors.text, width: '100%', marginLeft: '10px' }} >Login Successfully!!</p>
                    : <p style={{ color: alertColors.text, width: '100%', marginLeft: '10px' }} >{message}</p>
                }
            </motion.div>}
            <form>
                <div className="login-form-e1">
                    <label htmlFor='email'>Email<span style={{ color: 'red' }}>&nbsp;*</span></label>
                    <input type='email' id='email' name='email' onChange={(e) => {
                        setCredentials({ ...credentials, [e.target.name]: e.target.value })
                    }} value={credentials.email} autoComplete="username" />
                </div>
                <div className="login-form-e2">
                    <label htmlFor='password'>Password<span style={{ color: 'red' }}>&nbsp;*</span></label>
                    <input type='password' id='password' name='password' onChange={(e) => {
                        setCredentials({ ...credentials, [e.target.name]: e.target.value })
                    }} value={credentials.password} autoComplete="current-password" />
                </div>
            </form>
            <button className='login-btn' onClick={() => { dispatch(userLogin(credentials)) }}>Login</button>
            <div className='login-footer'>
                <p className='login-footer-tagline'>Don't have a account?</p>
                <p className='login-footer-btn' style={{ color: "#3751FF", cursor: "pointer", fontSize: "14px", textDecoration: 'underline' }} onClick={() => navigate("/signup")}>Create one</p>
            </div>
        </div>
    )
}

export default Login