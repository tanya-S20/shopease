import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { GetProductData } from "./Api";
import Loading from "./Loading";
import NoMatching from "./NoMatching";
import NoDataFound from "./NoDataFound";

function ProductDetails({ OnAddToCart} ) {

  const params = useParams();
  const [loading,setLoading]=useState(true);
  const sku = +params.sku;
  console.log("sku is ", sku);
  const [product, setProduct] = useState();
  const [count,setcount]=useState(1);

  useEffect(
    function () {
      const p = GetProductData(sku);
      p.then(function (product) {
        setcount(1);
        setProduct(product);
        setLoading(false);
      }).catch(function(){
        console.log('api me kuch error hai')
        setLoading(false);
      });
    },
    [sku]
  );

  function HandleATCart(){
   OnAddToCart(sku,count); 
  }
  function HandleNextPrevious(){
    setLoading(true);
  }
  function HandleCount(event){
   setcount(+(event.target.value));
  }

  if (loading) {
    return <Loading />;
  }

  if(!product){
    return <NoDataFound />
  }
  
  return  (
    <div className=" mx-auto max-w-6xl mb-2 grow">
       <div>
       <Link to="/" className="mt-2 text-indigo-700">
    <HiArrowSmLeft className="text-3xl text-orange-500"></HiArrowSmLeft>
  </Link>
  </div>
    <div className="flex gap-10  max-w-6xl  h-128  bg-white ">
        
        <div className="w-128">
        <img src={product.thumbnail} className=" w-full object-cover aspect-square" alt="" />
      </div>
      <div className="w-80 ml-12 mr-4 mt-4 ">
        <h1 className="text-4xl font-bold font-sans mt-1 mb-8">{product.title}</h1>
        <h2 className="text-2xl font-semibold mb-8">${product.price}</h2>
        <p className=" mb-8 text-xl text-gray-700">{product.description}</p>
        <div className=" ">
          <div  className="flex gap-4 ">
          <input type="number" value={count} onInput={HandleCount} className="w-12 h-8 " />
          <div>
            <button onClick={HandleATCart} className="bg-orange-600 rounded-md px-4 py-1 text-white">
              ADD TO CART
            </button>
            </div>
    
          </div>
          <div className="flex gap-10 mt-6 ">
            <div>
              {sku > 1 && (
                <Link
                  to={"/products/" + (sku - 1)}
                  className="mt-2 text-indigo-700"
                >
                  <HiArrowSmLeft onClick={HandleNextPrevious} className="text-3xl text-orange-500 "></HiArrowSmLeft>
                  Previous
                </Link>
              )}
            </div>
            <div>
              <Link
                to={"/products/" + (sku + 1)}
                className="mt-2 text-indigo-700"
              >
                <HiArrowSmRight onClick={HandleNextPrevious} className="text-3xl text-orange-500"></HiArrowSmRight>
                Next
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
