import React, { useState } from "react";

const initialCart = [
  { id: 1, name: "Speed Tee", price: 39, quantity: 1, img: "https://via.placeholder.com/100" },
  { id: 2, name: "Caps", price: 19, quantity: 2, img: "https://via.placeholder.com/100" },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between border p-4 rounded mb-4">
          <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
          <div className="flex-1 ml-4">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">${item.price}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => updateQuantity(item.id, -1)}
              className="bg-gray-200 px-2 py-1 rounded"
            >-</button>
            <span>{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, 1)}
              className="bg-gray-200 px-2 py-1 rounded"
            >+</button>
          </div>
        </div>
      ))}

      <div className="mt-6 text-right">
        <p className="text-lg font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
