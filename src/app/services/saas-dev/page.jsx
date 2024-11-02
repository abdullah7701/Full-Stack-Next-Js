"use client";
import React, { useState } from "react";
import BookACallButton from "@/components/BookACallButton";
import GetandEstimateButtn from "@/components/GetandEstimateButtn";
import {
  MdArchitecture,
  MdIntegrationInstructions,
  MdOutlineDesignServices,
  MdOutlineDeveloperMode,
} from "react-icons/md";
import SoftwareOffers from "../SoftwareOffers";
import Resorces from "@/components/Home/Resorces";
import BenefitsUs from "../BenefitsWorkWithUs";
import GetConsultingSection from "@/components/GetConsultingSection";
import { SiKotlin, SiSwift } from "react-icons/si";
import { MdOutlineDataObject } from "react-icons/md";
import { TbBrandKotlin } from "react-icons/tb";
import { RiJavaLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { IoConstructOutline, IoSave } from "react-icons/io5";
import { AiFillPoundCircle } from "react-icons/ai";
import { BsAppIndicator } from "react-icons/bs";
export default function SaasDev() {
  const [hoveredId, setHoveredId] = useState(null);
  const subServices = [
    {
      id: 1,
      icon: IoConstructOutline,
      heading: "SaaS Consulting",
      description:
        "We provide the ultimate consulting services on SaaS to bring you insights and guidance to help your products reach maximum potential in the market",
    },

    {
      id: 3,
      icon: MdOutlineDesignServices,
      heading: "SaaS Prototyping & UI/UX Design",
      description:
        "Our thorough prototyping and UX/UI design will craft the best interfaces for your users that are not only appealing but also enhance engagement for effortless interactions",
    },
    {
      id: 4,
      icon: MdArchitecture,
      heading: "SaaS Architecture",
      description:
        "Our SaaS architecture expertise will develop the most robust foundation upon which to build your software. As a result, you will achieve optimum growth performance due to cloud-based solutions",
    },
    {
      id: 5,
      icon: BsAppIndicator,
      heading: "SaaS App Development",
      description:
        "Our expert developers transform your SaaS ideas into high-quality applications and use agile technology to make your business a hit!",
    },
    {
      id: 6,
      icon: AiFillPoundCircle,
      heading: "SaaS Platform APIs Integration",
      description:
        "Let us consolidate SaaS 3rd-party APIs to extend functionality and unlock new possibilities for the perfect user experience",
    },
    {
      id: 7,
      icon: MdIntegrationInstructions,
      heading: "SaaS Migration",
      description:
        "We will help you transition to the cloud environment in the most seamless manner with our outclass migration services as we integrate the cloud into your existing system without any disruption",
    },
  ];
  const IosDevelopment = [
    { id: 1, icon: SiSwift, name: "Swift" },
    { id: 2, icon: MdOutlineDataObject, name: "Objective-c" },
  ];
  const AnrdiodApp = [
    { id: 1, icon: SiKotlin, name: "Kotlin" },
    { id: 2, icon: RiJavaLine, name: "Java" },
  ];
  const CrossPlatform = [
    { id: 1, icon: TbBrandReactNative, name: "React Native" },
  ];
  return (
    <>
      <div className="bg-forth">
        <div className="   flex justify-between pt-20 pb-10 lg:gap-10">
          <div className="pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6">
            <h1 className="  text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight">
              Leading SAAS Development Services for Better Accessibility and
              Flexibility!
            </h1>
            <p className=" font-poppins pt-6">
              Allow us to migrate your business to the cloud using our outstanding
              SaaS development services. Our cloud-based software solutions
              bring accessibility, flexibility, and cost efficiency to your
              business growth. Effortless maintenance and automated
              upgradation of our SaaS products will enable your IT department to
              focus on business growth. Moreover, your consumers will be wowed
              by the affordability and accessibility that your applications will
              bring. Connect with us, and let&apos;s revolutionize your software
              with SaaS development for an enhanced user experience.
            </p>
            <div className=" py-6 flex gap-4 justify-start items-center">
              <BookACallButton />
            </div>
          </div>
          {/* <div className='  hidden lg:flex items-start justify-end  mr-20  mt-20' >
          <img src='/webdev.png' alt="helo" width={500}/>
      </div> */}
        </div>
      </div>
      <div className="lg:px-20 p-6 py-20 min-h-screen text-primary bg-gray-100">
        <h1 className="text-4xl font-heading font-bold text-forth">
          Our Software Development Services help you Outpace your Competition!
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
      <Resorces heading="Our Saas Development case study " />
      <GetConsultingSection
        heading={
          " Are you ready for the ultimate growth using our SaaS Development? Get in touch with us NOW! "
        }
        text1={"Look no further. Your challenge, our expertise."}
        text2={"Schedule a call to share your idea!"}
      />
      <BenefitsUs />

      <GetConsultingSection
        heading={"Got an app idea that needs expert hands? "}
        text1={
          "Reach out to us today to start transforming your concept into a reality. "
        }
      />
    </>
  );
}
