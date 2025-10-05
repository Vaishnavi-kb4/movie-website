import React, { useEffect, useState } from 'react';
import { getPopularMovies, searchMovies } from '../api/tmdb';
import MovieCard from '../components/MovieCard';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchPopular = async () => {
    setLoading(true);
    try {
      const res = await getPopularMovies();
      setMovies(res);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPopular(); }, []);

  const doSearch = async (e) => {
    const q = e.target.value;
    setQuery(q);
    if (!q) { fetchPopular(); return; }
    setLoading(true);
    try {
      const res = await searchMovies(q);
      setMovies(res);
    } catch (e) { console.error(e); } finally { setLoading(false); }
  };

  return (
    <main>
      <h1 className="page-title">Discover movies</h1>
      <div className="controls">
        <input className="input" value={query} onChange={doSearch} placeholder="Search for movies by name..." aria-label="search" />
        <button className="btn btn-ghost" onClick={fetchPopular}>Popular</button>
      </div>

      {loading ? (
        <div className="empty">Loading movies...</div>
      ) : movies.length ? (
        <div className="grid" role="list">
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      ) : (
        <div className="empty">No movies found.</div>
      )}
    </main>
  );
}
