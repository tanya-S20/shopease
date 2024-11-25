import React, { useEffect,useState } from "react";
import {GetProductData} from "./Api"
import {MdOutlineCancel}from "react-icons/Md"
import Loading from "./Loading";
import Button from "./Button";
import { Link } from "react-router-dom";
function Tablerow({Pinfo,updatecart}){
  console.log(Pinfo);
 const Pid = Object.keys(Pinfo);
  const [product,setproduct]= useState([]);
  const [loading,setloading] = useState(false);
  const [localcart,setLocalcart] = useState(Pinfo);
  
  function handleDelete(e){
   setloading(true);
   console.log('me called delete')
   const itemDel = e.currentTarget.getAttribute("productid");
   console.log("itemdel", itemDel);
    const xyz = {...Pinfo};
    console.log("itemdel", xyz);
    delete xyz[itemDel];
    console.log("itemdel", xyz);
   updatecart(xyz);
   setLocalcart(xyz);
  setloading(false)
  }
 function handleInput(e){
   const newValue  = +e.target.value;
   const changeProdID  = e.currentTarget.getAttribute("productid");
    setLocalcart({...localcart , [changeProdID]: newValue });

   }
   useEffect(function(){
      setloading(true);
   const promiseOfData = Pid.map(function(id){
      return GetProductData(id);
   });
   Promise.all(promiseOfData).then(function(Pdata){
   setproduct(Pdata);
   setloading(false);
   })
   },[Pinfo]);
 if(loading){
   return <Loading />
 }
 function changecart(){
   updatecart(localcart);
 }
    return(
      <div>
       { product.map(function(p){
            return <div className="flex justify-evenly border  border-gray-500 items-center py-1 px-4">
         <button onClick={handleDelete} productid = {p.id} className = "w-24  text-center">
   <MdOutlineCancel className="text-3xl text-gray-500 font-light"></MdOutlineCancel> </button>
   <div className="w-20  mx-1 text-center">
   <img className="w-12 h-14" src={p.thumbnail} alt="" /></div>
   <div className="w-56 mx-1  text-center">
   <Link to={"/products/" + (p.id)} className="text-tomato-medium underline font-sans font-bold">{p.title} </Link></div>
   <div className="w-32  text-center">
  <p> ${p.price}</p></div>
  <div className="w-32  text-center">
   <input type="number" productid = {p.id} className="border text-center border-gray-500 w-10 mr-6" value={localcart[p.id]} onChange={handleInput} /></div>
   <div className="w-20">
   <p>${p.price*localcart[p.id]} </p>
   </div>
</div>
        })}
        <div className="flex justify-between my-4 mx-2">
        <Button onclick={changecart}>UPDATE CART</Button>
        <div className="space-x-2" >
        <input type="number" className="border border-gray-500 rounded-sm w-28 " placeholder="coupon code" />
        <Button>Apply coupon</Button>
        </div>
        </div>
        
     </div>

        );
}
 export default Tablerow ;