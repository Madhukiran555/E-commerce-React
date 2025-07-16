import React, { useState } from 'react';

const LanguageRegion = () => {
  const [language, setLanguage] = useState('English');
  const [region, setRegion] = useState('India');

  return (
    <div className="settings-content-inner">
      <h2>Language & Region</h2>
      <label>
        Language:
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option>English</option>
          <option>Hindi</option>
          <option>Telugu</option>
        </select>
      </label>

      <label>
        Region:
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
        </select>
      </label>
    </div>
  );
};

export default LanguageRegion;
