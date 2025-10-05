# Cineverse — Movie browser (Create React App)

A simple React app that uses The Movie Database (TMDB) to fetch and display movies, allows adding favorites, and includes a mock payment page.

## Setup

1. Copy files into a Create React App project (or run `npx create-react-app movie-app-cra`).
2. Create `.env` with your TMDB API key:

   REACT_APP_TMDB_API_KEY=your_api_key_here

3. Install dependencies and run:

   npm install
   npm start

## Notes
- This project uses a simulated payment flow for demo purposes. To accept real payments integrate a gateway such as Stripe or Razorpay.
- Favorites and cart persist to `localStorage`.
