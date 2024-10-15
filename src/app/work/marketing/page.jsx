
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
export default function MarketWork(){
    const [hoveredId, setHoveredId] = useState(null);
    const subServices = [
        {
          id: 1,
          icon: MdOutlineBubbleChart,
          heading: "Client Requirements",
          description: "The client wanted their e-store to attract more traffic and turn them into customers. They wanted us to work on both web and app while providing analytics and streamlining payments. "
        },
        {
          id: 2,
          icon: MdOutlineStackedLineChart,
          heading: "InfoLatch Solution",
          description: "We created custom web and app, Market Maven, for our client to help them reach more audience. The main idea of our solution was to target the right audience to visit the web and buy from the client to enhance their reach and revenue. "
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
            description: "While developing our high-quality marketing solution we ensured that the business gets the boost it deserves to reach more audience and enhance sales."
        },
        {
            id: 3,
            icon: GiPlantSeed,
            description: "We ensured to bring scalability to the marketing of business Market Maven, making it easy for them to handle all scales of transactions."
        },
        {
            id: 4,
            icon: TbBrandGoogleAnalytics,
            description: "Our tailored marketing software solutions will provide fully functional web and apps with integrated tools and analytics for them to track, monitor, and optimise the key metrics for boosting online growth."
        },
        {
            id: 5,
            icon: FaBullhorn,
            description: "We integrated APIs with this marketing solution so that everything works seamlessly. Consumers got an effortless experience while interacting with this platform."
        },
        {
            id: 6,
            icon: AiOutlineApi,
            description: "We delivered an aesthetic, responsive, and user-friendly UI across both web and mobile platforms."
        },
        {
            id: 7,
            icon: MdOutlineWeb,
            description: "Our team continues to provide ongoing maintenance and support for the continuous growth of our clients."
        }
    ];
    
      const subServicesHere = [
        {
          id: 1,
          icon: SiCodeigniter,
          heading: "Discovery and Research ",
          description: "Firstly, we understood the target audience alongside the market trends and business goals. Our deep research, combined with analytical tools and a customer-centric approach, helped to design the ultimate solution. "
        },
        {
          id: 2,
          icon: BiCodeBlock,
          heading: "UI/UX Design ",
          description: "We created a responsive design to allow adaptation to different screens and devices for a frictionless user experience"
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
          description: "We tested the design rigorously before beginning the development so that the quality and performance is up to the mark."
        },
        
      ]

    return(
        <>
        
        <div className='bg-forth'>
        <div className=" flex justify-between pt-20 pb-10 lg:gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6'>
            <h1 className='text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight'>Market Maven</h1>
            <p className=' font-poppins pt-6'>InfoLatch developers create a tailored marketing solution to empower client businesses. We have already designed unique solutions to cater to the specific needs of each business to enhance their reach and boost sales by increased brand visibility.
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