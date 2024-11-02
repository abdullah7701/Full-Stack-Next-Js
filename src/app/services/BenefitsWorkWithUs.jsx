


import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiCodeigniter } from "react-icons/si";
import { BiCodeBlock } from "react-icons/bi";
import { TbBrandLeetcode } from "react-icons/tb";
import { TbPointerCode } from "react-icons/tb";
import { RiFunctionAddLine } from "react-icons/ri";
import { FaBarsStaggered } from "react-icons/fa6";
export default function BenefitsUs(){
    const subServices = [
        {
          id: 1,
          icon: SiCodeigniter,
          heading: "Assurance of quality",
          description: "Every solution we offer is of the highest caliber due to the efforts of our quality assurance department."
        },
        {
          id: 2,
          icon: BiCodeBlock,
          heading: "Client-Centered",
          description: "We put your needs first and build good relationships with our customers."
        },
        {
          id: 3,
          icon: TbBrandLeetcode,
          heading: "Timely response",
          description: "We take great pride in always being reachable for our clients."
        },
        {
          id: 4,
          icon: TbPointerCode,
          heading: "Sincerity",
          description: "We maintain transparency by monitoring time and tasks closely to ensure project visibility."
        },
        {
          id: 5,
          icon: RiFunctionAddLine,
          heading: "Teamwork",
          description: "To guarantee successful results, our experts work closely with clients."
        },
        {
          id: 6,
          icon: FaBarsStaggered,
          heading: "Cost-effective",
          description: "We produce high-quality solutions at a reasonable cost by employing creative strategies"
        },
      ]
    
    return(

        <div className='px-6 lg:px-20 py-20 min-h-screen text-primary bg-gray-100'>
        <h1 className='text-4xl font-heading font-bold text-forth lg:w-[700px]'>Partnering with InfoLatch brings you: 
        </h1>
        <div className='py-20 lg:grid grid-cols-2 gap-10'>
          {subServices.map(service => (
             <div key={service.id}   className={` max-w-[590px]  min-h-[100px] font-poppins p-6 flex gap-4 transition-all duration-200 lg:shadow-lg cursor-pointer border-t-4 border-tirtry lg:border-0`}>
             <div className='flex flex-col gap-4 text-start'>
               <div className='flex gap-4 items-center'>
                 <div className='border-2 border-tirtry p-6 flex items-center w-12 justify-center rounded-full h-12'>
                   <p className={`text-tirtry text-2xl font-semibold`}>{<service.icon />}</p>
                 </div>
                 <h3 className={`font-poppins font-semibold text-xl capitalize text-forth `}>{service.heading}</h3>
               
               </div>
               <p className=' mb-6 mt-3 font-poppins'>{service.description}</p>
              
             </div>
           </div>
          ))}
        </div>
       
      </div>
    )
}