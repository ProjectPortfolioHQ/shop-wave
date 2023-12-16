import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

const PriceRangeField = () => {
  return (
    <div className="w-full">
      <h3>Price Range</h3>
      <div className="flex flex-row item-center my-2">
        <Input />
        <span>-</span>
        <Input />
      </div>

      <Button className="w-full shadow-md rounded-none">APPLY</Button>
    </div>
  );
};

export default PriceRangeField;
