import React from 'react';
import Dashboard from '../components/Dashboard';
import ExpenseChart from '../components/ExpenseChart'; 
import MonthlyExpenseChart from '../components/MonthlyExpenseChart';
import TransactionList from '../components/TransactionList';
import SavingsStreak from '../components/SavingsStreak';

// NEW: Accept currency prop
function DashboardPage({ transactions, budget, onDeleteTransaction, currency }) {
  return (
    <div className="dashboard-page">
      <h2>My Dashboard</h2>
      <div className="summary-cards">
        {/* NEW: Pass currency down */}
        <Dashboard transactions={transactions} budget={budget} currency={currency} />
        <SavingsStreak transactions={transactions} />
      </div>

      <div className="charts-wrapper">
        {/* NEW: Pass currency down */}
        <ExpenseChart transactions={transactions} currency={currency} />
        <MonthlyExpenseChart transactions={transactions} currency={currency} />
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <TransactionList 
          transactions={transactions}
          onDeleteTransaction={onDeleteTransaction} 
          currency={currency} /* NEW: Pass currency down */
        /> 
      </div>
    </div>
  );
}

export default DashboardPage;