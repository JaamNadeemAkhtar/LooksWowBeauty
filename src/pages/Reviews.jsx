import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Reviews.css';

const reviewsData = [
    { id: 1, author: "Emma S.", location: "New York, USA", rating: 5, text: "The Obsession Velvet Lip is exactly as described. Never dries out my lips, and the color is gorgeous!", image: "/lipstick.png" },
    { id: 2, author: "Isabella R.", location: "Milan, IT", rating: 5, text: "I received my skincare jar all the way in Italy within 3 days! The cream is absolutely perfect.", image: "/skincare.png" },
    { id: 3, author: "Mei L.", location: "Tokyo, JP", rating: 5, text: "Midnight Glow palette has the best pigmentation I've seen in a while. Luxurious packaging.", image: "/eyeshadow.png" },
    { id: 4, author: "Sarah W.", location: "London, UK", rating: 4, text: "Shipping was exceptionally quick. Love the product, though I wish there were more neutral shades.", image: "/lipstick.png" }
];

const Reviews = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="page fade-in">
            <div className="page-header reviews-header">
                <div className="page-header-content text-center">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="section-title">Customer Chronicles</motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>See what the world has to say about our aesthetic cosmetics.</motion.p>
                </div>
            </div>

            <div className="container section">
                <div className="reviews-summary text-center">
                    <h2>4.9 / 5.0</h2>
                    <div className="stars">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={28} fill="currentColor" color="var(--color-primary)" />)}
                    </div>
                    <p>Based on over 10,000 verified global reviews.</p>
                </div>

                <motion.div
                    className="reviews-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                >
                    {reviewsData.map(review => (
                        <motion.div key={review.id} className="review-card" variants={fadeUp}>
                            <div className="review-top">
                                <div className="reviewer-info">
                                    <h4>{review.author}</h4>
                                    <span>{review.location}</span>
                                </div>
                                <div className="review-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} color={i < review.rating ? "var(--color-accent)" : "#ddd"} />
                                    ))}
                                </div>
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-product">
                                <img src={review.image} alt="Purchased Product" />
                                <span>Verified Buyer</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Reviews;
