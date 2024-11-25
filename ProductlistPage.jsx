import React, { useMemo , useEffect } from "react";
import Productlist from "./Productlist";
import { useState } from "react";
import { GetProductList } from "./Api";
import NoMatching from "./NoMatching";
import { dataFromAPI } from "./data";
import Loading from "./Loading";
import Button from "./Button";
function ProductlistPage(){
    const [productlist,setProductlist] =useState([]);
    let [data,setdata]=useState(productlist);
    const [loading , UpdateLoading]=useState(true);
    const [sort,setSort]=useState("default");
  const[query,newquery]=useState('');
  useEffect(function(){
   GetProductList().then(function (res){
        console.log('response',res)
        setProductlist(res);
        setdata(res);
        UpdateLoading(false);
        dataFromAPI.push(...res);
       console.log('productlist',productlist)
    });

},[]);

 useMemo(function(){
 if(sort==="price"){
  data.sort(function(x,y){
    return x.price-y.price;
  })
 }
 else if(sort==="title"){
  data.sort(function(x,y){
   return x.title<y.title ? -1:1;
     
   
  })
 }}
 )
const HandelSort = (event) => {
  setSort(event.target.value);
  console.log("sorting",event.target.value)
  
}
const handelFilter=(e)=>{
  console.log("hello");
  const setQuery=(e.target.value);
  data = productlist.filter((item)=>{
    return item.title.toLowerCase().indexOf(setQuery.toLowerCase()) !== -1;
   
  })
  newquery(setQuery);
  setdata(data)
}
if (loading){
return<Loading />;
}
function handlelogout(){
  // localStorage.removeItem("token");
  // setuser(undefined);
}
  return(
    
      <div className=" ">
       <Button onclick ={handlelogout} >Logout</Button>
      <input type="text" placeholder="search" value={query} className=" my-10 mx-48 text-black bg-white" onChange={handelFilter} /> 
     <select value={sort} onChange={HandelSort}>
      <option value="default">Sort by default</option>
      <option value="title">Sort by title</option>
      <option value="price">Sort by price</option>
     </select>
      {data.length > 0 && <Productlist products={data}/>}
     { data.length == 0 && <> <NoMatching> No matching product found </NoMatching>
     </>
     }
     {data.length <= 2 && <NoMatching> Try searching something else</NoMatching>}   
     
    </div> 
    );
    }

    

export default ProductlistPage;

