import React, { useState, useEffect } from 'react';
import './RatingReviews.css';

const RatingsReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');

  // Load reviews from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(`reviews_${productId}`);
    if (stored) {
      setReviews(JSON.parse(stored));
    }
  }, [productId]);

  const handleSubmit = () => {
    if (!rating || !text.trim()) return;
    const newReview = {
      rating,
      text,
      date: new Date().toLocaleString()
    };
    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem(`reviews_${productId}`, JSON.stringify(updated));
    setRating(0);
    setText('');
  };

  const avgRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 'No ratings yet';

  return (
    <div className="ratings-reviews">
      <h3>⭐ {avgRating} / 5</h3>

      <div className="review-form">
        <label>Rating: 
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            <option value={0}>Select</option>
            {[1,2,3,4,5].map(r => (
              <option key={r} value={r}>{r} Star</option>
            ))}
          </select>
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your review here..."
        />
        <button onClick={handleSubmit}>Submit Review</button>
      </div>

      <div className="review-list">
        {reviews.map((r, i) => (
          <div key={i} className="review-card">
            <strong>{'⭐'.repeat(r.rating)}</strong>
            <p>{r.text}</p>
            <small>{r.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingsReviews;
