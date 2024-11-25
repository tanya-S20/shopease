import React from "react";
import { Navigate, Route } from "react-router-dom";
// component description
function UserRoute({user,children}){
   if(user){
   return children;
   }
    return <Navigate to="/Loginpage" />
}
export default UserRoute;