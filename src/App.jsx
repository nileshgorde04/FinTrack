import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import AddTransaction from './components/AddTransaction'; 
import GroupsPage from './pages/GroupsPage'; // Already imported

function App() {
  // ... (all your existing state: transactions, budget, theme)
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Salary', amount: 50000, type: 'income', date: '2025-10-01' },
    { id: 2, description: 'Starbucks', amount: 350, type: 'expense', date: '2025-10-02' },
    { id: 3, description: 'Book', amount: 800, type: 'expense', date: '2025-10-03' },
    { id: 4, description: 'Groceries', amount: 2500, type: 'expense', date: '2025-10-03' },
    { id: 5, description: 'Freelance', amount: 7000, type: 'income', date: '2025-09-28' },
    { id: 6, description: 'Movie', amount: 600, type: 'expense', date: '2025-09-25' },
  ]);
  const [budget, setBudget] = useState(10000); 
  const [theme, setTheme] = useState('light');
  
  // NEW: State for managing groups
  const [groups, setGroups] = useState([
    { id: 1, name: 'Roommates', members: ['Nilesh', 'Rohan', 'Anya'] },
    { id: 2, name: 'Goa Trip', members: ['Anya', 'David', 'Nilesh'] }
  ]);

  // ... (toggleTheme, useEffect, handleAddTransaction, handleDeleteTransaction)
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  const handleAddTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]); 
  };
  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };
  
  // NEW: Function to create a new group
  const handleCreateGroup = (groupName, membersString) => {
    if (!groupName || !membersString) {
      alert('Please fill in both group name and members.');
      return;
    }
    const membersArray = membersString.split(',').map(name => name.trim());
    const newGroup = {
      id: Date.now(),
      name: groupName,
      members: membersArray,
      // We'll add transactions to groups later
      // transactions: [] 
    };
    setGroups([...groups, newGroup]);
  };


  return (
    <BrowserRouter>
      <Routes>
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
          
          {/* NEW: Pass groups state and create function to GroupsPage */}
          <Route 
            path="groups" 
            element={
              <GroupsPage 
                groups={groups} 
                onCreateGroup={handleCreateGroup} 
              />
            } 
          />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;