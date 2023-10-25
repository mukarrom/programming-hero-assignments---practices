import { useEffect, useState } from "react";

const useProductDetail = (productId) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://mmh12.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return [product, setProduct];
};

export default useProductDetail;
