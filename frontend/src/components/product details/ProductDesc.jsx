import React from 'react'
import { Link } from 'react-router'
import Typography from '../common/Typography'

function ProductDesc() {
  return (
    <div className='w-[800px] h-[334px] bg-[#F8F8F8] '>
        {/* HEAD */}
        <div className=' flex gap-5 p-2 pl-5 border-b-2'>
            <Typography varient="p" style='font-semibold text-[#2E90E5] border-b-2 border-[#2E90E5]'>Product Information</Typography>
            <Typography varient="p">Reviews</Typography>
        </div>
        {/* DESC */}
        <div className='p-6'>
            <Typography varient="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore vero dolorem delectus omnis, vitae optio nihil error unde odio exercitationem saepe ducimus ipsa nisi nam. Suscipit inventore vel illum et?</Typography>
            <Typography varient="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore vero dolorem delectus omnis, vitae optio nihil error unde odio exercitationem saepe ducimus ipsa nisi nam. Suscipit inventore vel illum et?</Typography>
            <Typography varient="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore vero dolorem delectus omnis, vitae optio nihil error unde odio exercitationem saepe ducimus ipsa nisi nam. Suscipit inventore vel illum et?</Typography>
            <Typography varient="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore vero dolorem delectus omnis, vitae optio nihil error unde odio exercitationem saepe ducimus ipsa nisi nam. Suscipit inventore vel illum et?</Typography>
        </div>
    </div>
  )
}

export default ProductDesc
