"use client";
import React, { useState } from "react";
import Image from 'next/image';
import GetandEstimateButtn from "@/components/GetandEstimateButtn";
import GetConsultingSection from "@/components/GetConsultingSection";

import { IoLayersOutline } from "react-icons/io5";
import { SiClickhouse } from "react-icons/si";
import { FaPagelines } from "react-icons/fa";
import { MdPages } from "react-icons/md";
import { BiLastPage } from "react-icons/bi";
import { SiSpeedypage } from "react-icons/si";

import ServiceCard from "@/components/ServiceCard";
import BookACallButton from "@/components/BookACallButton";
import { AiOutlineAntDesign } from "react-icons/ai";
const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const subServicesTwo = [
    {
      id: 1,
      icon: IoLayersOutline,
      to: "/services/software-dev",
      heading: "Custom Software Development ",
      description:
        "Infolatch is an expert in creating custom software that is reliable, scalable, and appropriately matched to your company&apos; specific needs. Whether you require enterprise software, integrated solutions, or a custom application, our experience promises excellent outcomes that advance your company. ",
    },
    {
      id: 2,
      icon: AiOutlineAntDesign,
      to: "/design",
      heading: "Digital Design ",
      description:
        "With careful design of interfaces and an appealing style, we strive to create smooth and captivating user experiences with our digital design services. We place a high value on accessibility and usability to ensure that every digital interaction on web and mobile platforms matches your business identity and enhances the user experience.",
    },
    {
      id: 3,
      icon: FaPagelines,
      to: "/services/digital-marketing",
      heading: "Digital Marketing ",
      description:
        "Infolatch offers comprehensive digital marketing solutions to enhance your online presence and drive business growth. Our services include SEO, content marketing, Social Media Marketing, Pay-Per-Click (PPC) Advertising and Email Marketing. We utilize advanced techniques and strategies to ensure your business ranks higher in search results.",
    },
    {
      id: 4,
      icon: MdPages,
      to: "/services/seo",
      heading: "SEO",
      description:
        "Our SEO services at Infolatch will improve  website&apos; internet presence and attract relevant traffic. To ensure your website ranks highly in search engine results, we use modern strategies, including technical SEO audits, content production, and keyword optimization. This will ultimately increase your company&apos; web presence and conversions.",
    },
    {
      id: 5,
      icon: BiLastPage,
      to: "/ai-service",
      heading: "AI Solutions ",
      description:
        "Infolatch creates innovative solutions by utilizing artificial intelligence to automate procedures, analyze data trends, and provide actionable insights. Our AI solutions enable businesses to optimize processes, identify trends, and make data-driven decisions with confidence based on data, ranging from machine learning techniques to natural language processing tools.",
    },
    {
      id: 6,
      icon: SiSpeedypage,
      to: "/cloud-service",
      heading: "Cloud Solutions",
      description:
        "Reliable cloud solutions from Infolatch are designed to improve scalability and optimize your company&apos; operations. Our expertise ensures secure, adaptable, and affordable solutions that support your growth and creative goals in today&apos; digital ecosystem, whether you require help with cloud migration, infrastructure management, or SaaS implementation.",
    },
  ];

  return (
    <div>
      <div className="bg-forth">
        <div className="  flex justify-between pt-20 pb-10 lg:gap-10">
          <div className="pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-20 lg:pl-20 lg:w-[70%] w-full p-6">
            <h1 className="text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight">
              Top-notch Software Development Services for an Outstanding User
              Experience!
            </h1>
            <p className=" font-poppins pt-6">
              InfoLatch is your go-to software development partner that has
              custom solutions for your business/enterprise. We blend our
              expertise with your innovative ideas to tailor a software
              development strategy unique to your business. Empower your
              business with our exceptional services to unleash its true
              potential and reach new heights. Talk to our experts today!
            </p>
            <div className=" py-6 flex gap-4 justify-start items-center">
              <BookACallButton />
            </div>
          </div>
          <div className="hidden lg:flex items-start justify-end  mr-20  mt-20">
            <Image src="/webdev.png" alt="helo" width={500} />
          </div>
        </div>
      </div>
      <div className="py-20 grid lg:grid-cols-2 gap-10 lg:px-20">
        {subServicesTwo.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            hoveredId={hoveredId}
            btnText="Explore"
            setHoveredId={setHoveredId}
          />
        ))}
      </div>
      <GetConsultingSection
        heading={" Interested in different services?"}
        text1={"Look no further. Your challenge, our expertise."}
        text2={"Schedule a call to share your idea!"}
      />
    </div>
  );
};

export default Services;
