import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineStar } from "react-icons/hi";
function Product({thumbnail,title,category, id, price})
 {
  return (
    <div className="mb-12  ">
      <div className="w-72 ">
        <img src={thumbnail} className="aspect-square" alt="" />
      </div>
      <div>
        <div className="text-gray-500">{category}</div>
        <div className="text-slate-800 font-bold text-2xs ">{title}</div>
        <div className="flex text-tomato-medium"> <HiOutlineStar></HiOutlineStar><HiOutlineStar></HiOutlineStar><HiOutlineStar></HiOutlineStar><HiOutlineStar></HiOutlineStar><HiOutlineStar></HiOutlineStar></div>
        <div className="text-2xs text-slate-800">${price}</div>
        <Link to={"products/" + id}  className="text-tomato-medium" >Show details</Link>
      </div>
    </div>
  );
}
export default Product;
