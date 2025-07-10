import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Lobby from './pages/Lobby'
import { Route, Router, Routes } from 'react-router-dom'
import Register from './pages/register'
import Layout from './Layout'
import { BrowserRouter } from 'react-router-dom'
import MafiaMadnessGame from './pages/MafiaMadnessGame'

// * For now we will set the default gateway to the page we want to work on until login functionality is done.

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Lobby" element={<Lobby />} />
          <Route path="/MafiaMadnessGame" element={<MafiaMadnessGame />} />
        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App