import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductlistPage from "./ProductlistPage";
import Header from "./Header";
import Footer from "./Footer";
import NoDataFound from "./NoDataFound";
// import Signinpage from "./Signinpage";
// import Loginpage from "./Loginpage";
import ForgetPassword from "./ForgetPassword";
// import CartPage from "./CartPage";
import Table from "./Table";
// import Tablerow from "./Tablerow";
// import { Navigate } from "react-router-dom";
// import axios from "axios";
// import Loading from "./Loading";
// import Authroute from "./Authroute";
import UserRoute from "./UserRoute";
function App() {
  const LocalSCart = localStorage.getItem("mycart");
   const LocalSCartFormatted =
    LocalSCart == "undefined" ? "{}" : localStorage.getItem("mycart");
  console.log(LocalSCartFormatted);
  const saveddata = JSON.parse(LocalSCartFormatted);
  console.log("saved data",saveddata)
  const [cart, setcart] = useState(saveddata);
  const [user, setuser] = useState();
  // const [loadinguser, setloadinguser] = useState(true);
  // const token = localStorage.getItem("token");
  // console.log("logged user is", user);
  function HadleCartData(Productid, count) {
    const oldcount = cart[Productid] || 0; //undefined solution
    const newcart = { ...cart, [Productid]: oldcount + count };
    updatecart(newcart);
    console.log("hello i am cart",cart);

  }
  function updatecart(newcart) {
    setcart(newcart);
    const Cartstring = JSON.stringify(newcart);
    localStorage.setItem("mycart", Cartstring);
  }
  console.log("hello i am cart",cart);
  const totalcount = Object.keys(cart).reduce(function (Previous, current) {
    return Previous + cart[current];
  }, 0);

  // useEffect(() => {
  //   if (token) {
  //     axios
  //       .get("http://127.0.0.1:5000/api/me", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       })
  //       .then((response) => {
  //         setuser(response.data);
  //         setloadinguser(false);
  //       });
  //   } else setloadinguser(false);
  // }, []);

  return (
    <div className="flex flex-col overflow-scroll bg-gray-300 grow">
      <Header totalcount={totalcount}></Header>
      <Routes>
        <Route
          index
          element={
              <ProductlistPage user={user} setuser={setuser} />
          }
        ></Route>
        <Route
          path={"products/:sku/"}
          element={
              <ProductDetails OnAddToCart={HadleCartData} />
          }
        ></Route>
        <Route path="*" element={<NoDataFound />}></Route>
        <Route
        ></Route>
        <Route
          path={"/Table"}
          element={
              <Table Pinfo={cart} updatecart={updatecart} user={user} />
          }
        ></Route>
        {/* <Route
          path={"/Tablerow"}
          element={
            
              // <Tablerow Pinfo={cart} updatecart={updatecart}  user={user}/>
           
          }
        ></Route> */}
        <Route
          path={"/ForgetPassword"}
          element={
          
              <ForgetPassword  user={user} />
        
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}
export default App;
