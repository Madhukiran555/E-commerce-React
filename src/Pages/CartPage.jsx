import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.name] = 1;
      return acc;
    }, {})
  );

  const updateQuantity = (name, amount) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max(1, (prev[name] || 1) + amount),
    }));
  };

  const removeFromCart = (name) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
    setToastMessage('🗑️ Item removed from cart!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

const totalAmount = cartItems.reduce((total, item) => {
  const price = item.discountedPrice || parseFloat(item.price.replace('₹',  '').replace(/,/g, ''));
  const quantity = quantities[item.name] || 1;
  return total + price * quantity;
}, 0);



  return (
    <div className="cart-page">
      <h2 className="cart-title">🛒 Your Cart</h2>

      <div className="cart-grid">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div className="cart-card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p className="cart-pricing">
   {item.discountedPrice || item.price}
</p>


                <div className="quantity-section">
                  <button onClick={() => updateQuantity(item.name, -1)}>-</button>
                  <span>{quantities[item.name]}</span>
                  <button onClick={() => updateQuantity(item.name, 1)}>+</button>
                </div>

                <button onClick={() => removeFromCart(item.name)} className="remove-btn">
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-cart">Your cart is empty.</p>
        )}
      </div>

      <div className="cart-footer">
        <h3>Total: ₹{totalAmount.toLocaleString()}</h3>

        <button
          className="checkout-btn"
          onClick={() => navigate("/checkout")}
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>

      {/* ✅ Toast Popup */}
      {showToast && (
        <div className="toast-popup">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default CartPage;
