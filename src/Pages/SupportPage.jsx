import React, { useState } from 'react';
import './SupportPage.css';

const SupportPage = () => {
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFeedbackSubmit = () => {
    alert("✅ Feedback submitted successfully!");
    setRating(0);
    setFeedbackText('');
  };

  const handleSupportSubmit = () => {
    alert("📩 Support request sent!");
    setSupportForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="support-page-container">
      <h2 className="page-heading">Need Help? We're Here for You</h2>
      <p className="page-subtitle">Feel free to reach out or leave feedback to improve our services.</p>

      {/* 📩 Contact Support */}
      <div className="support-card">
        <h3 className="card-title">📩 Contact Support</h3>
        <input
          className="input-field"
          type="text"
          placeholder="Your Name"
          value={supportForm.name}
          onChange={(e) => setSupportForm({ ...supportForm, name: e.target.value })}
        />
        <input
          className="input-field"
          type="email"
          placeholder="Your Email"
          value={supportForm.email}
          onChange={(e) => setSupportForm({ ...supportForm, email: e.target.value })}
        />
        <textarea
          className="textarea-field"
          placeholder="Describe your issue..."
          value={supportForm.message}
          onChange={(e) => setSupportForm({ ...supportForm, message: e.target.value })}
        />
        <button className="primary-btn" onClick={handleSupportSubmit}>
          Submit Request
        </button>
      </div>

      {/* ⭐ Feedback Section */}
      <div className="support-card">
        <h3 className="card-title">⭐ Rate and Leave Feedback</h3>
        <div className="star-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star-icon ${star <= rating ? 'filled' : ''}`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          className="textarea-field"
          placeholder="Tell us what you think..."
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
        />
        <button className="primary-btn" onClick={handleFeedbackSubmit}>
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default SupportPage;
