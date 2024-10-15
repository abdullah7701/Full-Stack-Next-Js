
'use client'
import React, { useState } from 'react'
import { MdOutlineDeveloperMode } from "react-icons/md";
import Resorces from '@/components/Home/Resorces';
// import GetConsultingSection from '../../Components/GetConsultingSection';
import BenefitsUs from './BenefitsWorkWithUs';
import GetConsultingSection from '@/components/GetConsultingSection'; 
import { FaCodepen } from "react-icons/fa";
import { FaCodeMerge } from "react-icons/fa6";
import { MdCodeOff } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";
import { SiCodeclimate } from "react-icons/si";
import { SiLintcode } from "react-icons/si";import { IoLayersOutline } from "react-icons/io5";
import { SiClickhouse } from "react-icons/si";
import { FaPagelines } from "react-icons/fa";
import { MdPages } from "react-icons/md";
import { BiLastPage, BiLayerMinus } from "react-icons/bi";
import { SiSpeedypage } from "react-icons/si";
const SoftwareOffers = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const subServices = [
    {
      id: 1,
      icon: FaCodepen,
      heading: "Full Stack Development",
      description: "Our team of expert developers handle your development down to the T. We design apps with a strategy that aligns with your business goals and has all the features you need for effortless management."
    },
    {
      id: 2,
      icon: FaCodeMerge,
      heading: "Frontend Development",
      description: "Our expert UX/UI designers and frontend developers design aesthetic interfaces that ensure your users have the ultimate experience when interacting with any of your online platforms."
    },
    {
      id: 3,
      icon: MdCodeOff,
      heading: "Backend Development",
      description: "Infolatch also has the best backend developers who are experts in programming languages and frameworks. Hence, they design software with amazing data processing and enhanced performance for your business."
    },
    {
      id: 4,
      icon: AiOutlineCode,
      heading: "Enterprise Software Development",
      description: "We tailor enterprise software solutions incorporating our security and scalability measures to help them execute their operations while boosting performance."
    },
    {
      id: 5,
      icon: SiLintcode,
      heading: "Startup Development",
      description: "We also help in startup development for new businesses while providing them ongoing support for changing needs on the new journey."
    },
    {
      id: 6,
      icon: SiCodeclimate,
      heading: "Product Strategy",
      description: "Allow us to align your business goals with product strategies and ensure that each product fulfils its intended purpose. "
    },
  ]
  const subServicesTwo = [
    {
      id: 1,
      icon: IoLayersOutline,
      heading: "Scalable Development ",
      description: "Our custom software development solutions bring scalability to your business. Whenever new functions and features are upgraded, your software handles it all effortlessly without disrupting business operations. "
    },
    {
      id: 2,
      icon: BiLayerMinus,
      heading: "Bringing Agility to Software ",
      description: "Agility is very crucial when it comes to software development as it allows your software to evolve with the changing requirements of your business. Our agile software development allows you to make changes effortlessly without affecting the user experience. "
    },
    {
      id: 3,
      icon: FaPagelines,
      heading: "Compliance and Security ",
      description: "Our software development services help you with enhanced security. As software handles sensitive information that needs to be protected. We incorporate the highest security standards, compliance, and measures so your business can face any cyber security threats without disruption."
    },
    {
      id: 4,
      icon: MdPages,
      heading: "Quality Assurance ",
      description: "We believe in bringing flawless software products for our consumers so that you get a seamless experience. Our quality assurance team run rigorous tests before the development phase so that you get a fully functional and impeccable product."
    },
    {
      id: 5,
      icon: BiLastPage,
      heading: "Enhanced Data Storage and Processing ",
      description: "Team Infolatch also helps enhance your data storage and processing power so that your enterprise doesn't face any challenges while handling data. As massive amounts of data need to be generated, processed, and stored, we ensure that your software has high and secure data storage capabilities and the ability to retrieve data fast. "
    },
    
  ]

  return (
    <>
    <div className='lg:px-20 px-6 py-20 min-h-screen text-primary bg-gray-100'>
      <h1 className='text-4xl font-heading font-bold text-forth'>Software Development Services</h1>
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
  
    <GetConsultingSection heading={"Are you ready for high-end, tailored software solutions for your enterprise or startup? Contact us now! "} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
    <BenefitsUs/>
    <Resorces/>
    <div className='lg:px-20 px-6 py-20 min-h-screen text-primary bg-gray-100'>
      <h1 className='text-4xl font-heading font-bold text-forth lg:ppagew-[700px]'>Software Development
      Challenges we solve for you </h1>
      <div className='py-20 grid lg:grid-cols-2 gap-10'>
        {subServicesTwo.map(service => (
           <div key={service.id}   className={` max-w-[590px]  min-h-[100px] font-poppins p-6 flex gap-4 rounded transition-all duration-200 border-t-4 border-tirtry cursor-pointer`}>
           <div className='flex flex-col gap-4 text-start'>
             <div className='flex gap-4 items-center'>
               <div className='border-2 border-forth p-6 flex items-center w-12 justify-center rounded-full h-12'>
                 <p className={` text-forth text-4xl`}>{<service.icon />}</p>
               </div>
               <h3 className={`font-heading text-forth font-semibold text-2xl `}>{service.heading}</h3>
             
             </div>
             <p className=' mt-3 mb-6 font-poppins'>{service.description}</p>
            
           </div>
         </div>
        ))}
      </div>
     
    </div>
    <GetConsultingSection heading={"Got an app idea that needs expert hands? "} text1={"Reach out to us today to start transforming your concept into a reality. "}/>
  
    </>
  )
}

export default SoftwareOffers;
