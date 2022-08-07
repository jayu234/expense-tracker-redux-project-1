import './App.css'
import Header from './components/Header'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
// import { useEffect } from 'react';

// useEffect(()=>{})

function App() {
  return (
    <div className='container'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
