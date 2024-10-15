import React from 'react'
import Link from 'next/link'
import { FaArrowTrendUp } from "react-icons/fa6";
const ExploreMeButton = ({to}) => {
  return (
    <div>
        <Link href={to} className=' bg-forth text-white py-1 lg:py-3 px-8 rounded-full border hover:bg-forth hover:border border-forth hover:text-secondary  font-poppins flex items-center gap-2 hover:gap-3 transition-all duration-200'>Explore Me <FaArrowTrendUp className='text-2xl'/></Link>
    </div>
  )
}

export default ExploreMeButton