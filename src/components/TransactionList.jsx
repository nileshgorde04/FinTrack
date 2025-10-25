import React from 'react';

function TransactionList({ transactions, onDeleteTransaction }) {
  
  // Helper to format the date
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
            {/* NEW: Wrapper for description and date */}
            <div className="transaction-info">
              <span>{transaction.description}</span>
              {/* NEW: Display the formatted date */}
              <span className="transaction-date">{formatDate(transaction.date)}</span>
            </div>
            
            <div className="transaction-details">
              <span className={transaction.type === 'income' ? 'income' : 'expense'}>
                {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount}
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