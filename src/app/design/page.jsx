"use client";
import React, { useState } from "react";
import BookACallButton from "@/components/BookACallButton";
import GetandEstimateButtn from "@/components/GetandEstimateButtn";
import { MdOutlineDeveloperMode } from "react-icons/md";

import Resorces from "@/components/Home/Resorces";
import BenefitsUs from "../services/BenefitsWorkWithUs";
import GetConsultingSection from "@/components/GetConsultingSection";
import { MdOutlineBubbleChart } from "react-icons/md";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { TiChartLineOutline } from "react-icons/ti";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiPeakdesign } from "react-icons/si";
import { GiPlantSeed } from "react-icons/gi";
import { BsCardText } from "react-icons/bs";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiCardsBold } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { PiCardsThreeFill } from "react-icons/pi";
import { SiAltiumdesigner } from "react-icons/si";
import { PiArrowsInCardinalFill } from "react-icons/pi";

export default function Design() {
  const [hoveredId, setHoveredId] = useState(null);
  const subServices = [
    {
      id: 1,
      icon: MdOutlineBubbleChart,
      heading: "Wireframing & Prototyping",
      description:
        "InfoLatch begins the digital design process with wireframing and prototyping to augment your digital dreams into a solid reality. Our experienced designers listen to your vision and requirements attentively in order to design wireframes that will incorporate your products functionalities and structure. Our prototyping phase will allow you to get a user experience enabling refinementprocess before continuing to the development stage. ",
    },
    {
      id: 2,
      icon: MdOutlineStackedLineChart,
      heading: "UX/UI Design",
      description:
        "InfoLatch believes in user-centered design. Our design team is an expert in transforming your vision into a seamless user experience. We have a strategic approach to UX/UI design that goes way beyond aesthetics. Aligning your business goals and our creative prowess while prioritizing user-centric design, we ensure each product element clicks with your target audience and brings you success. We strive to design the highest quality and polished interfaces for your users so that they can explore and appreciate your digital world effortlessly. ",
    },
    {
      id: 3,
      icon: TiChartLineOutline,
      heading: "Product Design",
      description:
        "InfoLatch not only helps you attract but also retains your users with our exceptional product design. We believe that successful products are not only visually enticing but are also customized to user needs. Our user-centered approach, along with the right methodologies and design tools, enables us to build products that your consumers will appreciate. From validating your ideas to attracting potential customers and streamlining the experience, we excel in developing products for guaranteed engagement. ",
    },
  ];
  const FrontendStack = [
    { id: 1, icon: AiOutlineAntDesign, name: "Research " },
    { id: 2, icon: SiPeakdesign, name: " Conceptualization" },
    { id: 3, icon: SiAltiumdesigner, name: "Wireframing " },
    { id: 4, icon: GiPlantSeed, name: "Prototyping " },
    { id: 5, icon: FaUser, name: "User Testing" },
    { id: 6, icon: BsCardText, name: "Mockups " },
    { id: 7, icon: PiCardsBold, name: "Responsive Design " },
    { id: 8, icon: PiCardsThreeFill, name: "Design Testing " },
    { id: 9, icon: TbBrandGoogleAnalytics, name: "Analysis " },
    { id: 10, icon: PiArrowsInCardinalFill, name: " Development " },
  ];
  const BackendStack = [
    { id: 1, icon: MdOutlineDeveloperMode, name: "html" },
    { id: 2, icon: MdOutlineDeveloperMode, name: "html" },
    { id: 3, icon: MdOutlineDeveloperMode, name: "html" },
    { id: 4, icon: MdOutlineDeveloperMode, name: "html" },
    { id: 5, icon: MdOutlineDeveloperMode, name: "html" },
    { id: 6, icon: MdOutlineDeveloperMode, name: "html" },
    { id: 7, icon: MdOutlineDeveloperMode, name: "html" },
    { id: 8, icon: MdOutlineDeveloperMode, name: "html" },
    { id: 9, icon: MdOutlineDeveloperMode, name: "html" },
    { id: 10, icon: MdOutlineDeveloperMode, name: "html" },
  ];
  return (
    <>
      <div className="bg-forth">
        <div className="  flex justify-between pt-20 pb-10 lg:gap-10">
          <div className="pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6">
            <h1 className="  text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight">
              Digital Design Services ushered by Industry leading Professionals!
            </h1>
            <p className=" font-poppins pt-6">
              InfoLatch understands that a user-centric approach is the way to
              go when it comes to design these days. Our user-focused design
              ensures to revolutionize your business by converting your ideas
              into digital experiences that will make your users be loyal. Our
              digital products will not only grab the attention of your
              audiences by targeting their needs but also make them stay with
              the ultimate experience. Whether it&apos;s business analysis,
              UX/UI design, or wireframing and prototyping, Team InfoLatch will
              stay by your side each step of the way. Connect with us and get a
              digital product designed that will personify your brand perfectly
              while providing a seamless experience to your consumers across all
              platforms and devices!
            </p>
            <div className=" py-6 flex gap-4 justify-start items-center">
              <BookACallButton />
            </div>
          </div>
          {/* <div className=" flex items-start justify-end  mr-20  mt-20">
            <img src="/design.png" alt="helo" width={500} />
          </div> */}
        </div>
      </div>
      <div className="lg:px-20 p-6 py-20 min-h-screen text-primary bg-gray-100">
        <h1 className="text-4xl font-heading font-bold text-forth">
          InfoLatch Digital Design Services
        </h1>
        <div className="py-20 grid lg:grid-cols-2 gap-10">
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
                      ? "bg-white text-primary"
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

      <GetConsultingSection
        heading={" Interested in different services?"}
        text1={"Look no further. Your challenge, our expertise."}
        text2={"Schedule a call to share your idea!"}
      />
      <BenefitsUs />
      <Resorces />
      <div className=" min-h-screen px-6 lg:px-28 flex flex-col justify-center items-center">
        <h1 className=" text-4xl font-heading font-semibold mb-10">
          Stages of Design{" "}
        </h1>
        <div className=" flex flex-col items-center justify-center">
          <div className=" grid lg:grid-cols-5 grid-cols-2 items-center justify-center gap-10">
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
        </div>
      </div>
      <GetConsultingSection
        heading={"Got an app idea that needs expert hands? "}
        text1={
          "Reach out to us today to start transforming your concept into a reality. "
        }
      />
    </>
  );
}
