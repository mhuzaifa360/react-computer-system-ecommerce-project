import React from "react";
import Typography from "../common/Typography";
import { products } from "../../assets/constants/product";
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";

function WhiteProduct() {
  const productSelected = products[0];
  return (
    <div className="">
      <Typography varient="small">Best selling</Typography>
      {/* WHITE PRODUCT */}

      <div className="w-[250px] h-[324px] border-2 flex flex-col justify-evenly items-center">
        {/* IMAGE */}
        <div className="w-[188px]">
          <img src={productSelected.image} alt="" />
        </div>
        {/* PRODUCT NAME */}
        <div>
          <Typography varient="p" style='font-semibold'>{productSelected.title}</Typography>
        </div>
        {/* STAR */}
        <div className="flex text-[#FFC107]">
          <IoIosStar className="w-[11px]" />
          <IoIosStar className="w-[11px]" />
          <IoIosStar className="w-[11px]" />
          <IoStarHalf className="w-[11px]" />
        </div>
        {/* PRICE */}
        <div className="flex gap-2">
          <Typography varient="small" style='text-[#2196F3] font-semibold'>{productSelected.currency}{productSelected.oldPrice}</Typography>
          <Typography varient="small" effect='muted'>{productSelected.currency}{productSelected.price}</Typography>
        </div>
      </div>
    </div>
  );
}

export default WhiteProduct;
