import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../Redux/CartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = id => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = id => {
    dispatch(decrementQuantity({ id }));
  };

  const calculateTotal = () => {
    // Calculate total quantity and total price here
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>Product ID: {item.id}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleIncrement(item.id)}>+</button>
          <button onClick={() => handleDecrement(item.id)}>-</button>
        </div>
      ))}
      <div>
        {/* <p>Total Quantity: {calculateTotal().quantity}</p>
        <p>Total Price: ${calculateTotal().price}</p> */}
      </div>
    </div>
  );
};

export default Cart;
