import React from 'react';

function SettingsPage({ currentCurrency, setCurrency, options }) {

  const handleChange = (e) => {
    // Find the full currency object from the options array
    const newCurrency = options.find(opt => opt.code === e.target.value);
    if (newCurrency) {
      setCurrency(newCurrency);
    }
  };

  return (
    <div className="settings-page card">
      <h2>Settings</h2>
      
      <div className="setting-item">
        <label htmlFor="currency-select">Select Display Currency:</label>
        <select 
          id="currency-select"
          value={currentCurrency.code}
          onChange={handleChange}
        >
          {options.map(opt => (
            <option key={opt.code} value={opt.code}>
              {opt.code} ({opt.symbol})
            </option>
          ))}
        </select>
      </div>

      <p className="settings-note">
        Note: All transactions are stored in INR (₹) and converted for display.
      </p>
    </div>
  );
}

export default SettingsPage;