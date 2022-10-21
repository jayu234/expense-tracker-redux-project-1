import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { reset } from '../store/balanceSlice';
import { userLogout } from '../store/userSlice';

function Header() {
  const dispatch = useDispatch();
  const logoutEnable = useSelector((state) => state.user.user) ? true : false;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0.5rem 0rem 1.5rem' }}>
      <h2>Expense Tracker</h2>
      {logoutEnable &&
        <p style={{ cursor: 'pointer'}}
          onClick={() => {
            dispatch(userLogout());
            dispatch(reset());
          }}
          title="Logout"
        >
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" /></g></svg>
        </p>}

    </div>
  )
}

export default Header