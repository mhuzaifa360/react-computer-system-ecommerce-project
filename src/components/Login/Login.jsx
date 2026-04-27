import React from 'react'
import Navigation from '../Navigation'
import Typography from '../common/Typography'
import Btn from '../common/Btn'
import { Link } from 'react-router'

function Login() {
  return (
    // MIAN 
    <div className=' flex flex-col justify-center px-20 items-center'>
        {/* NAVIGATION */}
      <div className=' w-full'>
        <Navigation />
      </div>
      {/* FORM */}
      <div className=' w-[350px] h-[350px] '>
        <form action="" className='flex flex-col justify-evenly  h-full '>
            <div>
            <Typography varient='h4'>Sign In</Typography>
            <Typography varient='small'>Upgrade your tech game with us!</Typography>
            </div>
            {/* email */}
            <div className='w-full flex flex-col gap-3'>
                <label htmlFor=""><Typography varient='h5' style='font-semibold'>Email</Typography></label>
                <input type="text" placeholder='myemail@email.com' className='p-2 rounded-md bg-[#F8F8F8]'/>
            </div>
            {/* password */}
            <div className='w-full flex flex-col gap-3'>
                <label htmlFor=""><Typography varient='h5' style='font-semibold'>Password</Typography></label>
                <input type="password" placeholder='' className='p-2 rounded-md bg-[#F8F8F8]'/>
            </div>
            
            <div>
            <Typography varient='small'>Forget Password!</Typography>
            </div>
            <div>
                <Btn variant='blue'>Sign In</Btn>
            </div>
        <div className='flex'>
            <Typography varient='small'>Don't have an account? </Typography>
            <Link to={'/signup'}>Sign Up</Link>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login
