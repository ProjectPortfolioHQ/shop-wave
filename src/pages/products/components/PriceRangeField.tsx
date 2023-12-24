import { ChangeEvent, useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

export interface ValueRange {
  from: number;
  to: number;
}

interface PriceRangeFieldProps {
  value: ValueRange;
  onChange: (value: ValueRange) => void;
}

enum TypeRange {
  from = "salePrice_gte",
  to = "salePrice_lte",
}

const PriceRangeField: React.FC<PriceRangeFieldProps> = ({
  value,
  onChange,
}) => {
  const [valueRange, setValueRange] = useState<ValueRange>(value);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    type: TypeRange
  ) => {
    const price = Number(event.target.value);
    const field = type === TypeRange.from ? "from" : "to";

    setValueRange({ ...valueRange, [field]: price });
  };

  const handleApply = () => {
    onChange(valueRange);
  };

  return (
    <div className="w-full">
      <h3>Price Range</h3>
      <div className="flex flex-row item-center my-2">
        <Input
          type="number"
          value={valueRange.from}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event, TypeRange.from)
          }
        />

        <hr className="w-5 border-solid border my-5 border-gray-200" />

        <Input
          type="number"
          value={valueRange.to}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event, TypeRange.to)
          }
        />
      </div>

      <Button className="w-full shadow-md rounded-none" onClick={handleApply}>
        APPLY
      </Button>
    </div>
  );
};

export default PriceRangeField;
