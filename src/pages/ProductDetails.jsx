import React from 'react'
import Typography from '../components/common/Typography';
import Navigation from '../components/Navigation';
import ProductData from '../components/product details/ProductData';
import WhiteProduct from '../components/product details/WhiteProduct';
import ProductDesc from '../components/product details/ProductDesc';
import BlueProduct from '../components/product details/BlueProduct';
import RelativeProducts from '../components/product details/RelativeProducts';

function ProductDetails() {
    

  return (
    <div className='flex flex-col items-center'>
        <Navigation />
        {/* MAIN CONTAINER */}
        <div className=' w-[90%] flex flex-col'>
            {/* PRODUCT DATA */}
            <div className=' w-full'>
                {/* UPPER */}
                <div className='  flex'>
                    {/* LEFT */}
                    <div className='w-[75%] h-[400px] '>
                        <ProductData />
                    </div>
                    {/* RIGHT */}
                    <div className='h-full'>
                        {/* best sale */}
                        <WhiteProduct />
                    </div>
                </div>
                {/* LOWER */}
                <div className=' flex justify-between w-[97%]'>
                    {/* LEFT */}
                    <div>
                        {/* product desc */}
                        <ProductDesc />
                    </div>
                    {/* RIGHT */}
                    <div>
                        {/* product name card */}
                        <BlueProduct />
                    </div>
                </div>
            </div>
            {/* RELATIVE PRODUCTS */}
            <div className=''>
                {/* PRODUCTS */}
                <div>
                    <RelativeProducts />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
