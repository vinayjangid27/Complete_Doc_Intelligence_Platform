// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import UploadPage from './UploadPage';
import ChatPage from './ChatPage';
import Navbar from './Navbar'; // ✅ Add this

const App = () => (
  <Router>
    <Navbar /> {/* ✅ Show on every page */}
    <div className="bg-gray-50 min-h-screen px-4 sm:px-6 md:px-8 py-6">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/chat/:docId" element={<ChatPage />} />
      </Routes>
    </div>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
