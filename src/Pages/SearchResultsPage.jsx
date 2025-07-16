import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import electronicsData from '../Data/electronicsData';
import groceriesData from '../Data/GrocriesData';
import './SearchResultsPage.css';



const SearchResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get('q')?.toLowerCase() || '';

  const matches = [];

  // Search in electronics
  for (const [subcategory, subData] of Object.entries(electronicsData)) {
    subData.brands.forEach((brand) => {
      brand.models.forEach((model) => {
        if (model.name.toLowerCase().includes(query)) {
          matches.push({
            ...model,
            type: 'electronics',
            subcategory,
            brand: brand.name,
          });
        }
      });
    });
  }

  // Search in groceries
  for (const [category, catData] of Object.entries(groceriesData)) {
    catData.items.forEach((item) => {
      if (item.name.toLowerCase().includes(query)) {
        matches.push({
          ...item,
          type: 'groceries',
          category,
        });
      }
    });
  }

  const handleClick = (product) => {
    if (product.type === 'electronics') {
      const slug = product.name.toLowerCase().replace(/\s+/g, '-');
      navigate(`/product/${product.subcategory}/${product.brand}/${slug}`);
    } else {
      const slug = product.name.toLowerCase().replace(/\s+/g, '-');
      navigate(`/product/groceries/${product.category}/${slug}`);
    }
  };

  return (
     <div className="search-results-page">
      <h2>🔍 Search Results for: <i>{query}</i></h2>
      {matches.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="results-grid">
          {matches.map((product, idx) => (
            <div key={idx} className="result-card" onClick={() => handleClick(product)}>
              <img src={product.image || product.images?.[0]} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage


