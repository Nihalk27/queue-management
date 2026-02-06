import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../App.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Section 1: Brand details */}
        <div className="footer-section">
          <h3>The Car Washing Centre</h3>
          <p>Premium care for your vehicle. We use eco-friendly products and state-of-the-art equipment to make your car look brand new.</p>
          <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#666' }}>
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#services">Our Services</a>
          <a href="#pricing">Pricing Plans</a>
          <a href="#booking">Book Appointment</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Support</a>
        </div>

        {/* Section 3: Contact & Social */}
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <p style={{ marginBottom: '1rem' }}>
            123 Auto Lane, Pimpri-Chinchwad<br />
            Pune, Maharashtra 411019<br />
            +91 98765 43210
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;