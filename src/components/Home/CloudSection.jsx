// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { PiAirplaneInFlight } from "react-icons/pi";
// import { SiVorondesign } from "react-icons/si";
// import { GiPlantsAndAnimals } from "react-icons/gi";
// import { GiAbstract039 } from "react-icons/gi";
// import { GrDocumentTest } from "react-icons/gr";
// import { SiPlanetscale } from "react-icons/si";
// import { AiTwotoneBuild } from "react-icons/ai";
// import { FaLayerGroup } from "react-icons/fa";
// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
// // import "./home.css";


// const CloudSection = () => {
//   const cloudData = [
//     {id: 1, name: "Planning", icon : GiPlantsAndAnimals},
//     {id: 2, name: "Designing", icon : SiVorondesign},
//     {id: 3, name: "Defining", icon : GiAbstract039},
//     {id: 4, name: "Building", icon : AiTwotoneBuild},
//     {id: 5, name: "Testing", icon : GrDocumentTest},
//     {id: 6, name: "Deployment", icon : SiPlanetscale},
//     {id: 7, name: "Mantainance", icon : FaLayerGroup},
//   ]
//   return (
//     <div className="w-full min-h-screen px-6 lg:px-20 py-24 flex items-center justify-center flex-col font-poppins z-0 ">
// <h1 className=" lg:text-5xl text-2xl text-forth font-semibold font-heading text-center">Our development process is designed to efficiently deliver high-quality, customized solutions.
// </h1>
// {/* <p className=" font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> */}
// <div className=" mt-20 flex flex-wrap gap-10 text-center items-center justify-center">
//   {cloudData.map(item =>(
//     <div key={item.id} className=" flex flex-col items-center justify-center gap-4 w-[250px] ">
//     <div className=" p-4 bg-[#eaf0fe] rounded-full ">
//       <p className=" p-4 text-3xl bg-forth rounded-full text-white"><item.icon/></p>
//     </div>
//     <h2 className=" text-forth font-poppins capitalize font-semibold">{item.name}</h2>
//     </div>
//   ))}
  
 
// </div>
     
//     </div>
//   );
// };

// export default CloudSection;


'use client';
import React, { useEffect, useRef, useState } from "react";
import { SiVorondesign } from "react-icons/si";
import { GiPlantsAndAnimals, GiAbstract039 } from "react-icons/gi";
import { GrDocumentTest } from "react-icons/gr";
import { SiPlanetscale } from "react-icons/si";
import { AiTwotoneBuild } from "react-icons/ai";
import { FaLayerGroup } from "react-icons/fa";
import "./home.css";
const CloudSection = () => {
  const cloudData = [
    { id: 1, name: "Planning", icon: <GiPlantsAndAnimals /> },
    { id: 2, name: "Designing", icon: <SiVorondesign /> },
    { id: 3, name: "Defining", icon: <GiAbstract039 /> },
    { id: 4, name: "Building", icon: <AiTwotoneBuild /> },
    { id: 5, name: "Testing", icon: <GrDocumentTest /> },
    { id: 6, name: "Deployment", icon: <SiPlanetscale /> },
    { id: 7, name: "Maintenance", icon: <FaLayerGroup /> },
  ];

  const wheelRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  // Handle scroll event to rotate the wheel
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setRotation(scrollTop / 5); // Adjust the division to control rotation speed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-screen px-6 lg:px-20 py-24 flex items-center justify-center flex-col font-poppins z-0">
      <h1 className="lg:text-5xl text-2xl text-forth font-semibold font-heading text-center">
        Our development process is designed to efficiently deliver high-quality, customized solutions.
      </h1>

      {/* Rotating Wheel Container */}
      <div
        className="relative mt-20 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] flex items-center justify-center"
      >
        {/* Decorative Circle */}
        <div
          ref={wheelRef}
          className="absolute w-full h-full rounded-full border-[6px] border-dashed border-forth z-0"
          style={{ transform: `rotate(${rotation}deg)` }} 
        >
          {cloudData.map((item, index) => {
            const angle = (index / cloudData.length) * 360;
            const x = 50 + 45 * Math.cos((angle * Math.PI) / 180);
            const y = 50 + 45 * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={item.id}
                className="absolute flex flex-col items-center"
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: `translate(-50%, -50%) rotate(-${rotation}deg)`, // Keep icons upright
                }}
              >
                <div className="p-4 bg-[#eaf0fe] rounded-full z-10 relative">
                  <div className="text-3xl bg-forth text-white rounded-full p-8">
                    {item.icon}
                  </div>
                </div>
                <h2 className="text-forth font-poppins capitalize font-semibold mt-2">
                  {item.name}
                </h2>
              </div>
            );
          })}
        </div>

        {/* Double Layer Central Circle (Static) */}
        <div className="absolute w-[170px] h-[170px] lg:w-[220px] lg:h-[220px] bg-white rounded-full flex items-center justify-center z-5 shadow-md border-[4px] border-blue-500">
          <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] bg-white rounded-full flex items-center justify-center border-[2px] border-[#002d57]">
            <p className="text-center text-[#002d57] font-semibold px-4">
              The Software Development Process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSection;
