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

//  Import banner images from src/Assets
import newBanner from '../Assets/Home/New.png';
import electronicBanner from '../Assets/Home/electronic.png';
import fashionBanner from '../Assets/Home/fashion2.png';
import groceryBanner from '../Assets/Home/grocery.png';
import beautyBanner from '../Assets/Home/beauty.png';
import homeBanner from '../Assets/Home/home.png';


function LandingPage() {
  const navigate = useNavigate();

  const banners = [
    { image: newBanner, alt: "hero" },
    { image: electronicBanner, alt: "Electronics Sale" },
    { image: fashionBanner, alt: "Fashion Offers" },
    { image: groceryBanner, alt: "Groceries Deals" },
    { image: beautyBanner, alt: "Beauty Products" },
    { image: homeBanner, alt: "Home & Living" },
  ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2000,
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
