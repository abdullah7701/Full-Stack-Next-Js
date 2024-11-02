import React from 'react'

import { RiGlobeFill } from "react-icons/ri";
import { TbCloudSnow } from "react-icons/tb";
import { SiMicrostrategy } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { SiAntdesign } from "react-icons/si";
import { AiOutlineUser, AiOutlineFire, AiOutlineTeam } from 'react-icons/ai';
import { RiHandHeartLine } from 'react-icons/ri'; 
import { AiFillFire } from "react-icons/ai";
import { AiFillMerge } from "react-icons/ai";
import { AiFillDribbbleCircle } from "react-icons/ai";
import Cards from '../Cards/Cards';



//data-aos="fade-down"
   //  data-aos-duration="1000"
const TrustedBy = () => {


    const renderOne = () => {
        return <TbCloudSnow />;
    };
    const renderTwo = () => {
        return <SiMicrostrategy />;
    };
    const renderthree = () => {
        return <IoNewspaperOutline />;
    };
    const renderfour = () => {
        return <SiAntdesign />;
    };

  return (
    <div className="relative bg-white py-16 lg:py-28 px-8 lg:px-32 text-[#004080] overflow-hidden">
      {/* Blurry Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Bubble 1 */}
        <div className="bg-[#8AC1EB] opacity-40 rounded-full blur-2xl w-[250px] h-[250px] absolute top-10 left-10"></div>
        {/* Bubble 2 */}
        <div className="bg-[#4F9CD4] opacity-30 rounded-full blur-3xl w-[350px] h-[350px] absolute top-32 right-40"></div>
        {/* Bubble 3 */}
        <div className="bg-[#8AC1EB] opacity-40 rounded-full blur-3xl w-[200px] h-[200px] absolute bottom-10 left-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-1 text-center mb-20">
        <h1
          className="text-5xl lg:text-6xl font-bold font-overlock text-[#004080] drop-shadow-lg mb-6"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          What Makes Us Stand Out!
        </h1>
        <hr className="w-20 mx-auto border-t-4 border-[#004080] mb-4" />
        <p className="text-lg max-w-3xl mx-auto text-[#004080]">
          We’ve helped clients elevate their business growth through our strategic solutions and customized digital services.
        </p>
      </div>

      {/* Cards Section */}
      <div
        className="relative z-1 grid lg:grid-cols-3 gap-12"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        {/* Card 1 */}
        <Cards
          icon={AiOutlineUser} // Passing icon as a reference
          number="700+"
          text="We have earned loyal clients by completing projects successfully, ensuring customer satisfaction."
          className="bg-white text-[#004080] p-8 rounded-lg shadow-lg transform hover:-translate-y-3 transition duration-300 ease-in-out"
        />

        {/* Card 2 */}
        <Cards
          icon={RiHandHeartLine} // Passing icon as a reference
          number="2000+"
          text="Our collaborations with reputable businesses have made us a trusted digital partner."
          className="bg-white text-[#004080] p-8 rounded-lg shadow-lg transform hover:-translate-y-3 transition duration-300 ease-in-out"
        />

        {/* Card 3 */}
        <Cards
          icon={AiOutlineTeam} // Passing icon as a reference
          number="50+"
          text="Our expert team of developers, designers, and marketers brings creativity and perfection to your projects."
          className="bg-white text-[#004080] p-8 rounded-lg shadow-lg transform hover:-translate-y-3 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  )
}

export default TrustedBy