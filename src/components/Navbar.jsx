import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <Rocket className="logo-icon" />
                    <span>NovaStack</span>
                </Link>

                <div className="navbar-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>
                        About
                    </Link>
                    <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>
                        Contact
                    </Link>
                    <div className="mobile-cta">
                        <Button to="/contact" variant="primary" onClick={closeMenu}>Get Started</Button>
                    </div>
                </div>

                <div className="desktop-cta">
                    <Button to="/contact" variant="primary">Get Started</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
