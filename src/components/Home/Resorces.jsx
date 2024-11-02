import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
const Resorces = ({
  heading = 'Our work',
  subHeading = 'From concept to success: see our solutions in action',
  projectName = 'Uni Hub',
  description = 'Infolatch created an outstanding and multipurpose campus platform for a client. Whether you want to know about the events happening in the campus, or looking to get some services done or simply wish to buy or sell some stuff, UniHub got you covered.',
  moreDes = 'We ensured to bring scalability to the marketplace making it easy for them to handle all scales of transactions.',
  src = "/workImg.jpeg" ,
  href= "/work"
}) => {
  return (
    <div className='min-h-screen w-full px-6 lg:px-28 py-10 font-poppins flex lg:flex-row flex-col justify-between items-center gap-10'>
      <div className='lg:w-1/2'>
        <h1 className='text-5xl capitalize font-bold font-overlock text-forth'>
          {heading}
        </h1>
        <p className='lg:w-[600px] pt-2 pb-3'>{subHeading}</p>
        <hr className='border-t-4 border-tirtry mb-6 lg:w-[200px]' />
        <h1 className='text-3xl font-semibold font-poppins mb-4 text-forth'>
          {projectName}
        </h1>
        <p>{description}</p>
        <br />
        <br />
        <p>{moreDes}</p>
        <div className='py-4'>
          <Link href={href} className='py-2 px-6 bg-forth text-secondary font-semibold rounded-full'>Case Details</Link>
        </div>
      </div>
      <div className='lg:w-1/2 w-full'>
        <div className=' w-full bg-gray-400 flex justify-center items-center'>
          <Image src={src} alt="workImg" height={600} width={600}/>
        </div>
      </div>
    </div>
  )
}

export default Resorces
