import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Typography from "../common/Typography";
import Btn from "../common/Btn";

const SignUpFormik = () => {
    // LOADER TRUE IF ANY ERROR
  const [loader, setLoader] = useState(false);
//   FUNCTION FOR API 
  const createUser = async (values ) => {
    setLoader(true);
    const response = await axios.post(
      "http://localhost:3000/v1/createUser",
      values,
    );
    setLoader(false);

  };
  return (
    <div className="flex justify-center items-center p-3">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          role: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          role: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={(values) => {
          createUser(values);
        }}
      >
        <Form className="w-[390px] flex flex-col gap-2 p-2">
          <Typography varient="h4" style="font-semibold">
            Sign Up
          </Typography>
          <Typography varient="p" style="" effect="muted">
            Upgrade your tech game with us!
          </Typography>
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            type="text"
            className="bg-slate-200 p-2 rounded-md"
            placeholder="FirstName ..."
          />
          <ErrorMessage name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <Field
            name="lastName"
            type="text"
            className="bg-slate-200 p-2 rounded-md"
            placeholder="LastName ..."
          />
          <ErrorMessage name="lastName" />

          <label htmlFor="email">Email Address</label>
          <Field
            name="email"
            type="email"
            className="bg-slate-200 p-2 rounded-md"
            placeholder="Email ..."
          />
          <ErrorMessage name="email" />

          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            className="bg-slate-200 p-2 rounded-md"
            placeholder=". . . . ."
          />
          <ErrorMessage name="password" />

          <label htmlFor="role">Role</label>
          <Field
            name="role"
            type="role"
            className="bg-slate-200 p-2 rounded-md"
            placeholder="Role ..."
          />
          <ErrorMessage name="role" />

          <Btn variant="blue">{loader ? "Saving..." : "Submit"}</Btn>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpFormik;
