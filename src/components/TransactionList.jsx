import React from 'react';

// NEW: Accept onDeleteTransaction as a prop
function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <div className="transaction-list">
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <span>{transaction.description}</span>
            <div className="transaction-details">
              {/* Check the type and apply the correct class */}
              <span className={transaction.type === 'income' ? 'income' : 'expense'}>
                {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount}
              </span>
              {/* NEW: Add a delete button */}
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