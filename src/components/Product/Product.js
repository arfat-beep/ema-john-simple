import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  const { handleAddToCart } = props;
  const { name, price, img, ratings, seller } = props.product;
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">Price : $ {price} </p>
        <p>
          <small>Manufecturer : {seller} </small>
        </p>
        <p>
          <small>Rating : {ratings} </small>
        </p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="cart-button"
      >
        <p>Add to Cart</p>
        {element}
      </button>
    </div>
  );
};

export default Product;
