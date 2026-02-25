import { useState } from "react";

export type DropdownOption = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: DropdownOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export default function Dropdown({
  options,
  placeholder = "Please select an option",
  value: controlledValue,
  onChange,
  className = "",
}: DropdownProps) {
  const [internalValue, setInternalValue] = useState<string>("");

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    if (onChange) onChange(newValue);
    else setInternalValue(newValue);
  };

  return (
    <div className={`w-64 ${className}`}>
      <select
        value={value}
        onChange={handleChange}
        className="w-full px-3 py-2 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((opt) => (
          <option className="text-black" key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
