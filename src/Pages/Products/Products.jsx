import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const products = useLoaderData();
  return (
    <div>
      <h1 className="text-5xl text-center m-8">All Products</h1>
      <div className="grid grid-cols-3 gap-4 m-6 mt-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
