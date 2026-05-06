import React from "react";
import Typography from "../common/Typography";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import categories from "../../assets/constants/categories";
import { products } from "../../assets/constants/product";
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";

function Categories() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* title */}
      <div className="flex justify-between pr-10 pl-10 w-[90%] p-3">
        <div>
          <Typography varient="h5" style="font-semibold">
            Categories
          </Typography>
        </div>
        <div>
          <button>
            <IoIosArrowBack />
          </button>
          <button>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      {/* navigation */}
      <div className="flex justify-evenly w-[90%]">
        {categories.map((item, key) => {
          const Icon = item.icon;
          return (
            <div
              key={key}
              className="flex w-[160px] h-[50px] border-2 justify-center items-center gap-1 rounded-md"
            >
              <Icon className="text-black" />
              <Typography varient="p" style="text-[#444444]">
                {item.name}
              </Typography>
            </div>
          );
        })}
      </div>
      {/* products */}
      <div className="flex flex-wrap justify-evenly items-center w-[90%] h-[700px] ">
        {products.map((item, key) => {
          return (
            <div
              className="w-[245px] h-[300px] bg-[#F8F8F8] rounded-md p-3 relative justify-evenly  flex flex-col hover:bg-[#DCF0FF]"
              key={key}
            >
              <div className="flex justify-center h-[60%]">
                <img src={item.image} alt="" className=" h-full" />
              </div>
              <div className="h-[30%]">
                <Typography varient="small" effect="muted">
                  {item.category}
                </Typography>
                <Typography varient="h5" style="font-semibold">
                  {item.title}
                </Typography>
                <Typography
                  varient="h5"
                  style="font-semibold text-[#2196F3] absolute top-0"
                >
                  {item.currency}
                  {item.price}
                </Typography>
                <div className="flex text-[#FFC107]">
                  <IoIosStar className="w-[11px]" />
                  <IoIosStar className="w-[11px]" />
                  <IoIosStar className="w-[11px]" />
                  <IoStarHalf className="w-[11px]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
