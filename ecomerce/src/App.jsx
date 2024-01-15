import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'

import './App.css'

function App() {

  return (
    <Routes> 
      <Route path='/' Component={Home}/>
      <Route path='/login' Component={Login}/>
      <Route path='/register' Component={Register}/>
    </Routes>
  )
}

export default App
