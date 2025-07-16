import React, { useState } from 'react';

const AddressBook = () => {
  const [addresses, setAddresses] = useState([
    'Hyderabad, Telangana',
    'Bangalore, Karnataka',
  ]);
  const [newAddress, setNewAddress] = useState('');

  const addAddress = () => {
    if (newAddress.trim()) {
      setAddresses([...addresses, newAddress]);
      setNewAddress('');
    }
  };

  const removeAddress = (index) => {
    const updated = addresses.filter((_, i) => i !== index);
    setAddresses(updated);
  };

  return (
    <div className="settings-content-inner">
      <h2>Manage Addresses</h2>
      <ul className="settings-address-list">
        {addresses.map((addr, index) => (
          <li key={index}>
            <span>{addr}</span>
            <button onClick={() => removeAddress(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Add new address..."
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
        />
        <button onClick={addAddress}>Add Address</button>
      </div>
    </div>
  );
};

export default AddressBook;
