import React from "react";
import { Navigate } from "react-router-dom";
// component description
function Authroute({user,children}){
    if(!user){
        return  <Navigate to="/" />
        }
         return children;
}
export default Authroute;