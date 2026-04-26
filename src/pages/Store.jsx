// import React, { useState } from "react";
import Banner from "../components/store/Banner";
import Navigation from "../components/Navigation";
import Typography from "../components/common/Typography";
import Category from "../components/store/Category";
import Products from "../components/store/Products";
import ProductsHead from "../components/store/ProductsHead";

function Store() {
  // const [selectedCategory, setSelectedCategory] = useState("all");
  // const [priceRange, setPriceRange] = useState(0);
  return (
    <div className=" flex flex-col items-center p-4">
      <div className="w-[90%]  ">
        {/* BANNER */}
        <div className="w-full">
          <Banner />
        </div>
        {/* NAVIGATION */}
        <div>
          <Navigation />
        </div>
        {/* BELOW SECTIONS */}
        <div className="flex justify-between pt-3">
          {/*  LEFT SECTION */}
          <div className="w-[25%]">
            <Category />
          </div>
          {/* RIGHT SECTION */}
          <div className="w-[73%]">
            <ProductsHead />
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
