import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { SiAmazonaws } from "react-icons/si";
import { Link } from "react-router-dom";
import { memo } from "react";
import Table from "./Table";
function Header({ totalcount }) {
  return (
    <div className="bg-white w-screen mb-10">
      <div className="box-border mx-auto max-w-6xl flex justify-between  px-4 py-2 ">
        <div>
          <SiAmazonaws className="text-6xl text-tomato-light"></SiAmazonaws>
        </div>
        <div className = "font-sans space-x-8 flex items-center justify-center">
          <div className = "w-20"></div>
          <div className = "w-20"></div>
          <div className =  "w-20"></div>
          <Link className=" active:text-tomato-medium">HOME</Link>
          <Link className=" active:text-tomato-medium">ALL PRODUCT</Link>
          <Link className=" active:text-tomato-medium">ABOUT</Link>
          <Link className=" active:text-tomato-medium">CONTACT</Link>
          <Link className=" active:text-tomato-medium">ACCOUNTS</Link>
        </div>

        <div className="flex flex-col  items-center  ">
          <Link className=" active:text-tomato-dark" to={"/Table"}>
          <HiShoppingCart className="text-6xl text-tomato-light"></HiShoppingCart>
          </Link>
          <span className="-m-14 pt-1">{totalcount}</span>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
