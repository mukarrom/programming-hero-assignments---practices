import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const { _id, productName, minOrder, available, price, imgURL, info } = item;

  const navigate = useNavigate();
  const handleBuy = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="max-h-44" src={imgURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>{info}</p>
        <div className="flex">
          <p className="font-bold">Minimum order: {minOrder}</p>
          <p className="font-bold">available: {available}</p>
          <p className="font-bold">Price: ${price}</p>
        </div>
        <div className="">
          <button
            onClick={() => handleBuy(_id)}
            className="btn btn-primary w-full"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

/*
<div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={item.imgURL} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.productName}</h2>
            <p>{item.info}</p>
            <div className="flex">
              <p>Minimum order: {item.minOrder}</p>
              <p>available: {item.availabl}</p>
              <p>Price: {item.price}</p>
            </div>
            <div className="">
              <button
                onClick={() => navigate("/purchase")}
                className="btn btn-primary w-full"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
 */
