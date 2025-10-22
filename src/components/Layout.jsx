import React from 'react';
// Import Link and Outlet for navigation
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>FinTrack</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/add">Add Transaction</Link>
        </nav>
      </header>
      <main className="app-main">
        {/* Outlet is where the active page will be rendered */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;