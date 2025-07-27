import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Lobby from './pages/Lobby';
import Register from './pages/register';
import Layout from './Layout';
import MafiaMadnessGame from './pages/MafiaMadnessGame';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your AuthProvider!
import { AuthProvider } from './context/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default App;