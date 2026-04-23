import React from 'react'
import pcsetupimg2 from '../../assets/images/home/pcsetup2.png'
import Typography from '../common/Typography'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Btn from '../common/Btn';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <div>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={ false }
                // scrollbar={{ draggable: false }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide >
                    <div className='w-full  h-[400px] flex justify-evenly items-center'>
                    <div>
                        <Typography varient='p' >Hot Sale</Typography> 
                        <Typography varient='h2' style='font-bold'>Gaming PC</Typography> 
                        <Typography varient='h2' style='font-bold'>Complete Setup</Typography> 
                        <Btn variant='blue'>Explore</Btn>
                        
                    </div>
                    <div>
                        <img src={pcsetupimg2} alt="" className='w-[338px]' />
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='w-full h-[400px] flex justify-evenly items-center'>
                    <div>
                        <Typography varient='p' >Hot Sale</Typography> 
                        <Typography varient='h2' style='font-bold'>Gaming PC</Typography> 
                        <Typography varient='h2' style='font-bold'>Complete Setup</Typography> 
                        <button className='bg-[#2196F3] text-white p-1 pl-10 pr-10 rounded-md hover:bg-[#1b84da]'>Explore</button>
                    </div>
                    <div>
                        <img src={pcsetupimg2} alt="" className='w-[338px]' />
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='w-full  h-[400px] flex justify-evenly items-center'>
                    <div>
                        <Typography varient='p' >Hot Sale</Typography> 
                        <Typography varient='h2' style='font-bold'>Gaming PC</Typography> 
                        <Typography varient='h2' style='font-bold'>Complete Setup</Typography> 
                        <button className='bg-[#2196F3] text-white p-1 pl-10 pr-10 rounded-md hover:bg-[#1b84da]'>Explore</button>
                    </div>
                    <div>
                        <img src={pcsetupimg2} alt="" className='w-[338px]' />
                    </div>
                    </div>
                </SwiperSlide>
               
            </Swiper>
            
        </div>
    )
}

export default Slider