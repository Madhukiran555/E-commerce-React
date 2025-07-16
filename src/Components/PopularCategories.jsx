// PopularCategories.jsx
import React from 'react';
import './Pc.css'; 
import TrendingDeals from '../Components/Tdeals/TrendingDeals';

import smartphone from '../Assets/Popular/smartphone.jpg';
import laptop from '../Assets/Popular/laptop.jpg';
import veg from '../Assets/Popular/veg.jpg';
import television from '../Assets/Popular/telvision.jpg';
import shirts from '../Assets/Popular/shirts.jpg';
import air from '../Assets/Popular/air.jpg';

const categories = [
  { name: 'Smartphones', image: smartphone },
  { name: 'Laptops', image: laptop },
  { name: 'Vegetables', image: veg },
  { name: 'Televisions', image: television },
  { name: 'Shirts', image: shirts },
  { name: 'Air Conditioners', image: air }
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
