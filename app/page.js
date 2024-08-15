"use client";

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/App'; 
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute'; 
import Private from './pages/Private'; 

function App() {
  const user = null;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup user={user} />} />
        <Route path="/login" element={<Login user={user} />} />
        <Route 
          path="/private" 
          element={
            <ProtectedRoute user={user}>
              <Private />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
