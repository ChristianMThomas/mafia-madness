import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-black text-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-serif tracking-wide text-red-900">
          Mafia Madness
        </h1>

        {/* Links */}
        {<nav className="space-x-6 text-sm font-medium">
          
          <Link to="/Home" className="hover:text-red-400 transition duration-200">Home</Link>
          <a href="/Home#How-To-Play" className="hover:text-red-400 transition duration-200">Instructions</a>
          <Link to="/Lobby" className="hover:text-red-400 transition duration-200">Play</Link>
          <Link to="/Login" className="hover:text-red-400 transition duration-200">Logout</Link>
        </nav> }
      </div>
    </header>
  );
};

export default NavBar;