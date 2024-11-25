import React from "react";
import FormicHoc from "./FormicHoc";
function Input({
  label,
  id,
  type,
  value,
  placeholder,
  className,
  name,
  onChange,
  onBlur,
  error,
  touched,
  required,
}) {
  let borderclass = "border-gray-400"
  if(error && touched){
    borderclass = "border-red-400";
}

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={          " w-full h-10 border rounded-md px-3 py-1 " + " " + className + " " + borderclass
      }
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        required={required}
      />
            {touched && error && <div className="text-red">{error}</div>}

    </div>
  );

}
export default Input;
export const FormicInput = FormicHoc(Input);
