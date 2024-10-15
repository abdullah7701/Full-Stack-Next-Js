"use client";
import React, { useState } from "react";

import BookACallButton from "@/components/BookACallButton";
import GetandEstimateButtn from "@/components/GetandEstimateButtn";
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
export default function Food() {
  const [hoveredId, setHoveredId] = useState(null);
  const subServicesTwo = [
    {
      id: 1,
      icon: IoIosArrowForward,
      to: "/services/software-dev",
      heading: "Food Delivery App Development",
      description:
        "Allow our designers to create an app that effortlessly connects foodies with nearby restaurants with tailored food delivery apps. We offer user-friendly app development with the latest technology and features for your business.",
    },
    {
      id: 2,
      icon: AiOutlineAccountBook,
      to: "/services/software-dev",
      heading: "Food Ordering App Development",
      description:
        "InfoLatch will help you with food ordering app development so you can capture the opportunity and grow in food ordering industry exponentially. Our advanced app development incorporates features like browsing menus, placing orders, and making payments so consumers can order effortlessly.",
    },
    {
      id: 3,
      icon: FaPagelines,
      to: "/services/software-dev",
      heading: "Restaurant CRM System",
      description:
        "Get our CRM system incorporated into your restaurants and food chains for improved customer relationship management and enhanced productivity. Automation of the workflow to get invoices and reports within a few clicks will help you a great deal in management. Enhance your ROI and leave the software development to us.",
    },
    {
      id: 4,
      icon: MdPages,
      to: "/services/software-dev",
      heading: "Integration with POS-Systems",
      description:
        "Allow our team to integrate your POS system with your software development for seamless operation of food services. Bring accuracy to your business by optimizing your workflow and managing orders and inventory through our app development.",
    },
  ];
  const subServicesThree = [
    {
      id: 1,
      icon: IoIosArrowForward,
      to: "/services/software-dev",
      heading: "Optimum Performance",
      description:
        "Our high-quality food solutions will allow your food delivery and ordering services to perform optimally without any issues.",
    },
    {
      id: 2,
      icon: AiOutlineAccountBook,
      to: "/services/software-dev",
      heading: "Scalability",
      description:
        "Our solutions bring scalability to your business, making it easy for you to handle transactions of all scales.",
    },
    {
      id: 3,
      icon: FaPagelines,
      to: "/services/software-dev",
      heading: "Go Digital",
      description:
        "Everyone is going digital, and so should your food delivery operations to make the cash flow automated, paperless, and safer.",
    },
    {
      id: 4,
      icon: MdPages,
      to: "/services/software-dev",
      heading: "End-to-end Development",
      description:
        "We don't leave your side in any phase. From ideation to deployment, we handle each step for a smooth transition.",
    },
    {
      id: 5,
      icon: BiLastPage,
      to: "/services/software-dev",
      heading: "Better Sales and Loyal Customer Base",
      description:
        "Our tailored products will allow your business to engage more customers and gain their loyalty. Our apps will integrate the easiest ordering and delivery systems, so your users will come back again and again for the effortless process.",
    },
  ];

  const industries = [
    {
      id: 1,
      icon: BiSolidBullseye,
      title: "Customer Services",
      items: [
        "Search Engine",
        "Ordering system",
        "QR-code scanner",
        "Chatbot Support",
        "Real-time Tracking",
        "Reports & analytics",
        "In-App Messaging",
        "Notifications & Email alerts",
        "Campaign Sending",
        "Social Media Support",
        "Rating & Review System",
      ],
    },
    {
      id: 2,
      icon: BiBarChart,
      title: "Regulatory Compliance",
      items: [
        "General Data Protection Regulation (GDPR)",
        "Food Safety Modernization Act (FSMA)",
        "Payment Card Industry Data Security Standard (PCI DSS)",
        "State-Specific Regulations",
      ],
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
        "Risk assessment",
        "Data Privacy & Data Protection",
        "Penetration testing",
      ],
    },
    {
      id: 4,
      icon: BiCategory,
      title: "Integrations",
      items: [
        "Payment gateways: PayPal, Square, Mollie, Stripe, MangoPay",
        "Mapping and Geolocation APIs: Google Maps, OpenStreetMap, Mapbox",
        "Loyalty Program Integration: Custom loyalty program APIs, 3rd-party loyalty program APIs",
        "Reviews and Ratings APIs: TripAdvisor, Google Places, Trustpilot",
        "SMS and Push Notifications Integration: Firebase Cloud Messaging, Nexmo, Twilio",
        "Analytics: Google Analytics, Mixpanel API",
        "Social Media APIs: Facebook, Twitter, Instagram, Twitter",
      ],
    },
  ];

  return (
    <>
      <div className="bg-forth">
        <div className="  flex justify-between pt-20 pb-10 lg:gap-10">
          <div className="pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6">
            <h1 className="  text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight">
              Get Food Delivery Development Services for Effortless Food
              Delivery Experiences
            </h1>
            <p className=" font-poppins pt-6">
              InfoLatch’s food delivery development services offer customised
              solutions to businesses, streamlining their delivery process. We
              bring tailored and innovative solutions according to your
              business&apos; unique needs, powered by the latest technologies.
              From designing food ordering and delivery apps to POS system
              integration to restaurant CRM systems, we do it all. Contact us
              today to get a food delivery app estimate and carry out your
              business smoothly without any hassles.
            </p>
            <div className=" py-6 flex gap-4 justify-start items-center">
              <BookACallButton />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 text-secondary lg:px-20 px-6  pb-10 gap-20">
          {industries.map((industry) => (
            <div key={industry.id}>
              <div className="flex items-center gap-3">
                <p className="border-2 border-white hidden lg:flex items-center justify-center rounded-full first-line:ltext-tirtry text-2xl p-3">
                  <industry.icon />
                </p>
                <h1 className=" text-2xl font-heading font-semibold mb-2">
                  {industry.title}
                </h1>
              </div>
              <ul>
                {industry.items.map((item, index) => (
                  <li
                    className="mb-1 lg:ml-16 w-[300px] flex gap-3 list-decimal "
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <h1 className=" lg:px-20 p-6 pt-20 text-4xl font-heading font-bold text-forth">
        Grow your Business Visibility with our Full Range of Food Solutions
      </h1>
      <div className="py-20 grid lg:grid-cols-2 gap-10 lg:px-20 p-6">
        {subServicesTwo.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
          />
        ))}
      </div>

      <GetConsultingSection
        heading={" Interested in different services?"}
        text1={"Look no further. Your challenge, our expertise."}
        text2={"Schedule a call to share your idea!"}
      />
      <div className="py-20 lg:px-20 p-6">
        <h1 className=" py-10 text-4xl font-heading font-semibold text-forth">
          Our Food Services to Supercharge Your Food Business
        </h1>
        <div className=" grid lg:grid-cols-2 gap-10 ">
          {subServicesThree.map((service) => (
            <ServiceCardTwo
              key={service.id}
              service={service}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
            />
          ))}
        </div>
      </div>
      <BenefitsUs />
      <Resorces 
       heading="Our expertise in food industry" 
       src="/industries/food.jpg" projectName="FoodiePal" 
       subHeading="Industry: Food Ordering and Delivery " 
       description="We have created food ordering and delivery apps for many food services that connect foodies with nearby restaurants effortlessly with tailored food delivery apps. Here’s how we bring user-friendly app development with the latest technology and features for many businesses." 
       moreDes="Our tailored web and app development solutions will provide fully functional web and apps with integrated tools and analytics for their food business to track, monitor, and optimise the key metrics for boosting sales. "
       href="/work/food"
       />
      <GetConsultingSection
        heading={" Interested in different services?"}
        text1={"Look no further. Your challenge, our expertise."}
        text2={"Schedule a call to share your idea!"}
      />
    </>
  );
}
