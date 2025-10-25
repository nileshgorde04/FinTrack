import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Import Pages and Layout
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import AddTransaction from './components/AddTransaction'; 

function App() {
  // --- State Management ---
  // NEW: Added 'date' property to initial state
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Salary', amount: 50000, type: 'income', date: '2025-10-01' },
    { id: 2, description: 'Starbucks', amount: 350, type: 'expense', date: '2025-10-02' },
    { id: 3, description: 'Book', amount: 800, type: 'expense', date: '2025-10-03' },
    { id: 4, description: 'Groceries', amount: 2500, type: 'expense', date: '2025-10-03' },
    { id: 5, description: 'Freelance', amount: 7000, type: 'income', date: '2025-09-28' },
    { id: 6, description: 'Movie', amount: 600, type: 'expense', date: '2025-09-25' },
  ]);

  const handleAddTransaction = (newTransaction) => {
    // This function already works, as newTransaction now contains the date
    setTransactions([newTransaction, ...transactions]); 
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };

  // --- Routing Setup ---
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route 
            index 
            element={
              <DashboardPage 
                transactions={transactions} 
                onDeleteTransaction={handleDeleteTransaction} 
              />
            } 
          />
          
          <Route 
            path="add" 
            element={<AddTransaction onAddTransaction={handleAddTransaction} />} 
          />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;