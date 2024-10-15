

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
export default function AIService (){
    const [hoveredId, setHoveredId] = useState(null);

  const subServices = [
    {
      id: 1,
      icon: FaCodepen,
      heading: "Experienced Consultants and IT Professionals",
      description: "Our experienced consultants and IT professionals have relevant experience in AI technologies and frameworks. You will just need to connect with us for your AI integration needs, and we will design a solution tailored for your business."
    },
    {
      id: 2,
      icon: FaCodeMerge,
      heading: "Deep Expertise for Changing Business Needs",
      description: "Infolatch has a deep expertise in AI relevant services and solutions. We have been dealing with business intelligence and data warehousing for years now. We also have expertise in image analysis and big data, so you can contact us with any complex AI situation, and we shall give you a perfect solution for your business"
    },
    {
      id: 3,
      icon: MdCodeOff,
      heading: "Domain Experience Across Various Industries",
      description: "We have an extensive domain experience across various industries including healthcare, marketing, financial services, and so on. Call us today to consult with one of our experts and discuss your needs to get a satisfactory and reliable AI solution."
    },
    {
      id: 4,
      icon: AiOutlineCode,
      heading: "Ultimate Portfolio with Successful AI Projects",
      description: "User Satisfaction is the major driving force behind our AI projects. We value your business needs and integrate AI solutions accordingly to revolutionize your business and take it to the next level. From AI-powered apps to integrations, we ensure you will get the ultimate AI solution from us, as have so many others."
    },
    {
      id: 5,
      icon: SiLintcode,
      heading: "Transform your Business with Infolatch AI Services",
      description: "We offer AI solutions and services to transform your business operations. Allow us to unlock new business models for you and help you accelerate with process improvements you never even thought about. Our team will walk you through each step and help you understand the true potential of our AI services to take your business to new heights. "
    },
    {
      id: 6,
      icon: SiCodeclimate,
      heading: "Empower your Business Operations ",
      description: "We have AI expertise that will encompass NLP and computer vision to deliver learning capabilities for speech-to-text conversion, face recognition,word embedding generation, sentiment and activity detection, and more. Leverage your business with the power of AI capabilities and experience the growth of your dreams."
    },
  ]
    return(

        <>
          <div className='bg-forth'>
        <div className="  flex justify-between pt-20 pb-10 lg:gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6'>
            <h1 className='  text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight'>Revolutionize your Business with our AI Services!
            </h1>
            <p className=' font-poppins pt-6'>Infolatch is your ultimate AI consulting partner that will design state-of-the-art AI solutions customised to the unique needs of each client. Our AI experts will generate ways to speed up AI development while optimizing project cost and minimizing risks. 
            </p>
            <div  
      className=' py-6 flex gap-4 justify-start items-center'>
  <BookACallButton/>

</div>
        </div>
       
        </div>
        </div>
        <div className='lg:px-20 p-6 py-20 min-h-screen text-primary bg-gray-100'>
      <h1 className='text-4xl font-heading font-bold text-forth'>Why Choose Infolatch as your Reliable AI Software Development Partner 
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
  
    <GetConsultingSection heading={"Are you ready to leverage your enterprise with our transformative AI solutions? Get in touch with us NOW! "} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
        </>
    )
}