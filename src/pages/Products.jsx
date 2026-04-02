import React from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import './Products.css';

const products = [
    { id: 1, name: 'Obsession Velvet Lip', category: 'Lips', price: 'RS4200.00', image: '/lipstick.png' },
    { id: 2, name: 'Hydrating Glo Cream', category: 'Skincare', price: 'RS8500.00', image: '/skincare.png' },
    { id: 3, name: 'Midnight Glow Palette', category: 'Eyes', price: 'RS6500.00', image: '/eyeshadow.png' },
    { id: 4, name: 'Rose Petal Tint', category: 'Lips', price: 'RS2800.00', image: '/lipstick.png' },
    { id: 5, name: 'Luminous Eye Primer', category: 'Eyes', price: 'Rs3500.00', image: '/eyeshadow.png' },
    { id: 6, name: 'Purifying Night Gel', category: 'Skincare', price: 'RS7500.00', image: '/skincare.png' },
    { id: 7, name: 'DAMN Perfume', category: 'Fragrance', price: 'RS12000.00', image: '/perfume_damn.png' },
];

const Products = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="page fade-in">
            <div className="page-header products-header">
                <div className="page-header-content text-center">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="section-title">All Products</motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>Discover our complete collection of premium cosmetics.</motion.p>
                </div>
            </div>

            <div className="container section">
                <div className="shop-layout">
                    <aside className="shop-sidebar">
                        <h3 className="filter-title"><Filter size={20} /> Filters</h3>
                        <div className="filter-group">
                            <h4>Categories</h4>
                            <ul>
                                <li><label><input type="checkbox" /> All (7)</label></li>
                                <li><label><input type="checkbox" /> Skincare (2)</label></li>
                                <li><label><input type="checkbox" /> Lips (2)</label></li>
                                <li><label><input type="checkbox" /> Eyes (2)</label></li>
                                <li><label><input type="checkbox" /> Fragrance (1)</label></li>
                            </ul>
                        </div>
                        <div className="filter-group">
                            <h4>Price Range</h4>
                            <ul>
                                <li><label><input type="checkbox" /> Under RS5000</label></li>
                                <li><label><input type="checkbox" /> RS5000 - RS10000</label></li>
                            </ul>
                        </div>
                    </aside>

                    <div className="shop-products">
                        <div className="shop-header">
                            <p>Showing all {products.length} results</p>
                            <select className="sort-select">
                                <option>Default Sorting</option>
                                <option>Sort by price: low to high</option>
                                <option>Sort by price: high to low</option>
                                <option>Sort by latest</option>
                            </select>
                        </div>

                        <motion.div
                            className="product-grid"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                        >
                            {products.map(product => (
                                <motion.div key={product.id} className="product-card" variants={fadeUp}>
                                    <div className="product-image-container">
                                        <img src={product.image} alt={product.name} />
                                        <div className="product-overlay">
                                            <button className="btn btn-primary" style={{ width: '100%' }}>Add to Cart</button>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <p className="product-category">{product.category}</p>
                                        <h4>{product.name}</h4>
                                        <p className="price">{product.price}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
