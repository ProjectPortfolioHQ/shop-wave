import { Checkbox } from "../../../components/ui/checkbox";

export type CheckedState = boolean | "indeterminate";

interface ICheckboxFieldProps {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: CheckedState) => void;
}

const CheckBoxField: React.FC<ICheckboxFieldProps> = ({
  id,
  label,
  checked,
  onCheckedChange,
}) => {
  return (
    <div key={id} className="flex items-center space-x-2 my-2">
      <Checkbox
        key={id}
        id={label}
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange(checked)}
      />
      <label
        htmlFor={id}
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBoxField;
