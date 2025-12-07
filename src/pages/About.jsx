import React from 'react';
import { Users, Target, Eye, Award } from 'lucide-react';
import Button from '../components/Button';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container text-center">
                    <h1 className="page-title animate-fade-in">About NovaStack</h1>
                    <p className="page-subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        Pioneering the future of technology with passion and precision.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="section story-section">
                <div className="container">
                    <div className="grid grid-cols-2 gap-lg items-center">
                        <div className="story-content">
                            <h2 className="section-title">Who We Are</h2>
                            <p className="text-muted">
                                Founded in 2020, NovaStack Technologies emerged from a simple idea: that technology should be an enabler, not a barrier. We started as a small team of passionate developers and have grown into a global agency delivering world-class digital solutions.
                            </p>
                            <p className="text-muted" style={{ marginTop: '1rem' }}>
                                Our journey is defined by our commitment to excellence and our obsession with user experience. We don't just write code; we craft digital ecosystems that drive growth and innovation for our partners.
                            </p>
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <h3>5+</h3>
                                    <p>Years Experience</p>
                                </div>
                                <div className="stat-item">
                                    <h3>100+</h3>
                                    <p>Projects Delivered</p>
                                </div>
                                <div className="stat-item">
                                    <h3>50+</h3>
                                    <p>Team Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="story-image">
                            <div className="image-placeholder">
                                <div className="placeholder-content">
                                    <Users size={64} color="var(--color-primary)" />
                                    <span>Our Office Culture</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section mission-section">
                <div className="container">
                    <div className="grid grid-cols-2 gap-lg">
                        <div className="mission-card">
                            <div className="card-icon">
                                <Target size={32} />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To empower businesses by democratizing access to cutting-edge technology, ensuring that every organization, regardless of size, can leverage the power of digital transformation.
                            </p>
                        </div>
                        <div className="mission-card">
                            <div className="card-icon">
                                <Eye size={32} />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To be the global standard for software excellence, where innovation meets reliability, creating a world where digital interactions are seamless, secure, and meaningful.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section team-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Meet The Team</h2>
                        <p className="section-subtitle">The brilliant minds behind our success</p>
                    </div>

                    <div className="grid grid-cols-3 gap-lg team-grid">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="team-card">
                                <div className="team-image">
                                    <div className="avatar-placeholder">
                                        <Users size={40} color="var(--color-text-muted)" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h3>{item === 1 ? 'Alex Morgan' : item === 2 ? 'Sarah Chen' : 'David Kim'}</h3>
                                    <p className="team-role">{item === 1 ? 'CEO & Founder' : item === 2 ? 'Lead Engineer' : 'Head of Design'}</p>
                                    <p className="team-bio">Passionate about building scalable systems and fostering a culture of innovation.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-mini-section">
                <div className="container text-center">
                    <h2>Want to join our journey?</h2>
                    <div className="flex justify-center gap-sm" style={{ marginTop: '2rem' }}>
                        <Button to="/contact" variant="primary">Contact Us</Button>
                        <Button to="/services" variant="outline">View Services</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
