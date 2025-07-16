import React, { useState } from 'react';

const NotificationsSettings = () => {
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);

  return (
    <div className="settings-content-inner">
      <h2>🛎️ Notification Settings</h2>

      <div className="notif-row">
        <input
          type="checkbox"
          id="email"
          checked={emailNotif}
          onChange={() => setEmailNotif(!emailNotif)}
        />
        <label htmlFor="email">Email Notifications</label>
      </div>

      <div className="notif-row">
        <input
          type="checkbox"
          id="sms"
          checked={smsNotif}
          onChange={() => setSmsNotif(!smsNotif)}
        />
        <label htmlFor="sms">SMS Notifications</label>
      </div>
    </div>
  );
};

export default NotificationsSettings;
