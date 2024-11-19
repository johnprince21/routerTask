import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
