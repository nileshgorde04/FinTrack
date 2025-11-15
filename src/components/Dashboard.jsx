import React from 'react';
// NEW: Import our formatter
import { formatCurrency } from '../utils/currencyFormatter';

// NEW: Accept currency prop
function Dashboard({ transactions, budget, currency }) {

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
    <>
      <div className="card">
        <h3>Total Income</h3>
        {/* NEW: Use formatter */}
        <p>{formatCurrency(totalIncome, currency)}</p>
      </div>
      <div className="card">
        <h3>Total Expenses</h3>
        {/* NEW: Use formatter */}
        <p>{formatCurrency(totalExpenses, currency)}</p>
      </div>
      <div className="card">
        <h3>Balance</h3>
        <p style={{ color: balance >= 0 ? '#2ecc71' : '#e74c3c' }}>
          {/* NEW: Use formatter */}
          {formatCurrency(balance, currency)}
        </p>
      </div>
      
      <div className="card budget-card">
        <h3>Monthly Budget</h3>
        {/* NEW: Use formatter */}
        <p>{formatCurrency(budget, currency)}</p>
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