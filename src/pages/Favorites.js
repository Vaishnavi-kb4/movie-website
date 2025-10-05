import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import MovieCard from '../components/MovieCard';

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1 className="page-title">Your favorites</h1>
      {favorites.length ? (
        <div className="grid">
          {favorites.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      ) : (
        <div className="empty">No favorites yet. Add some movies you love!</div>
      )}
    </div>
  );
}
