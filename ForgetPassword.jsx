import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
function ForgetPassword() {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    passwordConfirmed:Yup.string().min(8).required(),
    password: Yup.string().min(8).required()
  });
  function CallApi(values) {
    console.log("data sending to api", values.email, values.password);
  }
  const {
    handleChange,
    handleBlur,
    touched,
    handleSubmit,
    resetForm,
    values,
    errors,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: CallApi,
    validationSchema: schema,
  });
  return (
    <div className="flex flex-col border border-red-700  w-1/4 p-2 mx-auto ">
      <form action="" className="flex flex-col space-y-4">
        <h1 className="font-semibold font-sans text-tomato-dark text-2xl">
          RESET PASSWORD
        </h1>
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
          id="password"
          className="h-10 border border-gray-500 rounded-md px-3 py-1 "
          name="password"
          placeholder="newpassword"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
    { touched.password && errors.password && <div className="text-red">{errors.password}</div>}

        <label className="font-normal  font-sans text-md" htmlFor="email">
          Confirm-Password
        </label>
        <input
          type="password"
          className="h-10 border border-gray-500 rounded-md px-3 py-1 "
          id="passwordConfirmed"
          name="passwordConfirmed"
          placeholder="newpassword"
          value={values.passwordConfirmed}
          onChange={handleChange}
          onBlur={handleBlur}
        />
                { touched.passwordConfirmed && errors.passwordConfirmed && <div className="text-red">{errors.passwordConfirmed}</div>}

        <button type="submit"
          onClick={handleSubmit}
          className="bg-tomato-medium rounded-md px-4 py-1 font-sans font-bold text-white"
        >
          RESET PASSWORD
        </button>
      </form>
    </div>
  );
}
export default ForgetPassword;
