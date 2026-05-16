import React from 'react';
import './Products.css';

const Products = () => {
  // Generate 10 dummy products
  const products = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Hoodie 0${i + 1}`,
    price: '$' + (120 + i * 5)
  }));

  return (
    <div className="products-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-text">
          ALTARSTATE.<span className="registered">®</span>
        </h1>
      </div>

      <div className="bottom-layout">
        <div className="footer-line"></div>

        {/* Text Links below the line */}
        <div className="products-footer">
          <div className="footer-content">
            <span className="footer-item">ALTARSTATE</span>
            <span className="footer-item">WHY</span>
            <span className="footer-item">VISIT ++ WEBSITE</span>
            <span className="footer-item">© 2026</span>
          </div>
        </div>

        {/* Products Horizontal Slider */}
        <div className="products-slider">
          {products.map(product => (
            <div key={product.id} className="slider-item">
              <div className="slider-image-placeholder">
                <span>Img {product.id}</span>
              </div>
              <div className="slider-info">
                <span>{product.name}</span>
                <span>{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
