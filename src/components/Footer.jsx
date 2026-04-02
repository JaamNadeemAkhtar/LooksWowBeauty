import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-col brand-col">
                    <Link to="/" className="footer-logo">LOOKSWOW BEAUTY</Link>
                    <p className="footer-desc">
                        Worldwide delivery on premium aesthetic beauty and cosmetics products. Elevate your everyday look with high-end, premium selections.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-col links-col">
                    <h4 className="footer-title">Explore</h4>
                    <ul className="footer-links">
                        <li><Link to="/products">Shop All</Link></li>
                        <li><Link to="/about">Our Story</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-col links-col">
                    <h4 className="footer-title">Assistance</h4>
                    <ul className="footer-links">
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Worldwide Delivery</a></li>
                        <li><a href="#">Returns & Exchanges</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                <div className="footer-col newsletter-col">
                    <h4 className="footer-title">Join The Club</h4>
                    <p>Subscribe for exclusive offers, updates, and 10% off your first order.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Your email address" required />
                        <button type="submit" aria-label="Subscribe"><Mail size={18} /></button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} LooksWow Beauty All rights reserved.</p>
                <div className="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
