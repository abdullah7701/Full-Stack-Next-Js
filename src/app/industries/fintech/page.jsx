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
import { TbMathIntegralX } from "react-icons/tb";
export default function Fintech (){
  const [hoveredId, setHoveredId] = useState(null);
  const subServicesTwo = [
    {
      id: 1,
      icon: IoIosArrowForward,
      to: "/services/software-dev",
      heading: "Fintech Software Development and Integration",
      description: "Our fintech apps are built from scratch to provide you effortless and secure integration of payment gateways. This solution will make your transactions smooth while enhancing your user experience."
    },
    {
      id: 2,
      icon: AiOutlineAccountBook,
      to: "/services/software-dev",
      heading: "Accounting and CRM Software",
      description: "Get your accounting automated with our CRM, ERP, payroll, and other solutions."
    },
    {
      id: 3,
      icon: FaPagelines,
      to: "/services/software-dev",
      heading: "Robust Security",
      description: "We integrate security measures of the highest standard in our products so that you don’t suffer from any security breach and fraudulent activities."
    },
    {
      id: 4,
      icon: MdPages,
      to: "/services/software-dev",
      heading: "Lending Management Solution",
      description: "We can design a range of lending software solutions for you to handle loan and credit management effectively."
    },
   
  ]
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
  const industries = [
    {
      id: 1,
      icon: BiSolidBullseye,
      title: "Customer Services",
      items: [
        "Email Support",
        "Chatbot Support",
        "Self-Service Portals",
        "Customer support helpline",
        "Notifications",
        "In-App Messaging",
        "Social Media Support",
      ],
    },
    // {
    //   id: 2,
    //   icon: BiBarChart,
    //   title: "Regulatory Compliance",
    //   items: [
    //     "KYC",
    //     "GDPR",
    //     "PCI DSS",
    //     "AML",
    //     "GLBA",
    //     "SEC",
    //     "JOBS Act",
    //     "PSD2 SCA",
    //   ],
    // },
    {
      id: 3,
      icon: SiCodeigniter,
      title: "Payment Processing",
      items: [
        "PayPal",
        "MangoPay",
        "Mollie",
        "Stripe",
        "Railz",
        "Lendflow",
        "Plaid",
        "Agave",
        "Square",
        "Oatfi",
        "Amazon Pay",
      ],
    },
    {
      id: 4,
      icon: BiCategory,
      title: "Core Banking",
      items: [
        "Transactions processing",
        "Account Management",
        "Customer Relationship Management (CRM)",
        "Loan and credit management",
        "Deposits and Savings",
        "Multi-Channel Banking",
      ],
    },
    {
      id: 5,
      icon: TbMathIntegralX,
      title: "Integrations",
      items: [
        "Payment gateways: PayPal, Square, Stripe, MangoPay, Amazon Pay",
        "Card schemes: Visa, American Express, Mastercard, UnionPay, JSB",
        "Banking APIs: Plaid, Railz, Yodlee, OpenWrks, TrueLayer",
        "Identity Verification Services: Onfido, Jumio, Veriff, and IDnow",
        "eWallet: Google Pay, Apple Pay, Samsung Pay, PayPal",
        "Accounting systems: Xero, QuickBooks, FreshBooks, and Wave",
      ],
    },
  ];
  
      

    return(
        <>
        <div className='bg-forth'>
        <div className="  flex justify-between pt-20 pb-10 lg:gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6'>
            <h1 className=' text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight'>Get  Fintech Development Services for Effortless Integration of Payment and Banking Apps.
            </h1>
            <p className=' font-poppins pt-6'>InfoLatch’s fintech development services offer robust financial solutions to businesses, making their financial operations streamlined. Our services will help you with enhanced access to capital, financial data management, consistent cash flow, and regulated revenue. We bring financial solutions according to the unique needs of your business powered by the latest technologies. Contact us today to get a Fintech app estimate and carry out your business financial operations smoothly without any hassles. 
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
            <p className="border-2 border-white hidden lg:flex items-center justify-center rounded-full first-line:ltext-tirtry text-2xl p-3">
              <industry.icon />
            </p>
            <h1 className=" text-2xl font-heading font-semibold mb-2">{industry.title}</h1>
          </div>
          <ul>
            {industry.items.map((item, index) => (
              <li className="mb-1 lg:ml-16 max-w-[300px] flex gap-3 list-decimal " key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

  
        </div>
        <h1 className=' lg:px-20 p-6 pt-20 text-4xl font-heading font-bold text-forth'>Our Dynamic Range of Fintech Solutions to Accelerate Your Growth
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
      <h1 className=" py-10 text-4xl font-heading font-semibold text-forth">Our Fintech Services will Steer you through all Hurdles
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
       heading="Our expertise in Fintech industry" 
       src="/industries/finance.png" projectName="BudgetBuddy" 
       subHeading="Industry: Fintech" 
       description="Infolatch fintech development services offered robust financial solutions to businesses, making their financial operations streamlined. From enhanced access to capital and financial data management to consistent cash flow and regulated revenue, we brought financial solutions according to the unique needs of your business powered by the latest technologies.


" 
       moreDes="We integrated the highest-standard security measures into our products so that no security breach or fraudulent activity can occur
  
 "
       href="/work/finance"
       />
       <GetConsultingSection heading={" Interested in different services?"} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
        </>
    )
}