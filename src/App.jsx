import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import AddTransaction from './components/AddTransaction'; 
import GroupsPage from './pages/GroupsPage';
import GroupDetailPage from './pages/GroupDetailPage';
import SettingsPage from './pages/SettingsPage';

const currencyOptions = [
  { code: 'INR', symbol: '₹', rate: 1 },
  { code: 'USD', symbol: '$', rate: 0.012 },
  { code: 'EUR', symbol: '€', rate: 0.011 },
];

function App() {
  // ... (all other state: transactions, budget, theme, groups)
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
  const [groups, setGroups] = useState([
    { id: 1, name: 'Roommates', members: ['Nilesh', 'Rohan', 'Anya'], transactions: [
      { id: 101, description: 'Pizza', amount: 800, paidBy: 'Nilesh' },
      { id: 102, description: 'Electricity Bill', amount: 2500, paidBy: 'Anya' },
    ]},
    { id: 2, name: 'Goa Trip', members: ['Anya', 'David', 'Nilesh'], transactions: [] }
  ]);
  const [currency, setCurrency] = useState(currencyOptions[0]);

  // ... (all handler functions: toggleTheme, handleAddTransaction, etc.)
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
      transactions: []
    };
    setGroups([...groups, newGroup]);
  };
  const handleAddGroupTransaction = (groupId, newTx) => {
    setGroups(groups.map(group => {
      if (group.id === groupId) {
        return {
          ...group,
          transactions: [...group.transactions, newTx]
        };
      }
      return group;
    }));
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
                currency={currency} /* NEW: Pass currency */
              /> 
            } 
          />
          <Route 
            path="add" 
            element={ <AddTransaction onAddTransaction={handleAddTransaction} /> } 
            /* Note: We assume "Add" is always in the base currency (INR) */
          />
          <Route 
            path="groups" 
            element={ <GroupsPage groups={groups} onCreateGroup={handleCreateGroup} /> } 
          />
          <Route 
            path="groups/:groupId" 
            element={ 
              <GroupDetailPage 
                groups={groups} 
                onAddGroupTransaction={handleAddGroupTransaction} 
                currency={currency} /* NEW: Pass currency */
              /> 
            }
          />
          <Route
            path="settings"
            element={ <SettingsPage currentCurrency={currency} setCurrency={setCurrency} options={currencyOptions} /> }
          />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;