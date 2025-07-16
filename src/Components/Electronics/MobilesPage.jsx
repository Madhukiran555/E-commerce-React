import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import electronicsData from '../../Data/electronicsData';
import { addToRecentlyViewed } from '../addRecentView';
import { FaChevronDown, FaHeart, FaRegHeart } from 'react-icons/fa';
import './Mobilespage.css';

const MobilePage = ({ cartItems, setCartItems, wishlistItems, setWishlistItems }) => {
  const navigate = useNavigate();

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [wishlist, setWishlist] = useState({});
  const [showBrands, setShowBrands] = useState(true);
  const [showRatings, setShowRatings] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const allMobiles = useMemo(() => {
    return electronicsData.Mobiles?.brands?.flatMap((brand) =>
      brand.models.map((model) => ({
        ...model,
        brand: brand.name,
        id: `${brand.name}-${model.name}`,
        category: 'electronics'
      }))
    ) || [];
  }, []);

  const uniqueBrands = [...new Set(allMobiles.map((m) => m.brand))];

  const getPrice = (priceStr) =>
    parseFloat(priceStr.replace('₹', '').replace(/,/g, '')) || 0;

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
    );
  };

  const filteredMobiles = useMemo(() => {
    let result = [...allMobiles];

    if (selectedBrands.length > 0) {
      result = result.filter((m) => selectedBrands.includes(m.brand));
    }

    if (selectedRatings.length > 0) {
      result = result.filter((m) =>
        selectedRatings.includes(Math.floor(m.rating || 0))
      );
    }

    if (sortOption === 'lowToHigh') {
      result.sort((a, b) => getPrice(a.price) - getPrice(b.price));
    } else if (sortOption === 'highToLow') {
      result.sort((a, b) => getPrice(b.price) - getPrice(a.price));
    }

    return result;
  }, [allMobiles, selectedBrands, selectedRatings, sortOption]);

  const handleAddToCart = (model) => {
    const alreadyInCart = cartItems.some((item) => item.name === model.name);
    if (!alreadyInCart) {
      const originalPrice = getPrice(model.price);
      const discountPercent = model.discountPercent || 5;
      const discount = Math.round(originalPrice * (discountPercent / 100));
      const discountedPrice = originalPrice - discount;

      setCartItems((prev) => [
        ...prev,
        { ...model, originalPrice, discountedPrice, discountPercent }
      ]);
      setToastMessage('Item added to cart!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  const handleAddToWishlist = (model, index) => {
    toggleWishlist(index);
    const alreadyInWishlist = wishlistItems.some((item) => item.name === model.name);
    if (!alreadyInWishlist) {
      const originalPrice = getPrice(model.price);
      const discountPercent = model.discountPercent || 5;
      const discount = Math.round(originalPrice * (discountPercent / 100));
      const discountedPrice = originalPrice - discount;

      setWishlistItems((prev) => [
        ...prev,
        { ...model, originalPrice, discountedPrice, discountPercent }
      ]);
    }
  };

  const toggleWishlist = (index) => {
    setWishlist((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="mobile-page-container">
      {/* Filters */}
      <div className="filters-section">
        <div className="filter-group">
          <h3 onClick={() => setShowBrands(!showBrands)} className="filter-title">
            Filter by Brand <FaChevronDown className={`chevron ${showBrands ? 'rotate' : ''}`} />
          </h3>
          {showBrands && (
            <div className="filter-options">
              {uniqueBrands.map((brand) => (
                <div key={brand}>
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  <label>{brand}</label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="filter-group">
          <h3 onClick={() => setShowRatings(!showRatings)} className="filter-title">
            Filter by Rating <FaChevronDown className={`chevron ${showRatings ? 'rotate' : ''}`} />
          </h3>
          {showRatings && (
            <div className="filter-options">
              {[5, 4, 3].map((rating) => (
                <div key={rating}>
                  <input
                    type="checkbox"
                    checked={selectedRatings.includes(rating)}
                    onChange={() => handleRatingChange(rating)}
                  />
                  <label>{rating}★ & above</label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="filter-group">
          <h3 className="filter-title">Sort by</h3>
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="">Select</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products */}
      <div className="products-section">
        {filteredMobiles.length === 0 ? (
          <p className="no-results">No products match the selected filters.</p>
        ) : (
          <div className="products-grid">
            {filteredMobiles.map((model, index) => {
              const originalPrice = getPrice(model.price);
              const discountPercent = model.discountPercent || 5;
              const discount = Math.round(originalPrice * (discountPercent / 100));
              const discountedPrice = originalPrice - discount;

              return (
                <div key={index} className="product-card">
                  <div
                    className="product-content"
                    onClick={() => {
                      addToRecentlyViewed(model);
                      const modelSlug = model.name.toLowerCase().replace(/\s+/g, '-');
                      navigate(`/product/mobiles/${model.brand.toLowerCase()}/${modelSlug}`);
                    }}
                  >
                    <img
                      src={model.images?.[0] || model.image}
                      alt={model.name}
                      className="product-image"
                    />
                    <h4>{model.name}</h4>
                    <p>{model.brand}</p>
                    <p className="price">
                      ₹{discountedPrice.toLocaleString()}
                      <span className="old-price">₹{originalPrice.toLocaleString()}</span>
                      <span className="discount">{discountPercent}% OFF</span>
                    </p>
                  </div>
                  <div className="product-actions">
                    <button onClick={() => handleAddToCart(model)}>Add to Cart</button>
                    <button onClick={() => handleAddToWishlist(model, index)}>
                      {wishlist[index] ? <FaHeart /> : <FaRegHeart />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {showToast && <div className="toast-popup">{toastMessage}</div>}
    </div>
  );
};

export default MobilePage;
