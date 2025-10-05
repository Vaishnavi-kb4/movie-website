import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartProvider } from './context/CartContext';

test('renders navbar with logo', () => {
  render(
    <BrowserRouter>
      <FavoritesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FavoritesProvider>
    </BrowserRouter>
  );
  const logo = screen.getByText(/Cineverse/i);
  expect(logo).toBeInTheDocument();
});
