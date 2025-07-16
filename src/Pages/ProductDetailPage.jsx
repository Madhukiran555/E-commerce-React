import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import electronicsData from '../Data/electronicsData';
import RatingsReviews from '../Components/Reviews/RatingsReviews';
import './ProductDetailPage.css';
import groceriesData from '../Data/GrocriesData';

const ProductDetailPage = ({ cartItems, setCartItems, setWishlistItems }) => {

const { subcategory, brand, modelSlug, category, productSlug } = useParams();



  const [model, setModel] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

useEffect(() => {
  console.log("ROUTE PARAMS:", { subcategory, brand, modelSlug, category, productSlug });

  let foundModel = null;

  const normalizeSlug = (str) =>
    str?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  const routeSlug = normalizeSlug(modelSlug || productSlug || '');
  const routeBrand = brand?.toLowerCase();

  // Handle Mobiles (subcategory or category is 'mobiles')
  const isMobile = (subcategory === 'mobiles' || category === 'mobiles' || window.location.pathname.includes('/mobiles/'));

  if (isMobile && routeBrand && routeSlug) {
    const brandData = electronicsData.Mobiles?.brands?.find(
      (b) => b.name.toLowerCase() === routeBrand
    );

    console.log("Matched Brand:", brandData);

    foundModel = brandData?.models?.find((m) => {
      const modelSlugNormalized = normalizeSlug(m.name);
      return modelSlugNormalized === routeSlug;
    });

    console.log("Matched Model:", foundModel);
  }

  setModel(foundModel);
}, [subcategory, brand, modelSlug, category, productSlug]);


  const handleAddToCart = () => {
    if (!model) return;

    const originalPrice = parseFloat(model.price.replace('₹', '').replace(/,/g, '')) || 0;
    const discountPercent = model.discountPercent || 5;
    const discount = Math.round(originalPrice * (discountPercent / 100));
    const discountedPrice = originalPrice - discount;

    const productToAdd = {
      ...model,
      originalPrice,
      discountedPrice,
      discountPercent,
    };

       const exists = cartItems.some((item) => item.name === model.name);
    if (!exists) {
      setCartItems((prev) => [...prev, productToAdd]);
      setToastMessage('✅ Item added to cart!');
    } else {
      setToastMessage('ℹ️ Item already in cart');
    }

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleAddToWishlist = () => {
    if (!model) return;

    const originalPrice = parseFloat(model.price.replace('₹', '').replace(/,/g, '')) || 0;
    const discountPercent = model.discountPercent || 5;
    const discount = Math.round(originalPrice * (discountPercent / 100));
    const discountedPrice = originalPrice - discount;

    const productToAdd = {
      ...model,
      originalPrice,
      discountedPrice,
      discountPercent,
    };

    setWishlistItems((prev) => {
      const exists = prev.some((item) => item.name === model.name);
      return exists ? prev : [...prev, productToAdd];
    });

    setToastMessage('💖 Added to wishlist!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // ✅ This must be INSIDE the component function
 if (!model) {
  return (
    <div style={{ padding: '40px', textAlign: 'center', color: 'red' }}>
      ❌ Product not found. Please check your data or route slug.
    </div>
  );
}


 const productId = `${subcategory || category || "mobiles"}-${brand}-${model?.name}`;

  return (
    <div className="product-detail-page">
      <div className="left-panel">
        <h2>{model.name}</h2>
        <div className="images">
          {model.images?.map((img, idx) => (
            <img key={idx} src={img} alt={`${model.name}-${idx}`} />
          ))}
          {model.video ? (
            <video className="model-video" controls autoPlay muted loop width="100%">
              <source src={model.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>No video available.</p>
          )}
        </div>
        <p>{model.description}</p>
        <button className="cart-btn" onClick={handleAddToCart}>
  Add to Cart
</button>
        <button className="wishlist-btn" onClick={handleAddToWishlist}>
  Add to Wishlist
</button>

      </div>

      <div className="right-panel">
        <RatingsReviews productId={productId} />
      </div>

      {showToast && <div className="toast-popup">{toastMessage}</div>}
    </div>
  );
};


export default ProductDetailPage;
