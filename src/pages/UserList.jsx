import React, { useEffect, useState } from "react";
import Typography from "../components/common/Typography";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Btn from "../components/common/Btn";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);

  //   FUNCTION FOR API
  const createUser = async (values) => {
    setLoader(true);
    const response = await axios.post(
      "http://localhost:3000/v1/createUser",
      values,
    );
    setLoader(false);
    getUsers();
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  // FUNCTION FOR GET ALL USERS DATA
  const getUsers = async () => {
    const response = await axios.get("http://localhost:3000/v1/getUser");
    setUsers(response.data.data);

    // console.log(response.data.data);
  };

  // FOR DELETE USER
  const deleteUser = async (id) => {
    const response = await axios.delete(
      `http://localhost:3000/v1/deleteUser/${id}`,
    );
    getUsers();

    useEffect(() => {
      getUsers();
    }, []);
    // console.log(users);
  };

  return (
    <div>
      {/* SIGN UP FORM */}
      <div className="flex justify-center">
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
          onSubmit={(values, { resetForm }) => {
            createUser(values);
            resetForm();
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

            <Btn variant="blue" type="submit">
              {loader ? "Saving..." : "Submit"}
            </Btn>
          </Form>
        </Formik>
      </div>

      {/* DISPLAY USERS LIST */}
      <div className="flex flex-col justify-center items-center p-3">
        <Typography varient="h3">Users List</Typography>
        {/* TABLE FOR USERS LIST */}
        <div className=" w-full p-3 flex flex-col justify-center items-center ">
          <table className="w-[90%] h-full ">
            <thead>
              <tr className="bg-[#2196F3] h-[40px] ">
                <th className="border">ID</th>
                <th className="border ">First Name</th>
                <th className="border">Last Name</th>
                <th className="border">Email</th>
                <th className="border">Role</th>
                <th className="border ">Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{item?.id}</td>
                    <td>{item?.firstName}</td>
                    <td>{item?.lastName}</td>
                    <td>{item?.email}</td>
                    <td>{item?.role}</td>
                    <td className="flex justify-center gap-2">
                      <div className="p-3 bg-green-700 text-white rounded-md cursor-pointer">
                        <MdModeEdit size={18} />
                      </div>
                      <div
                        className="p-3 bg-red-700 text-white rounded-md cursor-pointer"
                        onClick={() => {
                          deleteUser(item?.id);
                        }}
                      >
                        <MdDeleteForever size={18} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserList;
