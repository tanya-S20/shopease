import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { xys } from "./DummydataUser";
function Signinpage() {
  const [user,setuser] = useState(xys)
  function ApiData(values) {
    console.log("data transfered", values.password, values.email);
    console.log(values);
    console.log(xys);
    const newuser =  xys.push(values);
    setuser(newuser)
    localStorage.setItem("userinfo",JSON.stringify( newuser));
     window.location.href='/ProductlistPage'
    
  }
  const schema=Yup.object().shape({
  email: Yup.string().email().required(),
  passwordConfirmed:Yup.string().min(8).required(),
  password: Yup.string().min(8).required()
  })
  const { values, handleChange, handleSubmit,handleBlur, resetForm,errors,touched} = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmed: "",
      firstname:'',
      lastname:'',
    },
    onSubmit: ApiData,
    validationSchema:schema,
    validateOnMount:true,
  });
  
  return (
    <div className="flex flex-col border border-red-700  w-1/4 p-2 mx-auto space-y-4">
      <h1 className="font-semibold font-sans text-tomato-dark text-2xl">
        SIG IN
      </h1>
      <p className="font-medium  font-sans text-xl">
       Already have an account yet ? Click here
        <Link to={"/Loginpage"} className=" underline text-tomato-dark">
          {" "}
          Log In
        </Link>
      </p>
      <form action="" className="flex flex-col text-gray-800 space-y-4 py-4">
        <input
          type="text"
          className="h-10 border border-gray-500 rounded-md px-3 py-1 "
          name="firstname"
          placeholder="your first name"
          value={values.firstname}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <input
          type="text"
          className="h-10 border border-gray-500 rounded-md px-3 py-1 "
          name="lastname"
          placeholder="your last name"
          value={values.lastname}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label className="font-normal  font-sans text-md" htmlFor="email">
          Email-address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="you@gmail.com"
          className="h-10 border border-gray-500 rounded-md px-3 py-1"
        />
          { touched.email && errors.email && <div className="text-red">{errors.email}</div>}

        <label className="font-normal  font-sans text-md" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          className="h-10 border border-gray-500 rounded-md px-3 py-1 "
          id="password"
          name="password"
          placeholder="enter 8 character or more"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
         { touched.password && errors.password && <div className="text-red">{errors.password}</div>}
        <input
          type="password"
          className="h-10 border border-gray-500 rounded-md px-3 py-1 "
          id="passwordConfirmed"
          name="passwordConfirmed"
          placeholder="confirm password"
          value={values.passwordConfirmed}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        { touched.passwordConfirmed && errors.passwordConfirmed && <div className="text-red">{errors.passwordConfirmed}</div>}
        {values.password == values.passwordConfirmed && <div className="text-red">password is not the same as confirmed password</div>}
        <button
          onClick={handleSubmit} type = "submit" 
          className="bg-tomato-medium rounded-md px-4 py-1 font-sans font-bold text-white"
        >
         Sign In
        </button>
        <div>
          <input type="checkbox" />
          <span>
            I agree the{" "}
            <Link to={" "} className="text-gray-800 underline">
              Terms and conditions
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
export default Signinpage;
