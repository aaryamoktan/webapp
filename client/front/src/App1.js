import React from 'react'
import Home from './Content/Home/Home'
import Nevbar from './Content/Nevbar/Nevbar'
import About from './Content/About/About'
import { Routes,Route } from 'react-router-dom'

const App1 = () => {
  return (
    <>
      <Nevbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App1