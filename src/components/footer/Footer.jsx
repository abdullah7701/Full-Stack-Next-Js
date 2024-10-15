import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

// export default function Footer(){
   
//   return(
//       <>
//       <footer>
//           <div className="min-h-[350px] bg-white text-black border-t w-full items-start flex justify-center px-6 lg:px-20 font-poppins py-10">

//               <div className="lg:flex justify-between items-start w-full">
//               <div >
//                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6268083081222!2d-0.11056392414385266!3d51.520062309779206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4dd9bf3689%3A0x81e904e52e4cb8f6!2s4787%203a%2C%2034-35%20Hatton%20Garden%2C%20London%20EC1N%208DX%2C%20UK!5e0!3m2!1sen!2s!4v1719565020122!5m2!1sen!2s" height="250" allowFullScreen="" width={250}referrerPolicy="no-referrer-when-downgrade"></iframe>
//                   </div>
//                   <div className=" lg:w-[20%]">
//                       <h1 className="text-2xl font-semibold py-3 text-forth">Contacts</h1>
//                       <ul className="flex flex-col space-y-3">
//                       <li className="flex space-x-2"><IoLocation  className="border-2 border-forth text-primary p-2 rounded-full text-4xl"/><span>Suite 4787, Unit 3A 34-35 <br /> Hatton Garden Holborn, <br />London EC1N 8DX</span></li>
//                       <li className="flex space-x-2">
//   <MdEmail className="border-2 border-forth text-primary p-2 rounded-full text-4xl" />
//   <a href="mailto:contact@infolatch.uk" className="text-primary">
//     <span>contact@infolatch.uk</span>
//   </a>
// </li>

//                           <li className="flex space-x-2">
//   <FaPhoneAlt className="border-2 border-forth text-primary p-2 rounded-full text-4xl" />
//   <a href="tel:02087036788" className="text-primary">
//     <span>020 8703 6788</span>
//   </a>
// </li>

                          
//                       </ul>
//                       </div>
//                   <div className="  text-start  flex flex-col">
//                       <h1 className="text-2xl font-semibold py-3 text-forth">Infolatch Ltd</h1>
//                       <ul className=" flex flex-col items-start gap-6">
//                           <p ><strong>Registered in</strong><br /> England  and Wales. </p>
                          
//                           <p ><strong>Company number:</strong> <br /> 14763673. </p>
//                           <p ><strong>VAT Registration Number:</strong> <br /> 452688757.</p>
                 
                         
                          
//                       </ul>
//                   </div>
                 
                 
//                   <div className=" lg:text-start flex-flex-col">
//                       <h1 className="text-2xl font-semibold py-3 text-forth">Follow Us</h1>
//                       <ul className="flex lg:items-center lg:justify-start space-x-7 mt-8">
//                           <Link href={"https://www.facebook.com/profile.php?id=61560916967190"} className="border-2 border-forth text-primary p-2 rounded-full text-2xl"><FaFacebook/></Link>
//                           <Link href={"https://www.linkedin.com/company/infolatch-ltd/"}className="border-2 border-forth text-primary p-2 rounded-full text-2xl"><FaLinkedin/></Link>
//                           <Link href={"https://x.com/infolatchLTD?t=Er1pME2-mKa0vI6HWB-RzQ&amp;s=09"}className="border-2 border-forth text-primary p-2 rounded-full text-2xl"><FaSquareXTwitter/></Link>
//                       </ul>
//                   </div>
//               </div>
             
             
//           </div>
//          <div className=" lg:flex justify-between items-center px-6 gap-10 lg:px-28 pb-10">
//          <div>
//         <img src="/LOGO.jpeg" alt="logo" width={300}/>
//      </div>
//      <div className=" flex lg:flex-row flex-col gap-5 text-gray-500">
//      <Link href="/privacy-policy">Privacy Policy</Link>
//      <Link href="/cookies">Cookies</Link>
//          <Link href="/terms-condition">Terms and Conditions</Link>
         
//      </div>
     
//          </div>
//          <div className=" flex items-center justify-center">
//             <p className=" py-2 text-gray-500">Infolatch.uk 2024 all rights reserved</p>
//          </div>
//       </footer>
//       </>
//   )
// }
export default function Footer() {
  return (
    <>
      <footer>
        {/* Main Footer Section with Blue Background */}
        <div className="bg-[rgb(0,45,87)] text-white border-t w-full flex flex-col items-center px-6 lg:px-20 py-14 font-poppins">
          {/* Grid container for better structure */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Google Maps Embed Section */}
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="text-xl font-semibold mb-4">Our Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6268083081222!2d-0.11056392414385266!3d51.520062309779206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4dd9bf3689%3A0x81e904e52e4cb8f6!2s4787%203a%2C%2034-35%20Hatton%20Garden%2C%20London%20EC1N%208DX%2C%20UK!5e0!3m2!1sen!2s!4v1719565020122!5m2!1sen!2s"
                height="200"
                width="100%"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg border border-gray-400 shadow-md"
              />
            </div>

            {/* Contact Information Section */}
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <IoLocation className="text-white p-2 rounded-full text-3xl border-2 border-white" />
                  <span className="leading-tight">
                    Suite 4787, Unit 3A <br /> 34-35 Hatton Garden Holborn,
                    <br /> London EC1N 8DX
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <MdEmail className="text-white p-2 rounded-full text-3xl border-2 border-white" />
                  <a href="mailto:contact@infolatch.uk" className="text-gray-300 hover:text-white">
                    contact@infolatch.uk
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <FaPhoneAlt className="text-white p-2 rounded-full text-3xl border-2 border-white" />
                  <a href="tel:02087036788" className="text-gray-300 hover:text-white">
                    020 8287 3292
                  </a>
                </li>
              </ul>
            </div>

            {/* Infolatch Ltd Information */}
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="text-xl font-semibold mb-4">Infolatch Ltd</h2>
              <ul className="space-y-3">
                <li>
                  <strong>Registered in:</strong> <br /> England and Wales
                </li>
                <li>
                  <strong>Company number:</strong> <br /> 14763673
                </li>
                <li>
                  <strong>VAT Registration Number:</strong> <br /> 452688757
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
              <ul className="flex flex-col space-y-3">
                <Link href="https://www.facebook.com/profile.php?id=61560916967190" className="text-white text-3xl hover:text-blue-600">
                  <FaFacebook />
                </Link>
                <Link href="https://www.linkedin.com/company/infolatch-ltd/" className="text-white text-3xl hover:text-blue-800">
                  <FaLinkedin />
                </Link>
                <Link href="https://x.com/infolatchLTD?t=Er1pME2-mKa0vI6HWB-RzQ&amp;s=09" className="text-white text-3xl hover:text-blue-500">
                  <FaSquareXTwitter />
                </Link>
              </ul>
            </div>
          </div>
        </div>

        {/* Lower Section with White Background */}
        <div className="w-full bg-white text-black py-6 px-6 lg:px-20">
          {/* Divider for logo and policies */}
          <div className="w-full border-t border-gray-600 py-6 lg:flex justify-between items-center">
          <div className="lg:w-[300px] mb-4 lg:mb-0">
  <Image 
    src="/LOGO.jpeg"
    alt="logo"
    width={300} // Specify the width of the image
    height={100} // Specify the height of the image, adjust as needed
    className="w-full h-auto bg-transparent"
  />
</div>
            <div className="flex gap-5 text-gray-700 text-center lg:text-left">
              <Link href="/privacy-policy" className="hover:text-black">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-black">
                Cookies
              </Link>
              <Link href="/terms-condition" className="hover:text-black">
                Terms and Conditions
              </Link>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="w-full py-4 text-center text-gray-400">
            <p>© Infolatch.uk 2024. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
