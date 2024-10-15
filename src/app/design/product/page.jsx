"use client";
import React, { useState } from "react";
import BookACallButton from "@/components/BookACallButton";
import GetandEstimateButtn from "@/components/GetandEstimateButtn";
import { MdAdsClick, MdOutlineDeveloperMode } from "react-icons/md";

import Resorces from "@/components/Home/Resorces";

import GetConsultingSection from "@/components/GetConsultingSection";
import BenefitsUs from "@/app/services/BenefitsWorkWithUs";
import { GiLowTide } from "react-icons/gi";
import {
  FaBusinessTime,
  FaFigma,
  FaHighlighter,
  FaProductHunt,
} from "react-icons/fa";
import {
  PiEnvelopeThin,
  PiSortDescendingThin,
  PiUserCircleBold,
  PiUserCircleCheckDuotone,
  PiUserCircleCheckFill,
  PiWebcamFill,
} from "react-icons/pi";
import { IoLogoDesignernews } from "react-icons/io";
import { TbDirectionSignOff } from "react-icons/tb";
import { FaMobileRetro } from "react-icons/fa6";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiDigikeyelectronics } from "react-icons/si";
import { BsPencilFill } from "react-icons/bs";
export default function Product() {
  const [hoveredId, setHoveredId] = useState(null);
  const subServices = [
    {
      id: 1,
      icon: FaBusinessTime,
      heading: "Idea Generation and Refinement",
      description:
        "Explore and refine your new product ideas or revisions through innovative brainstorming and concept development. Our initial concepts are transformed into designs that can be pursued according to market demands and user anticipations",
    },
    {
      id: 2,
      icon: PiEnvelopeThin,
      heading: "In-Depth Market Research",
      description:
        "This comprehensive research will help us gain insights into customers' preferences, behaviours, and current market trends. We do this by analysing the dynamics of the market and competitor strategies, ensuring that your product is competitive in a crowded marketplace",
    },
    {
      id: 3,
      icon: PiUserCircleCheckFill,
      heading: "User-Centered Research",
      description:
        "The design process is guided by user insights collected from interviews, surveys, and usability studies, among other sources. Based on these basic research findings, we develop products tailored to resonate with your customer base&apos;s deepest needs, thereby alleviating their frustrations while improving user satisfaction",
    },
    {
      id: 4,
      icon: BsPencilFill,
      heading: "A/B Testing and Conversion Optimization",
      description:
        "During this process, collaborate with stakeholders to define product goals, target markets, and strategic objectives. Our strategy ensures that all design decisions are made in line with business goals, giving priority to features that provide measurable value for both users and other stakeholders",
    },
    {
      id: 5,
      icon: FaProductHunt,
      heading: "Creative Sketching and Wireframing",
      description:
        "In the initial design stages, visualise and refine product concepts using sketches and digital wireframes. These basic designs act as templates for development, allowing iterative refinement and alignment with user and business requirements",
    },
    {
      id: 6,
      icon: SiDigikeyelectronics,
      heading: "Prototyping for Validation and Iteration",
      description:
        "Make physical or digital prototypes to ascertain your designs' viability while gathering feedback from users. This is done through an iterative process, starting with low-fidelity mock-ups and progressing to interactive prototypes so that usability and functionality meet user expectations before final development",
    },
    {
      id: 7,
      icon: PiSortDescendingThin,
      heading: "Structured Information Architecture",
      description:
        "Structure your digital product&apos;s content organisation to optimise navigation and user experience. Our specialists produce intuitive hierarchies and navigation systems that simplify user journeys, leading users quickly and effortlessly to desired information",
    },
    {
      id: 8,
      icon: TbDirectionSignOff,
      heading: "Crafting Engaging Visuals",
      description:
        "We prioritise design aspects such as color combinations, font choices, images, and brand representation to produce pleasing designs. In addition to aesthetics, we focus on communicating brand identity and fostering bonds with users through design decisions",
    },
  ];

  return (
    <>
      <div className="bg-forth">
        <div className="   flex justify-between pt-20 pb-10 lg:gap-10">
          <div className="pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6">
            <h1 className=" text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight">
              Transform Your Software Experience with Expert Product Design
            </h1>
            <p className=" font-poppins pt-6">
              Our specialised product design services will take your software
              experience to the next level of innovation. We are inclined to
              optimise your software solutions through customised product design
              strategies for maximum effect on them. Whether you want to
              outsource or deal directly with our efficient product designers,
              we promise quality service all the way. Through our exceptional
              approach to creating user experiences, we have crafted a unique
              product design model that positions your software in a league of
              its own. Let&apos;s redefine how your software engages and pleases
              users.
            </p>
            <div className=" py-6 flex gap-4 justify-start items-center">
              <BookACallButton />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-20 p-6 py-20 min-h-screen text-primary bg-gray-100">
        <h1 className="text-4xl font-heading font-bold text-forth">
          Design Services that Innovate Your Product through Infolatch
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

      <GetConsultingSection
        heading={" Are you about to launch a new product?"}
        text2={"Schedule a call to share your idea!"}
      />
      {/* <Resorces
        heading="Our expertise in
Product Design "
      /> */}
      <BenefitsUs />

      <GetConsultingSection
        heading={"We Look After A Range of Key Areas In Design and Development"}
        text1={
          "Reach out to us today to start transforming your concept into a reality. "
        }
      />
    </>
  );
}
