import React from 'react';

const OrdersPage = ({ orders }) => {
  return (
    <div className="orders-page">
      <h2>🧾 My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Status:</strong> <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></p>
            </div>

            <div className="order-items">
              {order.items.map((item, idx) => (
                <div key={idx} className="item-row">
                  <span>{item.name}</span>
                  <span>Qty: {item.qty || 1}</span>
                  <span>₹{(item.discountedPrice || item.price).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="order-footer">
              <strong>Total: ₹{order.totalAmount.toLocaleString()}</strong>
              <button className="reorder-btn">Reorder</button>
              <button className="invoice-btn">Download Invoice</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersPage;