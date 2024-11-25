import React from "react";
import { useField } from "formik";
function FancyInput({
  label,
  id,
  name,
 className,

})
 { 
    const field = useField(name);
    const[data,meta,helper] = field;
    const{value,onBlur,onChange}= data;
    const{error,touched} = meta;
    const{setError,setTouched,setValue}=helper
    console.log(data,meta,helper);
    let borderclass= "border-gray-500";
    if(error && touched){
        borderclass = "border-red-400";
    }
  return (
    <div>
      <label className="font-normal  font-sans text-md" htmlFor={id}>
        {label}
      </label>
      <input
        name ={name}
        id= {id}
        value = {value}
        onBlur={onBlur}
        onChange = {onChange}
        className={
          "h-10 border rounded-md px-3 py-1 " + " " + className + " " + borderclass
        }
      
      />
      {touched && error && <div className="text-red">{error}</div>}
    </div>
  );
}
export default FancyInput;
