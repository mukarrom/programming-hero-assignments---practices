import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const {
    _id,
    category,
    name,
    seller,
    price,
    stock,
    ratings,
    ratingsCount,
    img,
    shipping,
    quantity,
    supplier,
  } = item;


  const navigate = useNavigate();
  const handldeUpdate = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-md">
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src={img}
        />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        {name}
      </h2>
      <p className="text-base leading-relaxed mt-2">
        {item?.description ||
          `${name} is a 3D-printed midsole with an unparalleled combination of
        impact absorption and stability for city running.`}
      </p>

      <button
        onClick={() => handldeUpdate(_id)}
        className="text-green-500 inline-flex items-center mt-3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <span className="text-white">Update</span>
        <svg
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      <div class="mt-4">
        <h3 class="text-gray-800 text-xxl tracking-widest title-font mb-1">
          Supplier: {supplier}
        </h3>
        <div className="flex justify-between">
          <h2 class="text-gray-900 title-font text-lg font-medium">
            Quantity: {stock}
          </h2>
          <p class="mt-1 text-gray-900 title-font text-lg font-medium">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
