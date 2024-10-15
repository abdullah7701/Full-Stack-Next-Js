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
export default function Marketing (){
  const [hoveredId, setHoveredId] = useState(null);
  const subServicesTwo = [
    {
      id: 1,
      icon: BiSolidBullseye, // Replace with appropriate icon
      to: "/services/integration-crm",
      heading: "Integration with CRM systems",
      description: "Get your CRM system incorporated into marketing software to provide a seamless user experience. This integration will align your marketing efforts with customer engagement while increasing conversions."
    },
    {
      id: 2,
      icon: BiSolidBullseye, // Replace with appropriate icon
      to: "/services/affiliate-program",
      heading: "Affiliate Program Development",
      description: "Infolatch developers will create a tailored affiliate program to empower your business. We design affiliate programs to cater to the specific needs of each business, enhancing their reach and boosting sales through increased brand visibility."
    },
    {
      id: 3,
      icon: BiSolidBullseye, // Replace with appropriate icon
      to: "/services/google-analytics",
      heading: "Google Analytics Integration",
      description: "Our Google Analytics integration services will aid you in using data-driven insights to boost your business. When your marketing software is integrated with all the real-time insights, you will be able to target the real audience while tracking traffic and optimizing marketing."
    },
    {
      id: 4,
      icon: BiSolidBullseye, // Replace with appropriate icon
      to: "/services/loyalty-app",
      heading: "Loyalty App Development",
      description: "Our loyalty app solutions allow you to foster long-lasting relationships with your consumers. These relationships help you reward your customers, which results in customer retention and repeated purchases."
    }
];
const subServicesThree = [
  {
    id: 1,
    icon: BiSolidBullseye, // Replace with appropriate icon
    to: "/services/optimum-performance",
    heading: "Optimum Performance",
    description: "Our high-quality marketing solutions will give your business the boost it deserves, allowing you to reach a wider audience and enhance sales."
  },
  {
    id: 2,
    icon: BiSolidBullseye, // Replace with appropriate icon
    to: "/services/scalability",
    heading: "Scalability",
    description: "Our solutions bring scalability to your business, making it easy for you to handle transactions of all scales."
  },
  {
    id: 3,
    icon: BiSolidBullseye, // Replace with appropriate icon
    to: "/services/enhanced-visibility",
    heading: "Enhanced Visibility",
    description: "Our tailored marketing software solutions will allow you to address any challenges on your way to success. We will integrate tools and analytics into the solution so you can track, monitor, and optimize the key metrics for boosting your online growth."
  },
  {
    id: 4,
    icon: BiSolidBullseye, // Replace with appropriate icon
    to: "/services/api-integrations",
    heading: "API Integrations",
    description: "We will integrate the APIs with your marketing solution so everything works seamlessly. Your users will have an effortless experience while interacting with any of your platforms, which will definitely increase your audience."
  }
];

  const industries = [
    {
      id: 1,
      icon: BiSolidBullseye,
      title: "Customer Services",
      items: [
        "Chatbot Support",
        "Polls & surveys",
        "In-App Messaging",
        "Social Media Support",
        "Reports & analytics",
        "Reward System",
        "Notifications & Email alerts"
      ]
    },
    {
      id: 2,
      icon: BiBarChart,
      title: "Regulatory Compliance Systems",
      items: [
        "KYC",
        "GDPR",
        "PCI DSS",
        "SEC",
        "AML",
        "GLBA",
        "PSD2 SCA",
        "JOBS Act"
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
      id: 4,
      icon: BiCategory,
      title: "Integrations",
      items: [
        "CRM Systems: Salesforce, Zoho, HubSpot, Pipedrive",
        "Identity Verification Services: Jumio, Veriff, Onfido, IDnow",
        "Analytics: Mixpanel, Google Analytics",
        "Social Media APIs: Facebook, LinkedIn, Twitter",
        "Payment gateways: PayPal, Stripe, Mollie, Square, MangoPay"
      ]
    }
];

      

    return(
        <>
        <div className='bg-forth'>
        <div className="  flex justify-between pt-20 pb-10 lg:gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6'>
            <h1 className='  text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight'>Best Marketing Services for Ultimate Online Presence
            </h1>
            <p className=' font-poppins pt-6'>Connect with the thriving digital marketers at Infolatch and get a tailored solution designed for the marketing of your business. Our experts have been in the marketing world for years and know how to address the unique needs of each business. Contact us and get help from our experts in designing the best marketing strategies for your business to give it the kickstart it needs. 
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
        <h1 className=' lg:px-20 p-6 pt-20 text-4xl font-heading font-bold text-forth'>Market your Business to stay ahead of your Competition with our Marketing Services
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
   
       
    <GetConsultingSection heading={"Give your Marketing a Boost with Infolatch’s Marketing Software Development Services. "} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
    <div className="py-20 lg:px-20 p-6">
      <h1 className=" py-10 text-4xl font-heading font-semibold text-forth">Our Marketing Services to Align your Marketing Efforts with your Goals
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
       heading="Our expertise in marketing industry" src="/industries/marketing.jpg" projectName="Market Maven" 
       subHeading="Industry: Digital Marketing, Retail" 
       description="While developing our high-quality marketing solution we ensured that the business gets the boost it deserves to reach more audience and enhance sales. " moreDes="Our tailored marketing software solutions will provide fully functional web and apps with integrated tools and analytics for them to track, monitor, and optimise the key metrics for boosting online growth. "
       href="/work/marketing"
       />
       <GetConsultingSection heading={" Interested in different services?"} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
        </>
    )
}