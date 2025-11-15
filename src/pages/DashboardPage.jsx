import React from 'react';
import Dashboard from '../components/Dashboard';
import ExpenseChart from '../components/ExpenseChart'; 
import MonthlyExpenseChart from '../components/MonthlyExpenseChart';
import TransactionList from '../components/TransactionList';
import SavingsStreak from '../components/SavingsStreak';

function DashboardPage({ transactions, budget, onDeleteTransaction }) {
  return (
    <div className="dashboard-page">
      
      {/* NOTE: I am modifying the Dashboard component to *not* render the
        summary-cards wrapper, and instead render it here.
        This allows us to add the SavingsStreak card easily.
      */}
      
      <h2>My Dashboard</h2>
      <div className="summary-cards">
        {/* Pass props to Dashboard */}
        <Dashboard transactions={transactions} budget={budget} />
        
        {/* NEW: Add the SavingsStreak card */}
        <SavingsStreak transactions={transactions} />
      </div>

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