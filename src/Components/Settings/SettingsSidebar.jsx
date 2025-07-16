import React from 'react';
import './settings.css';

const SettingsSidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="settings-sidebar">
      <h3>Settings</h3>
      <ul>
        <li
          className={activeTab === 'password' ? 'active-tab' : ''}
          onClick={() => setActiveTab('password')}
        >
          🔒 Change Password
        </li>
        <li
          className={activeTab === 'address' ? 'active-tab' : ''}
          onClick={() => setActiveTab('address')}
        >
          🏠 Manage Addresses
        </li>
    

        <li
          className={activeTab === 'notifications' ? 'active-tab' : ''}
          onClick={() => setActiveTab('notifications')}
        >
          🔔 Notifications
        </li>

        <li
          className={activeTab === 'payment' ? 'active-tab' : ''}
          onClick={() => setActiveTab('payment')}
        >
          💳 Payment Methods
        </li>

        <li
          className={activeTab === 'language' ? 'active-tab' : ''}
          onClick={() => setActiveTab('language')}
        >
          🌐 Language & Region
        </li>

        <li
          className={activeTab === 'delete' ? 'active-tab' : ''}
          onClick={() => setActiveTab('delete')}
        >
          ❌ Delete Account
        </li>
      </ul>
    </div>
  );
};

export default SettingsSidebar;
