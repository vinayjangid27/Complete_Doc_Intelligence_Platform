// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-tight hover:opacity-90">DocAI</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-200 transition">Dashboard</Link>
          <Link to="/upload" className="hover:text-gray-200 transition">Upload</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
