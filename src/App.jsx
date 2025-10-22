import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Import Pages and Layout
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import AddTransaction from './components/AddTransaction'; // We can re-use this as a "page"

function App() {
  // --- State Management ---
  // This state is now shared across all pages!
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Salary', amount: 50000, type: 'income' },
    { id: 2, description: 'Starbucks', amount: 350, type: 'expense' },
    { id: 3, description: 'Book', amount: 800, type: 'expense' },
    { id: 4, description: 'Groceries', amount: 2500, type: 'expense' },
    { id: 5, description: 'Freelance', amount: 7000, type: 'income' },
    { id: 6, description: 'Movie', amount: 600, type: 'expense' },
  ]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]); // Add to the beginning of the list
  };

  // --- Routing Setup ---
  return (
    <BrowserRouter>
      <Routes>
        {/* All pages will render inside the Layout component */}
        <Route path="/" element={<Layout />}>
          
          {/* The default page (path="/") */}
          <Route 
            index 
            element={<DashboardPage transactions={transactions} />} 
          />
          
          {/* The "Add Transaction" page (path="/add") */}
          <Route 
            path="add" 
            element={<AddTransaction onAddTransaction={handleAddTransaction} />} 
          />

          {/* You can add more pages later, like: */}
          {/* <Route path="budgets" element={<BudgetPage />} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;