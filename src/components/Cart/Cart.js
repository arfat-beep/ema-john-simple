import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  //   const totalPrice = cart.reduce((prev, current) => prev + current.price, 0);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  let grandTotal = 0;
  for (const product of cart) {
    quantity += product.quantity;
    total += product.price * product.quantity;
    shipping += product.shipping;
  }

  const tax = +(total * 0.1).toFixed(2);
  grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items : {quantity}</p>
      <p>Total price : ${total} </p>
      <p>Total Shipping : ${shipping} </p>
      <p>Tax : ${tax} </p>
      <h5>Grand Total : ${grandTotal} </h5>
    </div>
  );
};

export default Cart;
