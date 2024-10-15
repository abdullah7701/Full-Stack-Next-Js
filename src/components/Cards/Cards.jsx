import React from 'react';
import { RiGlobeFill } from "react-icons/ri";
import { TbCloudSnow } from "react-icons/tb";
const Cards = ({ number, text, icon = TbCloudSnow }) => {
  return (
    <div className='max-w-[300px] px-4 flex flex-col items-center text-center gap-4 rounded-2xl border-l-8 border-tirtry'>
      {/* Render the icon */}
      <h1 className='lg:text-7xl text-4xl mt-[-30px] text-forth'>
        {React.createElement(icon)} {/* Create the icon dynamically */}
      </h1>
      
      {/* Card Content */}
      <p className='font-poppins text-sm text-primary font-semibold'>{text}</p>
    </div>
  );
};

export default Cards;
