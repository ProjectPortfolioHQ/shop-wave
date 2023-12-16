import CheckBoxField, { CheckedState } from "./CheckBoxField";
import { IItem } from "./FilterProduct";

export interface IItemValue {
  id: string;
  checked: CheckedState;
}

interface ICheckboxGroupFieldProps {
  title: string;
  items: IItem[];
  value: string[];
  onCheckedChange: (item: IItemValue) => void;
}

const CheckboxGroupField: React.FC<ICheckboxGroupFieldProps> = ({
  title,
  items,
  value,
  onCheckedChange,
}) => {
  const handleToggleCheck = (checked: CheckedState, id: string) => {
    onCheckedChange({ id, checked });
  };

  return (
    <div className="w-full">
      <h3>{title}</h3>
      {items.map((item) => (
        <CheckBoxField
          key={item.id}
          id={item.id}
          label={item.label}
          checked={value?.includes(item.id) || false}
          onCheckedChange={(checked) => handleToggleCheck(checked, item.id)}
        />
      ))}
    </div>
  );
};

export default CheckboxGroupField;
