import React from 'react';
import logo from '../assets/altarstatelogo.png';

const Logo = ({ className = '', width = '320' }) => {
  return (
    <img
      src={logo}
      alt="Altar State Logo"
      className={className}
      style={{ 
        width: `${width}px`, 
        height: 'auto', 
        display: 'block',
        filter: 'var(--logo-filter, none)',
        transition: 'filter 0.4s ease'
      }}
    />
  );
};

export default Logo;
