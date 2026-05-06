import React from "react";
import { useState } from "react";
import Btn from "../common/Btn";
import { products } from "../../assets/constants/product";
import { useParams } from "react-router";
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";
import Typography from "../common/Typography";
import { FaRegHeart } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

function ProductData() {
  const [num, setNum] = useState(0);
  console.log(num);

  const { id } = useParams();
  const productID = products.find((item) => item.id == id);
  if (!productID) {
    return <Typography varient="small">Product Not Found!</Typography>;
  }
  return (
    <div className=" m-4 h-full">
      {/* UPPER */}
      <div className="flex justify-evenly h-[76%]">
        {/* PRODUCT IMAGE */}
        <div className=" w-[45%] flex justify-center items-center">
          <img src={productID.image} alt="" className=" h-[300px]" />
        </div>
        {/* PRODUCT DATA */}
        <div className="flex flex-col justify-evenly w-[55%] pl-5">
          {/* TITLE */}
          <div>
            <Typography varient="h3" style="font-semibold">
              {productID.title}
            </Typography>
          </div>
          {/* STAR & REVIEWS */}
          <div className="flex w-[60%] justify-evenly items-center">
            <div className="flex text-[#FFC107]">
              <IoIosStar className="w-[11px]" />
              <IoIosStar className="w-[11px]" />
              <IoIosStar className="w-[11px]" />
              <IoStarHalf className="w-[11px]" />
            </div>

            <div>
              <Typography varient="small" effect="muted">
                {productID.reviews} reviews
              </Typography>
            </div>
            <div>
              <Typography varient="small" style="text-[#33A0FF]">
                Submit a review
              </Typography>
            </div>
          </div>
          {/* PRICES */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Typography varient="h6" style="text-[#33A0FF] font-bold">
                {productID.currency} {productID.price}
              </Typography>
              <Typography varient="small" effect="muted">
                {productID.currency} {productID.oldPrice}
              </Typography>
            </div>
            <div className="bg-[#c7e1f7] text-[#1468b2] w-[42px] h-[42px] flex justify-center items-center">
              <FaRegHeart />
            </div>
          </div>
          {/* AVAILABILITY */}
          <div className="flex w-[50%] justify-between">
            <Typography varient="p" style="font-semibold">
              Availability:
            </Typography>
            <Typography varient="small" effect="muted">
              {productID.availability}
            </Typography>
          </div>
          {/* CATEGORY */}
          <div className="flex w-[50%] justify-between">
            <Typography varient="p" style="font-semibold">
              Category:{" "}
            </Typography>
            <Typography varient="p" effect="muted">
              {productID.category}
            </Typography>
          </div>
          {/* SHIPPING */}
          <div>
            <Typography varient="p" style="font-semibold">
              {productID.shipping}
            </Typography>
          </div>
          {/* BUTTON AND INCREMENT */}
          <div className=" flex w-full">
            {/* INCREAMENT */}
            <div className="flex  h-[42px]">
              <Btn
                variant="white"
                onClick={() =>
                  setNum((prev) => (Number(prev) > 0 ? prev - 1 : 0))
                }
                className="bg-[#f1f1f1] border-none "
              >
                -
              </Btn>
              <div className="w-[50px] flex justify-center items-center text-black bg-[#f1f1f1]">
                <Typography varient="p">{num}</Typography>
              </div>
              <Btn
                variant="white"
                onClick={() => setNum((prev) => Number(prev) + 1)}
                className="bg-[#f1f1f1] border-none "
              >
                +
              </Btn>
            </div>
            {/* BUTTONS */}
            <div>
              <Btn variant="black">Buy Now</Btn>
              <Btn variant="blue">Add To Cart</Btn>
            </div>
          </div>
        </div>
      </div>
      {/* LOWER */}
      <div className=" flex gap-5 pl-6 items-center h-[20%]">
        {/* IMAGES */}
        <div className="flex">
          <div className="w-[64px] h-[64px]">
            <img src={productID.image} alt="" className="w-[62px]" />
          </div>
          <div className="w-[64px] h-[64px]">
            <img src={productID.image} alt="" className="w-[62px]" />
          </div>
          <div className="w-[64px] h-[64px]">
            <img src={productID.image} alt="" className="w-[62px]" />
          </div>
          <div className="w-[64px] h-[64px]">
            <img src={productID.image} alt="" className="w-[62px]" />
          </div>
        </div>
        {/* SHARE */}
        <div className=" flex justify-evenly items-center w-[160px]">
          <Typography varient="small" effect="muted">
            Share on it{" "}
          </Typography>
          <div className="text-[#3B5998]">
            <RiFacebookFill />
          </div>
          <div className="text-[#08A0E9]">
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductData;
