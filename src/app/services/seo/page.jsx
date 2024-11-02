
'use client'
import React,{useState} from "react";
import BookACallButton from "@/components/BookACallButton"
import GetandEstimateButtn from "@/components/GetandEstimateButtn"
import { MdAdsClick, MdOutlineDeveloperMode } from "react-icons/md";

import Resorces from "@/components/Home/Resorces";

import GetConsultingSection from "@/components/GetConsultingSection"
import BenefitsUs from "@/app/services/BenefitsWorkWithUs";
import { GiLowTide } from "react-icons/gi";
import { FaHighlighter } from "react-icons/fa";
import { PiSortDescendingThin, PiUserCircleBold, PiWebcamFill } from "react-icons/pi";
import { FaMobileRetro } from "react-icons/fa6";
export default function SEO(){
    const [hoveredId, setHoveredId] = useState(null);
    const subServices = [
        {
          id: 1,
          icon: GiLowTide,
          heading: "SEO Consulting",
          description: "Accelerate your business growth with our strategic SEO leadership and advisory for matchless success."
        },
        {
          id: 2,
          icon: FaHighlighter,
          heading: "Keyword Research",
          description: "Our experts recognize and then implement strategic keyword sets for driving organic traffic as well as content alignment."
        },
        {
          id: 3,
          icon: MdAdsClick,
          heading: "SEO Audits",
          description: "Our SEO experts will help with your online presence refinement through our comprehensive SEO diagnostics."
        },
        {
          id: 4,
          icon: PiUserCircleBold,
          heading: "SEO Strategy",
          description: "Infolatch helps you in strategically increasing high quality organic traffic to  enhance your digital presence."
        },
        {
            id: 5,
            icon: PiWebcamFill,
            heading: "Link Building and Outreach",
            description: "Allow us to enhance the visibility of your brand with our targeted outreach programs and secure inbound links"
          },
          {
            id: 6,
            icon: FaMobileRetro,
            heading: "Technical SEO",
            description: "We use the latest SEO technical standards for your website to enhance its visibility. "
          },
          {
            id: 7,
            icon: PiSortDescendingThin,
            heading: "Video SEO",
            description: "Our experts help you raise your video rankings through promotions and tagging on the leading video platforms. "
          },
         
        
      ]
   
    return(
        <>
        
        <div className='bg-forth'>
        <div className="  flex justify-between pt-20 pb-10 lg:gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6'>
            <h1 className=' text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight'>Leading SEO Services to help Businesses Drive Revenue with Tailored Solutions


            </h1>
            <p className=' font-poppins pt-6'>Infolatch’s SEO services can help you accelerate your revenue and prove its outstanding impact on your bottom line. We combine our expertise and latest tech with our tailored strategies, first-party data activation, and ROI tracking to elevate your online presence. From in-depth audits to strategic content strategies to link building, our SEO services will drive measurable growth for your business with enhanced online visibility. Contact us to find out more about the custom solutions to capture your search traffic and turn it into guaranteed revenue. 


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
      <h1 className='text-4xl font-heading font-bold text-forth'>From Keywords to Conversions: SEO Solutions that Drive Real Results
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
  
    <GetConsultingSection heading={" Ready to get the ball rolling? Give us a call, and we will take care of it from there! "} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
    <Resorces heading="Our expertise in SEO"/>
    <BenefitsUs/>
   
   
    <GetConsultingSection heading={"Do You Want to Find Out How Doable Your Idea Is? Let’s Connect! "} text1={"Reach out to us today to start transforming your concept into a reality. "}/>
        </>
    )
}