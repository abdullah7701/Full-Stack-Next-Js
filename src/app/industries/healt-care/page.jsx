'use client'
import React,{useState} from "react";

import BookACallButton from "@/components/BookACallButton"
import GetandEstimateButtn from "@/components/GetandEstimateButtn"
import { BiLastPage, BiSolidBullseye } from "react-icons/bi";
import GetConsultingSection from "@/components/GetConsultingSection";
import { IoIosArrowForward } from "react-icons/io";
import BenefitsUs from "@/app/services/BenefitsWorkWithUs";
import { GoDotFill } from "react-icons/go";
import ServiceCard from "@/components/ServiceCard";
import { BiCategory } from "react-icons/bi";
import ServiceCardTwo from "@/components/ServiceCardTwo";
import Resorces from "@/components/Home/Resorces";
import { BiBarChart } from "react-icons/bi";
import { SiCodeigniter, SiSpeedtest } from "react-icons/si";
import { MdPages } from "react-icons/md";
import { FaPagelines } from "react-icons/fa";
import { AiOutlineAccountBook } from "react-icons/ai";
export default function HealthCare (){
  const [hoveredId, setHoveredId] = useState(null);
  const subServicesTwo = [
    {
      id: 1,
      icon: IoIosArrowForward,
      to: "/services/healthcare-software",
      heading: "Healthcare Software Development",
      description: "Our medical software development services will bring you top-notch healthcare apps. With the help of our experienced and creative development team, we tailor solutions for your needs. We ensure compliance with HIPAA and GDPR and prioritize PHI security, as well as other regulations, to ensure confidentiality of patient data and safeguard sensitive information."
    },
    {
      id: 2,
      icon: AiOutlineAccountBook,
      to: "/services/healthcare-software",
      heading: "Telehealth & Telemedicine Software Development",
      description: "We bring you telemedicine solutions with our customized software development. Breaking the traditional barriers for your patients to go contactless and get their problems treated conveniently with the help of virtual healthcare consultation through video calls and chats."
    },
    {
      id: 3,
      icon: FaPagelines,
      to: "/services/healthcare-software",
      heading: "IRIS Integration",
      description: "Our team will integrate IRIS into your healthcare software to make the workflow seamless and gain insights. Get your existing infrastructure connected with IRIS for enhanced productivity and better decision-making with the help of real-time data analytics at your hand."
    },
    {
      id: 4,
      icon: MdPages,
      to: "/services/healthcare-software",
      heading: "Manage Healthcare Information with EHR, EMR, HIS",
      description: "Unlock the potential of our software with EHR, EMR, HIS and streamline your health information and management for enhanced clinical productivity where you can interact with patients over patient portals. Effortless collaborations make the whole process smooth while enabling interoperability and data accuracy."
    },
    {
      id: 5,
      icon: BiLastPage,
      to: "/services/healthcare-software",
      heading: "E-Prescribing Software",
      description: "Our e-prescribing software makes it effortless for healthcare providers as they can prescribe medication using this advanced method. It improves the efficiency of the healthcare process while ensuring patient safety."
    }
];

const industries = [
  {
    id: 1,
    icon: BiSolidBullseye,
    title: "Customer Services",
    items: [
      "Chatbot Support",
      "Video & Audio Sessions",
      "Email Support",
      "Customer support hotline",
      "In-App Messaging",
      "Social Media Support",
      "Rating & Review System",
      "Notifications"
    ]
  },
  {
    id: 2,
    icon: BiBarChart,
    title: "Regulatory Compliance Systems",
    items: [
      "General Data Protection Regulation (GDPR)",
      "Health Insurance Portability and Accountability Act (HIPAA)",
      "Health Level Seven International (HL7)",
      "Digital Imaging and Communications in Medicine (DICOM)",
      "Picture Archiving and Communication System (PACS)",
      "State-Specific Regulations"
    ]
  },
  {
    id: 3,
    icon: SiCodeigniter,
    title: "Security Systems",
    items: [
      "Encryption",
      "Fraud detection",
      "Two-factor authentication",
      "Data backup and recovery",
      "Consumer protection",
      "Risk assessment"
    ]
  },
  
  {
    id: 5,
    icon: BiCategory,
    title: "Integrations",
    items: [
      "Payment gateways: PayPal, Square, Mollie, Stripe, MangoPay.",
      "Healthcare APIs: Google Cloud Healthcare, HealthShare, Microsoft Health, InterSystems IRIS, EHR",
      "Identity Verification Services: Jumio, Veriff, Onfido, and IDnow",
      "Audio & Video Sessions: Agora, Zoom"
    ]
  }
];

      const subServicesThree = [
        {
          id: 1,
          icon: IoIosArrowForward,
          to: "/services/software-dev",
          heading: "Optimum Performance",
          description: "Our high-quality financial solutions will allow your business to perform optimally without any issues."
        },
        {
          id: 2,
          icon: AiOutlineAccountBook,
          to: "/services/software-dev",
          heading: "Scalability",
          description: "Our solutions bring scalability to your business, making it easy for you to handle transactions of all scales."
        },
        {
          id: 3,
          icon: FaPagelines,
          to: "/services/software-dev",
          heading: "Go Digital",
          description: "Everyone is going digital, and so should your financial operations to make the cash flow automated, paperless, and safer."
        },
        {
          id: 4,
          icon: MdPages,
          to: "/services/software-dev",
          heading: "Compliance ",
          description: "We follow all the compliance standards to ensure your fintech solution meets them all. "
        },
        
      ]
    return(
        <>
        <div className='bg-forth'>
        <div className="  flex justify-between pt-20 pb-10 lg:gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6'>
            <h1 className=' text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight'>Get Healthcare Development Services for Effortless Patient Care!
            </h1>
            <p className=' font-poppins pt-6'>Infolatch brings top-notch healthcare software development services to the healthcare sector with the help of its professional team of expert developers. We deliver tailored healthcare solutions to ensure streamlined communication between healthcare providers and patients. Automating healthcare systems enhances the user experience while ensuring compliance and patient confidentiality. Contact our team to get your healthcare development services customised by the leading developers.
            </p>
            <div  
      className=' py-6 flex gap-4 justify-start items-center'>
  <BookACallButton/>
 
</div>
        </div>
       
        </div>
        <div className="grid lg:grid-cols-2 text-secondary lg:px-20 p-6 pb-10 gap-20">
      {industries.map(industry => (
        <div key={industry.id}>
          <div className="flex items-center gap-3">
            <p className="border-2 border-white  hidden lg:flex items-center justify-center rounded-full first-line:ltext-tirtry text-2xl p-3">
              <industry.icon />
            </p>
            <h1 className=" text-2xl font-heading font-semibold mb-2">{industry.title}</h1>
          </div>
          <ul>
            {industry.items.map((item, index) => (
              <li className="mb-1 lg:ml-16 w-[300px] flex gap-3 list-decimal " key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

  
        </div>
        <h1 className=' lg:px-20 p-6 pt-20 text-4xl font-heading font-bold text-forth'>Lead the way with our Full Range Healthcare Solutions 
        </h1>
        <div className='py-20 grid lg:grid-cols-2 gap-10 lg:px-20 p-6'>
      {subServicesTwo.map(service => (
        <ServiceCard
          key={service.id}
          service={service}
          hoveredId={hoveredId}
         
          setHoveredId={setHoveredId}
        />
      ))}
    </div>
   
       
    <GetConsultingSection heading={" Interested in different services?"} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
    <div className="py-20 lg:px-20 p-6">
      <h1 className=" py-10 text-4xl font-heading font-semibold text-forth">Our Healthcare Services to Elevate Your Patientcare
      </h1>
    <div className=' grid lg:grid-cols-2 gap-10 '>
      {subServicesThree.map(service => (
        <ServiceCardTwo
          key={service.id}
          service={service}
          hoveredId={hoveredId}
         
          setHoveredId={setHoveredId}
        />
      ))}
    </div>
    </div>
        <BenefitsUs/>
        <Resorces 
       heading="Our expertise in Healthcare industry" 
       src="/industries/health.jpeg" projectName="Synergy Health" 
       subHeading="Industry: Healthcare" 
       description="InfoLatch has designed top-notch healthcare software development services for many from healthcare sector with the help of its professional team of expert developers. We have been delivering tailored healthcare solutions to ensure streamlined communication between healthcare providers and patients.
" 
       moreDes="While developing our tailored healthcare software, we ensured that the business gets to impress its customers with an effortless process.  
 "
       href="/work/health"
       />
       <GetConsultingSection heading={" Interested in different services?"} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
        </>
    )
}