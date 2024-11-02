

'use client'
import React, { useState } from 'react'

import GetandEstimateButtn from '@/components/GetandEstimateButtn';
import { FaCodepen } from "react-icons/fa";
import { FaCodeMerge } from "react-icons/fa6";
import { MdCodeOff } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";
import { SiCodeclimate } from "react-icons/si";
import { SiLintcode } from "react-icons/si";import { IoLayersOutline } from "react-icons/io5";

import GetConsultingSection from '@/components/GetConsultingSection';

import BookACallButton from '@/components/BookACallButton';
export default function CloudService (){
    const [hoveredId, setHoveredId] = useState(null);

  const subServices = [
    {
      id: 1,
      icon: FaCodepen,
      heading: "DevOps",
      description: "Our Cloud DevOps solutions help businesses simplify their operations so that they become faster and better. Team Infolatch will enable you to use futuristic software delivery for unparalleled agility and velocity. DevOps focuses on developing software that highlights your business value while promoting teamwork and supporting frequent deployments to deliver trustworthy solutions. With our services, your business will be on a continuous journey of improvement. We are among the leading DevOp service providers dedicated to enhancing application velocity while minimizing delivery pipeline time and ensuring quicker deployment of the latest features to enhance user experience."
    },
    {
      id: 2,
      icon: FaCodeMerge,
      heading: "AWS Services",
      description: "Amazon Web Services (AWS) is the top cloud service provider that enables companies to migrate their apps to the cloud easily and affordably. Infolatch helps elevate your cloud infrastructure to enhance your scalability as well as operational agility with our tailored AWS Cloud services to empower your business. We are a reputable firm that provides exceptional AWS cloud computing services with our extensive knowledge to help you manage AWS clouds.We provide AWS consulting, integration, and implementation services. Allow us to revolutionize your operations using AWS cloud services to help your business reach new heights."
    },
    
  ]
    return(

        <>
          <div className='bg-forth'>
        <div className="   flex justify-between pt-20 pb-10 lg:gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6'>
            <h1 className=' text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight'>Get your IT Infrastructure Managed with the Ultimate Cloud Strategy</h1>
            <p className=' font-poppins pt-6'>Infolatch brings the ultimate Cloud solutions making it possible for businesses to enhance their productivity while reducing their overheads alongside reduced time-to-market. Our team has helped many clients from different industries become agile and respond to the changing market landscape in a timely manner. We design a tailored cloud solution for each client, depending on their unique requirements and budget. Let us take care of your cloud services while you focus on your core business operations and make them excel together!
            </p>
            <div  
      className=' py-6 flex gap-4 justify-start items-center'>
  <BookACallButton/>
 
</div>
        </div>
       
        </div>
        </div>
        <div className='lg:px-20 p-6 py-20 min-h-screen text-primary bg-gray-100'>
      <h1 className='text-4xl font-heading font-bold text-forth'>Our Cloud Services help you Takeover the World!
      </h1>
      <div className='py-20 grid lg:grid-cols-2 gap-10'>
        {subServices.map(service => (
          <div
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            key={service.id}
            className='p-6 bg-secondary shadow-md'
          >
            <div className='flex gap-5 items-center '>
              <p className={` transition-all duration-150 ease-in p-2 rounded-lg text-4xl ${hoveredId === service.id ? 'bg-white text-primary' : 'bg-forth text-secondary '}`}>
                <service.icon />
              </p>
              <h2 className=' text-2xl font-poppins font-semibold text-forth'>{service.heading}</h2>
            </div>
            <p className=' my-6 font-poppins'>{service.description}</p>
          </div>
        ))}
      </div>
     
    </div>
  
    <GetConsultingSection heading={"Harness the power of our AWS services for optimal performance while driving innovation. Contact us Today!"} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
        </>
    )
}