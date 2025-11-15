import React, { useState, useEffect } from 'react'; // NEW: Import useEffect
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import AddTransaction from './components/AddTransaction'; 

function App() {
  const [transactions, setTransactions] = useState([
    // ... (your existing transactions)
    { id: 1, description: 'Salary', amount: 50000, type: 'income', date: '2025-10-01' },
    { id: 2, description: 'Starbucks', amount: 350, type: 'expense', date: '2025-10-02' },
    { id: 3, description: 'Book', amount: 800, type: 'expense', date: '2025-10-03' },
    { id: 4, description: 'Groceries', amount: 2500, type: 'expense', date: '2025-10-03' },
    { id: 5, description: 'Freelance', amount: 7000, type: 'income', date: '2025-09-28' },
    { id: 6, description: 'Movie', amount: 600, type: 'expense', date: '2025-09-25' },
  ]);
  const [budget, setBudget] = useState(10000); 
  
  // NEW: Theme state
  const [theme, setTheme] = useState('light');

  // NEW: Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // NEW: Effect to update the data-theme attribute on the body
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);


  const handleAddTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]); 
  };
  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* NEW: Pass theme state and toggle function to Layout */}
        <Route path="/" element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
          
          <Route 
            index 
            element={
              <DashboardPage 
                transactions={transactions} 
                budget={budget}
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