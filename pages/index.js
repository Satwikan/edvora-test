import Filters from "../components/Filters";
import ProductDisplay from "../components/ProductDisplay";

export default function Home() {
  return (
    <div className="bg-dark flex flex-row text-white h-full space-x-8 pt-12">
      <Filters />
      <div className="flex flex-col space-y-4">
        <p className="text-4xl pb-4 font-semibold">Edvora</p>
        <p className="text-2xl text-gray-text">Products</p>
        <p>brand_name</p>
        <hr />
        <ProductDisplay />
      </div>
    </div>
  );
}
