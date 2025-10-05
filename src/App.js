import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Payment from './pages/Payment';
import NavBar from './components/NavBar';
import './App.css';

export default function App(){
  return (
    <div>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/payment" element={<Payment/>} />
        </Routes>
      </div>
    </div>
  )
}
