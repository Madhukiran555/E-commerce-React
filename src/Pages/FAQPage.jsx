
import React, { useState } from 'react'
import './FAQPage.css';


const FAQPage = () => {

    const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      category: 'Order Related',
      questions: [
        {
          q: 'How can I place an order?',
          a: 'To place an order, browse the products, click "Add to Cart", and proceed to checkout.'
        },
        {
          q: 'Where can I track my order?',
          a: 'Go to My Orders under your account or visit the Track Order page.'
        }
      ]
    },
    {
      category: 'Payment & Refund',
      questions: [
        {
          q: 'What payment methods are accepted?',
          a: 'We accept UPI, Credit/Debit Cards, Net Banking, and Cash on Delivery.'
        },
        {
          q: 'How long does a refund take?',
          a: 'Refunds are processed within 5-7 business days to your original payment method.'
        }
      ]
    },
    {
      category: 'Returns & Cancellations',
      questions: [
        {
          q: 'How do I return a product?',
          a: 'Go to My Orders, click on the product, and select Return.'
        },
        {
          q: 'Can I cancel an order after placing it?',
          a: 'Yes, you can cancel before the item is shipped from the Orders page.'
        }
      ]
    },
    {
      category: 'Shipping & Delivery',
      questions: [
        {
          q: 'What are the delivery charges?',
          a: 'We offer free delivery on orders above ₹499. Below that, charges may apply.'
        },
        {
          q: 'Do you deliver to my area?',
          a: 'You can enter your PIN code on the product page to check availability.'
        }
      ]
    },
    {
      category: 'Account & Login',
      questions: [
        {
          q: 'How do I reset my password?',
          a: 'Click on Forgot Password on the login page and follow the steps.'
        },
        {
          q: 'How can I update my address?',
          a: 'Go to through your profile > Addresses and edit or add new ones.'
        }
      ]
    },
    {
      category: 'Contact Support',
      questions: [
        {
          q: 'How can I reach customer care?',
          a: 'You can email us at support@Astrolitestore.com or use live chat from 9 AM to 9 PM.'
        }
      ]
    }
  ];

  const toggleQuestion = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
 <div className="help-page">
      <h2>Help Center</h2>
      {faqData.map((section, idx) => (
        <div className="faq-section" key={idx}>
          <h3>{section.category}</h3>
          {section.questions.map((item, i) => {
            const key = `${idx}-${i}`;
            return (
              <div key={key} className="faq-item">
                <div
                  className="question"
                  onClick={() => toggleQuestion(key)}
                >
                  {item.q}
                </div>
                {openIndex === key && <div className="answer">{item.a}</div>}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FAQPage
