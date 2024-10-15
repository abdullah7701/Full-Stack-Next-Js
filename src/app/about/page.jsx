"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import GetandEstimateButtn from "@/components/GetandEstimateButtn";
import BookACallButton from "@/components/BookACallButton";
import { IoMdArrowDropright } from "react-icons/io";
import { gsap } from "gsap";
import GetConsultingSection from "@/components/GetConsultingSection";
import BenefitsUs from "../services/BenefitsWorkWithUs";

const AboutPage = () => {
  const goalsRef = useRef(null);

  useEffect(() => {
    if (goalsRef.current) { 
      gsap.fromTo(
        goalsRef.current.querySelectorAll("li"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
      );
    }
  }, []);
  return (
    <>
    

      <div className="bg-forth">
        <div className="  flex justify-between pt-20  lg:gap-10">
          <div className="pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col lg:py-16 lg:pl-20 lg:w-[70%] w-full p-6">
            <h1 className="  text-3xl lg:text-6xl  font-poppins tracking-wide font-bold leading-tight">
              Your Partner for Ultimate Success
            </h1>

          
            <p className=" font-poppins pt-6">
              Infolatch Ltd is expanding steadily, thanks to the dedicated
              efforts of our team. In a relatively short time, we have achieved
              prominence as an IT consulting and software development firm. We
              value our clients and their needs, and as a result, the clients
              respect us for our tireless efforts, time control, transparency,
              and consistency while providing top-notch services. Come to us
              with your vision, and we will design game-changing solutions for
              you!
            </p>
            <div className=" py-6 flex gap-4 justify-start items-center">
              <BookACallButton />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/group.jpeg"
          alt="helo"
          className=" w-full minh-screen"
          width={1000}
          height={500}
        />
      </div>
      <div className=" flex lg:flex-row flex-col justify-between items-start py-20 lg:px-28 p-6 gap-10 min-h-screen w-full">
        <div className=" lg:w-1/2">
          <h1 className=" text-4xl font-heading mb-4 font-semibold uppercase text-forth">
            Our story{" "}
          </h1>
          <p className=" lg:text-sm">
            Infolatch Ltd emerged in the technology landscape with a vision to
            propel businesses into the digital age. With a foundation built on
            meticulous planning and strategic networking, Infolatch has
            established a robust network that ensures service delivery of the
            highest caliber, personalized to meet the unique needs of each
            client.<br /> <br />Infolatch is supported by a team of experienced
            professionals from various fields within the technology sector. This
            team encompasses IT consultants, web designers, developers, data
            scientists, and cyber engineers.<br /> <br /> Together, we are committed to
            providing comprehensive digital solutions tailored to meet the
            needs of our clients, regardless of the project&apos;s scale. <br /> <br />
             The
            collective expertise ensures that Infolatch can handle a wide array
            of digital challenges, delivering quality results consistently. For
            those seeking an IT partner that not only promises but consistently
            delivers business excellence, Infolatch represents the perfect ally.
            <br /><br />
            Infolatch invites businesses to embark on a transformative journey,
            leveraging dedication, expertise, and a global perspective to
            elevate their ventures to unprecedented heights. <br /> <br />With Infolatch,
            businesses can experience the difference that commitment, skill, and
            a forward-thinking approach make in achieving their digital
            transformation goals.
            <br />
          
          </p>
        </div>
        <div className=" lg:w-1/2 flex items-end justify-end">
          <Image src="/single2.jpeg" alt="helo" width={500} height={400} />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row justify-between items-start py-20 lg:px-28 p-6 gap-10 min-h-screen w-full">
        <div className=" lg:w-1/2">
          <Image src="/group2.jpeg" alt="helo" width={500} height={500} />
        </div>
        <div className=" lg:w-1/2">
          <h1 className=" text-4xl font-heading mb-6 font-semibold uppercase text-forth">
            Our Mission{" "}
          </h1>
          <p className=" lg:text-2xl mb-6">
            We prioritize our clients and, hence, develop inventive,
            consumer-centric digital solutions to solve real-world problems
            while empowering your business and accelerating it beyond your
            expectations.
            <br />
            <br />
            Create products and services that are premium quality and match your
            requirements so that you get scalable solutions to outpace your
            competition.
            <br />
            <br />
            Foster long-lasting relationships with our clients so they come back
            to us with all their digital needs, and we can grow together.
          </p>
        </div>
      </div>
      <BenefitsUs />
      {/* New Goals Section */}
<div style={{ backgroundColor: "#f0f4f8", padding: "50px 0" }}>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      position: "relative",  // Added relative positioning
    }}
  >
    {/* Left side - Text */}
    <div
      style={{
        width: "50%",
        paddingRight: "40px",
        backgroundColor: "#d1e8ff", // Adjusted background for goals text section
        padding: "20px", // Adjust padding for better spacing
        borderRadius: "10px", // Added border radius for smooth edges
        minHeight: "350px", // Adjusted height for more content
      }}
      ref={goalsRef}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        our goals
      </h1>
      <ul style={{ fontSize: "16px", lineHeight: "1.8", color: "#4A4A4A" }}>
        <li>We strategize our solutions to help you revolutionize your business...</li>
        <li>We create aesthetically inspiring software solutions for your business...</li>
        <li>We assist in transforming your ideas into well-executed projects...</li>
        <li>Our team works with you to solve any challenges along the way...</li>
        <li>We ensure high-quality execution for each of our tailored solutions...</li>
        <li>We believe in consistent improvement and long-term success...</li>
      </ul>
    </div>

    {/* Right side - Image */}
    <div
      style={{
        width: "45%",
        marginTop: "-220px",  // Uplift the image slightly
        marginLeft: "-50px",  // Create more space between the text and image
      }}
    >
      <Image
        src="/temp.png"
        alt="Goals Image"
        width={530}
        height={530}
        style={{ objectFit: "cover" }}
      />
    </div>

    {/* Italic Text Section with Background Rectangle */}
    <div
      style={{
        position: "absolute",
        bottom: "60px",  // Adjusted to place the text lower
        right: "15%",  // Adjusted to align the text horizontally
        fontSize: "20px",
        fontStyle: "italic",  // Changed to pure italic
        color: "#fff",  // Text color
        backgroundColor: "rgb(0 45 87)",  // Background rectangle color
        padding: "10px 20px",  // Padding inside the rectangle
        borderRadius: "5px",  // Rounded corners for the background rectangle
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",  // Added shadow for the rectangle
      }}
    >
      &quot;Building your dreams into reality&quot;
    </div>
  </div>
</div>


      <GetConsultingSection
        heading={" Interested in different services?"}
        text1={"Look no further. Your challenge, our expertise."}
        text2={"Schedule a call to share your idea!"}
      />
    </>
  );
};

export default AboutPage;
