import React from "react";
function Button({children,onclick}){
    return(
        <button onClick={onclick} className="bg-tomato-medium rounded-md px-4 py-1 font-sans font-bold text-white">
       { children}
      </button>
    );
}
export default Button;