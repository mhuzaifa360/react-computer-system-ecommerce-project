import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Link, useLocation } from "react-router";
import { menus } from "../assets/constants/navbar";
import cart from "../assets/images/home/cart.svg";
import user from "../assets/images/home/user.svg";

function Header() {
  const location = useLocation();
  return (
    // full header start
    <div className="">
      {/* top navbar */}
      <div className="h-8 flex justify-around ">
        {/* for language and usd */}
        <div>
          <form action="">
            {/* for language */}
            <select name="" id="">
              <option value="">EN</option>
            </select>
            {/* for usd */}
            <select name="" id="">
              <option value="">USD</option>
            </select>
          </form>
        </div>

        {/* for track and wishlist */}
        <div className="flex gap-3">
          <div>
            <p>Track order</p>
          </div>
          <div>
            <p>Wishlist</p>
          </div>
        </div>
      </div>

      {/* mid navbar */}
      <div className="px-20 flex flex-row justify-between items-center h-[80px]">
        {/* for logo */}
        <div className="h-[40px]">
          <h1 className="text-blue-600 font-bold text-2xl">LOGO HERE</h1>
        </div>

        {/* for search and categories */}
        <div className="flex justify-center w-[473px] h-[40px]">
          {/*  */}
          <form action="" className="h[40px] w-[100%] ">
            <select name="" id="" className="h-[100%] bg-[#F8F8F8] rounded-md">
              <option value="">All Categories</option>
            </select>
            <input
              type="text"
              className="h-11 border pl-5 rounded-md w-[315px]"
              placeholder="Search..."
            />
          </form>
          <button className="bg-[#2196F3] p-3 h-[40px] rounded-md">
            <IoIosSearch className="text-white" />
          </button>
        </div>

        {/* for user icon */}
        <div className="flex gap-5">
          {/* CART ICON */}
          <a href="#">
            <img src={cart} alt="" />
          </a>
          {/* LOGIN ICON */}
          <Link to={"/login"}>
            <img src={user} alt="" />
          </Link>
        </div>

        {/* lower navbar */}
        <div className="bg-[#2196F3] "></div>
      </div>
      {/* lower navbar */}
      <div className="bg-[#2196F3] h-[49px] flex justify-evenly items-center text-white">
        {menus?.map((item) => {
          return (
            <Link
              key={item.id}
              to={item.pathName}
              className={`${location?.pathname === item.pathName ? "underline text-white" : ""}`}
            >
              {item.pathValue}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
