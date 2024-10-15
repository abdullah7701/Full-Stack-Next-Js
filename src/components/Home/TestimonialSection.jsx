'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const TestimonialSlider = () => {
 
const reviews = [
  {
    id:1,
    name: "Terry Brooks",
    p2 : "lorem",
    review: "Their comprehensive approach guarantees a polished final product."
  },
  {
    id:2,
    name: "Duja",
    p2 : "lorem",
    review: "It changed everything to work with this agency. Their design and development knowledge enabled us to produce a visually appealing and easy-to-use platform."
  },
  {
    id:3,
    name: "William",
    p2 : "lorem",
    review: "They stand out for their professionalism and accuracy. Our performance has increased substantially because of the software solution they designed"
  },
  {
    id:4,
    name: "S.S Security Corporation",
    p2 : "lorem",
    review: "I'm delighted with the service. The group exceeded my expectations and satisfied our objectives with personalized service."
  }
]
  return (
<div className=' min-h-screen flex flex-col justify-center'>

        <div className=' flex flex-col justify-center items-center'>
          <h1 data-aos='fade-up' data-aos-duration='500' className='font-overlock text-forth lg:text-5xl text-4xl mb-4 font-semibold text-center mx-auto'>
            Dont Just Take Our Words..
          </h1>
          <p data-aos='fade-up' data-aos-duration='500' className='font-poppins lg:w-[500px] text-center'>
          Testimonials that speak for themselves
          </p>
          <hr className='mt-3 lg:w-[200px] border-t-4 border-secondary items-center mx-auto' />
        </div>
<div className='lg:px-28 lg:mt-0 mt-10'>
<Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper lg:px-20 flex justify-start flex-col items-start"
      >
      {reviews.map(review=> (
          <SwiperSlide key={review?.id} className=' shadow-md shadow-gray-200 flex flex-col items-start py-10  px-12   lg:px-20 justify-start font-poppins'>
          <div className=' flex gap-4 items-start' >
           <Image src='/profile.jpg' alt="helo" width={64} height={64}  className=' rounded-full w-16'  />
          <div className=' flex flex-col items-start'>
          <p className=' font-semibold text-forth'>{review.name}</p>
          <p>⭐⭐⭐⭐⭐</p>
          </div>
    
          </div>
          <div className="flex items-start text-start mt-6">
       <FaQuoteLeft className="mr-2 text-forth text-3xl hidden lg:flex" />
       <p className="flex-grow">
        {review.review}
         <span className="inline-block ml-1"><FaQuoteRight className=" text-forth text-2xl hidden lg:flex" /></span>
       </p>
     </div>
         </SwiperSlide>
      ))}
       
      </Swiper>
</div>
</div>
  );
};

export default TestimonialSlider;
