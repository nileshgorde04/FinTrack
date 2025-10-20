import React from 'react';

function TransactionList() {
  return (
    <div className="transaction-list">
      <h2>Recent Transactions</h2>
      <ul>
        <li>
          <span>Starbucks</span>
          <span>-₹350</span>
        </li>
        <li>
          <span>Salary</span>
          <span className="income">+₹50,000</span>
        </li>
      </ul>
    </div>
  );
}

export default TransactionList;