import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import {
  MdModeEdit,
  MdDashboard,
  MdPeople,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { FaTrash, FaUserPlus, FaList } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";

import { useNavigate } from "react-router";
import Typography from "./common/Typography";

// User Form Component
const UserForm = ({
  sigleUser,
  loader,
  createUser,
  updateUser,
  setSingleUser,
}) => {
  const initialValues = {
    firstName: sigleUser?.firstName || "",
    lastName: sigleUser?.lastName || "",
    email: sigleUser?.email || "",
    password: "",
    role: "user"
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().when("$isEdit", {
          is: false,
          then: (schema) => schema.required("Password is required"),
          otherwise: (schema) => schema.notRequired(),
        }),
      })}
      onSubmit={(values, { resetForm }) => {
        const updatedBody = values;
        if (sigleUser?.id) {
          updateUser(sigleUser?.id, updatedBody);
        } else {
          createUser(values);
        }
        resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <Form className="space-y-6">

          <div className="flex justify-between items-center mb-6">
            {/* FORM TITLE */}
            <Typography varient="h3">
              {sigleUser?.id ? "Edit User" : "Add New User"}
            </Typography>
            
            {sigleUser?.id && (
              <button
                type="button"
                onClick={() => setSingleUser({})}
                className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-lg text-white transition"
              >
                Cancel Edit
              </button>
            )}
          </div>

            {/* FORM */}
          <div>
            <label
              htmlFor="firstName"
              className="text-lg font-medium block mb-2"
            >
              First Name
            </label>
            <input
              value={values?.firstName}
              onChange={handleChange}
              name="firstName"
              type="text"
              className="bg-slate-200 w-full p-2 rounded-md"
              placeholder="First Name ..."
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="text-lg font-medium block mb-2"
            >
              Last Name
            </label>
            <input
              value={values?.lastName}
              onChange={handleChange}
              name="lastName"
              type="text"
              className="bg-slate-200 w-full p-2 rounded-md"
              placeholder="Last Name ..."
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-lg font-medium block mb-2">
              Email Address
            </label>
            <input
              value={values?.email}
              onChange={handleChange}
              name="email"
              type="email"
              className="bg-slate-200 w-full p-2 rounded-md"
              placeholder="myname@gmail.com"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {!sigleUser?.id && (
            <div>
              <label
                htmlFor="password"
                className="text-lg font-medium block mb-2"
              >
                Password
              </label>
              <input
                name="password"
                onChange={handleChange}
                type="password"
                className="bg-slate-200 w-full p-2 rounded-md"
              placeholder="Password..."
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-900 py-3 px-6 rounded-lg text-white transition w-full"
          >
            {loader
              ? "Saving..."
              : sigleUser?.id
                ? "Update User"
                : "Create User"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
