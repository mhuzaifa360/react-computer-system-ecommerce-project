import React from 'react'
import Typography from '../components/common/Typography';
import Navigation from '../components/Navigation';
import ProductData from '../components/product details/ProductData';

function ProductDetails() {
    

  return (
    <div className='flex flex-col items-center'>
        <Navigation />
        {/* MAIN CONTAINER */}
        <div className='bg-slate-200 w-[90%] flex'>
            {/* PRODUCT DATA */}
            <div className='bg-slate-400 w-full'>
                {/* UPPER */}
                <div className='bg-red-400 w-[70%] h-[400px]'>
                    {/* LEFT */}
                    <div className='h-full'>
                        <ProductData />
                    </div>
                    {/* RIGHT */}
                    <div className='h-full'>
                        {/* best sale */}
                    </div>
                </div>
                {/* LOWER */}
                <div className='bg-blue-400 w-[25%]'>
                    {/* LEFT */}
                    <div>
                        {/* product info */}
                    </div>
                    {/* RIGHT */}
                    <div>
                        {/* product name card */}
                    </div>
                </div>
            </div>
            {/* RELATIVE PRODUCTS */}
            <div>
                {/* PRODUCTS */}
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
