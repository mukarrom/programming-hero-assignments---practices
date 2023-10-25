import { useEffect, useState } from "react";

const useProductDetail = (productId) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://thawing-earth-19842.herokuapp.com/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return [product, setProduct];
};

export default useProductDetail;
