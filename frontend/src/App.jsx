import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import PricingPage from './pages/PricingPage'
import { Route, Router, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import RegisterSchool from './pages/RegisterSchool'

function App() {
  return <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/register-school' element={<RegisterSchool/>}/>
      </Routes>
}

export default App
