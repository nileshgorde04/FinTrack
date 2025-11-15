import React from 'react';
import Dashboard from '../components/Dashboard';
import ExpenseChart from '../components/ExpenseChart'; 
import MonthlyExpenseChart from '../components/MonthlyExpenseChart';
import TransactionList from '../components/TransactionList';

// NEW: Accept 'budget' prop
function DashboardPage({ transactions, budget, onDeleteTransaction }) {
  return (
    <div className="dashboard-page">
      {/* NEW: Pass 'budget' to Dashboard */}
      <Dashboard transactions={transactions} budget={budget} />
      
      <div className="charts-wrapper">
        <ExpenseChart transactions={transactions} />
        <MonthlyExpenseChart transactions={transactions} />
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <TransactionList 
          transactions={transactions}
          onDeleteTransaction={onDeleteTransaction} 
        /> 
      </div>
    </div>
  );
}

export default DashboardPage;