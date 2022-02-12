import React from "react";
import ProductCard from "./ProductCard";

const ProductDisplay = () => {
  return (
    <div className="h-full w-full bg-black flex items-center space-x-4 py-6 px-8 rounded-md">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductDisplay;
