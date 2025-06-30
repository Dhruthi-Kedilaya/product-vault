import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div
      className="container"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      
      <p style={{ fontWeight: "bolder", fontSize: "35px" }}>
        Catalog View 🛍️
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "15px",
        }}
      >
        {products.map((product) => {
          return (
            <ProductCard
              key={product._id}
              product={product}
            />
          );
        })}
      </div>

      {products.length == 0 && (
        <div>
          <h2>No products found 🥺</h2>
          <Link to="/create" style={{ textDecoration: "underline" }}>
            Create a new product
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
