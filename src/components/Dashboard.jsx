import React from 'react';

// This component now *only* renders the cards
function Dashboard({ transactions, budget }) {

  const totalIncome = transactions
    .filter(tx => tx.type === 'income')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const totalExpenses = transactions
    .filter(tx => tx.type === 'expense')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const balance = totalIncome - totalExpenses;

  const isOverBudget = totalExpenses > budget;
  const progress = Math.min((totalExpenses / budget) * 100, 100);

  return (
    // Use React.Fragment to return multiple elements
    <>
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
      
      <div className="card budget-card">
        <h3>Monthly Budget</h3>
        <p>₹{budget}</p>
        <div className="budget-info">
          <span style={{ color: isOverBudget ? 'red' : 'green', fontSize: '0.8em' }}>
            {isOverBudget ? 'Over Budget!' : 'Within Budget'}
          </span>
          <progress value={progress} max="100" style={{ width: '100%' }}></progress>
          <small>{Math.round(progress)}% Used</small>
        </div>
      </div>
    </>
  );
}

export default Dashboard;