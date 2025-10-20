import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>My Dashboard</h2>
      <div className="summary-cards">
        <div className="card">
          <h3>Total Income</h3>
          <p>₹0</p>
        </div>
        <div className="card">
          <h3>Total Expenses</h3>
          <p>₹0</p>
        </div>
        <div className="card">
          <h3>Balance</h3>
          <p>₹0</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;