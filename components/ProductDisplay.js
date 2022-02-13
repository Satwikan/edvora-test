import React from "react";
import ProductCard from "./ProductCard";

const ProductDisplay = ({ data, brands }) => {
  return (
    <div className="flex flex-col space-y-4">
      {brands.map((brand, idx) => (
        <div id={idx}>
          <p className="text-2xl pb-4">{brand}</p>
          <hr className="text-2xl py-4"/>
          <div className="w-screen-90 lg:w-screen-80 overflow-x-scroll whitespace-nowrap bg-black flex items-center space-x-4 py-6 px-8 rounded-md">
            {data.map((product, idx) => {
              return product.brand_name === brand ? (
                <ProductCard product={product} id={idx} />
              ) : (
                <></>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
