import React from 'react'
import macBanner from '../../assets/images/home/mac banner.png'
function MacBanner() {
  return (
    <div className='flex justify-center mt-4'>
      <div className=' w-[90%]'>
        <img src={macBanner} alt="" />
      </div>
    </div>
  )
}

export default MacBanner
