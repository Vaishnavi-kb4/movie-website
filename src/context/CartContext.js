import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('cine_cart');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cine_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (movie) => {
    if (!cart.some((m) => m.id === movie.id)) setCart((prev) => [...prev, movie]);
  };
  const removeFromCart = (id) => setCart((prev) => prev.filter((m) => m.id !== id));
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
