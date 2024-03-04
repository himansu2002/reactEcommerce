import React from 'react'
import './css/App.css'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './components/AuthPage'
import Contact from './components/Contact'
import Allprod from './components/Allprod'
import UserCart from './components/UserCart'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/auth' element={<AuthPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<UserCart/>}/>
        <Route path='/Allprod' element={<Allprod/>}/>
  
      </Routes>
    
    </div>
  )
}

export default App
