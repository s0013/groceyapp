import React from 'react';

function Cart({ cartItems }) {
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h3>Cart Items</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div>
              <img src={item.image} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
              <span>{item.title}</span>
              <span>Quantity: {item.quantity}</span> {/* Display item quantity */}
              <span>Price: ${item.price * item.quantity}</span> {/* Display item price */}
            </div>
          </li>
        ))}
      </ul>
      <div>Total Price: ${totalPrice}</div> {/* Display total price */}
    </div>
  );
}

export default Cart;
