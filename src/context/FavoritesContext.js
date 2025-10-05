import React, { createContext, useContext, useEffect, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem('cine_favorites');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cine_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const isFav = (movie) => favorites.some((m) => m.id === movie.id);
  const addFav = (movie) => {
    if (!isFav(movie)) setFavorites((prev) => [movie, ...prev]);
  };
  const removeFav = (id) => setFavorites((prev) => prev.filter((m) => m.id !== id));
  const toggleFav = (movie) => (isFav(movie) ? removeFav(movie.id) : addFav(movie));

  return (
    <FavoritesContext.Provider value={{ favorites, addFav, removeFav, toggleFav, isFav }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
