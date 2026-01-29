import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Reducer/productSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  //   const [product, setProduct] = useState([]);

  const { products, loading } = useSelector((state) => state.products);

  //   const fetchProduct = async () => {
  //     try {
  //       const res = await axios.get("https://dummyjson.com/products");
  //       setProducts(res.data.products);
  //       return res.data;
  //     } catch (error) {
  //       console.log(error.message || "Failed to load product");
  //     }
  //   };

  console.log(products);

  useEffect(() => {
    // fetchProduct();
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div>
      {products.map((product) => (
        <div key={product?.id}>
          <Link to={`/product/${product.id}`}>
            <h1>Name: {product?.title}</h1>
            <img src={product?.thumbnail} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
