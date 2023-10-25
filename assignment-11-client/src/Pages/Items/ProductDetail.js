import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useProductDetail from "../../hooks/useProductDetail";
import axios from "axios";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const [restock, setRestock] = useState(0);
  const [delivered, setDeliverd] = useState(0);
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product] = useProductDetail(productId);
  const {
    _id,
    category,
    name,
    seller,
    price,
    stock,
    ratingsCount,
    img,
    shipping,
    supplier,
  } = product;

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const stock = event.target.stock.value;

    const updatedUser = { stock};
    // send data to the server
    const url = `https://thawing-earth-19842.herokuapp.com/product/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("users Updated successfully");
        event.target.reset();
      });
  };
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {seller}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {name}
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  Description
                </a>
              </div>
              <p className="leading-relaxed mb-4">
                Move and explore. These lightweight hiking shoes deliver
                next-generation comfort and freedom of movement for hikes both
                long and short. The adidas Primeknit upper hugs your foot for
                flexible, all-terrain stability, while the Boost midsole
                delivers endless energy to keep you moving up or down the trail.
                A GORE-TEX membrane sheds water while letting your feet breathe
                for all-conditions wear.
              </p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Product Id</span>
                <span className="ml-auto text-gray-900">{_id}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Category</span>
                <span className="ml-auto text-gray-900">{category}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Supplier</span>
                <span className="ml-auto text-gray-900">{supplier}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Quantity</span>
                <span className="ml-auto text-gray-900">{stock}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Shipping</span>
                <span className="ml-auto text-gray-900">{shipping}</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Rattings</span>
                <span className="ml-auto text-gray-900">{ratingsCount}</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${price}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  delivered
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              {/* input field */}
              <div>
                <form
                  className="mt-8 flex"
                  onClick={() => handleUpdateUser(_id)}
                >
                  <input
                    type="number"
                    name="stock"
                    className="rounded-l-lg py-2 px-4 border-t mr-0 border-b border-l text-gray-800 border-gray-400 bg-white"
                    placeholder="Number if items"
                  />
                  <button className="px-8 rounded-r-lg bg-indigo-500  text-gray-800 font-bold  uppercase border-indigo-500 border-t border-b border-r">
                    Restock the items
                  </button>
                </form>
              </div>
              {/* end input field */}
            </div>
            <div className="flex justify-center items-center lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
              <img alt="ecommerce" className="" src={img} />
            </div>
          </div>
          {/* button */}
          <button
            onClick={() => navigate("/manageinv")}
            class="w-full mt-8 bg-indigo-500 text-white px-32 py-3 rounded-md text-1xl font-medium hover:bg-blue-700 transition duration-300"
          >
            Manage Inventories
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
