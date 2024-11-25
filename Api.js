import axios from "axios";
export function GetProductData( id ){
return axios.get('https://dummyjson.com/products/'+id).then(function(Response){return Response.data}) ;   
}
export function GetProductList(){
    return axios.get('https://dummyjson.com/products').then(res=>{
        return res.data.products;
    });
    //axios....= promisse not actual data
//    token.then((data)=> {console.log("data aagaya, data aagaya",data)});
   //axios.method('url')
   
} 