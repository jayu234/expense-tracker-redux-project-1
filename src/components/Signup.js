import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  return (
    <div className='signup-form' style={{ margin: '5rem 0rem 2rem' }} >
      <h4 className='signup-heading'>Signup</h4>
      <form autoComplete='off' onSubmit={()=>{}}>
        <div className="signup-form-e1">
          <label htmlFor='name'>Name<span style={{ color: 'red' }}>&nbsp;*</span></label>
          <input type='text' id='name' name='name' onChange={(e) => {
            setCredentials({ ...credentials, [e.target.name]: e.target.value })
          }} value={credentials.name} required/>
        </div>
        <div className="signup-form-e2">
          <label htmlFor='email'>Email<span style={{ color: 'red' }}>&nbsp;*</span></label>
          <input type='email' id='email' name='email' onChange={(e) => {
            setCredentials({ ...credentials, [e.target.name]: e.target.value })
          }} value={credentials.email} required/>
        </div>
        <div className="signup-form-e3">
          <label htmlFor='password'>Password<span style={{ color: 'red' }}>&nbsp;*</span></label>
          <input type='password' id='password' name='password' onChange={(e) => {
            setCredentials({ ...credentials, [e.target.name]: e.target.value })
          }} value={credentials.password} required/>
        </div>
        <input type='submit' value='Signup' className='signup-btn'/>
      </form>
      <div className='signup-footer'>
        <p className='signup-footer-tagline'>Already have a account?</p>
        <p className='signup-footer-btn' style={{ color: "#3751FF", cursor: "pointer", fontSize: "14px", textDecoration: 'underline' }} onClick={() => navigate("/login")}>Login</p>
      </div>
    </div>
  )
}

export default Signup