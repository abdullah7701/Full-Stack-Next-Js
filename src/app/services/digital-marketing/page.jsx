"use client";
import React, { useState } from "react";
import BookACallButton from "@/components/BookACallButton";
import GetandEstimateButtn from "@/components/GetandEstimateButtn";
import { MdAdsClick, MdOutlineDeveloperMode } from "react-icons/md";

import Resorces from "@/components/Home/Resorces";

import GetConsultingSection from "@/components/GetConsultingSection";
import BenefitsUs from "@/app/services/BenefitsWorkWithUs";
import { GiLowTide } from "react-icons/gi";
import { FaHighlighter } from "react-icons/fa";
import { PiUserCircleBold } from "react-icons/pi";
export default function DigitalMarketing() {
  const [hoveredId, setHoveredId] = useState(null);
  const subServices = [
    {
      id: 1,
      icon: GiLowTide,
      heading: "Search Engine Optimization",
      description:
        "Our SEO strategies will allow your business to rank higher in search results. Get to know our team and explore more of our services here.",
    },
    {
      id: 2,
      icon: FaHighlighter,
      heading: "Social Media Marketing",
      description:
        "Social media is the king these days. Allow us to create a social media strategy for your brand/business that will bring you remarkable success and visibility among your Competition.",
    },
    {
      id: 3,
      icon: MdAdsClick,
      heading: "Pay Per Click",
      description:
        "Use our Pay-per-click marketing services as it is a cost-effective tool for delivering outstanding results. Talk to our PPC experts to use this tool for your digital marketing",
    },
    {
      id: 4,
      icon: PiUserCircleBold,
      heading: "Content Marketing Services",
      description:
        "Our content marketing strategy can help you deliver the right content and information to your audience that will create an impeccable image of your business. Let&apos; create magic with our content marketing services",
    },
  ];

  return (
    <>
      <div className="bg-forth">
        <div className="  flex justify-between pt-20 pb-10 lg:gap-10">
          <div className="pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6">
            <h1 className=" text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight">
              Leading Digital Marketing Services tailored to Grow your Client
              base with Targeted and Data-Driven Strategies
            </h1>
            <p className=" font-poppins pt-6">
              InfoLatch is a  versatile, and dynamic digital
              marketing service provider that has a team of expert marketers to
              design strategies that will help you attract new clients and
              retain the old ones as well. We have the professionals as well as
              the experience to build a customised marketing strategy just for
              your business needs and goals to assist you in reaching new
              heights. Contact us to learn more about our services!
            </p>
            <div className=" py-6 flex gap-4 justify-start items-center">
              <BookACallButton />
            </div>
          </div>
          {/* <div className=' flex items-start justify-end  mr-20  mt-20' >
            <img src='/webdev.png' alt="helo" width={500}/>
        </div> */}
        </div>
      </div>
      <div className="lg:px-20 p-6 py-20 min-h-screen text-primary bg-gray-100">
        <h1 className="text-4xl font-heading font-bold text-forth">
        Our Digital Marketing Services eliminate the toughest challenges in your marketing journey!
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
        heading={
          " Get help from the creative powerhouse, along with the resources to skyrocket your business. Get in touch with us NOW!"
        }
        text1={"Look no further. Your challenge, our expertise."}
        text2={"Schedule a call to share your idea!"}
      />
      <Resorces heading="Our expertise in Digital Marketing" />
      <BenefitsUs />

      <GetConsultingSection
        heading={
          "Do You Want to Find Out How Doable Your Idea Is? Let’s Connect! "
        }
        text1={
          "Reach out to us today to start transforming your concept into a reality. "
        }
      />
    </>
  );
}
