import React from 'react';
import deals from '../../Data/TrendingDeals';
import CountdownTimer from './CountdownTimer';
import './Trending.css';

const TrendingDeals = () => {
  const handleAddToCart = (item) => {
    alert(`Added "${item.title}" to cart!`);
  };

  return (
    <section className="trending-section">
      <div className="bg-pattern" />
      <h2 className="trending-heading"> Trending Deals Just for You</h2>
      <p className="trending-subtext">Grab them before the time runs out!</p>

      <div className="deal-items">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-card">
            <img src={deal.image} alt={deal.title} className="deal-img" />
            <h3 className="deal-title">{deal.title}</h3>
            <p className="deal-price">
              ₹{deal.price} <span className="deal-original">₹{deal.original}</span>
            </p>
            <CountdownTimer endTime={deal.endTime} />
            <button className="deal-button" onClick={() => handleAddToCart(deal)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingDeals;
