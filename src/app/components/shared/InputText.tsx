import { InputHTMLAttributes } from "react";

export interface InputTextProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function InputText({
  label,
  ...rest
}: InputTextProps) {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        className="bg-zinc-700 text-zinc-50 p-1 border-none outline-none text-lg text-opacity-90"
        type="text"
        {...rest}
      />
    </div>
  );
}