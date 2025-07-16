import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    console.log("Received endTime:", endTime); // ✅ Debug line

    const end = new Date(endTime);

    if (isNaN(end.getTime())) {
      console.log("Invalid date parsed from endTime");
      setTimeLeft('Invalid Time');
      return;
    }

    const timer = setInterval(() => {
      const now = new Date();
      const distance = end - now;

      if (distance <= 0) {
        setTimeLeft('Expired');
        clearInterval(timer);
      } else {
        const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0');
        const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0');
        setTimeLeft(`${hours}:${minutes}:${seconds}`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div style={{ color: 'red', fontWeight: 'bold', marginTop: '8px' }}>
      ⏰ {timeLeft}
    </div>
  );
};

export default CountdownTimer;
