'use client';
import React, { useState } from 'react';
import { FaCode, FaPalette, FaRobot, FaBullhorn} from 'react-icons/fa';
import { IoMdCloseCircle } from "react-icons/io";
import { FaCloud } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import ExploreMeButton from '../ExploreMeButton';

const OurServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('Software Development');
  const [height, setHeight] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [show, setShow] = useState(false);

  const toggleDescription = (id) => {
    setActiveId(prevId => {
      const newActiveId = prevId === id ? null : id;
      setHeight(newActiveId !== null);
      return newActiveId;
    });
  };

  const Services = [
    {
      id: 1,
      h3: 'Software Development',
      src: FaCode,
      des: 'InfoLatch is an expert at creating custom software that is reliable, scalable, and appropriately matched to your company specific needs. Whether you require enterprise software, integrated solutions, or a custom application, our experience promises excellent outcomes that advance your company.',
      des2: "Partner with us to bring your business vision to life. We offer comprehensive support, from design to deployment, to ensure your success. Our bespoke software solutions help businesses stand out and reach new heights. Let  work together to create a customized solution that meets your specific needs and drives your business forward. ",
      to: '/services',
    },
    {
      id: 2,
      h3: 'Digital Design',
      src: FaPalette,
      des: 'We design digital products that will personify your brand perfectly while providing a seamless experience to your consumers across all platforms and devices.',
      des2: "In today&apos;s  digital landscape, maintaining a modern and engaging online presence is crucial for business success. Entrust our  expert team to manage your digital profile, from initial wireframing and prototyping to comprehensive UX/UI and product design. Our tailored approach ensures a seamless user experience that aligns with your brand identity. ",
      to: '/design',
    },
    {
      id: 3,
      h3: 'AI Solutions',
      src: FaRobot,
      des: 'We design state-of-the-art AI solutions customised to each clients unique needs while optimising project cost and minimising risks.',
      des2: "Unlock the full potential of AI for your business with our customized solutions. Our experienced IT professionals will work closely with you to design and implement tailored AI solutions that meet your unique needs. By automating routine tasks and gaining valuable insights, you will be able to focus on strategic decision-making and drive business success.  ",
      to: '/ai-service',
    },
    {
      id: 4,
      h3: 'SEO',
      src: TbSeo,
      des: 'Our SEO services will drive measurable growth for your business with enhanced online visibility through in-depth audits, strategic content strategies, and link building.',
      des2: "Take Your Business to the Next Level with a Strategic SEO Plan. Our team of experts will help you dominate search engine rankings with a precision-crafted SEO strategy. By identifying and targeting key opportunities, we will drive more qualified leads to your business and increase your online visibility. Join forces with us to create a customized SEO plan that meets your unique needs and goals, and discover the power of targeted search engine optimization. ",
      to: '/services/seo',
    },
    {
      id: 5,
      h3: 'Digital marketing',
      src: FaBullhorn, 
      des: 'Our full-service, versatile, and dynamic digital marketing services are your first bet to the design strategies that will help you attract new clients and retain the old ones as well.',
      des2: "Partner with our  expert marketing team to amplify your business  online presence across multiple channels, including social media, SEO, web development, and beyond. Our comprehensive approach empowers you to reach new heights and drive sustainable growth.",
      to: '/services/digital-marketing',
    },
    {
      id: 6,
      h3: 'Cloud Solution',
      src: FaCloud,
      des: 'Our ultimate cloud solutions enable businesses to enhance their productivity while reducing their overheads and reduced time-to-market while switching to the cloud atmosphere seamlessly. ',
      des2: "Our expert team will help you harness the full potential of cloud technology, from DevOps to AWS. By leveraging our cloud services, you will  enhance productivity, scalability, and agility, setting your business up for success. Get started with a consultation and quote, and let us help you navigate the cloud landscape to achieve your business goals ",
      to: '/cloud-service',
    },
  ];

  return (
    <div className={`w-full ${height ? `lg:min-h-[900px] ${activeId > 3 ? 'min-h-[1350px]' : 'min-h-[1200px]'}` : 'min-h-screen'} transition-all duration-200 trustedDiv bg-forth flex flex-col items-center justify-start py-10 px-6 lg:py-20 lg:px-28 mt-10 text-secondary`}>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='font-overlock text-5xl mb-4 font-semibold text-center'>
            Our Services
          </h1>
          <p className='font-poppins lg:w-[500px]  text-center'>
          Explore Our Comprehensive Service Offerings and Solutions Tailored to Your Specific Needs
          </p>
          <hr className='mt-3 lg:w-[200px] border-t-4 border-tirtry items-center mx-auto' />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 justify-between items-start gap-2 pt-20 relative'>
        {Services.map((service) => (
          <div key={service.id} >
            <div onClick={() => toggleDescription(service.id)} className={`max-w-[590px] min-h-[100px] ${activeId === service.id ? 'bg-white text-forth' : 'bg-[#082140] text-secondary'} font-poppins p-6 flex gap-4 transition-all duration-200 shadow-lg cursor-pointer`}>
              <div className='flex flex-col gap-4 text-center'>
                <div className='flex gap-4 items-center'>
                  <div className='border-2 border-forth p-6 flex items-center w-12 justify-center rounded-full h-12'>
                    <p className={`${activeId === service.id ? 'text-primary' : 'text-secondary'} text-xl`}>{<service.src />}</p>
                  </div>
                  <h3 className={`  font-poppins font-semibold lg:text-xl text-sm whitespace-nowrap ${activeId === service.id ? 'text-primary' : 'text-secondary'}`}>{service.h3}</h3>
                </div>
              </div>
            </div>
            {activeId === service.id && (
              <div className={`flex justify-start mx-auto left-0  flex-col absolute lg:h-[390px] lg:w-[1062px] bg-white text-primary z-40 py-2 lg:py-6 p-4 lg:px-10 font-poppins transition-all duration-150`}>
                <div className='hidden lg:flex justify-end items-center'>
                  <button onClick={() => toggleDescription(service.id)}><IoMdCloseCircle className='text-3xl text-forth' /></button>
                </div>
                <div className='flex flex-col items-start justify-start text-start'>
                  <h1 className='py-4 font-semibold capitalize text-forth text-2xl'> {service.h3}</h1>
                  <p className='text-sm lg:text-md '>{service.des}</p>
                  <p className=' lg:mt-8 mt-4 text-sm lg:text-md'>{service.des2}</p>
                  <div className='mt-6'>
                    <ExploreMeButton to={service.to} />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServicesSection;
