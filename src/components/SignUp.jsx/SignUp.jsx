import React from "react";
import Navigation from "../Navigation";
import Typography from "../common/Typography";
import Btn from "../common/Btn";
import { Link } from "react-router";

function SignUp() {
  return (
    // MIAN
    <div className=" flex flex-col justify-center px-20 items-center">
      {/* NAVIGATION */}
      <div className=" w-full">
        <Navigation />
      </div>
      {/* FORM */}
      <div className=" w-[350px] h-[480px] ">
        <form action="" className="flex flex-col justify-evenly  h-full ">
          <div>
            <Typography varient="h4" style='font-semibold'>Sign Up</Typography>
            <Typography varient="small">
              Upgrade your tech game with us!
            </Typography>
          </div>
          {/* name */}
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="">
              <Typography varient="h5" style="font-semibold">
                Name
              </Typography>
            </label>
            <input
              type="text"
              placeholder="myemail@email.com"
              className="p-2 rounded-md bg-[#F8F8F8]"
            />
          </div>
          {/* email */}
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="">
              <Typography varient="h5" style="font-semibold">
                Email
              </Typography>
            </label>
            <input
              type="text"
              placeholder="myemail@email.com"
              className="p-2 rounded-md bg-[#F8F8F8]"
            />
          </div>
          {/* password */}
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="">
              <Typography varient="h5" style="font-semibold">
                Password
              </Typography>
            </label>
            <input
              type="password"
              placeholder="....."
              className="p-2 rounded-md bg-[#F8F8F8]"
            />
          </div>
          {/* confirm password */}
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="">
              <Typography varient="h5" style="font-semibold">
                Confirm Password
              </Typography>
            </label>
            <input
              type="password"
              placeholder="....."
              className="p-2 rounded-md bg-[#F8F8F8]"
            />
          </div>

          <div>
            <Typography varient="small">Forget Password!</Typography>
          </div>
          <div>
            <Btn variant="blue">Sign Up</Btn>
          </div>
          <div className="flex">
            <Typography varient="small">Already have an account? </Typography>
            <Link to={"/login"}>Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
