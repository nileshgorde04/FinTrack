import React from 'react';
import Dashboard from '../components/Dashboard';
import ExpenseChart from '../components/ExpenseChart'; 
import TransactionList from '../components/TransactionList';

// NEW: Accept onDeleteTransaction as a prop
function DashboardPage({ transactions, onDeleteTransaction }) {
  return (
    <div className="dashboard-page">
      <Dashboard transactions={transactions} />
      <ExpenseChart transactions={transactions} />
      
      <div style={{ marginTop: '30px' }}>
        {/* NEW: Pass the delete function to TransactionList */}
        <TransactionList 
          transactions={transactions} // Show all transactions
          onDeleteTransaction={onDeleteTransaction} // Pass it down
        /> 
      </div>
    </div>
  );
}

export default DashboardPage;