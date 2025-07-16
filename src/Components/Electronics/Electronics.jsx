import React, { useState, useEffect } from 'react';
import './Electronics.css';
import electronicsData from '../../Data/electronicsData';
import todaysDeals from '../../Data/todaysDealsData';
import {
  FaChevronDown, FaHeart, FaRegHeart, FaShoppingCart
} from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { addToRecentlyViewed } from '../addRecentView';
import RecentlyViewed from '../RecentlyViewed';
import RatingsReviews from '../Reviews/RatingsReviews';





const ElectronicsPage = ({
  subCategory,
  brand,
  cartItems,
  setCartItems,
  wishlistItems,
  setWishlistItems
}) => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

 const [showToast, setShowToast] = useState(false);
const [toastMessage, setToastMessage] = useState('');

const [priceSort, setPriceSort] = useState('');
const [selectedRatings, setSelectedRatings] = useState([]);

  const [selectedSub, setSelectedSub] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [showAllSubs, setShowAllSubs] = useState(false);
  const [wishlist, setWishlist] = useState({});
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  useEffect(() => {
    if (subCategory) setSelectedSub(subCategory);

    if (subCategory && brand) {
      const subData = electronicsData[subCategory];
      if (subData && subData.brands) {
        const selectedBrandObj = subData.brands.find(
          (b) => b.name.toLowerCase() === brand.toLowerCase()
        );
        setSelectedBrand(selectedBrandObj || null);
      } else {
        setSelectedBrand(null);
      }
    } else {
      setSelectedBrand(null);
    }
  }, [subCategory, brand]);

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleWishlist = (index) => {
    setWishlist((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const allSubcategories = Object.keys(electronicsData);


  const getPrice = (priceStr) =>
  parseFloat(priceStr.replace('₹', '').replace(/,/g, '')) || 0;

let filteredModels = [];
if (selectedBrand && selectedBrand.models) {
  filteredModels = [...selectedBrand.models];

  // Filter by ratings
  if (selectedRatings.length > 0) {
    filteredModels = filteredModels.filter((model) => {
      const rating = model.rating || 0;
      return selectedRatings.includes(Math.floor(rating));
    });
  }

  // Sorting
  if (priceSort === 'lowToHigh') {
    filteredModels.sort((a, b) => getPrice(a.price) - getPrice(b.price));
  } else if (priceSort === 'highToLow') {
    filteredModels.sort((a, b) => getPrice(b.price) - getPrice(a.price));
  }
}


  return (
    <div className="electronics-page">
      {/* Top Subcategories */}
      <div className={`subcategory-bar ${showAllSubs ? 'expanded' : 'collapsed'}`}>
        <div className="subcategory-tabs-wrap">
          {(showAllSubs ? allSubcategories : allSubcategories.slice(0, 7)).map((sub) => (
            <div
              key={sub}
              className={`subcategory-tab ${selectedSub === sub ? 'active' : ''}`}
              onClick={() => navigate(`/categories/${categoryName}/${sub}`)}
            >
              <span className="subcategory-text">{sub}</span>
              <FaChevronDown className="arrow-icon" />
            </div>
          ))}
        </div>
        <div className="subcategory-tab show-all-tab" onClick={() => setShowAllSubs(!showAllSubs)}>
          <span className="subcategory-text">{showAllSubs ? 'Show Less' : 'Show All'}</span>
        </div>
      </div>

      {/* Brands */}
      {selectedSub && !selectedBrand && (
        <div>
          <h2>📱 {selectedSub} Brands</h2>
          <div className={`brand-container ${showAll ? 'expanded' : 'collapsed'}`}>
            {(showAll
              ? electronicsData[selectedSub]?.brands || []
             : (electronicsData[selectedSub]?.brands?.length ? electronicsData[selectedSub].brands.slice(0, 8) : [])
            ).map((brand) => (
              <div
                key={brand.name}
                className="brand-card"
                onClick={() =>
                  navigate(`/categories/${categoryName}/${selectedSub}/${brand.name.toLowerCase()}`)
                }
              >
                <img src={brand.image} alt={brand.name} />
                <p>{brand.name}</p>
              </div>
            ))}

            {electronicsData[selectedSub]?.brands?.length > 7 && (
              <div className="show-all-card" onClick={() => setShowAll(!showAll)}>
                <p>{showAll ? 'Show Less' : 'Show More →'}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Brand Models */}
      {selectedBrand && selectedBrand.models && (
        <div className="product-details">

          
         {filteredModels.map((model, index) => {

const originalPrice = parseFloat(model.price.replace('₹', '').replace(/,/g, ''));
const discountPercent = model.discountPercent || 5; // fallback to 5% if not set
const discount = Math.round(originalPrice * (discountPercent / 100));
const discountedPrice = originalPrice - discount;

const getPrice = (priceStr) =>
  parseFloat(priceStr.replace('₹', '').replace(/,/g, '')) || 0;

let filteredModels = [];
if (selectedBrand && selectedBrand.models) {
  filteredModels = [...selectedBrand.models];

  // Filter by ratings (optional)
  if (selectedRatings.length > 0) {
    filteredModels = filteredModels.filter((model) => {
      const rating = model.rating || 0;
      return selectedRatings.includes(Math.floor(rating));
    });
  }

  // Sorting
  if (priceSort === 'lowToHigh') {
    filteredModels.sort((a, b) => getPrice(a.price) - getPrice(b.price));
  } else if (priceSort === 'highToLow') {
    filteredModels.sort((a, b) => getPrice(b.price) - getPrice(a.price));
  }
}


            return (
             <div key={index} className="model-card">

<div
onClick={() => {
  const id = `${selectedSub}-${selectedBrand.name}-${model.name}`;
  addToRecentlyViewed({ ...model, id, category: 'electronics' });

  const modelSlug = model.name.toLowerCase().replace(/\s+/g, '-');
  navigate(`/product/${selectedSub}/${selectedBrand.name.toLowerCase()}/${modelSlug}`);
}}




  style={{ cursor: 'pointer' }}
>

<img
  src={model.images?.[0] || model.image}
  alt={model.name}
  width="150"
/>

<h3>{model.name}</h3>


                 <p className="description">
  {model.description
    ? (expandedDescriptions[index]
        ? model.description
        : model.description.slice(0, 40))
    : "No description available"}
  {model.description && model.description.length > 40 && (
    <span
      className="read-more-inline"
      onClick={(e) => {
        e.stopPropagation();
        toggleDescription(index);
      }}
    >
      {expandedDescriptions[index] ? ' Show Less' : '...Read More'}
    </span>
  )}
</p>

                </div>


                <div className="deal-pricing">
                  <span className="new-price">₹{discountedPrice.toLocaleString()}</span>
                  <span className="old-price">₹{originalPrice.toLocaleString()}</span>
                        <span className="discount">{discountPercent}% OFF</span> 
                </div>

                <div className="deal-buttons">
<button
  className="add-cart"
  onClick={() => {
    const originalPrice = parseFloat(model.price.replace('₹', '').replace(/,/g, ''));
    const discountPercent = model.discountPercent || 5;
    const discount = Math.round(originalPrice * (discountPercent / 100));
    const discountedPrice = originalPrice - discount;

    const modelWithDiscount = {
      ...model,
      originalPrice,
      discountedPrice,
      discountPercent,
    };

    setCartItems((prev) => [...prev, modelWithDiscount]);
    setToastMessage("Item added to cart!");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }}
>
  Add to Cart
</button>


                 <button
  className="wishlist"
  onClick={() => {
    toggleWishlist(index);

    const originalPrice = parseFloat(model.price.replace('₹', '').replace(/,/g, '')) || 0;
    const discountPercent = model.discountPercent || 5;
    const discount = Math.round(originalPrice * (discountPercent / 100));
    const discountedPrice = originalPrice - discount;

    const modelWithDiscount = {
      ...model,
      originalPrice,
      discountedPrice,
      discountPercent,
    };

    setWishlistItems((prev) => {
      const exists = prev.some((item) => item.name === model.name);
      return exists ? prev : [...prev, modelWithDiscount];
    });
  }}
>
  {wishlist[index] ? <FaHeart /> : <FaRegHeart />}
</button>
a
                </div>
     

              </div>
            );

          })}
        </div>
      )}


      {/* Banner + Today's Deals */}
      {!selectedSub && (
        <div className="banner-section">
          <video
            className="electronics-banner"
            src="/Assets/Banners/Elec.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="todays-deals-section">
            <h2 className="deals-title">🔥 Today’s Deals</h2>
            <div className="deals-grid">
              {todaysDeals.map((item) => (
                <div key={item.id} className="deal-card-vertical">
                  <div className="deal-image-wrapper">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="deal-offer-info">
                    <span className="deal-discount">{item.discount} OFF</span>
                  </div>
                  <div className="deal-info">
                    <h3 className="deal-name">{item.name}</h3>
                    <div className="deal-pricing">
                      <span className="new-price">₹{item.price}</span>
                      <span className="old-price">₹{item.oldPrice}</span>
                    </div>
                    <div className="deal-actions">
                      <button className="deal-button">Add to Cart</button>
                      <FaRegHeart className="wishlist-icon" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showToast && <div className="toast-popup">{toastMessage}</div>}

    

    </div>
  );
};



export default ElectronicsPage;
