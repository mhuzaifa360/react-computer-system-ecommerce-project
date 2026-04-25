import React from 'react'
import { useLocation } from 'react-router'
import Typography  from '../components/common/Typography';

function Navigation() {
    
    const location = useLocation();
  return (
    <div className='flex justify-center'>

    <div className=' w-[80%] text-[#33A0FF]'>
      <Typography varient='h5'>home {location.pathname}</Typography>
    </div>
    </div>
  )
}

export default Navigation
