import { Checkbox } from "@/components/atoms/Checkbox";

interface CheckboxFieldProps {
  id: string;
  name: string;
  type?: "checkbox" | "radio";
  value?: string;
  checked: boolean;
  required?: boolean;
  label: string;
  description?: string;
  onChange: (checked: boolean) => void;
}

export function CheckboxField({
  id,
  name,
  type,
  value,
  checked,
  required,
  label,
  description,
  onChange,
}: CheckboxFieldProps) {
  return (
    <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
      <Checkbox
        id={id}
        name={name}
        type={type}
        value={value}
        checked={checked}
        required={required}
        onChange={onChange}
        className="mt-0.5"
      />
      <span className="flex flex-col gap-1">
        <span className="font-bold text-nearly-black" style={{ fontSize: "var(--text-label)", lineHeight: "var(--lh-label)" }}>
          {label}
        </span>
        {description && (
          <span className="text-really-dark-grey" style={{ fontSize: "var(--text-b2)", lineHeight: "var(--lh-b2)" }}>
            {description}
          </span>
        )}
      </span>
    </label>
  );
}
