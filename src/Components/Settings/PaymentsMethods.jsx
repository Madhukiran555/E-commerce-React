import React, { useState } from 'react';

const PaymentsMethods = () => {
  const [methods, setMethods] = useState(['Visa **** 1428']);
  const [newMethod, setNewMethod] = useState('');

  const addMethod = () => {
    if (newMethod.trim()) {
      setMethods([...methods, newMethod]);
      setNewMethod('');
    }
  };

  const removeMethod = (index) => {
    const updated = methods.filter((_, i) => i !== index);
    setMethods(updated);
  };

  return (
    <div className="settings-content-inner">
      <h2>Payment Methods</h2>

      {methods.map((method, index) => (
        <div key={index} className="payment-method">
          <span>{method}</span>
          <button onClick={() => removeMethod(index)}>Remove</button>
        </div>
      ))}

      <input
        type="text"
        placeholder="Add new payment method"
        value={newMethod}
        onChange={(e) => setNewMethod(e.target.value)}
      />
      <button onClick={addMethod}>Add Method</button>
    </div>
  );
};

export default PaymentsMethods;
