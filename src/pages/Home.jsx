import React from 'react';
import ProductList from '../components/ProductList';

const Home = ({ products, addToCart }) => {
    return (
        <div>
            <h1>Products</h1>
            <ProductList products={products} addToCart={addToCart} />
        </div>
    );
};

export default Home;
