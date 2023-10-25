import React from "react";
// import { useQuery } from "react-query";
import useProducts from "../../hooks/useProducts";
// import Loading from "../Shared/Loading";
import Product from "./Product";

const Products = () => {
  const [products] = useProducts({})
  // const {isLoading,data: items,} = useQuery("products", () =>
  //   fetch("https://mmh12.herokuapp.com/products").then((res) => res.json())
  // );
  // if (isLoading) {
  //   return <Loading></Loading>;
  // }

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {products.map((item) => (
        <Product key={item._id} item={item}></Product>
      ))}
    </div>
  );
};

export default Products;
