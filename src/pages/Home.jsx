import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const fadeUpVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content container">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariant}
                        className="hero-text-box"
                    >
                        <span className="subtitle">LooksWow Beauty</span>
                        <h1 className="hero-title">Discover Your Truest Glow.</h1>
                        <p className="hero-desc">Elevate your daily routine with our high-end, cruelty-free cosmetic selections designed for every skin tone.</p>
                        <div className="hero-actions">
                            <Link to="/products" className="btn btn-primary">Shop Collection</Link>
                            <Link to="/about" className="btn btn-outline">Our Story</Link>
                        </div>
                    </motion.div>
                </div>
                <div className="hero-image">
                    <motion.img
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        src="/lipstick.png"
                        alt="Premium red lipstick"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="features section">
                <div className="container">
                    <motion.div
                        className="features-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                    >
                        <motion.div className="feature-card" variants={fadeUpVariant}>
                            <div className="feature-icon"><Globe size={32} /></div>
                            <h3>Worldwide Delivery</h3>
                            <p>Premium beauty delivered securely right to your doorstep, anywhere in the world.</p>
                        </motion.div>
                        <motion.div className="feature-card" variants={fadeUpVariant}>
                            <div className="feature-icon"><ShieldCheck size={32} /></div>
                            <h3>Cruelty Free</h3>
                            <p>Ethically sourced and never tested on animals. Beauty with a clean conscience.</p>
                        </motion.div>
                        <motion.div className="feature-card" variants={fadeUpVariant}>
                            <div className="feature-icon"><Sparkles size={32} /></div>
                            <h3>Premium Quality</h3>
                            <p>Formulated with top-tier aesthetic ingredients for long-lasting, flawless wear.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Collection */}
            <section className="featured-collection section">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUpVariant}
                        className="text-center"
                    >
                        <h2 className="section-title">Iconic Essentials</h2>
                    </motion.div>

                    <motion.div
                        className="product-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div className="product-card" variants={fadeUpVariant}>
                            <div className="product-image-container">
                                <img src="/skincare.png" alt="Hydrating Face Cream" />
                                <div className="product-overlay">
                                    <Link to="/products" className="btn btn-primary">Quick View</Link>
                                </div>
                            </div>
                            <div className="product-info">
                                <h4>Hydrating Glo Cream</h4>
                                <p className="price">RS8500.00</p>
                            </div>
                        </motion.div>

                        <motion.div className="product-card" variants={fadeUpVariant}>
                            <div className="product-image-container">
                                <img src="/lipstick.png" alt="Rose Gold Lipstick" />
                                <div className="product-overlay">
                                    <Link to="/products" className="btn btn-primary">Quick View</Link>
                                </div>
                            </div>
                            <div className="product-info">
                                <h4>Obsession Velvet Lip</h4>
                                <p className="price">RS4200.00</p>
                            </div>
                        </motion.div>

                        <motion.div className="product-card" variants={fadeUpVariant}>
                            <div className="product-image-container">
                                <img src="/eyeshadow.png" alt="Eyeshadow Palette" />
                                <div className="product-overlay">
                                    <Link to="/products" className="btn btn-primary">Quick View</Link>
                                </div>
                            </div>
                            <div className="product-info">
                                <h4>Midnight Glow Palette</h4>
                                <p className="price">RS6500.00</p>
                            </div>
                        </motion.div>

                        <motion.div className="product-card" variants={fadeUpVariant}>
                            <div className="product-image-container">
                                <img src="/perfume_damn.png" alt="DAMN. Perfume" />
                                <div className="product-overlay">
                                    <Link to="/products" className="btn btn-primary">Quick View</Link>
                                </div>
                            </div>
                            <div className="product-info">
                                <h4>DAMN. Perfume</h4>
                                <p className="price">RS1200.00</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="philosophy">
                <div className="philosophy-container">
                    <div className="philosophy-image">
                        <img src="/eyeshadow.png" alt="Beauty aesthetic" />
                    </div>
                    <div className="philosophy-content">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUpVariant}
                        >
                            <h2 className="section-title">Redefining Elegance</h2>
                            <p>LooksWow Beauty was born out of a passion to deliver high-performance cosmetic products that celebrate your uniqueness. With worldwide delivery, we ensure that everyone, everywhere, has access to premium formulas.</p>
                            <Link to="/about" className="discover-link">
                                Discover Our Philosophy <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
