import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Payment() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [processing, setProcessing] = useState(false);

  const calculatePrice = (movie) => Math.max(49, Math.round(movie.vote_average * 20) + 49);
  const total = cart.reduce((s, m) => s + calculatePrice(m), 0);

  const handleCheckout = () => {
    if (!cart.length) {
      alert('Your cart is empty');
      return;
    }
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      alert('Payment successful! Enjoy your movies 🎉');
      clearCart();
    }, 1400);
  };

  return (
    <div>
      <h1 className="page-title">Payment</h1>
      {cart.length ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20 }}>
          <div>
            <div className="grid">
              {cart.map((movie) => (
                <div key={movie.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} style={{ width: 100, height: 140, objectFit: 'cover' }} alt={movie.title} />
                  <div style={{ padding: 12 }}>
                    <div style={{ fontWeight: 700 }}>{movie.title}</div>
                    <div style={{ color: 'var(--muted)' }}>Rating: {movie.vote_average}</div>
                    <div style={{ marginTop: 8 }}><button className="btn btn-ghost" onClick={() => removeFromCart(movie.id)}>Remove</button></div>
                  </div>
                  <div style={{ marginLeft: 'auto', paddingRight: 12, fontWeight: 700 }}>{calculatePrice(movie)} ₹</div>
                </div>
              ))}
            </div>
          </div>

          <aside style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))', padding: 16, borderRadius: 12 }}>
            <div style={{ fontSize: 18, fontWeight: 700 }}>Order Summary</div>
            <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', color: 'var(--muted)' }}><div>Items</div><div>{cart.length}</div></div>
            <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between' }}><div>Total</div><div style={{ fontWeight: 800, fontSize: 18 }}>{total} ₹</div></div>
            <div style={{ marginTop: 14 }}>
              <button className="btn btn-primary" onClick={handleCheckout} disabled={processing}>{processing ? 'Processing...' : 'Pay Now'}</button>
              <button className="btn btn-ghost" style={{ marginLeft: 8 }} onClick={() => clearCart()}>Clear</button>
            </div>
            <p style={{ marginTop: 10, color: 'var(--muted)', fontSize: 13 }}>This page simulates payment. For production, integrate a payment gateway like Stripe or Razorpay.</p>
          </aside>
        </div>
      ) : (
        <div className="empty">Your cart is empty. Add movies from Home to purchase.</div>
      )}
    </div>
  );
}
