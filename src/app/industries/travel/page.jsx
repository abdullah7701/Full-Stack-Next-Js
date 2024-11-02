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
export default function Travel (){
  const [hoveredId, setHoveredId] = useState(null);
  const subServicesTwo = [
    {
      id: 1,
      icon: BiSolidBullseye, // Replace with appropriate icon
      to: "/services/booking-ticketing",
      heading: "Booking and Ticketing System",
      description: "We bring interactive ticketing and booking experiences for your clients by developing apps incorporating the latest technologies. Allow our experts to create an e-booking system for your travel business and give it the ultimate boost."
    },
    {
      id: 2,
      icon: BiSolidBullseye, // Replace with appropriate icon
      to: "/services/hotel-management-software",
      heading: "Hotel Management Software and Integration with POS-Systems",
      description: "Allow our team to develop exceptional hotel management software for you and integrate your POS system with it for the seamless operation of your business. Bring accuracy to your business by optimizing your workflow and managing bookings and inventory through our app development while enhancing user experience."
    },
    {
      id: 3,
      icon: BiSolidBullseye, // Replace with appropriate icon
      to: "/services/travel-portal-development",
      heading: "Travel Portal Development",
      description: "Our travel portal will allow you to attract more users and grow your online visibility. Get your interactive and engaging portal created by our experts to make the reservation and revenue management systems effortless while offering the ultimate value to your consumers."
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
    icon: BiSolidBullseye, // Replace with appropriate icon
    title: "Customer Services",
    items: [
      "Scheduling system",
      "Location-based service",
      "Booking Engine",
      "In-App Messaging",
      "Social Media Support",
      "Chatbot Support",
      "Reports & analytics",
      "Rating & Review System",
      "Notifications & Email alerts",
      "Documents Management"
    ]
  },
  {
    id: 2,
    icon: BiBarChart, // Replace with appropriate icon
    title: "Regulatory Compliance Systems",
    items: [
      "Payment Card Industry Data Security Standard (PCI DSS)",
      "General Data Protection Regulation (GDPR)",
      "State-Specific Regulations",
      "Accessibility Standards (ADA, WCAG)"
    ]
  },
  {
    id: 3,
    icon: SiCodeigniter, // Replace with appropriate icon
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
    icon: BiCategory, // Replace with appropriate icon
    title: "Integrations",
    items: [
      "Hotel Booking APIs: Expedia, TripAdvisor, Booking.com, Airbnb",
      "Mapping and Geolocation APIs: Mapbox, Google Maps, OpenStreetMap",
      "Flight Booking APIs: Kayak, Skyscanner, Google Flights",
      "Weather Data APIs: Weatherbit, OpenWeatherMap, AccuWeather",
      "Identity Verification Services: Onfido, Jumio, IDnow, Veriff",
      "Reviews and Rating APIs: TripAdvisor, Google Places, Yelp",
      "Analytics: Google Analytics",
      "Social Media APIs: Facebook, LinkedIn, Twitter",
      "Payment gateways: Square, PayPal, Stripe, Mollie, MangoPay"
    ]
  }
];

    return(
        <>
        <div className='bg-forth'>
        <div className="  flex justify-between pt-20 pb-10 lg:gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6'>
            <h1 className=' text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight'>Elevate your Travel and Hospitality Business with our Tailored Software Solutions
            </h1>
            <p className=' font-poppins pt-6'>Infolatch’s travel and hospitality software development services offer tailored solutions to businesses, enhancing their operations while elevating their user experience. We bring tailored and innovative solutions powered by the latest technologies to meet the unique needs of your travel and hospitality business. From hotel management solutions to booking apps to POS and CRM system integration, we do it all. Contact us today to get a travel app estimate and carry out your business smoothly with boosted performance!
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
        <h1 className=' lg:px-20 p-6 pt-20 text-4xl font-heading font-bold text-forth'>Grow your Business Clientele with our Full Range of Travel and Hospitality Solutions 
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
   
       
    <GetConsultingSection heading={" Boost your Travel and Hospitality Business to Infolatch’s Development Services. "} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
    <div className="py-20 lg:px-20 p-6">
      <h1 className=" py-10 text-4xl font-heading font-semibold text-forth">Our Travel and Hospitality Services to Boost Your Business
      </h1>
    <div className=' grid lg:grid-cols-2 gap-10 '>
      {subServicesTwo.map(service => (
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
       heading="Our expertise in Travel industry" 
       src="/industries/travel.png" projectName="TripMate" 
       subHeading="Industry: Travel and Hospitality" 
       description="Infolatch travel and hospitality software development services offer tailored solutions for enhancing operations while elevating user experience. From hotel management solutions to booking apps to POS and CRM system integration, we have designed apps and websites for the hospitality industry to carry out business smoothly with a boosted performance.

" 
       moreDes="We designed software to manage everything effortlessly, from managing bookings to automating the workflow to increasing engagement.
  
 "
       href="/work/travel"
       />
       <GetConsultingSection heading={"Are you ready to serve your consumers with the ultimate booking system? Talk to our experts now! "} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
        </>
    )
}