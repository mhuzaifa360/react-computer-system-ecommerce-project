import React from "react";
import Typography from "../common/Typography";
import banner from "../../assets/images/home/banner.png";

function Banner() {
  return (
    <div className="bg-[#2196F3] w-full h-[500px] flex justify-evenly items-center">
        {/* banner content */}
      <div>
        <Typography varient="h2" style='font-semibold text-white'>Built Your Custom PC</Typography>
        <Typography varient="h2" style='font-semibold text-white'>NOW</Typography>
        <button className="bg-white p-2 pr-6 pl-6 rounded-md text-[#2196F3]">View Details</button>
      </div>
      {/* banner image */}
      <div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
}

export default Banner;
