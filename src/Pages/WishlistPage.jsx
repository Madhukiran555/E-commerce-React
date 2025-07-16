import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './WishlistPage.css';

const WishlistPage = ({ wishlistItems, setWishlistItems, setCartItems }) => {
  const handleRemoveFromWishlist = (name) => {
    const updated = wishlistItems.filter((item) => item.name !== name);
    setWishlistItems(updated);
  };

  const handleMoveToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    handleRemoveFromWishlist(item.name);
  };

  return (
    <div className="wishlist-page">
      <h2>💖 Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="empty-text">No items in wishlist</p>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item, i) => (
            <div key={i} className="wishlist-card">
              <img src={item.image} alt={item.name} className="wishlist-image" />

              <div className="wishlist-details">
                <h4>{item.name}</h4>

<div className="wishlist-price">
  <span className="new-price">
    {(item.discountedPrice || item.price)?.toLocaleString()}
  </span>

  {item.originalPrice && item.discountPercent && (
    <>
      <span className="old-price">{item.originalPrice.toLocaleString()}</span>
      <span className="discount-text">({item.discountPercent}% OFF)</span>
    </>
  )}
</div>



                <div className="wishlist-actions">
                  <button
                    className="wishlist-remove"
                    onClick={() => handleRemoveFromWishlist(item.name)}
                  >
                    <FaHeart className="filled-heart" /> Remove
                  </button>

                  <button
                    className="wishlist-cart"
                    onClick={() => handleMoveToCart(item)}
                  >
                    <FaShoppingCart /> Move to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
