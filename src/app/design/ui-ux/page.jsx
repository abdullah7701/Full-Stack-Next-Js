
'use client'
import React,{useState} from "react";
import BookACallButton from "@/components/BookACallButton"
import GetandEstimateButtn from "@/components/GetandEstimateButtn"
import { MdAdsClick, MdOutlineDeveloperMode } from "react-icons/md";

import Resorces from "@/components/Home/Resorces";

import GetConsultingSection from "@/components/GetConsultingSection"
import BenefitsUs from "@/app/services/BenefitsWorkWithUs";
import { GiLowTide } from "react-icons/gi";
import { FaBusinessTime, FaFigma, FaHighlighter } from "react-icons/fa";
import { PiEnvelopeThin, PiSortDescendingThin, PiUserCircleBold, PiUserCircleCheckDuotone, PiWebcamFill } from "react-icons/pi";
import { IoLogoDesignernews } from "react-icons/io";
import { TbDirectionSignOff } from "react-icons/tb";
import { FaMobileRetro } from "react-icons/fa6";
import { AiOutlineAntDesign } from "react-icons/ai";
export default function UIUX(){
    const [hoveredId, setHoveredId] = useState(null);
    const subServices = [
        {
          id: 1,
          icon: FaBusinessTime,
          heading: "Strategic Business Analysis",
          description: "We take time to understand what your company intends to achieve as well as who they want to target. After detailed study and research, we get insights that help us create a well-focused approach towards strategic UI/UX designs that cater for user needs and business goals"
        },
        {
          id: 2,
          icon: PiEnvelopeThin,
          heading: "Innovative Wireframing and Prototyping",
          description: "We excel at creating detailed wireframes and interactive prototypes that convert into tangible solutions. These visual diagrams not only outline the structure and functionality of your digital products but also allow for iterative improvements based on user feedback"
        },
        {
          id: 3,
          icon: FaFigma,
          heading: "Figma Mockups",
          description: "Our UI/UX design team is committed to producing mind-blowing Figma mockups. Brands’ core can be captured in these designs with high fidelity while ensuring smooth usability and engaging user interactions"
        },
        {
          id: 4,
          icon: AiOutlineAntDesign,
          heading: "MVP Design",
          description: "Our MVP design services target startups against individualistic entrepreneurs by concentrating on the rapid development of vital features. We also apply the main principles of users' needs so that our Minimum Viable Product (MVP) not only meets market demands but also sets up a base for future enhancements"
        },
        {
          id: 5,
          icon: PiWebcamFill,
          heading: "Responsive Web and Mobile Design",
          description: "Infolatch specializes in crafting responsive web interfaces and mobile-first designs. Our designs adapt seamlessly across devices whether it is a corporate website, custom web application or a mobile platform hence providing a consistent and delightful user experience"
        },
        // {
        //   id: 6,
        //   icon: FaMobileRetro,
        //   heading: "User-Centered Overhauls",
        //   description: "Revamp your current digital products with our redesigning services. We make your interface vibrant and user-friendly by enhancing its usability and aesthetic value through rigorous user testing and feedback analysis"
        // },
        // {
        //   id: 7,
        //   icon: PiSortDescendingThin,
        //   heading: "All-Inclusive User Tests",
        //   description: "User testing is an integral part of our design process, which ensures that all our solutions meet user expectations and preferences. Our scenarios tests and real-world evaluations improve the user experience to boost conversions and retention rates."
        // },
       
        {
          id: 9,
          icon: IoLogoDesignernews,
          heading: "User-Centric Interface Design",
          description: "Revamp your current digital products with our redesigning services. We make your interface vibrant and user-friendly by enhancing its usability and aesthetic value through rigorous user testing and feedback analysis"
        },
        {
          id: 10,
          icon: PiUserCircleCheckDuotone,
          heading: "User Testing",
          description: "User testing is an integral part of our design process, which ensures that all our solutions meet user expectations and preferences. Our scenarios tests and real-world evaluations improve the user experience to boost conversions and retention rates Partner with Infolatch Ltd. to boost your digital strategy through highly creative UI/UX design solutions that empower the users to drive meaningful business outcomes"
        },
        
      ]
   
    return(
        <>
        
        <div className='bg-forth'>
        <div className="   flex justify-between pt-20 pb-10 lg:gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6'>
            <h1 className='  text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight'>Infolatch&apos;s Exceptional UI/UX Design Services That Will Improve Your Digital Presence
            </h1>
            <p className=' font-poppins pt-6'>Infolatch has harnessed the power of great modern UI/UX design and put it into practice. We&apos;re your trusted partners when you need a dedicated UI/UX designer for your project or are considering
            outsourcing the service. Learn more about our comprehensive range of services and find out how we could help optimize your user experience for unparalleled business growth.
            </p>
            <div  
      className=' py-6 flex gap-4 justify-start items-center'>
  <BookACallButton/>
  
</div>
        </div>
        {/* <div className=' flex items-start justify-end  mr-20  mt-20' >
            <img src='/webdev.png' alt="helo" width={500}/>
        </div> */}
        </div>
        </div>
        <div className='lg:px-20 p-6 py-20 min-h-screen text-primary bg-gray-100'>
      <h1 className='text-4xl font-heading font-bold text-forth'>Infuse Your Digital Space with Unique User Experience Designs from Infolatch
      </h1>
      <div className='py-20 grid lg:grid-cols-2 gap-10'>
        {subServices.map(service => (
          <div
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            key={service.id}
            className='p-6 bg-secondary'
          >
            <div className='flex gap-5 items-center'>
              <p className={` transition-all duration-150 ease-in p-2 rounded-lg text-4xl ${hoveredId === service.id ? 'bg-white text-forth' : 'bg-forth text-secondary '}`}>
                <service.icon />
              </p>
              <h2 className=' text-2xl font-poppins font-semibold text-forth'>{service.heading}</h2>
            </div>
            <p className=' my-6 font-poppins'>{service.description}</p>
          </div>
        ))}
      </div>
     
    </div>
  
    <GetConsultingSection heading={" Do You Want to Launch Your Product?"} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
    <Resorces heading="Our expertise in
UI/UX Design"/>
    <BenefitsUs/>
   
   
    <GetConsultingSection heading={"Infolatch Empowering Businesses Through Innovative Solutions "} text1={"Reach out to us today to start transforming your concept into a reality. "}/>
        </>
    )
}