import DropDown from "./DropDown";

import React from "react";

const Filters = ({brands, city, state}) => {
  return (
    <div className="bg-black flex flex-col space-y-4 p-6 rounded-lg h-full w-[228px] pt-12 pb-8">
      <p className="text-[#a5a5a5] border-white border-b-2 h-6 pb-8 mb-4">Filter</p>
      <DropDown name="Products" list={brands} />
      <DropDown name="State" list={state} />
      <DropDown name="City" list={city} />
    </div>
  );
};

export default Filters;
