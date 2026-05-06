import React from "react";
import Typography from "../common/Typography";
import { products } from "../../assets/constants/product";
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";

function Handpicked() {
  return ( 
    <div className="flex flex-col justify-center items-center">
      {/* products title */}
      <Typography varient="h3" style="font-bold text-center">
        Handpicked by our techies
      </Typography>
      {/* products */}
      <div className=" w-[95%] h-[530px] flex justify-evenly items-center">
          {/* main large card */}
        <div className="w-[40%] h-[90%]">
          <div className="w-[467px] bg-[#F8F8F8] rounded-md p-3 relative hover:bg-[#DCF0FF]">
            <div className="flex justify-center h-[70%]">
              <img src={products[0].image} alt="" className="w-[336px]" />
            </div>
            <div className="h-[30%]">
              <Typography varient="p" effect="muted">
                {products[0].category}
              </Typography>
              <Typography varient="h4" style="font-semibold">
                {products[0].title}
              </Typography>
              <Typography
                varient="h5"
                style="font-semibold text-[#2196F3] absolute top-4"
              >
                {products[0].currency}
                {products[0].price}
              </Typography>
              <div className="flex text-[#FFC107]">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoStarHalf />
              </div>
            </div>
            {/* end of large card */}
          </div>
        </div>

        {/* left section start*/}
        <div className="flex flex-col w-[55%] h-[90%]  justify-evenly">

        {/* start left top */}
        <div className="flex flex-row w-full  justify-evenly ">
          {products.slice(1, 3).map((item, key) => {
            return (
              <div
                className="w-[276px] h-[282px] bg-[#F8F8F8] rounded-md p-3 relative justify-evenly  flex flex-col hover:bg-[#DCF0FF]"
                key={key}
              >
                <div className="flex justify-center h-[60%]">
                  <img src={item.image} alt="" className="w-[224px]" />
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
                    style="font-semibold text-[#2196F3] absolute top-1"
                  >
                    {item.currency}
                    {item.price}
                  </Typography>
                  <div className="flex text-[#FFC107]">
                    <IoIosStar className="w-[11px]"/>
                    <IoIosStar className="w-[11px]"/>
                    <IoIosStar className="w-[11px]"/>
                    <IoStarHalf className="w-[11px]"/>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* end of left top */}

        {/* start left bottom */}
        <div className="flex flex-row justify-evenly ">
          
          {products.slice(3,6).map((item, key) => {
            return (
              <div
                className="w-[181px] h-[169px] bg-[#F8F8F8] rounded-md p-3 relative justify-evenly  flex flex-col hover:bg-[#DCF0FF]"
                key={key}
              >
                <div className="flex justify-center h-[55%]">
                  <img src={item.image} alt="" className=" h-full"  />
                </div>
                <div className="h-[45%] ">
                  <Typography varient="small" effect="muted ">
                    {item.category}
                  </Typography>
                  <Typography varient="h6" style="font-semibold">
                    {item.title}
                  </Typography>
                  <Typography
                    varient="small"
                    style="font-semibold text-[#2196F3] absolute top-0"
                  >
                    {item.currency}
                    {item.price}
                  </Typography>
                  <div className="flex text-[#FFC107]">
                    <IoIosStar className="w-[9px]"/>
                    <IoIosStar className="w-[9px]"/>
                    <IoIosStar className="w-[9px]"/>
                    <IoStarHalf className="w-[9px]"/>
                  </div>
                </div>
              </div>
            );
          })}
        </div>{" "}
        {/* end of left bottom */}

          {/* end of left section */}
        </div>
      </div>
      {/* end of all product cards */}
    </div>
  );
}

export default Handpicked;
