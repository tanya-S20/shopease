import React from "react";
function NoMatching({children}) {
    console.log("no matching wala code");
   return(
   <div className=" grow bg-green-700 text-white text-3xl flex justify-center items-center h-56">{children}</div>
   );


}
export default NoMatching;