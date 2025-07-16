import React from 'react';

const DeleteAccount = () => {
  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete your account?");
    if (confirmed) {
      alert("Account deleted successfully.");
    }
  };

  return (
    <div className="settings-content-inner">
      <h2>Delete Account</h2>
      <p>This action is irreversible. Please proceed with caution.</p>
      <button style={{ backgroundColor: '#e53935' }} onClick={handleDelete}>
        Delete My Account
      </button>
    </div>
  );
};

export default DeleteAccount;
