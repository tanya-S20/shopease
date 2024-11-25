import React from "react";
import { useField } from "formik";
function FormicHoc(IncomingComponent){
 function outgoingComponent({name ,...rest}){
        const field = useField(name);
        const[data,meta,helper] = field;
        const{value,onBlur,onChange}= data;
        const{error,touched} = meta;
        const{setError,setTouched,setValue}=helper
        console.log(data,meta,helper);
        
      return (
      <IncomingComponent
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      error ={error}
      touched ={touched}
      {...rest}
     />
      );
    }
    return outgoingComponent;
}
export default FormicHoc;