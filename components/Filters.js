import DropDown from "./DropDown";

import React from "react";

const Filters = () => {
  return (
    <div className="bg-black flex flex-col space-y-4 p-6 rounded-lg w-[228px] pb-8">
      <p className="text-[#a5a5a5] border-white border-b-2 h-6 pb-8 mb-4">Filter</p>
      <DropDown name="Products" />
      <DropDown name="State" />
      <DropDown name="City" />
    </div>
  );
};

export default Filters;
