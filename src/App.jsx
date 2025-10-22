import React from 'react';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>FinTrack</h1>
      </header>
      <main className="app-main">
        <Dashboard />
        <div className="content-wrapper">
          <AddTransaction />
          <TransactionList />
        </div>
      </main>
    </div>
  );
}

export default App;
