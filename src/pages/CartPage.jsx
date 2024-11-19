import React from 'react';

const CartPage = ({ cartItems, addToCart, removeFromCart, updateQuantity }) => {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const totalPrice = calculateTotal();
    const discountedPrice = totalPrice * 0.9;  // 10% discount

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
            ) : (
                <>
                    <div className="space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                                <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
                                <div className="ml-4 flex-1">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-gray-500">${item.price} x {item.quantity}</p>
                                    <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                    <div className="mt-2">
                                        <button onClick={() => updateQuantity(item.id, 'decrease')} className="bg-gray-300 px-2">-</button>
                                        <span className="px-4">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 'increase')} className="bg-gray-300 px-2">+</button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-right">
                        <h3 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h3>
                        <h3 className="text-xl font-bold">Discounted Price: ${discountedPrice.toFixed(2)}</h3>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
