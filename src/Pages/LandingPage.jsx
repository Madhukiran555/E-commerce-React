import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PopularCategories from '../Components/PopularCategories';
import TrendingDeals from '../Components/Tdeals/TrendingDeals';
import CountdownTimer from '../Components/Tdeals/CountdownTimer';
import RecentlyViewed from '../Components/RecentlyViewed';




function LandingPage() {
  const navigate = useNavigate();

  const banners = [
    { image: "/Assets/Home/new.png", alt: "hero" },
    { image: "/Assets/Home/electronic.png", alt: "Electronics Sale" },
    { image: "/Assets/Home/fashion2.png", alt: "Fashion Offers" },
    { image: "/Assets/Home/grocery.png", alt: "Groceries Deals" },
    { image: "/Assets/Home/beauty.png", alt: "Beauty Products" },
    { image: "/Assets/Home/home.png", alt: "Home & Living" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
<div className="landing-container">
  <div className="green-bg-section">
    <div className="dot-pattern"></div>
    <div className="floating-shape shape-1"></div>
    <div className="floating-shape shape-2"></div>
    <div className="floating-shape shape-3"></div>

    <section className="hero-banner">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="banner-slide">
            <img
              src={banner.image}
              alt={banner.alt}
              className="hero-img"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>

      <button className="hero-cta" onClick={() => navigate('/categories')}>
        Shop Now
      </button>
    </section>
  </div>

  {/* White background area starts here */}
  <PopularCategories />
  <TrendingDeals />
  <RecentlyViewed category="all" />

</div>




  );
}

export default LandingPage;
