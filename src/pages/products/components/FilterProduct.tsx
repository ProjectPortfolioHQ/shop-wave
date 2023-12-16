import Divider from "./Divider";
import PriceRangeField from "./PriceRangeField";

const FilterProduct = () => {
  return (
    <div className="w-full p-2 bg-white border-solid border border-gray-200 rounded-md">
      <PriceRangeField />
      <Divider />

      <PriceRangeField />
    </div>
  );
};

export default FilterProduct;
