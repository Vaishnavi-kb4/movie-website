import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartProvider } from './context/CartContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FavoritesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
