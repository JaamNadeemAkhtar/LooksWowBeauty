import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="nav-left">
                    <Link to="/" className="logo">LOOKSWOW BEAUTY</Link>
                </div>

                <div className={`nav-center ${mobileMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Shop</Link></li>
                        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Our Story</Link></li>
                        <li><Link to="/reviews" className={location.pathname === '/reviews' ? 'active' : ''}>Reviews</Link></li>
                        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                    </ul>
                </div>

                <div className="nav-right">
                    <div className="cart-icon">
                        <ShoppingBag size={24} />
                        <span className="cart-count">0</span>
                    </div>
                    <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
