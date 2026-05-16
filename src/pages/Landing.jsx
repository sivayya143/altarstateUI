import React from 'react';
import Logo from '../components/Logo';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="logo-wrapper">
        <Logo width="320" />
        <p className="coming-soon">Coming soon</p>
      </div>
    </div>
  );
};

export default Landing;
