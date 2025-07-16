import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import './Profile.css';
import { useAuth } from '../Components/Authentication/AuthContext';

function ProfilePanel({ profileImage, setProfileImage, primaryAddress, setPrimaryAddress }) {
  const navigate = useNavigate();

  const [name, setName] = useState("Madhu");
  const [mobile, setMobile] = useState("9876543210");
  const [email, setEmail] = useState("madhu@example.com");
  const [addresses, setAddresses] = useState([
    "Hyderabad, Telangana",
    "Bangalore, Karnataka"
  ]);
  const [newAddress, setNewAddress] = useState("");

  const { logout } = useAuth();

  const handleAddAddress = () => {
    if (newAddress.trim()) {
      setAddresses([...addresses, newAddress]);
      setNewAddress("");
    }
  };

const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem("profileImage", reader.result);
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  }
};

const handleRemoveAddress = (index) => {
  const updated = addresses.filter((_, i) => i !== index);
  setAddresses(updated);
};

const handleSave = () => {
  // Add primary address to savedAddresses if not already present
  if (!addresses.includes(primaryAddress)) {
    setAddresses([...addresses, primaryAddress]);
  }

  alert("Profile updated successfully!");
  console.log({ name, mobile, primaryAddress, addresses });
  navigate('/');
};
 const handleLogout = () => {
  logout();           
  navigate('/login'); 
};


  return (
    
    <div className="profile-container">
      <div className="profile-section">
        <div className="profile-card">
          
  <label htmlFor="upload-input">
    <img
      src={profileImage}
      alt="Profile"
      className="profile-avatar"
      style={{ cursor: 'pointer' }}
    />
  </label>
  <input
    id="upload-input"
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    style={{ display: 'none' }}
  />

          <h2>{name}</h2>
          <p>📱 {mobile}</p>

          
 <button className="logout-btn-card" onClick={handleLogout}>
  <FiLogOut style={{ marginRight: '8px' }} />
  Logout
</button>


        </div>

        <div className="profile-details">
            <button className="close-btn" onClick={() => navigate('/')}>&times;</button>
          <h3>Edit Profile Details</h3>

          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

          <label>Mobile Number:</label>
          <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />

          <label>Email Address:</label>
<input
  type="text"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

    <label>Primary Address:</label>
          <input
            type="text"
            value={primaryAddress}
            onChange={(e) => setPrimaryAddress(e.target.value)}
          />


          <h4>Saved Addresses</h4>
          <ul>
            {addresses.map((addr, index) => (
              <li key={index}>
                {addr}
                <button className="remove-btn" onClick={() => handleRemoveAddress(index)}>Remove</button>
              </li>
            ))}
          </ul>

          <div className="new-address-section">
            <input
              type="text"
              placeholder="Add new address..."
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
            />
            <button onClick={handleAddAddress}>Add</button>
          </div>

          <button className="save-btn" onClick={handleSave}>💾 Save Profile</button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePanel;