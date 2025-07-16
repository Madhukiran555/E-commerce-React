import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './HeaderBottom.css';
import { FaLaptop, FaTshirt, FaSpa } from 'react-icons/fa';
import { GiShoppingCart, GiSofa } from 'react-icons/gi';



const categories = [
  { name: 'Electronics', icon: <FaLaptop /> },
  { name: 'Groceries', icon: <GiShoppingCart /> },
  { name: 'Fashion', icon: <FaTshirt /> },
  { name: 'Beauty', icon: <FaSpa /> },
  { name: 'Home & Living', icon: <GiSofa /> },
];


const HeaderBottom = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/categories/${category.toLowerCase()}`);
  };

  return (
    <div className="header-bottom">
      <div className="menu-all" onClick={toggleSidebar}>
        <FaBars /> <span>All</span>
      </div>

    {categories.map((cat, index) => (
  <div key={index} className="menu-item" onClick={() => handleClick(cat.name)}>
    {cat.icon}
    <span>{cat.name}</span>
  </div>
))}

    </div>
  );
};

export default HeaderBottom;
