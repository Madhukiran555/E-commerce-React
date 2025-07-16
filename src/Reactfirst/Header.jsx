import React, { useState } from 'react';
import './Header.css'
import { FaBell, FaUserCircle,FaHeart,FaRegHeart, FaSearch, FaWhatsapp, FaEnvelope, FaShoppingCart,FaHome, FaTv, FaShoppingBasket, FaTshirt, FaBoxOpen, FaCog, FaHeadset } from 'react-icons/fa';
import { AiOutlineShoppingCart,AiFillHeart, AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/Authentication/AuthContext';
import newLogo from '../Assets/newlogo.png';



function Header({ profileImage, primaryAddress, addresses = [], setPrimaryAddress }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');

const { user, logout } = useAuth();


const [searchTerm, setSearchTerm] = useState('');
const navigate = useNavigate();

const handleSearch = () => {
  if (searchTerm.trim() !== '') {
    navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    setSearchTerm('');
  }
};

  return (

    
       <header className="custom-header">


          <div className="logo-part">
   <img src={newLogo} alt="Astrolite Logo" className="astrolite-logo" />

  </div>

    <div className="header-content">

      <div className="left-part">
        <div className="delivery-info">
          <span role="img" aria-label="location">📍</span>
          <span className="delivery-label">Deliver to:</span>
          <strong className="delivery-address">{primaryAddress}</strong>
          <span
            className="arrow-icon"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            ▼
          </span>
          {showDropdown && (
            <div className="address-dropdown">
              {addresses.map((addr, index) => (
                     <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => {
                    setPrimaryAddress(addr);
                    setShowDropdown(false);
                  }}
                >
                  {addr}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>


      <div className="right-part">
  {/* <p className="greeting">{greeting}, MadhuKiran 👋</p> */}

  <div className="search-box">
  <FaSearch className="search-icon" onClick={handleSearch} />
  <input
    type="text"
    placeholder="Search...."
    className="header-search"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    }}
  />
</div>


  <FaBell className="header-icon" />
 <FaRegHeart
  className="header-icon"
  size={23}
  onClick={() => navigate('/wishlist')}
/>

<AiOutlineShoppingCart
  className="header-icon"
  size={27}
  onClick={() => navigate('/cart')}
/>

  
  <Link  to="/profile" className="profile-box" style={{textDecoration:'none'}}>
        <img src={profileImage} alt="Profile" className="profile-pic" />
        <span className="dropdown-icon">▼</span>
      </Link>


</div>

</div>
    </header>
  );
}


export default Header;
