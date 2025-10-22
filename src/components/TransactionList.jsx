import React from 'react';

// Accept the transactions list as a prop
function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h2>Recent Transactions</h2>
      <ul>
        {/* Map over the transactions array */}
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <span>{transaction.description}</span>
            {/* Check the type and apply the correct class.
              Display a '+' for income and '-' for expense.
            */}
            <span className={transaction.type === 'income' ? 'income' : 'expense'}>
              {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;