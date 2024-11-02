// "use Client";
import React from "react";
import BookACallButton from "@/components/BookACallButton";
import ExploreMeButton from "@/components/ExploreMeButton";
import GetandEstimateButtn from "@/components/GetandEstimateButtn";
import OurServicesSection from "@/components/Home/OurServicesSection";
import CloudSection from "@/components/Home/CloudSection";
import ContactInfo from "@/components/Home/ContactInfo";
import Resorces from "@/components/Home/Resorces";
import TestimonialSlider from "@/components/Home/TestimonialSection";
import TrustedBy from "@/components/Home/TrustedBy";
import Link from "next/link";
import Image from "next/image";
// import ParticleWave from "./ParticleWave"; 

export default function Home() {
  return (
    <div>
      {/* Particles Wave Effect for the upper section */}
      {/* <ParticleWave /> */}
      <div className="divBg flex-col lg:flex-row  flex items-center justify-center  max-w-full    lg:pt-10 min-h-screen lg:px-28 px-6 py-6 mx-auto">
        <div className=" lg:w-[750px] lg:mt-10 mt-16">
        
          <p
            data-aos="fade-down"
            data-aos-duration="900"
            className=" font-poppins  text-primary font-semi-bold"
          >
            Accelerate your business growth with our customized solutions
 

          </p>
          <h1
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-primary text-xl lg:text-3xl py-4 font-overlock font-bold 
            "
          >
            Our comprehensive, bespoke software development services are tailored to the specific needs of businesses across a variety of industries. Elevate your business performance, enhance operational efficiency, and secure a competitive edge with InfoLatch&apos;s innovative and future-ready
            

           
            {/* <br /> */}
            <span className=" text-forth">
             {" "} cutting-edge technology solutions.

            </span>
          </h1>

          <div
           
            className=" mt-4 flex gap-4 justify-start items-center"
          >
            <BookACallButton />
            
          </div>
        </div>
        <div className="check hidden  lg:flex items-start justify-start mb-10 mr-20"></div>
      </div>

      <TrustedBy />
    

      <OurServicesSection />
      <CloudSection />
      {/* <hr className="border-t-2 px-28 border-forth"/> */}
      <Resorces />
      <TestimonialSlider />
      {/* <TestimonialSection/> */}
      {/* <div className=" flex items-center justify-center flex-col py-14 px-28 font-poppins">
        <h1 className=" text-2xl absolute py-2 px-4 bg-white text-forth font-semibold">
          Trusted By
        </h1>
        <hr className=" border-t-2 border-forth w-full " />
      </div>
      <div className="logos">
        <div className="logos-slide">
          <Image height={150} width={150} src="/logos/1.svg" alt="0" />
          <Image height={150} width={150} src="/logos/2.svg" alt="two" />
          <Image height={150} width={150} src="/logos/3.svg" alt="two" />
          <Image height={150} width={150} src="/logos/4.svg" alt="two" />
          <Image height={150} width={150} src="/logos/5.svg" alt="two" />
          <Image height={150} width={150} src="/logos/6.svg" alt="two" />
          <Image height={150} width={150} src="/logos/7.svg" alt="two" />
          <Image height={150} width={150} src="/logos/8.svg" alt="two" />
        </div>
      </div>
      <div className="px-28">
        <hr className=" border-t-2 border-forth w-full " />
      </div> */}
      {/* <Link href='https://wa.me/03446743886?text=Hello%20there' className="bottom-10 right-10  fixed">
        <Image height={50} width={50} src="/whatsapp.png" alt="sas" width={60} />
      </Link> */}
    </div>
  );
}
