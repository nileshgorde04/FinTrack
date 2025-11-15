import React from 'react';
import Dashboard from '../components/Dashboard';
import ExpenseChart from '../components/ExpenseChart'; 
import MonthlyExpenseChart from '../components/MonthlyExpenseChart'; // NEW: Import the bar chart
import TransactionList from '../components/TransactionList';

function DashboardPage({ transactions, onDeleteTransaction }) {
  return (
    <div className="dashboard-page">
      {/* Card Summaries */}
      <Dashboard transactions={transactions} />
      
      {/* NEW: Wrapper for the two charts */}
      <div className="charts-wrapper">
        {/* Pie Chart */}
        <ExpenseChart transactions={transactions} />
        {/* Bar Chart */}
        <MonthlyExpenseChart transactions={transactions} />
      </div>
      
      {/* Transaction List */}
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