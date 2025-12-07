import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
            }, 1500);
        }
    };

    return (
        <div className="contact-page">
            {/* Page Header */}
            <section className="page-header contact-header">
                <div className="container text-center">
                    <h1 className="page-title animate-fade-in">Get in Touch</h1>
                    <p className="page-subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        Have a project in mind? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="section contact-section">
                <div className="container">
                    <div className="grid grid-cols-2 gap-lg contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2 className="section-title">Contact Information</h2>
                            <p className="text-muted mb-lg">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="info-list">
                                <div className="info-item">
                                    <div className="info-icon">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3>Email</h3>
                                        <p>hello@novastack.com</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3>Phone</h3>
                                        <p>+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3>Office</h3>
                                        <p>123 Tech Boulevard, Suite 100<br />San Francisco, CA 94107</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-connect">
                                <h3>Follow Us</h3>
                                <div className="social-links">
                                    {/* Social icons would go here, reusing footer style or similar */}
                                    <a href="#" className="social-link">Twitter</a>
                                    <a href="#" className="social-link">LinkedIn</a>
                                    <a href="#" className="social-link">Instagram</a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-container">
                            {isSuccess ? (
                                <div className="success-message animate-fade-in">
                                    <CheckCircle size={64} color="var(--color-accent)" />
                                    <h2>Message Sent!</h2>
                                    <p>Thank you for contacting us. We'll be in touch shortly.</p>
                                    <Button onClick={() => setIsSuccess(false)} variant="outline">Send Another Message</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={errors.name ? 'error' : ''}
                                            placeholder="Your Name"
                                        />
                                        {errors.name && <span className="error-text"><AlertCircle size={14} /> {errors.name}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={errors.email ? 'error' : ''}
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <span className="error-text"><AlertCircle size={14} /> {errors.email}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject">Subject (Optional)</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Project Inquiry"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={errors.message ? 'error' : ''}
                                            placeholder="Tell us about your project..."
                                            rows="5"
                                        ></textarea>
                                        {errors.message && <span className="error-text"><AlertCircle size={14} /> {errors.message}</span>}
                                    </div>

                                    <Button type="submit" variant="primary" disabled={isSubmitting} className="submit-btn">
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        {!isSubmitting && <Send size={18} style={{ marginLeft: '8px' }} />}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
