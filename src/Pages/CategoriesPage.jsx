import React from 'react';
import { useParams } from 'react-router-dom';
import { addToRecentlyViewed } from '../Components/addRecentView';
import RatingsReviews from '../Components/Reviews/RatingsReviews';


// Import  actual category pages (components)
import ElectronicsPage from '../Components/Electronics/Electronics';

//  can add more like BeautyPage, HomeLivingPage, etc.

const CategoryPage = ({ cartItems, setCartItems, wishlistItems, setWishlistItems }) => {
  const { categoryName, subCategory, brand } = useParams();


  // Render based on category
  if (categoryName === 'electronics') {
    return (
      <ElectronicsPage
        subCategory={subCategory}
        brand={brand}
        cartItems={cartItems}
        setCartItems={setCartItems}
        wishlistItems={wishlistItems}
        setWishlistItems={setWishlistItems}
      />
    );
  }

  return <div>⚠️ Category not found</div>;
};

export default CategoryPage;
