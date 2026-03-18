import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <div className="page fade-in">
            <div className="page-header contact-header">
                <div className="page-header-content text-center">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="section-title">Get In Touch</motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>We're here to assist you, worldwide.</motion.p>
                </div>
            </div>

            <div className="container section contact-content">
                <motion.div
                    className="contact-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                >
                    <motion.div className="contact-info" variants={fadeUp}>
                        <h2 className="section-title text-left">Customer Service</h2>
                        <p className="contact-desc">
                            Whether you have questions about an international order, our aesthetic formulas, or looking for product recommendations, our specialists are ready to help.
                        </p>

                        <div className="contact-methods">
                            <div className="method">
                                <div className="method-icon"><Mail size={24} /></div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>support@lookswowbeauty.com</p>
                                </div>
                            </div>
                            <div className="method">
                                <div className="method-icon"><Phone size={24} /></div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+1 (800) 123-WOWB</p>
                                    <span>Mon-Fri: 9am - 8pm EST</span>
                                </div>
                            </div>
                            <div className="method">
                                <div className="method-icon"><MapPin size={24} /></div>
                                <div>
                                    <h4>Mailing Address</h4>
                                    <p>123 Aesthetic Avenue, Suite 100</p>
                                    <p>New York, NY 10001, USA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="contact-form-wrapper" variants={fadeUp}>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <h3>Send us a message</h3>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Jane Doe" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="jane@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Order Number (Optional)</label>
                                <input type="text" placeholder="#LWB12345" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="How can we help you today?" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
