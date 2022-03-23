import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <strong>Order Summary</strong>
      <p>Selected Items : {cart.length}</p>
    </div>
  );
};

export default Cart;
