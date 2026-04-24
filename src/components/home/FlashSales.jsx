import React from 'react'
import Typography from '../common/Typography'
import saleProducts from '../../assets/constants/FlashSale'
import { FaArrowRight } from "react-icons/fa6";

function FlashSales() {
  return (
     <div className=' flex flex-col items-center'>
        {/* head */}
      <div className='w-[90%] flex justify-between  my-3'>
        <Typography varient='h4' style='font-semibold'>Flash Sale on Products</Typography>
        <div className='flex w-[20%] justify-evenly '>
            <div>
                <Typography varient='small'>Days</Typography>
                <span className='bg-[#2196F3] px-1.5 py-1 rounded-md text-white'>05</span>
            </div>
            <div>
                <Typography varient='small'>Hrs</Typography>
                <span className='bg-[#2196F3] px-1.5 py-1 rounded-md text-white'>12</span>
            </div>
            <div>
                <Typography varient='small'>Mins</Typography>
                <span className='bg-[#2196F3] px-1.5 py-1 rounded-md text-white'>30</span>
            </div>
            <div>
                <Typography varient='small'>Secs</Typography>
                <span className='bg-[#2196F3] px-1.5 py-1 rounded-md text-white'>05</span>
            </div>
        </div>
      </div>
      {/* products */}
      <div className='flex w-[90%] justify-evenly'>
        {
            saleProducts.map((item,key)=>{
                return(
                    <div key={key} className='w-[330px] h-[200px] bg-[#F8F8F8] hover:bg-[#DCF0FF] flex items-center rounded-md p-2'>
                        <div className='w-[50%]'>
                            <Typography varient='h6'>{item.title}</Typography>
                            <div className='flex gap-2'>
                            <Typography varient='h5' style='text-[#2196F3] font-semibold'>{item.currency}{item.price}</Typography>
                            <Typography varient='small' effect='muted' style=' font-semibold'>{item.currency}{item.oldPrice}</Typography>

                            </div>
                            <div>
                            <Typography varient='small' effect='muted' style='flex pt-1'>{item.details}<FaArrowRight /></Typography>
                            </div>
                        </div>
                        <div className='w-[50%]'>
                            <img src={item.image} alt="" />
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default FlashSales
