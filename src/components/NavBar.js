import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function NavBar() {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <header className="header" role="navigation" aria-label="main">
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div className="logo" onClick={() => navigate('/')}>Cineverse</div>
        <nav style={{ display: 'flex', gap: 10 }}>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'btn btn-ghost' : 'btn btn-ghost')}>Home</NavLink>
          <NavLink to="/favorites" className="btn btn-ghost">Favorites</NavLink>
          <NavLink to="/payment" className="btn btn-ghost">Payment ({cart.length})</NavLink>
        </nav>
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input aria-label="global-search" className="input" placeholder="Quick search (home has full search)" />
      </div>
    </header>
  );
}
