import { useState } from "react";
import CheckboxGroupField, { IItemValue } from "./CheckboxGroupField";
import Divider from "./Divider";
import PriceRangeField from "./PriceRangeField";

const serviceList: IItem[] = [
  {
    id: "discount",
    label: "Discount",
  },
  {
    id: "free",
    label: "Free Shipping",
  },
] as const;

const sortList: IItem[] = [
  {
    id: "high-price",
    label: "High price",
  },
  {
    id: "low",
    label: "Low price",
  },
] as const;

export interface IItem {
  id: string;
  label: string;
}

const FilterProduct = () => {
  const [valueService, setValueService] = useState<string[]>([]);

  const handleChangeValueService = (item: IItemValue) => {
    if (item.checked) {
      setValueService([...valueService, item.id]);
      return;
    }

    const filtered = valueService.filter((v) => v !== item.id);
    setValueService(filtered);
  };

  return (
    <div className="w-full p-2 bg-white border-solid border border-gray-200 rounded-md">
      <PriceRangeField />
      <Divider />

      <CheckboxGroupField
        title="Service"
        items={serviceList}
        onCheckedChange={handleChangeValueService}
        value={valueService}
      />
      <Divider />

      <CheckboxGroupField
        title="Sort"
        items={sortList}
        onCheckedChange={handleChangeValueService}
        value={valueService}
      />
    </div>
  );
};

export default FilterProduct;
