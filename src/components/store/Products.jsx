import React from 'react'
import { products } from '../../assets/constants/product'
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";
import Typography from '../common/Typography';

function Products() {
  return (
    <div>
      <div className='flex flex-wrap justify-evenly'>
            {
              products.map((item,key)=>{
                return(
                   <div
              className="w-[245px] h-[300px] bg-[#F8F8F8] rounded-md p-3 relative justify-evenly  flex flex-col hover:bg-[#DCF0FF] m-2"
              key={key}
            >
                {/* RRODUCT IMAGE */}
              <div className="flex justify-center h-[60%]">
                <img src={item.image} alt="" className=" h-full" />
              </div>
              <div className="h-[30%]">
                {/* CATEGORY */}
                <Typography varient="small" effect="muted">
                  {item.category}
                </Typography>
                {/* TITLE */}
                <Typography varient="h5" style="font-semibold">
                  {item.title}
                </Typography>
                {/* PRICE */}
                <Typography
                  varient="h5"
                  style="font-semibold text-[#2196F3]"
                >
                  {item.currency}
                  {item.price}
                </Typography>
                {/* NEW */}
                <div className='absolute top-1 bg-[#2E90E5] px-2 rounded-3xl'>
                <Typography
                  varient="small"
                  style="font-semibold text-white"
                  >
                  {item.new}
                </Typography>
                    </div>
                {/* STARS */}
                <div className="flex text-[#FFC107]">
                  <IoIosStar className="w-[11px]" />
                  <IoIosStar className="w-[11px]" />
                  <IoIosStar className="w-[11px]" />
                  <IoStarHalf className="w-[11px]" />
                </div>
              </div>
            </div>
                )
              })
            }
          </div>
    </div>
  )
}

export default Products
