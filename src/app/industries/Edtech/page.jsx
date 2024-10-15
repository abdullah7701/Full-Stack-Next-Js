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
export default function EdTech() {
  const [hoveredId, setHoveredId] = useState(null);
  const subServicesTwo = [
    {
      id: 1,
      icon: IoIosArrowForward,
      to: "/services/software-dev",
      heading: "Learning Management System (LMS) ",
      description:
        "Infolatch expert developers create Learning Management Systems (LMS) that are customised to the needs of each institute. We develop LMS solutions for IT institutes, schools, universities, colleges, training centres, and government agencies to help them design courses, track student progress and help them with online learning",
    },
    {
      id: 2,
      icon: AiOutlineAccountBook,
      to: "/services",
      heading: "E-Learning Applications ",
      description:
        "Get your institute the ultimate e-learning apps to facilitate your users. We develop applications for language learning, tuition management, children, exam preparation, and more. Just connect with us and have your e-learning app designed by our experts.",
    },
    {
      id: 3,
      icon: FaPagelines,
      to: "/services",
      heading: "School Management Software ",
      description:
        "Get your school management software designed by our experts to manage everything effortlessly. From managing school processes to automating the workflow to increasing engagement, let our software developers develop a solution that will help you with all this and much more",
    },
  ];
  const subServicesThree = [
    {
      id: 1,
      icon: IoIosArrowForward,
      to: "/services/software-dev",
      heading: "Optimum Performance ",
      description:
        "Our high-quality EdTech solutions will allow you to take your education services to the next level with e-learning applications and platforms",
    },
    {
      id: 2,
      icon: AiOutlineAccountBook,
      to: "/services",
      heading: "Scalability ",
      description:
        "Our solutions bring scalability to your business, making it easy for you to handle large volumes of data, documents, and information management",
    },
    {
      id: 3,
      icon: FaPagelines,
      to: "/services",
      heading: "Go Digital ",
      description:
        "Everyone is going digital and so should your education platforms to make the data, documents, and information handling automated, paperless, and safer",
    },
    {
      id: 4,
      icon: MdPages,
      to: "/services",
      heading: "End-to-end Development",
      description:
        "We don't leave your side in any phase. From ideation to deployment, we handle each step for a smooth transition",
    },
  ];
  const industries = [
    {
      id: 1,
      icon: BiSolidBullseye,
      title: "Customer Services",
      items: [
        "Video & Audio conferencing",
        "Lecture scheduling",
        "Sessions recording",
        "Chatbot Support",
        "Notifications & Email alerts",
        "Reports & analytics",
        "Interactive virtual whiteboard",
        "Screen sharing",
        "In-App Messaging",
        "Polls & surveys",
        "Documents Management",
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
        "Children’s Online Privacy Protection Act (COPPA)",
        "Family Educational Rights and Privacy Act (FERPA)",
        "Accessibility Standards",
        "State-Specific Regulations",
        "Payment Card Industry Data Security Standard (PCI DSS)",
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
        "EdTech APIs: Moodle, Canvas, Blackboard Learn, Quizlet, Schoology, Kahoot!, Open Education Resources, Khan Academy",
        "Audio & Video Sessions: Agora, Zoom, Stream Chat",
        "Identity Verification Services: Jumio, Veriff, Onfido, IDnow",
        "Social Media APIs: Facebook, LinkedIn, Twitter",
        "Payment gateways: PayPal, Square, Stripe, MangoPay, Mollie",
        "Analytics: Google Analytics",
      ],
    },
  ];

  return (
    <>
      <div className="bg-forth">
        <div className="   flex justify-between pt-20 pb-10 lg:gap-10">
          <div className="pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6">
            <h1 className=" text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight">
              Revolutionizing Education with Top-Notch EdTech Development
              Services
            </h1>
            <p className=" font-poppins pt-6">
              Digital Education is becoming the new normal. This is where
              Infolatch comes in with its full range of EdTech software
              development services. We are experts in building E-learning apps,
              Learning Management Systems (LMS), and school management software.
              Connect with us with your EdTech needs, and we shall design the
              ultimate tailored solutions to level up your institute&apos;
              E-learning game.
            </p>
            <div className=" py-6 flex gap-4 justify-start items-center">
              <BookACallButton />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 text-secondary lg:px-20 p-6 pb-10 gap-20">
          {industries.map((industry) => (
            <div key={industry.id}>
              <div className="flex items-center gap-3">
                <p className="border-2 border-white  hidden lg:flex items-center justify-center rounded-full first-line:ltext-tirtry text-2xl p-3">
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
        Grow your Business Visibility with our Full Range of EDTech Solutions
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
        heading={
          " Expand your Institute’s Horizons to Infolatch’s EdTech Development Services. "
        }
        text1={"Look no further. Your challenge, our expertise."}
        text2={"Schedule a call to share your idea!"}
      />
      <div className="py-20 lg:px-20 p-6">
        <h1 className=" py-10 text-4xl font-heading font-semibold text-forth">
          Our EdTech Services to Expand Your Horizons
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
       heading="Our expertise in Edtech industry" 
       src="/industries/education.jpeg"
        projectName="EduPortal" 
       subHeading="Industry: Education  " 
       description="Infolatch experts have built many E-learning apps, Learning Management Systems (LMS), as well as school management software for different institutes. Our solutions for IT institutes, schools, universities, colleges, training centres, and government agencies helped them design courses, track student progress and help them with online learning.
" 
       moreDes="We also unlocked the potential of our software with Learning Management Systems (LMS) and e-learning applications and streamlined their whole system "
       href="/work/education"
       />
      <GetConsultingSection
        heading={
          " Are you ready to take the plunge into the E-learning world? Talk to our experts now! "
        }
        text1={"Look no further. Your challenge, our expertise."}
        text2={"Schedule a call to share your idea!"}
      />
    </>
  );
}
