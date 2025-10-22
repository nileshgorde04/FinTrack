import React from 'react';

// Accept the transactions list as a prop
function Dashboard({ transactions }) {

  // Calculate totals
  const totalIncome = transactions
    .filter(tx => tx.type === 'income')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const totalExpenses = transactions
    .filter(tx => tx.type === 'expense')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="dashboard">
      <h2>My Dashboard</h2>
      <div className="summary-cards">
        <div className="card">
          <h3>Total Income</h3>
          <p>₹{totalIncome}</p>
        </div>
        <div className="card">
          <h3>Total Expenses</h3>
          <p>₹{totalExpenses}</p>
        </div>
        <div className="card">
          <h3>Balance</h3>
          {/* Change text color based on balance */}
          <p style={{ color: balance >= 0 ? '#2ecc71' : '#e74c3c' }}>
            ₹{balance}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;