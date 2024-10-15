
'use client'
import React,{useState} from "react";

import { MdOutlineBubbleChart } from "react-icons/md";
import { MdOutlineStackedLineChart } from "react-icons/md";


import GetConsultingSection from "@/components/GetConsultingSection";


import { SiCodeigniter } from "react-icons/si";
import { BiCodeBlock } from "react-icons/bi";
import { TbBrandLeetcode } from "react-icons/tb";
import { TbPointerCode } from "react-icons/tb";



import { RiFunctionAddLine } from 'react-icons/ri';
import { PiCardsThreeFill } from 'react-icons/pi';
import { GiPlantSeed } from 'react-icons/gi';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { FaBullhorn } from 'react-icons/fa';
import { AiOutlineApi } from 'react-icons/ai';
import { MdOutlineWeb } from 'react-icons/md';
import { FiMonitor } from 'react-icons/fi';
export default function FinanceWork(){
    const [hoveredId, setHoveredId] = useState(null);
    const subServices = [
        {
          id: 1,
          icon: MdOutlineBubbleChart,
          heading: "Discovery and Research",
          description: "We conducted a deep research of the client needs and their competition to get the insights to come up with the perfect design for their goals"
        },
        {
          id: 2,
          icon: MdOutlineStackedLineChart,
          heading: "UI/UX Design",
          description: "We created intuitive and interactive interfaces for our web and apps so that clients can enjoy effortless interoperability and a perfect user experience. "
        },
       
        
      ]
      const Results = [
        {
            id: 1,
            icon: RiFunctionAddLine,
            description: "We followed all the steps of our process to design the perfect solution and achieve the business goals."
        },
        {
            id: 2,
            icon: PiCardsThreeFill,
            description: "While developing our tailored fintech solution, we incorporated the ultimate elements and features in the apps to facilitate users. We developed applications for automated accounting with our CRM, ERP, payroll, and other solutions."
        },
        {
            id: 3,
            icon: GiPlantSeed,
            description: "We integrated the highest-standard security measures into our products so that no security breach or fraudulent activity can occur."
        },
        {
            id: 4,
            icon: TbBrandGoogleAnalytics,
            description: "We can design lending solutions to handle loan and credit management effectively."
        },
        {
            id: 5,
            icon: FaBullhorn,
            description: "We created interactive and engaging portals to make the loan and credit management effortless while offering the ultimate value to consumers."
        },
        {
            id: 6,
            icon: AiOutlineApi,
            description: "We delivered an aesthetic, responsive, and user-friendly UI across both web and mobile portals for exploring financial aid options and applying online."
        }
    ];
      const subServicesHere = [
        {
          id: 1,
          icon: SiCodeigniter,
          heading: "Discovery and Research ",
          description: "We conducted a deep research of the client needs and their competition to get the insights to come up with the perfect design for their goals"
        },
        {
          id: 2,
          icon: BiCodeBlock,
          heading: "UI/UX Design ",
          description: "We created intuitive and interactive interfaces for our web and apps so that clients can enjoy effortless interoperability and a perfect user experience"
        },
        {
          id: 3,
          icon: TbBrandLeetcode,
          heading: "Full-Stack Development ",
          description: "We developed a reliable and scalable solution using our extensive knowledge in Java, ReactJS, Spring Boot, HTML, TypeScript, PostgreSQL, Redus, CSS, MUI, and React Native."
        },
        {
          id: 4,
          icon: TbPointerCode,
          heading: "Quality Assurance ",
          description: "Our rigorous testing phase ensured the best quality of the software for outstanding results"
        },
        
      ]

    return(
        <>
        
        <div className='bg-forth'>
        <div className="  flex justify-between pt-20 pb-10 lg:gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6'>
            <h1 className='text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight'>BudgetBuddy</h1>
            <p className=' font-poppins pt-6'>Infolatch fintech development services offered robust financial solutions to businesses, making their financial operations streamlined. From enhanced access to capital and financial data management to consistent cash flow and regulated revenue, we brought financial solutions according to the unique needs of your business powered by the latest technologies.
            </p>
            <div  
            className=" flex gap-4 items-center mt-10 font-poppins font-semibold flex-wrap"
    >
  <p className=" px-6 py-2 border-2 border-secondary  rounded-full font-poppins">Java</p>
  <p className=" px-6 py-2 border-2 border-secondary  rounded-full font-poppins">Spring Boot</p>
  <p className=" px-6 py-2 border-2 border-secondary  rounded-full font-poppins">ReactJS</p>
  <p className=" px-6 py-2 border-2 border-secondary  rounded-full font-poppins">JavaScript</p>
  <p className=" px-6 py-2 border-2 border-secondary  rounded-full font-poppins">Css</p>
  <p className=" px-6 py-2 border-2 border-secondary  rounded-full">Html</p>
  <p className=" px-6 py-2 border-2 border-secondary  rounded-full">Redux</p>
  <p className=" px-6 py-2 border-2 border-secondary  rounded-full">Tailwind Css</p>
  <p className=" px-6 py-2 border-2 border-secondary  rounded-full">MongoDB</p>
  <p className=" px-6 py-2 border-2 border-secondary  rounded-full">React Native</p>
</div>
        </div>
        {/* <div className=' flex items-start justify-end  mr-20  mt-20' >
            <img src='/design.png' alt="helo" width={500}/>
        </div> */}
        </div>
        </div>
        <div className='lg:px-20 px-6 py-20 min-h-screen text-primary bg-gray-100'>
      <h1 className='text-4xl font-heading font-bold text-forth'>Overview  </h1>
      <div className='py-20 grid lg:grid-cols-2 gap-10'>
        {subServices.map(service => (
          <div
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            key={service.id}
            className='p-6 bg-secondary'
          >
            <div className='flex gap-5 items-center'>
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
  
    <GetConsultingSection heading={" Interested in different services?"} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
    <div className='lg:px-20 px-6 py-20 min-h-screen text-primary bg-gray-100'>
        <h1 className='text-4xl font-heading font-bold text-forth w-[700px]'>Our Approach
        </h1>
        <div className='py-20 grid lg:grid-cols-2 gap-10'>
          {subServicesHere.map(service => (
             <div key={service.id}   className={` max-w-[590px]  min-h-[100px] font-poppins p-6 flex gap-4 transition-all duration-200 shadow-lg cursor-pointer`}>
             <div className='flex flex-col gap-4 text-start'>
               <div className='flex gap-4 items-center'>
                 <div className='border-2 border-tirtry p-6 flex items-center w-12 justify-center rounded-full h-12'>
                   <p className={`text-tirtry text-2xl`}>{<service.icon />}</p>
                 </div>
                 <h3 className={`font-poppins font-semibold text-xl capitalize `}>{service.heading}</h3>
               
               </div>
               <p className=' mb-6 mt-3 font-poppins'>{service.description}</p>
              
             </div>
           </div>
          ))}
        </div>
       
      </div>
      <GetConsultingSection heading={"Got an app idea that needs expert hands? "} text1={"Reach out to us today to start transforming your concept into a reality. "}/>
      <div className='lg:px-20 px-6 py-20 min-h-screen text-primary bg-gray-100'>
      <h1 className='text-4xl font-heading font-bold text-forth'>Results  </h1>
      <div className='py-20 grid lg:grid-cols-2 gap-10'>
        {Results.map(service => (
          <div
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            key={service.id}
            className='p-6 bg-secondary'
          >
            <div className='flex gap-5 items-center'>
              <p className={` transition-all duration-150 ease-in p-2 rounded-lg text-4xl ${hoveredId === service.id ? 'bg-white text-primary' : 'bg-forth text-secondary '}`}>
                <service.icon />
              </p>
              {/* <h2 className=' text-2xl font-poppins font-semibold text-forth'>{service.heading}</h2> */}
            </div>
            <p className=' my-6 font-poppins'>{service.description}</p>
          </div>
        ))}
      </div>
     
    </div>
   
   
        </>
    )
}