import React from "react";
import Typography from "../common/Typography";
import { products } from "../../assets/constants/product";

function BlueProduct() {
  const productSelected = products[5];
  return (
    <div>
      {/* WHITE PRODUCT */}

      <div className="w-[250px] h-[324px] border-2 flex flex-col justify-evenly items-center bg-[#6C82FB] text-white">
        {/* PRODUCT NAME */}
        <div>
          <Typography varient="p" style="font-semibold">
            {productSelected.title}
          </Typography>
        </div>
        {/* PRICE */}
        <div className="flex gap-2 ">
          <Typography varient="small" style=" font-semibold">
            {productSelected.currency}
            {productSelected.oldPrice}
          </Typography>
        </div>
        {/* DESCRIPTION */}
        <div className="flex gap-2 text-center">
          <Typography varient="small">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </div>
        {/* IMAGE */}
        <div className="w-[188px] flex justify-center">
          <img src={productSelected.image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BlueProduct;
