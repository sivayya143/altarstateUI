import React from 'react';
import './Bag.css';

const Bag = () => {
  return (
    <div className="bag-container">
      {/* First Part: YOUR BAG */}
      <section className="bag-hero">
        <h1 className="huge-text">YOUR BAG</h1>
      </section>

      {/* Second Part: Empty State Message */}
      <section className="bag-empty-message">
        <h2>Not even one thing?</h2>
        <h2 className="text-muted">That's sad</h2>
      </section>

      {/* Third Part: Footer with Separation Line */}
      <footer className="bag-footer-section">
        <div className="footer-line-full"></div>
        <div className="footer-grid">
          <div className="footer-col">
            <span className="brand-name">++ altarstate</span>
            <span className="footer-text">All rights reserved © 2026</span>
          </div>
          <div className="footer-col">
            <span className="footer-text">Libertad 2529</span>
            <span className="footer-text">Office 102</span>
            <span className="footer-text">Montevideo, Uruguay</span>
          </div>
          <div className="footer-col">
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
          <div className="footer-col">
            <a href="#" className="footer-link">Dribbble</a>
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">LinkedIn</a>
            <a href="#" className="footer-link">Twitter (X)</a>
          </div>
          <div className="footer-col">
            <a href="#" className="footer-link">Work</a>
            <a href="#" className="footer-link">Services</a>
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Careers</a>
          </div>
          <div className="footer-col">
            <a href="#" className="footer-link">Let's talk</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bag;
