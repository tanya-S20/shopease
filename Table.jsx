import React from "react";
import Tablerow from "./Tablerow";
import Button from "./Button";
function Table({Pinfo,updatecart})
{   
    const Pid = Object.keys(Pinfo);
    
    
    console.log(Pinfo);
    return(
        <div className=" p-6 mx-auto bg-white">
            <div className="flex justify-evenly border  border-gray-500 items-center py-1 px-4 font-bold">
                <div className="w-24"></div>
                <div className="w-20"></div>
                <div className="w-56 text-center">Products</div>
                <div className="w-32 text-center">Price</div>
                <div className="w-32 text-center">Quantity</div>
                <div className="w-20 ">Subtotal</div>
            </div>
        <Tablerow Pinfo = {Pinfo} updatecart ={updatecart}  />
        <div className="w-3/4 mt-72">
           
            </div>
        </div>
    );
}
export default Table;