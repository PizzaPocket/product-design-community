export interface CheckboxProps {
  id: string;
  name: string;
  type?: "checkbox" | "radio";
  value?: string;
  checked: boolean;
  required?: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export function Checkbox({
  id,
  name,
  type = "checkbox",
  value,
  checked,
  required,
  onChange,
  className = "",
}: CheckboxProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      checked={checked}
      required={required}
      onChange={(e) => onChange(e.target.checked)}
      className={`h-4 w-4 shrink-0 accent-deep-blueklyn cursor-pointer ${className}`}
    />
  );
}
