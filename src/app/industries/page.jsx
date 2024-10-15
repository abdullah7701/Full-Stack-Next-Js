"use client";
import React, { useState } from "react";

import BookACallButton from "@/components/BookACallButton";
import GetandEstimateButtn from "@/components/GetandEstimateButtn";
import { BiLastPage, BiSolidBullseye } from "react-icons/bi";
import GetConsultingSection from "@/components/GetConsultingSection";
import { IoIosArrowForward } from "react-icons/io";
import BenefitsUs from "../services/BenefitsWorkWithUs";
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
export default function Industries() {
  const [hoveredId, setHoveredId] = useState(null);
  const subServicesTwo = [
    {
      id: 1,
      icon: IoIosArrowForward,
      to: "/services/software-dev",
      heading: "Software Development Services ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?",
    },
    {
      id: 2,
      icon: AiOutlineAccountBook,
      to: "/services",
      heading: "Digital Design ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?",
    },
    {
      id: 3,
      icon: FaPagelines,
      to: "/services",
      heading: "Consulting ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?",
    },
    {
      id: 4,
      icon: MdPages,
      to: "/services",
      heading: "Cloud Solutions",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?",
    },
    {
      id: 5,
      icon: BiLastPage,
      to: "/services",
      heading: "AI Solutions ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?",
    },
    {
      id: 6,
      icon: SiSpeedtest,
      to: "/services",
      heading: "Degital Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?",
    },
  ];
  const industries = [
    {
      id: 1,
      icon: BiSolidBullseye,
      title: "Regulatory compliance systems",
      items: [
        "Health Insurance Portability and Accountability Act (HIPAA)",
        "General Data Protection Regulation (GDPR)",
        "Health Information Technology for Economic and Clinical Health Act (HITECH)",
        "Sarbanes-Oxley Act (SOX)",
      ],
    },
    {
      id: 2,
      icon: BiBarChart,
      title: "Data Privacy Laws",
      items: [
        "California Consumer Privacy Act (CCPA)",
        "Personal Data Protection Act (PDPA)",
        "Brazilian General Data Protection Law (LGPD)",
        "Canada&apos; Personal Information Protection and Electronic Documents Act (PIPEDA)",
      ],
    },
    {
      id: 3,
      icon: SiCodeigniter,
      title: "Financial Regulations",
      items: [
        "Dodd-Frank Wall Street Reform and Consumer Protection Act",
        "Basel III",
        "Financial Instruments and Exchange Act (FIEA)",
        "Markets in Financial Instruments Directive (MiFID II)",
      ],
    },
    {
      id: 4,
      icon: BiCategory,
      title: "Financial Regulations",
      items: [
        "Dodd-Frank Wall Street Reform and Consumer Protection Act",
        "Basel III",
        "Financial Instruments and Exchange Act (FIEA)",
        "Markets in Financial Instruments Directive (MiFID II)",
      ],
    },
  ];

  return (
    <>
      <div className="bg-forth">
        <div className="  flex justify-between pt-20 pb-10 gap-10">
          <div className="pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col py-20 pl-20 w-[70%]">
            <h1 className=" text-6xl  font-poppins tracking-wide font-bold leading-tight">
              Fintech development services for seamless payment integration &
              banking apps
            </h1>
            <p className=" font-poppins pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, modi. Doloremque quo aliquam sapiente ipsa delectus
              nisi consectetur ea, voluptatum ab accusamus enim dolores voluptas
              perspiciatis atque saepe repellendus voluptate?Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Numquam cupiditate,
              pariatur commodi temporibus accusamus ab nostrum error deleniti
              accusantium, illum magnam rerum perferendis corrupti. Nam mollitia
              distinctio sed officiis totam?
            </p>
            <div className=" py-6 flex gap-4 justify-start items-center">
              <BookACallButton />
              <GetandEstimateButtn />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 text-secondary px-20 pb-10 gap-20">
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
      <h1 className=" px-20 pt-20 text-4xl font-heading font-bold text-forth">
        What we do for the Fintech domain{" "}
      </h1>
      <div className="py-20 grid grid-cols-2 gap-10 px-20">
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
      <div className="py-20 px-20">
        <h1 className=" py-10 text-4xl font-heading font-semibold text-forth">
          Fintech challenges we solve for you{" "}
        </h1>
        <div className=" grid grid-cols-2 gap-10 ">
          {subServicesTwo.map((service) => (
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
      <Resorces heading="Our expertise in Fintech industry" />
      <GetConsultingSection
        heading={" Interested in different services?"}
        text1={"Look no further. Your challenge, our expertise."}
        text2={"Schedule a call to share your idea!"}
      />
    </>
  );
}
