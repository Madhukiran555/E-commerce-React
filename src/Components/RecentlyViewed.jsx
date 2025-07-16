import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import './RecentlyViewed.css';

const RecentlyViewed = ({ category }) => {
  const [viewed, setViewed] = useState([]);
  const scrollRef = useRef(null);

useEffect(() => {
  const loadViewed = () => {
    if (category === 'all') {
      const keys = Object.keys(localStorage).filter((key) =>
        key.startsWith('recentlyViewed_')
      );

      const combined = keys.flatMap((key) => {
        try {
          return JSON.parse(localStorage.getItem(key)) || [];
        } catch {
          return [];
        }
      });

      const unique = Array.from(
        new Map(combined.map((item) => [item.id || item.name, item])).values()
      );

      setViewed(unique.slice(0, 10));
    } else {
      const key = `recentlyViewed_${category}`;
      const data = localStorage.getItem(key);
      if (data) {
        setViewed(JSON.parse(data).slice(0, 6));
      }
    }
  };

  loadViewed();

  const handler = (e) => {
    if (category === 'all' || e.detail.category === category) {
      loadViewed();
    }
  };

  window.addEventListener('recentlyViewedUpdated', handler);
  return () => window.removeEventListener('recentlyViewedUpdated', handler);
}, [category]);


  if (viewed.length === 0) {
  console.log("❌ RecentlyViewed is not rendering — viewed list is empty.");
  return <div style={{ padding: '1rem', background: '#ffeeee' }}>No items viewed yet</div>;
}


  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="recently-viewed-container">
      <h2 className="recently-heading">
  👀 Recently Viewed {category !== 'all' ? `in ${category}` : ''}
</h2>

      <div className="recently-scroll-wrapper">
        <button className="scroll-arrow left" onClick={() => scroll('left')}>
          <ChevronLeft size={24} />
        </button>

        <div className="recently-items" ref={scrollRef}>
       {viewed.map((item) => (
  <div className="recently-circle-card" key={item.id || `${item.name}-${Math.random()}`}>
    <img
      src={item.image || item.images?.[0] || '/Assets/placeholder.jpg'}
      alt={item.title || item.name || 'Product'}
      className="recently-circle-img"
    />
    <p className="recently-title">{item.title || item.name}</p>
  </div>
))}

        </div>

        <button className="scroll-arrow right" onClick={() => scroll('right')}>
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default RecentlyViewed;
