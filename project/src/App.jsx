import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Manu from './pages/manu/Manu'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Navbar from './compnents/navbar/Navbar'
import Footer from './compnents/footer/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/manu' element={<Manu/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>


    </Routes>

      <Footer/>
  
    </>
  )
}

export default App
