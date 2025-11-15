import React from 'react';
// NEW: Import our formatter
import { formatCurrency } from '../utils/currencyFormatter';

// NEW: Accept currency prop
function TransactionList({ transactions, onDeleteTransaction, currency }) {
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="transaction-list">
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <div className="transaction-info">
              <span>{transaction.description}</span>
              <span className="transaction-date">{formatDate(transaction.date)}</span>
            </div>
            
            <div className="transaction-details">
              <span className={transaction.type === 'income' ? 'income' : 'expense'}>
                {transaction.type === 'income' ? '+' : '-'}
                {/* NEW: Use formatter */}
                {formatCurrency(transaction.amount, currency)}
              </span>
              <button 
                className="delete-btn" 
                onClick={() => onDeleteTransaction(transaction.id)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;