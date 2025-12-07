import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <Rocket className="logo-icon" size={24} />
                            <span>NovaStack</span>
                        </Link>
                        <p className="footer-desc">
                            Building the future of digital experiences with cutting-edge technology and premium design.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>Company</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="/services/web">Web Development</Link></li>
                            <li><Link to="/services/mobile">Mobile Apps</Link></li>
                            <li><Link to="/services/cloud">Cloud Solutions</Link></li>
                            <li><Link to="/services/consulting">Consulting</Link></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h3>Connect</h3>
                        <div className="social-icons">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="mailto:hello@novastack.com" aria-label="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} NovaStack Technologies. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
