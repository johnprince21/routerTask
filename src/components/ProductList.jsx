import React, { useEffect, useState } from 'react';

const ProductList = ({ addToCart, cartItems }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const isInCart = productId => {
        return cartItems.some(item => item.id === productId);
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white shadow-md p-4 rounded-lg">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-40 w-full object-contain mb-4"
                        />
                        <h3 className="text-lg font-semibold">{product.title}</h3>
                        <p className="text-gray-500 mb-2">${product.price}</p>
                        <p className="text-gray-700 mb-2">{product.description.substring(0, 80)}...</p>
                        {isInCart(product.id) ? (
                            <button
                                onClick={() => addToCart(product, 'remove')}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                            >
                                Remove from Cart
                            </button>
                        ) : (
                            <button
                                onClick={() => addToCart(product, 'add')}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                            >
                                Add to Cart
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
