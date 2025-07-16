import React, { useState } from 'react';
import groceriesData from '../../Data/GrocriesData';
import './Groceries.css';
import { FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { addToRecentlyViewed } from '../addRecentView';
import RecentlyViewed from '../RecentlyViewed';
import RatingsReviews from '../Reviews/RatingsReviews';




const GroceriesPage = ({ cartItems, setCartItems, wishlistItems, setWishlistItems }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddToCart = (item) => {
    const alreadyInCart = cartItems.some(cartItem => cartItem.name === item.name);
    if (!alreadyInCart) {
      setCartItems([...cartItems, item]);
    }
  };



const [selectedItem, setSelectedItem] = useState(null);


  const navigate = useNavigate();

  const handleAddToWishlist = (item) => {
    const alreadyInWishlist = wishlistItems.some(wishItem => wishItem.name === item.name);
    if (!alreadyInWishlist) {
      setWishlistItems([...wishlistItems, item]);
    }
  };

  const mainCategories = Object.keys(groceriesData);

  return (
    <div className="groceries-page">
      {!selectedCategory ? (
        <>
          <h2>🛍️ Grocery Categories</h2>
          <div className="grocery-categories">
            {mainCategories.map((category) => (
              <div
                key={category}
                className="category-card"
                onClick={() => setSelectedCategory(category)}
              >
                <img src={groceriesData[category].image} alt={category} />
                <p>{category}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <button className="back-btn" onClick={() => setSelectedCategory(null)}>
            ← Back to Categories
          </button>
          <h2>🍎 {selectedCategory} Items</h2>
          <div className="items-grid">
            
         {(groceriesData[selectedCategory]?.items || []).length === 0 ? (
  <p>No items found in this category.</p>
) : (
  (groceriesData[selectedCategory]?.items || []).map((item, i) => (
   <div

  key={i}
  className="item-card"
onClick={() => {
  const id = `${item.name}-${i}`;
  addToRecentlyViewed({ ...item, id, category: 'groceries' });

  const itemSlug = item.name.toLowerCase().replace(/\s+/g, '-');
  navigate(`/product/groceries/${selectedCategory.toLowerCase()}/${itemSlug}`);
}}


  style={{ cursor: 'pointer' }}
>
  <img src={item.image} alt={item.name} />
  <h4>{item.name}</h4>

  <div className="item-pricing">
    <span className="new-price">{item.price}</span>
    <span className="old-price">{item.oldPrice}</span>
    <span className="discount">{item.discountPercent}% OFF</span>
  </div>

  <div className="item-actions" onClick={(e) => e.stopPropagation()}>
    <button onClick={() => handleAddToCart(item)}>
      <FaShoppingCart /> Add to Cart
    </button>
    <button onClick={() => handleAddToWishlist(item)}>
      {wishlistItems.some(w => w.name === item.name) ? <FaHeart /> : <FaRegHeart />} Wishlist
    </button>
  </div>
</div>


  ))
)}
          </div>
        </>
      )}

      
    </div>
  );
};

export default GroceriesPage;
