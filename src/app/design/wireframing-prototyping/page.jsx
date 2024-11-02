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
export default function Wireframing() {
  const [hoveredId, setHoveredId] = useState(null);
  const subServices = [
    {
      id: 1,
      icon: GiLowTide,
      heading: "Low-Fidelity Wireframes",
      description:
        "Infolatch creates low-fidelity wireframes for you so that you can effortlessly visualize your concepts on the big canvas. We prioritize the need to implement a smooth and no-hassle user flow by mapping out the site architecture with highly qualified professionals. With this step, we ensure that all the parties are on the same page and working toward the same goal",
    },
    {
      id: 2,
      icon: FaHighlighter,
      heading: "High-Fidelity Wireframes",
      description:
        "This is an advanced step in which we redefine the basic outline of the overall design. With our expert engineers, we further flesh out the initial map. By adding colour themes, texts, symbols, and interactive icons, we visualize the final product in much more depth. We use several modern techniques to enhance the visual appeal and make everything look in its right place before we move on to the next step.",
    },
    {
      id: 3,
      icon: MdAdsClick,
      heading: "Live Prototypes",
      description:
        "With a live prototype that feels real, we offer the client an opportunity to experience the final product. The mockup is designed to avoid going into development with one or more key elements missing. With a real-world feel, the prototype includes several important features, such as buttons, bars, page sections, text, and images, to mimic the concept in its entirety",
    },
    {
      id: 4,
      icon: PiUserCircleBold,
      heading: "User Testing",
      description:
        "This is a critical part of the whole process, and without ticking this stage, we never move ahead. So, with user testing, we gather valuable insight from the product end-user. We create several scenarios and situations to test the site functionality and how things work. We also closely observe the behaviour of the UI, ensuring the best user experience is established",
    },
  ];

  return (
    <>
      <div className="bg-forth">
        <div className="  flex justify-between pt-20 pb-10 lg:gap-10">
          <div className="pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6">
            <h1 className=" text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight">
            Breathe Life Into Your Dream Concepts With Advanced Wireframing and Interactive Prototyping!
            </h1>
            <p className=" font-poppins pt-6">
            Stand out from the crowd with next-level design solutions that will make the user experience a pleasant walk in the park. Infolatch&apos;s expert services are engineered to not only enrich the user journey but also bolster your brand. We listen to your needs and guide you through the process, dispelling complications and boosting your confidence with each step. From low-fidelity and high-fidelity wireframes to highly interactive
              prototypes, we provide you with an opportunity for real-life
              interaction with your dream layouts and designs.
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
          Our Benchmark Services in Wireframing and Prototyping
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
        heading={" Got Imaginative Ideas? Let’s Make them Real!"}
        text1={"Look no further. Your challenge, our expertise."}
        text2={"Schedule a call to share your idea!"}
      />
      <Resorces heading="Our expertise in Wireframing & Prototyping" />
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
