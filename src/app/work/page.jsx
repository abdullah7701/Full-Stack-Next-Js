
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

export default function Work(){
    const [hoveredId, setHoveredId] = useState(null);
    const subServices = [
        {
          id: 1,
          icon: MdOutlineBubbleChart,
          heading: "Client Requirements",
          description: "The client wanted a unique gateway to make campus life easy and exciting. They wanted a multipurpose software development to facilitate the people on campus. Whether they need info on campus events, buy and sell stuff or need any services, client wanted it all in one place for seamless campus life"
        },
        {
          id: 2,
          icon: MdOutlineStackedLineChart,
          heading: "Infolatch Solution",
          description: "We created a custom web and app, UniHub, for our client to help them get the web and app of their dreams. We combined all the stuff in one place, which included a marketplace for buying and selling, a hub for getting any services done, and an events manager for keeping a tab of all the events happening on campus"
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
            description: "While developing our high-quality solution we ensured that the campus gets the perfect online platform to help its inhabitants with everything they need and make the most out of their time on campus."
        },
        {
            id: 3,
            icon: GiPlantSeed,
            description: "We ensured to bring scalability to the marketplace making it easy for them to handle all scales of transactions."
        },
        {
            id: 4,
            icon: TbBrandGoogleAnalytics,
            description: "We incorporated marketplace is a great platform in UniHub for buying and selling services and items. It has made buying and selling through trusted vendors in campus effortless for the community."
        },
        {
            id: 5,
            icon: FaBullhorn,
            description: "Next we included the hub in UniHub for the community to choose from a range of services provided by a range of experts. Need a barber, hair stylist, nail or lash tech? The Hub has got you covered, offering everything you need whenever you need it with an enhanced experience."
        },
        {
            id: 6,
            icon: AiOutlineApi,
            description: "We also included an Events section, which includes campus-wide events in one place. The community gets to interact with their peers and engage in different activities by registering for this section."
        }
    ];
      const subServicesHere = [
        {
          id: 1,
          icon: SiCodeigniter,
          heading: "Discovery and Research ",
          description: "Firstly, we understood the target audience alongside the market trends and business goals. Our deep research, combined with analytical tools and a customer-centric approach, helped to design the ultimate solution"
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
          description: "We developed a reliable and scalable solution using our extensive knowledge in Java, ReactJS, Spring Boot, HTML, TypeScript, PostgreSQL, Redus, CSS, MUI, and React Native"
        },
        {
          id: 4,
          icon: TbPointerCode,
          heading: "Quality Assurance ",
          description: "We tested the design rigorously before beginning the development so that the quality and performance is up to the mark"
        },
        
      ]

    return(
        <>
        
        <div className='bg-forth'>
        <div className=" flex justify-between pt-20 pb-10 lg:gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6'>
            <h1 className=' text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight'>Uni Hub Services</h1>
            <p className=' font-poppins pt-6'>Unihub stands as the ultimate solution for web and software integration, transforming campus life through its extensive range of features. From seamless event management to a dynamic marketplace and diverse services, InfoLatch has delivered the innovative Unihub project, setting a new benchmark for enhancing campus life.
            </p>
            <div  
            className=" flex gap-4 items-center mt-10 font-poppins font-semibold flex-wrap"
    >
  <p className="px-6 py-2 border-2 border-secondary rounded-full">Java</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">Spring Boot</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">ReactJS</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">JavaScript</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">TypeScript</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">Python</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">Automation</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">DevOps</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">CSS</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">HTML</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">Redux</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">Tailwind CSS</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">Node.js</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">Next.js</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">MongoDB</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">PostgreSQL</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">Firebase</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">React Native</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">AWS</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">Docker</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">Git</p>
  <p className="px-6 py-2 border-2 border-secondary rounded-full">Figma</p>
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