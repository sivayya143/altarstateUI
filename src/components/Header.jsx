import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ currentTheme, onThemeChange }) => {
  const themes = [
    { id: 'black', color: '#050505' },
    { id: 'white', color: '#ffffff' },
    { id: 'red', color: '#e60000' }
  ];

  return (
    <header className="site-header">
      <div className="header-left">
        <Link to="/" className="logo-plus" aria-label="Home">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </Link>
      </div>
      <div className="header-right">
        <div className="header-links">
          <Link to="/products" className="header-link">Shop</Link>
          <Link to="/cart" className="header-link">Bag (0)</Link>
        </div>
        <div className="theme-switchers">
          {themes.map((t) => (
            <button
              key={t.id}
              className={`theme-dot ${currentTheme === t.id ? 'active' : ''} ${t.id === 'white' ? 'border-dot' : ''}`}
              style={{ backgroundColor: t.color }}
              onClick={() => onThemeChange(t.id)}
              aria-label={`Change theme to ${t.id}`}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
