import React from "react";
import Typography from "../common/Typography";
import qualityItems from "../../assets/constants/quality";

function Quality() {
  return (
    // full container
    <div className=" flex justify-center p-4">
      {/* inner container */}
      <div className=" w-[90%] flex justify-evenly ">
        {qualityItems.map((item, key) => {
          return (
            <div key={item} className="w-[317px] h-[238px]  flex flex-col justify-evenly items-center rounded-md">
                {/* image */}
              <div className="h-[25%]">
                <img src={item.image} alt="" />
              </div>
              {/* title */}
              <div className="h-[25%]">
                <Typography varient="h4" style='font-semibold'>{item.title}</Typography>
              </div>
              {/* description */}
              <div className="h-[25%]">
                <Typography varient="p" style='text-center'>
                    {item.desc}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Quality;
