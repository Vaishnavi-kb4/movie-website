import React from 'react';
import { getImageUrl } from '../api/tmdb';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';

export default function MovieCard({ movie }) {
  const { toggleFav, isFav } = useFavorites();
  const { addToCart } = useCart();
  const poster = getImageUrl(movie.poster_path);

  return (
    <article className="card" aria-label={movie.title}>
      <img className="poster" src={poster} alt={movie.title} loading="lazy" />
      <div className="card-body">
        <h3 className="title">{movie.title}</h3>
        <div className="meta">
          <div>{movie.vote_average} ⭐</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className={`icon-btn heart ${isFav(movie) ? 'fav' : ''}`} onClick={() => toggleFav(movie)} aria-label="favorite">
              {isFav(movie) ? '♥' : '♡'}
            </button>
            <button className="btn btn-primary" onClick={() => addToCart(movie)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </article>
  );
}
