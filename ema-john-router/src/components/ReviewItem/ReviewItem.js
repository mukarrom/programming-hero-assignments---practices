import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { name, price, img, shipping, quantity } = props.product;
  return (
    <div className="reviewItem">
      <img src={img} alt="" />
      <div className="detail-container" title={name}>
        <div className="detail">
          <h6>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h6>
          <p>
            Price: <span>${price}</span>
          </p>
          <p>
            Shipping: <span>${shipping}</span>
          </p>
          <p>
            Quantity: <span>{quantity}</span>
          </p>
        </div>
        <div className="delete-button">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
