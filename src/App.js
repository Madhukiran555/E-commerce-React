import './App.css';
import Header from './Reactfirst/Header';
import Sidebar from './Reactfirst/Sidebar';
import Categories from './Pages/Categories';
import ProfilePanel from './Pages/ProfilePanel';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ElectronicsPage from './Components/Electronics/Electronics';
import CategoriesPage from './Pages/CategoriesPage';
import CartPage from './Pages/CartPage';
import WishlistPage from './Pages/WishlistPage';
import CheckoutPage from './Pages/CheckoutPage';
import OrdersPage from './Pages/OrdersPage'; 
import HeaderBottom from './Reactfirst/HeaderBottom';
import GroceriesPage from './Components/Groceries/GroceriesPage';
import LandingPage from './Pages/LandingPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import SearchResultsPage from './Pages/SearchResultsPage';
import MobilePage from './Components/Electronics/MobilesPage';
import FAQPage from './Pages/FAQPage';
import HelpCenter from './Pages/HelpCenter';
import SupportPage from './Pages/SupportPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import SettingsPage from './Components/Settings/SettingsPage';
import { AuthProvider } from './Components/Authentication/AuthContext';
import Login from './Components/Authentication/Login';
import { useAuth } from './Components/Authentication/AuthContext';
import Register from './Components/Authentication/Register';

function App() {

  const [orders, setOrders] = useState(() => {
  const savedOrders = localStorage.getItem("orders");
  return savedOrders ? JSON.parse(savedOrders) : [];
});


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const [cartItems, setCartItems] = useState([]);
const [wishlistItems, setWishlistItems] = useState([]);

  const [profileImage, setProfileImage] = useState(() => {
    return localStorage.getItem("profileImage") || "/Assets/Dp.jpg";
  });

  const [primaryAddress, setPrimaryAddress] = useState("6-2-77/1, Vidhyanagar, Hyderabad, Telangana");
const [savedAddresses, setSavedAddresses] = useState([
  "Hyderabad, Telangana",
  "Bangalore, Karnataka"
]);

 return (
  <AuthProvider>
    <div className="main-layout">
      <Sidebar isOpen={isSidebarOpen} />

      <div className="main-section">
        <Header
          profileImage={profileImage}
          primaryAddress={primaryAddress}
          addresses={savedAddresses}
          setPrimaryAddress={setPrimaryAddress}
        />

        <HeaderBottom toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className={`content-area ${isSidebarOpen ? 'shifted' : ''}`}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/categories" element={<Categories />} />
            <Route
              path="/profile"
              element={
                <ProfilePanel
                  profileImage={profileImage}
                  setProfileImage={setProfileImage}
                  primaryAddress={primaryAddress}
                  setPrimaryAddress={setPrimaryAddress}
                />
              }
            />
            <Route
              path="/categories/:categoryName/:subCategory?/:brand?"
              element={
                <CategoriesPage
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistItems={wishlistItems}
                  setWishlistItems={setWishlistItems}
                />
              }
            />
            <Route
              path="/product/mobiles/:brand/:productSlug"
              element={
                <ProductDetailPage
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistItems={wishlistItems}
                  setWishlistItems={setWishlistItems}
                />
              }
            />
            <Route
              path="/product/:subcategory/:brand/:modelSlug"
              element={
                <ProductDetailPage
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistItems={wishlistItems}
                  setWishlistItems={setWishlistItems}
                />
              }
            />
            <Route
              path="/categories/groceries"
              element={
                <GroceriesPage
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistItems={wishlistItems}
                  setWishlistItems={setWishlistItems}
                />
              }
            />
            <Route
              path="/product/groceries/:category/:productSlug"
              element={
                <ProductDetailPage
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistItems={wishlistItems}
                  setWishlistItems={setWishlistItems}
                />
              }
            />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route
              path="/cart"
              element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />}
            />
            <Route
              path="/wishlist"
              element={
                <WishlistPage
                  wishlistItems={wishlistItems}
                  setWishlistItems={setWishlistItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/checkout"
              element={
                <CheckoutPage
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  primaryAddress={primaryAddress}
                  orders={orders}
                  setOrders={setOrders}
                />
              }
            />
            <Route path="/orders" element={<OrdersPage orders={orders} />} />
            <Route
              path="/categories/electronics/mobiles"
              element={
                <MobilePage
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  wishlistItems={wishlistItems}
                  setWishlistItems={setWishlistItems}
                />
              }
            />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/settings" element={<SettingsPage />} />

            <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />




          </Routes>
        </div>
      </div>
    </div>
  </AuthProvider>
);

}

export default App;
