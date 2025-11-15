import React from 'react';

// NEW: Accept 'budget' prop
function Dashboard({ transactions, budget }) {

  const totalIncome = transactions
    .filter(tx => tx.type === 'income')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const totalExpenses = transactions
    .filter(tx => tx.type === 'expense')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const balance = totalIncome - totalExpenses;

  // NEW: Calculate budget status
  const isOverBudget = totalExpenses > budget;
  const progress = Math.min((totalExpenses / budget) * 100, 100); // Cap at 100% for the bar

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
          <p style={{ color: balance >= 0 ? '#2ecc71' : '#e74c3c' }}>
            ₹{balance}
          </p>
        </div>
        
        {/* NEW: Budget Goal Card */}
        <div className="card budget-card">
          <h3>Monthly Budget</h3>
          <p>₹{budget}</p>
          <div className="budget-info">
            <span style={{ color: isOverBudget ? 'red' : 'green', fontSize: '0.8em' }}>
              {isOverBudget ? 'Over Budget!' : 'Within Budget'}
            </span>
            {/* Simple HTML5 Progress Bar */}
            <progress value={progress} max="100" style={{ width: '100%' }}></progress>
            <small>{Math.round(progress)}% Used</small>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;