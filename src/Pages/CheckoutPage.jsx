import React, { useState } from 'react';
import './CheckoutPage.css';
import { FaEdit, FaSave } from "react-icons/fa";

const CheckoutPage = ({ cartItems, primaryAddress, orders, setOrders, setCartItems }) => {



  const [isEditing, setIsEditing] = useState(false);
const [editedAddress, setEditedAddress] = useState(primaryAddress);

const [paymentMethod, setPaymentMethod] = useState("COD");
const [cardDetails, setCardDetails] = useState({
  cardNumber: "",
  cardName: "",
  expiry: "",
  cvv: "",
  saveCard: false
});
const [upiId, setUpiId] = useState("");
const [upiVerified, setUpiVerified] = useState(false);

const [showConfirmation, setShowConfirmation] = useState(false);


  const total = cartItems.reduce((sum, item) => {
    return sum + parseFloat(item.price.replace('₹', '').replace(',', ''));
  }, 0);

  const deliveryCharge = total > 500 ? 0 : 40;
  const grandTotal = total + deliveryCharge;

const handlePlaceOrder = () => {
  const total = cartItems.reduce((sum, item) => {
    return sum + parseFloat(item.discountedPrice || item.price.replace('₹', '').replace(/,/g, ''));
  }, 0);

  const deliveryCharge = total > 500 ? 0 : 40;
  const grandTotal = total + deliveryCharge;

  const newOrder = {
    id: 'AST' + Date.now(),
    items: cartItems,
    totalAmount: grandTotal,
    address: primaryAddress,
    paymentMethod,
    date: new Date().toLocaleString(),
    status: "Processing"
  };

setOrders(prev => {
  const updated = [...prev, newOrder];
  localStorage.setItem("orders", JSON.stringify(updated));
  return updated;
});
setCartItems([]);
setShowConfirmation(true);

  setTimeout(() => {
    alert("✅ Order placed successfully!");
    window.location.href = "/orders";
  }, 2000);
};



  return (
    <div className="checkout-page">
      <h2>🧾 Order Summary</h2>

     <div className="section">
  <div className="address-header">
    <h3>📍 Delivery Address</h3>
    {!isEditing ? (
      <FaEdit
        className="edit-icon"
        onClick={() => setIsEditing(true)}
        title="Edit Address"
      />
    ) : (
      <FaSave
        className="edit-icon"
        onClick={() => {
          setIsEditing(false);
          localStorage.setItem("address", editedAddress);
        }}
        title="Save Address"
      />
    )}
  </div>

  {isEditing ? (
    <textarea
      value={editedAddress}
      onChange={(e) => setEditedAddress(e.target.value)}
      className="address-input"
      rows={3}
    />
  ) : (
    <p>{editedAddress}</p>
  )}
</div>

      {/* Items in Cart */}
      <div className="section">
        <h3>🛍️ Items</h3>
        {cartItems.map((item, index) => (
          <div key={index} className="checkout-item">
            <img src={item.image} alt={item.name} />
            <div>
              <p><strong>{item.name}</strong></p>
              <p>Price: {item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className="section price-breakdown">
        <h3>💰 Price Details</h3>
        <p>Subtotal: ₹{total.toLocaleString()}</p>
        <p>Delivery: ₹{deliveryCharge}</p>
        <p><strong>Total Payable: ₹{grandTotal.toLocaleString()}</strong></p>
      </div>

      {/* Payment Method */}
      <div className="section">
  <h3>💳 Payment Method</h3>
  <select
    value={paymentMethod}
    onChange={(e) => {
      setPaymentMethod(e.target.value);
      setUpiVerified(false); // Reset UPI state if user switches
    }}
  >
    <option value="COD">Cash on Delivery</option>
    <option value="UPI">UPI</option>
    <option value="Card">Credit/Debit Card</option>
  </select>

  {paymentMethod === "Card" && (
    <div className="card-form">
      <input
        type="text"
        placeholder="Card Number"
        value={cardDetails.cardNumber}
        onChange={(e) =>
          setCardDetails({ ...cardDetails, cardNumber: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Card Holder Name"
        value={cardDetails.cardName}
        onChange={(e) =>
          setCardDetails({ ...cardDetails, cardName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Expiry (MM/YY)"
        value={cardDetails.expiry}
        onChange={(e) =>
          setCardDetails({ ...cardDetails, expiry: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="CVV"
        maxLength={3}
        value={cardDetails.cvv}
        onChange={(e) =>
          setCardDetails({ ...cardDetails, cvv: e.target.value })
        }
      />
      <label>
        <input
          type="checkbox"
          checked={cardDetails.saveCard}
          onChange={(e) =>
            setCardDetails({ ...cardDetails, saveCard: e.target.checked })
          }
        />{" "}
        Save card for future
      </label>
    </div>
  )}

  {paymentMethod === "UPI" && (
    <div className="upi-form">
      <input
        type="text"
        placeholder="Enter your UPI ID"
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
      />
      {!upiVerified ? (
        <button onClick={() => setUpiVerified(true)}>Verify UPI</button>
      ) : (
        <p style={{ color: "green" }}>✅ UPI Verified</p>
      )}
    </div>
  )}
</div>


      {/* Place Order Button */}
      <div className="section">
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>

      {/* Confirmation */}
      {showConfirmation && (
        <div className="order-confirmation">
          <p>✅ Processing your order...</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
