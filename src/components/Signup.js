import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { userSignup } from '../store/userSlice';
import { motion } from 'framer-motion';

const successColor = { text: "#0f5132", bg: "#d1e7dd" };
const failureColor = { text: "#842029", bg: "#f8d7da" };

function Signup() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const [alertBox, setAlertBox] = useState(false);

  const { user, loading, success, isError, message } = useSelector((state) => state.user);

  const [alertColors, setColors] = useState({});
  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user])
  return (
    <div className='signup-form' style={{ margin: '5rem 0rem 2rem' }} >
      <h4 className='signup-heading'>Signup</h4>

      {alertBox && <motion.div variants={container}
        initial="hidden"
        animate="show" className='alert-box' style={{ backgroundColor: alertColors.bg }}>
        {success ?
          <p style={{ color: alertColors.text, width: '100%', marginLeft: '10px' }} >Signup Successfully!!</p>
          : <p style={{ color: alertColors.text, width: '100%', marginLeft: '10px' }} >{message}</p>
        }
      </motion.div>}

      <form>
        <div className="signup-form-e1">
          <label htmlFor='name'>Name<span style={{ color: 'red' }}>&nbsp;*</span></label>
          <input type='text' id='name' name='name' onChange={(e) => {
            setCredentials({ ...credentials, [e.target.name]: e.target.value })
          }} value={credentials.name} required />
        </div>
        <div className="signup-form-e2">
          <label htmlFor='email'>Email<span style={{ color: 'red' }}>&nbsp;*</span></label>
          <input type='email' id='email' name='email' onChange={(e) => {
            setCredentials({ ...credentials, [e.target.name]: e.target.value })
          }} value={credentials.email} required />
        </div>
        <div className="signup-form-e3">
          <label htmlFor='password'>Password<span style={{ color: 'red' }}>&nbsp;*</span></label>
          <input type='password' id='password' name='password' onChange={(e) => {
            setCredentials({ ...credentials, [e.target.name]: e.target.value })
          }} value={credentials.password} required />
        </div>
      </form>
      <button className='signup-btn' onClick={() => { dispatch(userSignup(credentials)) }} >Sign up</button>
      {/* <button className='signup-btn' onClick={() => { console.log(credentials); }} >Sign up</button> */}
      <div className='signup-footer'>
        <p className='signup-footer-tagline'>Already have a account?</p>
        <p className='signup-footer-btn' style={{ color: "#3751FF", cursor: "pointer", fontSize: "14px", textDecoration: 'underline' }} onClick={() => navigate("/login")}>Login</p>
      </div>
    </div>
  )
}

export default Signup