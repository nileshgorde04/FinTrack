import React, { useState } from 'react'; // Import useState
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import './App.css';

function App() {
  // Master list of all transactions
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Salary', amount: 50000, type: 'income' },
    { id: 2, description: 'Starbucks', amount: 350, type: 'expense' },
    { id: 3, description: 'Book', amount: 800, type: 'expense' },
  ]);

  // Function to add a new transaction
  const handleAddTransaction = (newTransaction) => {
    // Add new transaction to the existing list
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>FinTrack</h1>
      </header>
      <main className="app-main">
        {/* Pass the transactions list to Dashboard */}
        <Dashboard transactions={transactions} />
        
        <div className="content-wrapper">
          {/* Pass the handler function to AddTransaction */}
          <AddTransaction onAddTransaction={handleAddTransaction} />
          
          {/* Pass the transactions list to TransactionList */}
          <TransactionList transactions={transactions} />
        </div>
      </main>
    </div>
  );
}

export default App;