import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// NEW: Accept theme and toggleTheme as props
function Layout({ theme, toggleTheme }) {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>FinTrack</h1>
        
        {/* NEW: Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/add">Add Transaction</Link>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;