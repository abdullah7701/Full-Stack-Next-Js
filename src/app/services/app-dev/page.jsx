
'use client'
import React,{useState} from "react";
import BookACallButton from "@/components/BookACallButton"
import GetandEstimateButtn from "@/components/GetandEstimateButtn"
import { MdMobileScreenShare, MdOutlineDeveloperMode } from "react-icons/md";
import SoftwareOffers from "../SoftwareOffers"
import Resorces from "@/components/Home/Resorces";
import BenefitsUs from "../BenefitsWorkWithUs"
import GetConsultingSection from "@/components/GetConsultingSection"
import { SiKotlin, SiSwift } from "react-icons/si";
import { MdOutlineDataObject } from "react-icons/md";
import { TbBrandKotlin, TbDirectionSignFilled } from "react-icons/tb";
import { RiJavaLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { IoSave } from "react-icons/io5";
import { BsCodeSquare, BsCrosshair2 } from "react-icons/bs";
export default function AppDev(){
    const [hoveredId, setHoveredId] = useState(null);
    const subServices = [
        {
          id: 1,
          icon: TbDirectionSignFilled,
          heading: "UI/UX Mobile Design",
          description: "Infolatch believes in user-centered design. Our design team is expert in transforming your vision into a seamless user experience. Our strategic approach to UX/UI design goes way beyond aesthetics. We strive to design the highest-quality and polished interfaces for your users so that they can explore and appreciate your digital world effortlessly. "
        },
       
        {
          id: 3,
          icon: BsCodeSquare,
          heading: "iOS App Development",
          description: "Get the maximum out of your app by getting our iOS app development services. Our iOS developers ensure you get high-quality apps with enough features and high performance for your iPads and iPhones"
        },
        {
          id: 4,
          icon: MdMobileScreenShare,
          heading: "Android App Development",
          description: "You can also use our Android app development to cover the Android users and increase your reach. Our Android developers use the latest best practices to create apps perfect for Android devices to target your Android users"
        },
        {
          id: 5,
          icon: BsCrosshair2,
          heading: "Cross-platform App Development",
          description: "Want a cross-platform app that can operate on both iOS and android devices? Well, our Cross-platform App Development services are the answer for your problems. Our developers use frameworks like React Native to build efficient applications that can operate across platforms consistently"
        },
        
      ]
    const IosDevelopment = [
        {id:1, icon: SiSwift, name: 'Swift'},
        {id:2, icon: MdOutlineDataObject, name: 'Objective-c'},
       
    ]
    const AnrdiodApp = [
        {id:1, icon: SiKotlin, name: 'Kotlin'},
        {id:2, icon: RiJavaLine, name: 'Java'},
       
    ]
    const CrossPlatform = [
        {id:1, icon: TbBrandReactNative, name: 'React Native'},
       
       
    ]
    return(
      <>
        
      <div className='bg-forth'>
      <div className=" flex justify-between pt-20 pb-10 lg:gap-10">
      <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6'>
          <h1 className=' text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight'>Top-notch Software Development Services for an Outstanding User Experience! 
          </h1>
          <p className=' font-poppins pt-6'>Bringing you a full-cycle of mobile app designing, integration, and development services. Whether you need a life-changing application for your enterprise or need a customer-centric app, Infolatch is your go-to solution provider. We handle everything from ideation to delivery and ongoing support to make your mobile development effortless. Our expert developers have the expertise to develop apps for both Android and iOS platforms. Contact us for native and cross-platform services and take your business to the next level. 
          </p>
          <div  
    className=' py-6 flex gap-4 justify-start items-center'>
<BookACallButton/>

</div>
      </div>
     
      </div>
      </div>
      <div className='lg:px-20 p-6 py-20 min-h-screen text-primary bg-gray-100'>
    <h1 className='text-4xl font-heading font-bold text-forth'>Mobile App Development Services InfoLatch Offers </h1>
    <div className='py-20 lg:grid grid-cols-2 gap-10'>
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
  <Resorces heading="Our App Development case study "/>
  <GetConsultingSection heading={" Are you ready for efficient mobile development solutions for your enterprise? Get in touch with us NOW! "} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
  <BenefitsUs/>
 
  <div  className=" min-h-screen py-20 lg:px-20 p-6 flex flex-col items-center ">
      <h1 className=" text-4xl lg:text-left text-center font-heading font-semibold mb-10">Mobile app development stack  </h1>
      <div className=" flex lg:flex-row flex-col items-center justify-between gap-10 w-full">
        <div>
        <h1 className=" my-10 text-2xl font-heading capitalize font-semibold">IOS Development</h1>

<div className=" flex items-center justify-center gap-10">
{IosDevelopment.map(item =>(
   <div key={item.id} className=" flex flex-col items-center gap-4">
 
          <p className={`bg-forth text-secondary transition-all duration-150 ease-in p-2 rounded-lg text-4xl hover:bg-white hover:text-primary `}>{<item.icon />}</p>
       
        <p className=" font-poppins">{item.name}</p>
   </div>
  
))}
</div>
        </div>
      <div>
      <h1 className=" my-10 text-2xl font-heading capitalize font-semibold">Andriod  Development</h1>
          <div className=" flex items-center justify-center gap-10">
       {AnrdiodApp.map(item =>(
             <div key={item.id} className=" flex flex-col items-center gap-4">
           
                    <p className={`bg-forth text-secondary transition-all duration-150 ease-in p-2 rounded-lg text-4xl hover:bg-white hover:text-primary `}>{<item.icon />}</p>
                 
                  <p className=" font-poppins">{item.name}</p>
             </div>
            
       ))}
          </div>
      </div>
         <div>
         <h1 className=" my-10 text-2xl font-heading capitalize font-semibold">Cross Platforms</h1>
          <div className=" flex items-center justify-center gap-10">
       {CrossPlatform.map(item =>(
             <div key={item.id} className=" flex flex-col items-center gap-4">
           
                    <p className={`bg-forth text-secondary transition-all duration-150 ease-in p-2 rounded-lg text-4xl hover:bg-white hover:text-primary `}>{<item.icon />}</p>
                 
                  <p className=" font-poppins">{item.name}</p>
             </div>
            
       ))}
          </div>
         </div>
          
         
      </div>
  </div>
  <GetConsultingSection heading={"Got an app idea that needs expert hands? "} text1={"Reach out to us today to start transforming your concept into a reality. "}/>
      </>
    )
}