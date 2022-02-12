import React from "react";

const ProductCard = () => {
  return (
    <div className="w-[260px] h-[200px] bg-dark text-white rounded flex flex-col">
      <div className="p-4 space-x-6 flex flex-row">
        <img
          className="h-[90px] w-[100px] rounded-lg"
          src="https://i.pinimg.com/736x/9f/2b/3e/9f2b3eb821d5cb36fa22b951a7b8e80c.jpg"
          title="Mountain"
        />
        <div className="flex flex-col space-y-2">
          <p>productName</p>
          <p className="text-gray-text">brandName</p>
          <p>price</p>
        </div>
      </div>
      <div className="flex flex-row space-x-4 justify-between px-4 text-gray-text">
        <p>Location: location</p>
        <p>Date: date</p>
      </div>
      <p className="text-gray-text px-4 py-2">description</p>
    </div>
  );
};

export default ProductCard;
