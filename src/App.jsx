import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Registration from './Registration/Registration'
import Home from './Home/Home'
import Login from './Login/Login'

const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='register' element={<Registration/>} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
