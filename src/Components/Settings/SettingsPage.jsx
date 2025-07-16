import React, { useState } from 'react';
import SettingsSidebar from './SettingsSidebar';
import ChangePassword from './ChangePassword';
import AddressBook from './AddressBook';
import NotificationsSettings from './NotificationsSettings';
import PaymentsMethods from './PaymentsMethods';
import LanguageRegion from './LanguageRegion';
import DeleteAccount from './DeleteAccount';

import './settings.css';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('password');

  const renderContent = () => {
    switch (activeTab) {
  case 'password':
    return <ChangePassword />;
  case 'address':
    return <AddressBook />;
  case 'notifications':
    return <NotificationsSettings />;
  case 'payment':
    return <PaymentsMethods />;
  case 'language':
    return <LanguageRegion />;
  case 'delete':
    return <DeleteAccount />;
  default:
    return <ChangePassword />;
}

  };

  return (
    <div className="settings-page">
      <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="settings-content">{renderContent()}</div>
    </div>
  );
};

export default SettingsPage;
