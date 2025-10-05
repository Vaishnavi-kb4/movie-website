import axios from 'axios';

// ✅ fallback API key directly in code (for testing)
const API_KEY = process.env.REACT_APP_TMDB_API_KEY || '79809f3bae5245fcb2ed696c501fdb75';
const BASE_URL = 'https://api.themoviedb.org/3';

// ✅ Fetch popular movies
export const getPopularMovies = async (page = 1) => {
  try {
    const res = await axios.get(`${BASE_URL}/movie/popular`, {
      params: { api_key: API_KEY, language: 'en-US', page }
    });
    console.log("Fetched popular movies:", res.data.results);
    return res.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

// ✅ Search movies by query
export const searchMovies = async (query, page = 1) => {
  if (!query) return [];
  try {
    const res = await axios.get(`${BASE_URL}/search/movie`, {
      params: { api_key: API_KEY, language: 'en-US', query, page, include_adult: false }
    });
    console.log("Fetched search results:", res.data.results);
    return res.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};

// ✅ Image URL builder
export const getImageUrl = (path) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : `https://via.placeholder.com/500x750?text=No+Image`;
