import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  // INITIAL VALUES
  const initialValues = {
    email: "",
    password: "",
  };

  // VALIDATION
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(4, "Minimum 4 characters"),
  });

  // LOGIN FUNCTION
  const handleLogin = async (values, { resetForm }) => {
    try {
      setLoader(true);
      setError("");

      // API CALL
      const response = await axios.post(
        "http://localhost:3000/v1/login",
        values,
      );

      // console.log(response.data);

      // TOKEN SAVE
        localStorage.setItem(
          "userData",
          JSON.stringify(response.data.data)
        );
        
      // RESET FORM
      resetForm();

      // REDIRECT
      navigate("/dashboard");
    } catch (err) {
      console.log(err);

      setError(err?.response?.data?.message || "Login Failed");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        {/* HEADING */}
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {/* FORM */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ values, handleChange }) => (
            <Form className="space-y-5">
              {/* EMAIL */}
              <div>
                <label className="block mb-2 font-medium">Email</label>

                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                />

                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block mb-2 font-medium">Password</label>

                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                />

                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* ERROR MESSAGE */}
              {error && <div className="text-red-500 text-sm">{error}</div>}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loader}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
              >
                {loader ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
