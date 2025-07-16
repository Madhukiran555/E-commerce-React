import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';


const categories = [
  { name: 'Electronics', image: '/Assets/Electronics.jpg' },
  { name: 'Groceries', image: '/Assets/Grocery.jpg' },
  { name: 'Fashion', image: '/Assets/fashion.jpg' },
  { name: 'Beauty', image: '/Assets/beauty.jpg' },
  { name: 'Home & Living', image: '/Assets/home.jpg' },
  { name: 'Footwear', image: '/Assets/footwear.jpg' },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/categories/${categoryName.toLowerCase()}`);
  };

  return (
    <div className="categories-page">
      {/* Banner */}
      <div className="full-banner-wrapper">
        <video
          className="full-banner-video"
          src="/Assets/Banners/Cat banner.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <p className="info-text">✨ Explore hot deals in every category!</p>

      {/* Category Grid */}
      <div className="category-grid">
        {categories.map((category) => (
          <div
            className={`category-card category-${category.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
          >
            <img src={category.image} alt={category.name} className="category-image" />
            <div className="category-info">
              <h3>{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
