import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useProducts from "../../hooks/useProducts";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useProducts([]);
  const [items, setItems] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const p = [...products];
    setItems(p.slice(3,9))
  }, [products])
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-green-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Perform your best
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Your days and your workouts take things to the next level and
                adidas men’s athletic sneakers are ready to step up. With
                signature style and modern technologies that improve comfort and
                support in a variety of conditions, you’re set to perform your
                best.
              </p>
            </div>
          </div>
          {/* ------------ card -------------------- */}
          <div className="flex flex-wrap sm:-m-2 -mx-2 -mb-10 -mt-4">
            {items.map((item) => (
              <Product key={item.id} item={item}></Product>
            ))}
            {/* ------------------------- */}
          </div>
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

export default Products;
