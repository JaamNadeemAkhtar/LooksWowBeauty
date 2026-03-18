import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <div className="page fade-in">
            <div className="page-header about-header">
                <div className="page-header-content text-center">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="section-title">Our Story</motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>Redefining beauty for the modern era.</motion.p>
                </div>
            </div>

            <div className="container section about-content">
                <motion.div
                    className="about-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                >
                    <motion.div className="about-text" variants={fadeUp}>
                        <h2 className="section-title text-left">The LooksWow Philosophy</h2>
                        <p className="lead-text">
                            We believe that premium aesthetic beauty shouldn't be confined by borders. That's why we created LooksWow Beauty.
                        </p>
                        <p>
                            Born from a passion for flawless skin and bold self-expression, we meticulously curate cruelty-free, sustainable cosmetics designed to enhance your natural grace. Our journey started when our founders realized that accessing high-end makeup globally was a challenge.
                        </p>
                        <p>
                            Today, LooksWow delivers luxury directly to your door, no matter where you live in the world. Our formulations are tested extensively to make sure they are inclusive for all skin types.
                        </p>
                        <div className="stats-container">
                            <div className="stat">
                                <h3>100%</h3>
                                <span>Cruelty-Free</span>
                            </div>
                            <div className="stat">
                                <h3>5M+</h3>
                                <span>Global Deliveries</span>
                            </div>
                            <div className="stat">
                                <h3>150+</h3>
                                <span>Countries Served</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="about-image" variants={fadeUp}>
                        <img src="/skincare.png" alt="Our premium aesthetic process" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
