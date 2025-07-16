import React from 'react'
import "./HelpCenter.css";
import { Link } from 'react-router-dom';

const HelpCenter = () => {
    const topics = [
    {
      title: 'Orders & Tracking',
      description: 'Check your order status or learn how to place/cancel an order.',
      link: '/faq#order-related'
    },
    {
      title: 'Payments & Refunds',
      description: 'View accepted payment methods, refund process, and failed payments.',
      link: '/faq#payment-refund'
    },
    {
      title: 'Returns & Cancellations',
      description: 'Understand how to return items and cancel orders.',
      link: '/faq#returns-cancellations'
    },
    {
      title: 'Shipping & Delivery',
      description: 'Know delivery times, charges, and serviceable locations.',
      link: '/faq#shipping-delivery'
    },
    {
      title: 'Account Management',
      description: 'Manage your login, password, addresses, and profile info.',
      link: '/faq#account-login'
    },
    {
      title: 'Contact Support',
      description: 'Still need help? Get in touch with us.',
      link: '/support'
    },

    {
  title: 'Track Your Order',
  description: 'View real-time order tracking',
  link: '/orders'
},
{
  title: 'Submit Feedback',
  description: 'Let us know how we can improve',
  link: '/support'
}

  ];

    return (
    <div className="help-center">
      <h2>Welcome to the Help Center</h2>
      <p>Select a topic to get started</p>
      <div className="help-topics">
        {topics.map((topic, idx) => (
          <Link to={topic.link} className="help-card" key={idx}>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter
