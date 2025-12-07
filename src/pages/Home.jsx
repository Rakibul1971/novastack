import React from 'react';
import { ArrowRight, Code, Cloud, Smartphone, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content animate-fade-in">
                        <h1 className="hero-title">
                            Innovate Your <span className="text-gradient">Digital Future</span>
                        </h1>
                        <p className="hero-subtitle">
                            NovaStack Technologies empowers businesses with cutting-edge software solutions.
                            We build scalable, high-performance web and mobile applications tailored to your needs.
                        </p>
                        <div className="hero-actions">
                            <Button to="/contact" variant="primary" size="large">
                                Start Your Project <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                            </Button>
                            <Button to="/about" variant="secondary" size="large">
                                Learn More
                            </Button>
                        </div>
                    </div>
                    <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="visual-circle"></div>
                        <div className="visual-card card-1">
                            <Code size={32} color="var(--color-primary)" />
                            <div>
                                <h4>Clean Code</h4>
                                <p>Scalable Architecture</p>
                            </div>
                        </div>
                        <div className="visual-card card-2">
                            <Cloud size={32} color="var(--color-secondary)" />
                            <div>
                                <h4>Cloud Native</h4>
                                <p>AWS & Azure Ready</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Our Services</h2>
                        <p className="section-subtitle">Comprehensive tech solutions for modern businesses</p>
                    </div>

                    <div className="grid grid-cols-3 gap-lg services-grid">
                        <div className="service-card">
                            <div className="service-icon icon-blue">
                                <Code size={40} />
                            </div>
                            <h3>Web Development</h3>
                            <p>Custom websites and web applications built with React, Next.js, and modern technologies for optimal performance.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon icon-purple">
                                <Smartphone size={40} />
                            </div>
                            <h3>Mobile Solutions</h3>
                            <p>Native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android devices.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon icon-green">
                                <Cloud size={40} />
                            </div>
                            <h3>Cloud Infrastructure</h3>
                            <p>Secure and scalable cloud architecture design, migration, and management services to power your growth.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Client Success Stories</h2>
                        <p className="section-subtitle">What our partners say about working with us</p>
                    </div>

                    <div className="grid grid-cols-2 gap-lg testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                "NovaStack transformed our legacy system into a modern, high-speed platform. Their attention to detail and technical expertise is unmatched."
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">JD</div>
                                <div>
                                    <h4>John Doe</h4>
                                    <p>CTO, TechCorp Inc.</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                "The team delivered our mobile app ahead of schedule and it exceeded all our expectations. Truly professional and a joy to work with."
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">JS</div>
                                <div>
                                    <h4>Jane Smith</h4>
                                    <p>Founder, StartupX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container cta-container text-center">
                    <h2>Ready to Transform Your Business?</h2>
                    <p>Let's build something amazing together. Get in touch with our team today.</p>
                    <Button to="/contact" variant="primary" className="cta-btn">
                        Get a Free Consultation
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
