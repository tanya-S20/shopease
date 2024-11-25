import React from "react";
import {ImSpinner3} from "react-icons/Im";
function Loading(){
    return(
        <div className="text-3xl text-white w-screen h-128  bg-blue-900 flex items-center justify-center"> <ImSpinner3 className="animate-spin text-6xl "></ImSpinner3></div>)
    
}
export default Loading;