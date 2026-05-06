import React from "react";
import Typography from "../common/Typography";
import { products } from "../../assets/constants/product";
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";

function RelativeProducts() {
  return (
    <div className="p-2">
      <Typography varient="h5">Relative products</Typography>
      <div className="flex justify-evenly">
        {products.slice(0, 4).map((item, key) => {
          return (
            <div key={key} className="w-[245px] h-[300px] bg-[#F8F8F8]  p-3 flex flex-col justify-evenly ">
                <div className="flex justify-center">
              <img src={item.image} alt="" className="h-[153px] "/>
                </div>
              <Typography varient="small" effect="muted">
                {item.category}
              </Typography>
              <Typography varient="small">{item.title}</Typography>
              {/* STAR */}
              <div className="flex text-[#FFC107]">
                <IoIosStar className="w-[11px]" />
                <IoIosStar className="w-[11px]" />
                <IoIosStar className="w-[11px]" />
                <IoStarHalf className="w-[11px]" />
              </div>
              <Typography varient="p" style="font-semibold">
                {item.currency}
                {item.price}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RelativeProducts;
