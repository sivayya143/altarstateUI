import React from 'react';
import logo from '../assets/altarStateLogo.png';

const Logo = ({ className = '', width = '320' }) => {
  return (
    <img
      src={logo}
      alt="Altar State Logo"
      className={className}
      style={{ width: `${width}px`, height: 'auto', display: 'block' }}
    />
  );
};

export default Logo;
