// PopularCategories.jsx
import React from 'react';
import './Pc.css'; 
import TrendingDeals from '../Components/Tdeals/TrendingDeals';


const categories = [
  { name: 'Smartphones', image: '/Assets/Popular/smartphone.jpg' },
  { name: 'Laptops', image: '/Assets/Popular/laptop.jpg' },
  { name: 'Vegetables', image: '/Assets/Popular/veg.jpg'},
  { name: 'Televisions', image: '/Assets/Popular/telvision.jpg' },
  { name: 'Shirts', image: '/Assets/Popular/shirts.jpg' },
  { name: 'Air Conditioners', image: '/Assets/Popular/air.jpg' }
];


const PopularCategories = () => {
  return (
    <section className="popular-categories">
      <h2 className="section-title">Popular Categories</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
                <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />
            <p className="category-title">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
