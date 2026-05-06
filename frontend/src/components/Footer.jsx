import React from 'react'
import Typography from "./common/Typography";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Btn from './common/Btn';

function Footer() {
  return (
    <div className='h-[325px] bg-[#F8F8F8] flex  justify-center items-center'>
      <div className='w-[94%] flex flex-row h-full justify-center items-center'>

      <div className='w-[25%] h-[230px] flex flex-col justify-evenly'>
        <Typography varient='h5' style='text-[#2196F3] font-semibold'>Store Name</Typography>
        <Typography varient='small'>Lorem ipsum dolor sit amet consectetur perspiciatis placeat unde est repellendus, eos rerum velit explicabo? Numquam ipsam excepturi enim dolore.</Typography>
        <Typography varient='small'>© 2026 All rights reserved.</Typography>
      </div>
      {/* usefull links */}
      <div className='w-[20%] h-[230px] flex flex-col justify-evenly'>
        <Typography varient='h4' style='font-semibold'>Usefull Links</Typography>
        <Typography varient='small'>Home</Typography>
        <Typography varient='small'>Store</Typography>
        <Typography varient='small'>Accessories</Typography>
        <Typography varient='small'>About Us</Typography>
      </div>
      {/* our offers */}
      <div className='w-[20%] h-[230px] flex flex-col justify-evenly'>
        <Typography varient='h4' style='font-semibold'>Our Offers</Typography>
        <Typography varient='small'>About Us</Typography>
        <Typography varient='small'>Information</Typography>
        <Typography varient='small'>Privacy Policy</Typography>
        <Typography varient='small'>Terms and Conditions</Typography>
      </div>
      {/* subscribe */}
      <div className='w-[35%] h-[230px] flex flex-col justify-evenly'>
        <Typography varient='small' style='text-[#2196F3]'>Subscribe to our emails</Typography>
        <Typography varient='h3' style='font-semibold'>For Latest News & Updates</Typography>
        <form action="" className='w-[400px] h-[40px]'>
          <input type="text" placeholder='Enter your Email' className='h-full w-[70%] pl-2 rounded-md border-2'/>
          <Btn variant='blue'>Subscribe</Btn>
        </form>
        {/* icons */}
        <div className='flex flex-row-reverse gap-3'>
          <FaTwitter />
          <FaFacebook />
          <FaYoutube />
          <FaSquareInstagram />
        </div>

      </div>
      </div>
    </div>
  )
}

export default Footer
