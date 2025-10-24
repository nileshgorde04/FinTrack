import React from 'react';
import Dashboard from '../components/Dashboard';
import ExpenseChart from '../components/ExpenseChart'; // We will create this
import TransactionList from '../components/TransactionList';

// This page combines components
function DashboardPage({ transactions }) {
  return (
    <div className="dashboard-page">
      <Dashboard transactions={transactions} />
      <ExpenseChart transactions={transactions} />
      
      {/* We can also show the recent transaction list here */}
      <div style={{ marginTop: '30px' }}>
        <TransactionList transactions={transactions.slice(0, 5)} /> 
        {/* Only show the 5 most recent */}
      </div>
    </div>
  );
}

export default DashboardPage;