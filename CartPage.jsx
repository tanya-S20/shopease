import React, { useEffect,useState } from "react";
import {GetProductData} from "./Api"
import {MdOutlineCancel}from "react-icons/Md"
import Loading from "./Loading";
import Button from "./Button";

function CartPage({Pinfo,updatecart}){
console.log("data called",Pinfo);
const [Products,setProducts]=useState([]);
const [loading,setloading] = useState(false);
const [localcart,setlocalcart] = useState(Pinfo);
const ProductId = Object.keys(Pinfo);

function handleDelete(e){
    setloading(true);
    const toBeDel= e.currentTarget.getAttribute("productid");
    console.log("pinfo",Pinfo);
    const xyz = {...Pinfo};
    delete xyz[toBeDel];
    console.log(xyz);
    updatecart(xyz);
    setloading(false);


}

useEffect(function(){
    setlocalcart(Pinfo);
},[Pinfo]);
let newLocalCart;
function handleInput(e){
 const newinput = +e.target.value;
 const PRODUCTID = e.target.getAttribute("productid");
   newLocalCart = {...localcart , [PRODUCTID]: newinput };
 console.log(newinput,PRODUCTID);
 setlocalcart(newLocalCart);
}

function changecart(){
    updatecart(localcart);
}
useEffect(function(){
    console.log("i am called");
    setloading(true);
    const myProductPromises = ProductId.map(function(id) {
        return  GetProductData(id)});
     Promise.all(myProductPromises).then(function(products){
        console.log(products);
        setProducts(products);
        setloading(false);
     });
    },[Pinfo]);
    if(loading){
      return  <Loading />
    }
   else{
    
   }
    return(
        <div>
            {Products.map(function(p){
                return <div key={p.id} className= "flex gap-6 space-y-5 px-10 py-2 border bg-white justify-evenly  "><button productid={p.id} className="" onClick={handleDelete} ><MdOutlineCancel className="text-gray-800" /></button>
                <img src={p.thumbnail }className ="w-20" alt="" />
                <div>{p.title}</div> 
                <div>${p.price}</div>
                <input type="number" className="w-8" productid={p.id} onChange={handleInput} value={localcart[p.id]} />
                <div>{p.price*localcart[p.id]}</div>
                </div>
            })}
            <Button onclick={changecart}>update cart</Button>
        </div>
    )
} 
export default CartPage;