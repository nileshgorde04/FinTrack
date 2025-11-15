import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import GroupSummary from '../components/GroupSummary';
// NEW: Import our formatter
import { formatCurrency } from '../utils/currencyFormatter';

// NEW: Accept currency prop
function GroupDetailPage({ groups, onAddGroupTransaction, currency }) {
  const { groupId } = useParams();
  const group = groups.find(g => g.id === parseInt(groupId));

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [paidBy, setPaidBy] = useState(group ? group.members[0] : '');

  const handleSubmit = (e) => {
    // ... (submit logic remains the same, amount is stored in INR)
    e.preventDefault();
    if (!description || !amount || !paidBy) {
      alert('Please fill in all fields.');
      return;
    }
    const newTx = {
      id: Date.now(),
      description: description,
      amount: parseFloat(amount),
      paidBy: paidBy
    };
    onAddGroupTransaction(group.id, newTx);
    setDescription('');
    setAmount('');
  };

  if (!group) {
    // ... (not found logic)
    return (
      <div className="group-detail-page card">
        <h2>Group Not Found</h2>
        <p>Sorry, we couldn't find that group.</p>
        <Link to="/groups">← Back to all groups</Link>
      </div>
    );
  }

  return (
    <div className="group-detail-page">
      {/* ... (header and members list) ... */}
      <div className="group-header">
        <h2>{group.name}</h2>
        <Link to="/groups">← Back to all groups</Link>
      </div>
      <p className="members-list">
        <strong>Members:</strong> {group.members.join(', ')}
      </p>

      <div className="group-content">
        <div className="card add-group-expense">
          {/* ... (Add Group Expense Form) ... */}
          <h3>Add Group Expense</h3>
          <p style={{fontSize: '0.8em', color: 'var(--text-color-light)', textAlign: 'center', marginTop: '-10px'}}>Amount will be added in INR</p>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Description (e.g., 'Pizza')" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input 
              type="number" 
              placeholder="Amount (in ₹)" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <label>Paid by:</label>
            <select
              value={paidBy}
              onChange={(e) => setPaidBy(e.target.value)}
            >
              {group.members.map(member => (
                <option key={member} value={member}>{member}</option>
              ))}
            </select>
            <button type="submit">Add Expense</button>
          </form>
        </div>
        
        <div className="card group-transaction-list">
          <h3>Group Transactions</h3>
          {group.transactions.length === 0 ? (
            <p>No transactions for this group yet.</p>
          ) : (
            <ul>
              {group.transactions.map(tx => (
                <li key={tx.id}>
                  <span>{tx.description}</span>
                  <div className="group-tx-details">
                    {/* NEW: Use formatter */}
                    <span>{formatCurrency(tx.amount, currency)}</span>
                    <small>Paid by {tx.paidBy}</small>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="card group-summary">
        <h3>Group Summary</h3>
        <GroupSummary 
          members={group.members} 
          transactions={group.transactions} 
          currency={currency} /* NEW: Pass currency down */
        />
      </div>
    </div>
  );
}

export default GroupDetailPage;