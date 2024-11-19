import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, action) => {
    if (action === 'add') {
      const existingProduct = cartItems.find(item => item.id === product.id);
      if (existingProduct) {
        updateQuantity(product.id, 'increase');
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
    } else if (action === 'remove') {
      removeFromCart(product.id);
    }
  };

  const removeFromCart = productId => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, type) => {
    setCartItems(
      cartItems.map(item =>
        item.id === productId
          ? {
            ...item,
            quantity: type === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
          }
          : item
      )
    );
  };

  return (
    <Router>
      <header className="bg-gray-800 text-white p-4">
        <nav className="max-w-6xl mx-auto flex justify-between">
          <div>
            <Link to="/" className="text-lg font-bold">Store</Link>
          </div>
          <div>
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/cart" className="bg-blue-500 px-3 py-2 rounded hover:bg-blue-600">
              Cart ({cartItems.length})
            </Link>
          </div>
        </nav>
      </header>
      <main className="mt-4">
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} cartItems={cartItems} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
