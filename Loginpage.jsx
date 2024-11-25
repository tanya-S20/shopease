import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { Form } from "formik";
import { FormicInput} from "./Input";
import axios from "axios";
function Loginpage({setuser,User}) {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8),
  });//userdata isequal to props
  function CallApi(values) {
    console.log("data sending to api", values.email, values.password);
    axios.post("http://127.0.0.1:5000/api/login",{
      email: values.email,
      password:values.password,
    }).then((response)=>{
      console.log(response);
      const {user,token} = response.data;
      console.log(user,token);
      localStorage.setItem("token",token);
       setuser(user);
    }).catch(()=>{
      console.log('invalid credentials');
    })
         
  }
  const ValuesInti = {
    email: "",
    password: "",
  };
   
  
  return (
    <div className="flex flex-col border border-red-700  w-1/4 p-2 mx-auto space-y-4">
      <h1 className="font-semibold font-sans text-tomato-dark text-2xl">
          Log In
        </h1>
        <p className="font-medium  font-sans text-xl">
          Doesen't have an account yet ?
          <Link to={"/Signinpage"} className=" underline text-tomato-dark">
            {" "}
            Sign Up
          </Link>
        </p>
      <Formik
        initialValues={ValuesInti}
        onSubmit={CallApi}
        validationSchema={schema}
        validateOnMount
      >
        
        <Form action="" className="flex flex-col text-gray-800 space-y-4 py-4">
          <FormicInput
            label="email-address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="email-address"
          />

          <FormicInput
            label="password"
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            placeholder="password"
          />

          <Link
            to={"/ForgetPassword"}
            className="font-semibold font-sans text-slate-800 underline"
          >
            Forget Password
          </Link>
          <button
            type="submit"
            className="bg-tomato-medium rounded-md px-4 py-1 font-sans font-bold text-white"
          >
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
export default Loginpage;
