import React from "react";

const ProductCard = ({product}) => {
  return (
    <div className="w-[350px] h-[230px] lg:h-[200px] bg-dark text-white rounded flex flex-col">
      <div className="p-4 space-x-6 flex flex-row">
        <img
          className="h-[90px] w-[100px] rounded-lg"
          src={`${product.image}`}
          title="Mountain"
        />
        <div className="flex flex-col space-y-2">
          <p className="break-words">{product.product_name}</p>
          <p className="text-gray-text">{product.brand_name}</p>
          <p>{product.price}</p>
        </div>
      </div>
      <div className="flex flex-row space-x-4 justify-between px-4 text-gray-text">
        <p>Location: {product.city}</p>
        <p>Date: {product.date.slice(0,10)}</p>
      </div>
      <p className="text-gray-text px-4 py-2">{product.discription}</p>
    </div>
  );
};

export default ProductCard;
