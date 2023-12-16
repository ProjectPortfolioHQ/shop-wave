import FilterProduct from "./components/FilterProduct";
import ProductList from "./components/ProductList";

const ProductPage = () => {
  return (
    <div className="container grid grid-cols-12 gap-4">
      <div className="col-span-2">
        <FilterProduct />
      </div>

      <div className="col-span-10">
        <ProductList />
      </div>
    </div>
  );
};

export default ProductPage;
