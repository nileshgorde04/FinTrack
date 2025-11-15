import React from 'react';
import { formatCurrency } from '../utils/currencyFormatter';
function GroupSummary({ members, transactions, currency }) {
  
  // 1. Calculate totals (logic is unchanged)
  const totalSpend = transactions.reduce((acc, tx) => acc + tx.amount, 0);
  const memberCount = members.length;
  const sharePerPerson = memberCount > 0 ? totalSpend / memberCount : 0;

  // 2. Calculate how much each person paid (logic is unchanged)
  const paidByEach = members.reduce((acc, member) => {
    acc[member] = 0;
    return acc;
  }, {});
  transactions.forEach(tx => {
    if (paidByEach.hasOwnProperty(tx.paidBy)) {
      paidByEach[tx.paidBy] += tx.amount;
    }
  });

  // 3. Calculate final balances (logic is unchanged)
  const balances = members.map(member => {
    const paid = paidByEach[member];
    const balance = paid - sharePerPerson;
    return { name: member, balance: balance };
  });

  return (
    <div className="group-summary-content">
      <h4>Group Balances</h4>
      <p>
        {/* NEW: Use formatter */}
        Total Spent: <strong>{formatCurrency(totalSpend, currency)}</strong> | 
        Share per Person: <strong>{formatCurrency(sharePerPerson, currency)}</strong>
      </p>
      
      <ul className="balance-list">
        {balances.map(item => (
          <li key={item.name}>
            <span>{item.name}</span>
            {item.balance >= 0 ? (
              <span className="positive-balance">
                {/* NEW: Use formatter */}
                is owed {formatCurrency(item.balance, currency)}
              </span>
            ) : (
              <span className="negative-balance">
                {/* NEW: Use formatter */}
                owes {formatCurrency(Math.abs(item.balance), currency)}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroupSummary;
