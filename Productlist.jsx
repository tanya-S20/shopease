import React from "react";
import Product from "./Product";
function Productlist({products}) {
  console.log(products)
  return (//space-y-1
    <div className = "  mx-auto max-w-6xl sm:grid grid-cols-3 space-x-10 p-8 bg-white">
      {products.map(function ({title,category,price,thumbnail,id,description}) {
        console.log(thumbnail);
    return (
          
            <Product
              discription={description}
              title={title}
              category={category}
              price={price}
              thumbnail={thumbnail}
              id={id}
              key={id}
              
            />
         
        );
      })}
    </div>
  );
}
export default Productlist;
