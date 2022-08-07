import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    return (
        <div className='login-form' style={{ margin: '5rem 0rem 2rem' }} >
            <h4 className='login-heading'>Login</h4>
            <form>
                <div className="login-form-e1">
                    <label htmlFor='email'>Email<span style={{ color: 'red' }}>&nbsp;*</span></label>
                    <input type='email' id='email' name='email' onChange={(e) => {
                        setCredentials({ ...credentials, [e.target.name]: e.target.value })
                    }} value={credentials.email} />
                </div>
                <div className="login-form-e2">
                    <label htmlFor='password'>Password<span style={{ color: 'red' }}>&nbsp;*</span></label>
                    <input type='password' id='password' name='password' onChange={(e) => {
                        setCredentials({ ...credentials, [e.target.name]: e.target.value })
                    }} value={credentials.password} />
                </div>
            </form>
            <button className='login-btn' onClick={() => { console.log(credentials) }}>Login</button>
            <div className='login-footer'>
                <p className='login-footer-tagline'>Don't have a account?</p>
                <p className='login-footer-btn' style={{ color: "#3751FF", cursor: "pointer", fontSize: "14px", textDecoration: 'underline' }} onClick={() => navigate("/signup")}>Create one</p>
            </div>
        </div>
    )
}

export default Login