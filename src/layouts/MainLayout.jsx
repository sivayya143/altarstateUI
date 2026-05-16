import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/theme.css';

const MainLayout = () => {
  const [theme, setTheme] = useState('black'); // 'black', 'white', 'red'

  useEffect(() => {
    // Apply the theme class to the body for a full-screen effect
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <div 
      className={`layout theme-${theme}`} 
      style={{ 
        minHeight: '100vh', 
        width: '100vw', 
        backgroundColor: 'var(--color-bg)', 
        color: 'var(--color-text)', 
        transition: 'background-color 0.4s ease, color 0.4s ease' 
      }}
    >
      <Header currentTheme={theme} onThemeChange={setTheme} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
