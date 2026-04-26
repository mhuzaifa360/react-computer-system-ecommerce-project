import React from "react";
import Typography from "../common/Typography";

function Category() {
  return (
    <div>
        {/* CATEGORY */}
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
  );
}

export default Category;
