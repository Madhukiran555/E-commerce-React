import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome, FaBoxOpen, FaThLarge, FaHeadset,
  FaCog, FaQuestionCircle, FaCommentDots, FaLock
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
   

      <nav className="menu-section">

       <NavLink
  to="/"
  className={({ isActive }) => `menu-link ${isActive ? 'active-link' : ''}`}
>
  <FaHome className="icon" /> Home
</NavLink>

        <NavLink
  to="/orders"
  className={({ isActive }) => `menu-link ${isActive ? 'active-link' : ''}`}
>
  <FaBoxOpen className="icon" /> My-Orders
</NavLink>


<NavLink
  to="/categories"
  className={({ isActive }) => `menu-link ${isActive ? 'active-link' : ''}`}
>
  <FaThLarge className="icon" /> Categories
</NavLink>

<NavLink
  to="/help"
  className={({ isActive }) => `menu-link ${isActive ? 'active-link' : ''}`}
>
  <FaHeadset className="icon" /> Help
</NavLink>

<NavLink
  to="/settings"
  className={({ isActive }) => `menu-link ${isActive ? 'active-link' : ''}`}
>
  <FaCog className="icon" /> Settings
</NavLink>

      </nav>
   

      <hr className="divider" />

      <nav className="bottom-section">
        
 <NavLink 
  to="/faq" 
  className={({ isActive }) => `menu-link ${isActive ? 'active-link' : ''}`}
>
  <FaQuestionCircle className="icon" /> FAQs
</NavLink>

<NavLink 
  to="/support" 
  className={({ isActive }) => `menu-link ${isActive ? 'active-link' : ''}`}
>
  <FaCommentDots className="icon" /> Support
</NavLink>

<NavLink 
  to="/privacy" 
  className={({ isActive }) => `menu-link ${isActive ? 'active-link' : ''}`}
>      
  <FaLock className="icon" /> Privacy Policy
</NavLink>

      </nav>
    </aside>
  );
}

export default Sidebar;
