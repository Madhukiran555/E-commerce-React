import React, { useState } from 'react';

const ChangePassword = () => {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleChange = () => {
    if (newPass === confirm) {
      alert('🔐 Password changed successfully!');
      setCurrent('');
      setNewPass('');
      setConfirm('');
    } else {
      alert('❌ Passwords do not match');
    }
  };

  return (
    <div className="settings-content-inner">
      <h2>Change Password</h2>
      <input
        type="password"
        placeholder="Current Password"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPass}
        onChange={(e) => setNewPass(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button onClick={handleChange}>Update Password</button>
    </div>
  );
};

export default ChangePassword;
