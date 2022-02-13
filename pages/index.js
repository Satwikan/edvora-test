import Filters from "../components/Filters";
import ProductDisplay from "../components/ProductDisplay";

export default function Home({ data, brands, state, city }) {
  return (
    <div className="text-white ">
      <div className="flex flex-col lg:flex-row h-full space-y-4 lg:space-x-8 lg:pt-12 p-4 justify-center">
        <Filters brands={brands} state={state} city={city} />
        <div>
          <p className="text-4xl pb-4 font-semibold">Edvora</p>
          <p className="text-2xl text-gray-text pb-8">Products</p>
          <ProductDisplay data={data} brands={brands} />
        </div>
      </div>
      {/* {JSON.stringify(data)} */}
    </div>
  );
}

export async function getServerSideProps() {
  // fetch the blog posts from the mock API using the environment variable
  const res = await fetch(`https://assessment-edvora.herokuapp.com/`);
  const data = await res.json();
  let brands = [];
  // extract brand_name from data
  data.forEach((product) => {
    if (!brands.includes(product.brand_name)) {
      brands.push(product.brand_name);
    }
  });
  // extract state from data
  let state = [];
  data.forEach((product) => {
    if (!state.includes(product.address.state)) {
      state.push(product.address.state);
    }
  });
  // extract city from data
  let city = [];
  data.forEach((product) => {
    if (!city.includes(product.address.city)) {
      city.push(product.address.city);
    }
  });

  return {
    props: { data: data, state: state, city: city, brands: brands },
  };
}
