// import React, { useState } from "react";
import Banner from "../components/store/Banner";
import Navigation from "../components/Navigation";
import Typography from "../components/common/Typography";

function Store() {
  // const [selectedCategory, setSelectedCategory] = useState("all");
  // const [priceRange, setPriceRange] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <Banner />
      <Navigation />

      {/* MAIN SECTION */}
      <div className=" w-[90%] flex ">
        {/* LEFT SECTION */}
        <div className=" w-[30%] p-3">
          {/* CATEGORIES */}
          <div className="bg-[#F8F8F8] p-2 rounded-md">
            <Typography varient="h5">All Categories</Typography>
            <form
              action=""
              className=" h-[200px] flex flex-col justify-evenly rounded-md"
            >
              <div className="flex gap-2">
                <input type="checkbox" />
                <Typography varient="small">Disktop Computers</Typography>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <Typography varient="small">Laptops</Typography>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <Typography varient="small">Gaming PCs</Typography>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <Typography varient="small">Gaming Laptops</Typography>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <Typography varient="small">Mouses</Typography>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <Typography varient="small">Keyboards</Typography>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <Typography varient="small">Headphones</Typography>
              </div>
            </form>
          </div>
          {/* PRICE RANGE */}
          <div className="bg-[#F8F8F8] mt-4 rounded-md p-2">
            <Typography varient="h5">PRICES</Typography>
            <div>
              <Typography varient="small">Range:</Typography>
              <Typography varient="small">$599 - $999</Typography>
            </div>
            <input type="range" />
          </div>
          {/* BRAND */}
          <div className="bg-[#F8F8F8] mt-4 rounded-md p-2">
            <Typography varient="h5">BRAND</Typography>
            <div>
              <Typography varient="small">Apple</Typography>
              <Typography varient="small"></Typography>
            </div>
            <div>
              <Typography varient="small">HP</Typography>
              <Typography varient="small"></Typography>
            </div>
            <div>
              <Typography varient="small">Samsung</Typography>
              <Typography varient="small"></Typography>
            </div>
            <div>
              <Typography varient="small">Dell</Typography>
              <Typography varient="small"></Typography>
            </div>
          </div>
          {/* MORE */}
          <div className="bg-[#F8F8F8] mt-4 text-center rounded-md p-2">
            <Typography varient="h5">MORE</Typography>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="p-3 w-[70%]">
          {/* PRODUCTS HEAD */}
          <div className="flex justify-between bg-[#F8F8F8] p-3">
            <div className="flex gap-2">
              {/* SHOW ITEMS NUMBER */}
              <Typography varient="small">items 12 </Typography>
              {/* SORT PRODUCTS BY NAME */}
              <form action="" className="flex gap-2">
                <Typography varient="small">Sort By</Typography>
                <select name="" id="">
                  <option value="">Name</option>
                </select>
              </form>
            </div>
            {/* NUMBER OF ITEMS WILL BE SHOWN */}
            <div className="flex">
              <form action="" className="flex gap-2">
                <Typography varient="small">Show</Typography>
                <select name="" id="">
                  <option value="">12</option>
                </select>
              </form>
            </div>
          </div>
          {/* PRODUCTS */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Store;
