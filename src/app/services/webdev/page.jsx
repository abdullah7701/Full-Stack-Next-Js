"use client";
import React, { useState } from "react";
import BookACallButton from "@/components/BookACallButton";
import GetandEstimateButtn from "@/components/GetandEstimateButtn";
import { MdOutlineDeveloperMode, MdOutlineDynamicForm } from "react-icons/md";
import SoftwareOffers from "../SoftwareOffers";
import Resorces from "@/components/Home/Resorces";
import BenefitsUs from "../BenefitsWorkWithUs";
import GetConsultingSection from "@/components/GetConsultingSection";
import { RiJavascriptFill } from "react-icons/ri";
import { BiCodeBlock, BiLogoTypescript } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { MdHtml } from "react-icons/md";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaWeibo } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import Image from 'next/image';
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { LuBedSingle } from "react-icons/lu";
import { AiFillWeiboSquare } from "react-icons/ai";
import { FaAppStoreIos } from "react-icons/fa6";
export default function WebDeb() {
  const [hoveredId, setHoveredId] = useState(null);
  const subServices = [
    {
      id: 1,
      icon: BiCodeBlock,
      heading: "Full Stack Development",
      description:
        "Infolatch provides complete web solutions, including front-end and back-end designs. Because of our cross-technology experience, we can develop scalable, integrated solutions that promote user happiness and business growth",
    },
    {
      id: 2,
      icon: LuBedSingle,
      heading: "Single-page App (SPA) Development",
      description:
        "Infolatch specializes in developing single-page applications that load rapidly and offer flawless user experiences by dynamically changing content without requiring page reloads. Experience with responsive and flexible web applications",
    },
    {
      id: 3,
      icon: FaWeibo,
      heading: "Progressive Web App (PWA) Development",
      description:
        "Infolatch offers PWA development services that let you take advantage of the power of modern web technology. Our web applications are designed to be fast and trustworthy and include offline access to improve user engagement. They are built to be lightweight but powerful, providing a native app-like experience",
    },
    {
      id: 4,
      icon: AiFillWeiboSquare,
      heading: "Static Web Application Development",
      description:
        "Infolatch creates safe, efficient static web applications to highlight content. Our solutions prioritize simplicity and speed and are perfect for companies seeking to distribute information effectively without requiring extensive server-side processing",
    },
    {
      id: 5,
      icon: MdOutlineDynamicForm,
      heading: "Dynamic Web Application Development",
      description:
        "Infolatch skilled development team can help you turn your ideas into dynamic, flexible online experiences. We're passionate about building dynamic apps that grow and change to meet your business demands while maintaining flawless user functionality and performance",
    },
    {
      id: 6,
      icon: FaAppStoreIos,
      heading: "Rich Internet Application (RIA) Development",
      description:
        "Infolatch offers RIA development services that can improve user engagement. We develop engaging online apps with interactive interfaces, multimedia content, and real-time updates that draw in and hold users' attention.",
    },
  ];
  const FrontendStack = [
    { id: 1, icon: MdHtml, name: "HTML" },
    { id: 2, icon: IoLogoCss3, name: "CSS" },
    { id: 3, icon: RiJavascriptFill, name: "JavaScript" },
    { id: 4, icon: BiLogoTypescript, name: "TypeScript" },
    { id: 5, icon: FaReact, name: "React" },
    { id: 6, icon: SiNextdotjs, name: "Next.js" },
    { id: 7, icon: FaVuejs, name: "Vue.js" },
    { id: 8, icon: RiBootstrapLine, name: "Bootstrap" },
    { id: 9, icon: SiRedux, name: "Redux" },
    { id: 10, icon: FaSass, name: "Sass" },
  ];

  const BackendStack = [
    { id: 1, icon: FaJava, name: "Java" },
    { id: 2, icon: SiSpring, name: "Spring" },
    { id: 3, icon: SiSpringboot, name: "Spring Boot" },
    { id: 4, icon: SiPhp, name: "PHP" },
    { id: 5, icon: TbBrandMysql, name: "MySQL" },
    { id: 6, icon: SiMongodb, name: "MongoDB" },
    { id: 7, icon: FaAws, name: "AWS" },
    { id: 8, icon: FaDocker, name: "Docker" },
  ];
  return (
    <>
      <div className="bg-forth">
        <div className="   flex justify-between pt-20 pb-10 lg:gap-10">
          <div className="pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6">
            <h1 className=" text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight">
              Transform your digital presence with Infolatch Web development.
            </h1>
            <p className=" font-poppins pt-6">
              Our skilled staff creates dynamic online applications and
              responsive, user-friendly websites that connect with your target
              audience. Whether you need a new site, an update, or continuous maintenance, we ensure that each project meets strict requirements for creativity and efficiency. Put your trust in Infolatch&apos;s exceptional web development skills to boost your company&apos;s online visibility and drive its growth.

            </p>
            <div className=" py-6 flex gap-4 justify-start items-center">
              <BookACallButton />
            </div>
          </div>
          <div className=" hidden lg:flex items-start justify-end  mr-20  mt-20">
            <Image src="/webdev.png" alt="helo" width={500} />
          </div>
        </div>
      </div>
      <div className="lg:px-20 p-6 py-20 min-h-screen text-primary bg-gray-100">
        <h1 className="text-4xl font-heading font-bold text-forth">
          Web development services Infolatch offers:
        </h1>
        <div className="py-20 lg:grid grid-cols-2 gap-10">
          {subServices.map((service) => (
            <div
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              key={service.id}
              className="p-6 bg-secondary"
            >
              <div className="flex gap-5 items-center">
                <p
                  className={` transition-all duration-150 ease-in p-2 rounded-lg text-4xl ${
                    hoveredId === service.id
                      ? "bg-white text-forth"
                      : "bg-forth text-secondary "
                  }`}
                >
                  <service.icon />
                </p>
                <h2 className=" text-2xl font-poppins font-semibold text-forth">
                  {service.heading}
                </h2>
              </div>
              <p className=" my-6 font-poppins">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Resorces heading="Our Web case study " />
      <GetConsultingSection
        heading={" Interested in different services?"}
        text1={"Look no further. Your challenge, our expertise."}
        text2={"Schedule a call to share your idea!"}
      />
      <BenefitsUs />

      <div className=" min-h-screen py-20 lg:px-20 p-6 flex flex-col justify-center items-center">
        <h1 className=" text-4xl font-heading font-semibold mb-10">
          Web Development Stacks{" "}
        </h1>
        <div className=" flex flex-col items-center justify-center">
          <h1 className=" my-10 text-2xl font-heading capitalize">Frontend</h1>

          <div className=" grid grid-cols-4 md:grid-cols-7 items-center justify-center gap-10">
            {FrontendStack.map((item) => (
              <div key={item.id} className=" flex flex-col items-center gap-4">
                <p
                  className={`bg-forth text-secondary transition-all duration-150 ease-in p-2 rounded-lg text-4xl hover:bg-white hover:text-primary `}
                >
                  {<item.icon />}
                </p>

                <p className=" font-poppins">{item.name}</p>
              </div>
            ))}
          </div>
          <h1 className=" my-10 text-2xl font-heading capitalize">backend</h1>
          <div className="  grid grid-cols-4 md:grid-cols-7 items-center justify-center gap-10">
            {BackendStack.map((item) => (
              <div key={item.id} className=" flex flex-col items-center gap-4">
                <p
                  className={`bg-forth text-secondary transition-all duration-150 ease-in p-2 rounded-lg text-4xl hover:bg-white hover:text-primary `}
                >
                  {<item.icon />}
                </p>

                <p className=" font-poppins">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <GetConsultingSection heading={"Got an app idea that needs expert hands? "} text1={"Reach out to us today to start transforming your concept into a reality. "}/> */}
    </>
  );
}
