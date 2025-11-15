import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout({ theme, toggleTheme }) {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>FinTrack</h1>
        
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/add">Add Transaction</Link>
          {/* NEW: Link to the Groups page */}
          <Link to="/groups">Groups</Link>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;