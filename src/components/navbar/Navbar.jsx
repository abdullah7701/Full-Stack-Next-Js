"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";

import Link from "next/link";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosMenu,
  IoIosClose,
} from "react-icons/io";
import Megadropdown from "../MegaDropDown";
import MegaDropDownCompany from "../MegadropdownForCompany";
import MegaDropDownIndustries from "../MegaDropDownForIndustries";
import Image from "next/image";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  // useEffect(async()=>{
  //    const session = await auth()

  // },[])
  const handleMouseEnter = (item) => {
    if (window.innerWidth >= 768) {
      // only handle hover on desktop
      setHovered(item);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      // only handle hover on desktop
      setHovered(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const toggleIndustriesDropdown = () => {
    setIndustriesDropdownOpen(!industriesDropdownOpen);
  };

  const toggleCompanyDropdown = () => {
    setCompanyDropdownOpen(!companyDropdownOpen);
  };
  const handleLinkClick = () => {
    setHovered(false);
  };
  return (
    <div className={`fixed w-full z-10 bg-white border-b ${styles.navbar}`}>
      <div className="flex justify-between  items-center px-1 md:px-28 py-2">
        <Link href={"/"}>
          <div>
            <Image src="/LOGO.jpeg" alt="LOGO" width={150} height={70} />
            {/* <Image
              src="/png2jpg/logoInfo.jpg"
              alt="LOGO"
              width={100}
              height={70}
            /> */}
          </div>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
          </button>
        </div>
        <div className={`hidden md:flex gap-6 font-semibold`}>
          <ul className="flex gap-6 font-semibold">
            <Link
              href={"/"}
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
              className={`${hovered === "home" ? "text-tirtry" : ""}`}
            >
              Home
            </Link>
            <li>
              <Link
                href={"/about"}
                onMouseEnter={() => handleMouseEnter("Company")}
                onMouseLeave={handleMouseLeave}
                className={`flex gap-2 justify-center items-center transition-all duration-150 ${
                  hovered === "Company" ? "text-tirtry" : ""
                }`}
              >
                About{" "}
                {/* {hovered === "Company" ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "} */}
              </Link>
              {/* {hovered === "Company" && (
                <div
                  onMouseEnter={() => handleMouseEnter("Company")}
                  onMouseLeave={handleMouseLeave}
                >
                  <MegaDropDownCompany />
                </div>
              )} */}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <Link

                href="/services"
                className={`flex gap-2 justify-center items-center transition-all duration-150 ${
                  hovered === "services" ? "text-tirtry" : ""
                }`}
              >
                Services{" "}
                {hovered === "services" ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </Link>
              {hovered === "services" && (
                <div
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Megadropdown onCLick={handleLinkClick} />
                </div>
              )}
            </li>
            <li>
              <Link
                href={"/"}
                onMouseEnter={() => handleMouseEnter("Industries")}
                onMouseLeave={handleMouseLeave}
                className={`flex gap-2 justify-center items-center transition-all duration-150 ${
                  hovered === "Industries" ? "text-tirtry" : ""
                }`}
              >
                Industries{" "}
                {hovered === "Industries" ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}{" "}
              </Link>
              {hovered === "Industries" && (
                <div
                  onMouseEnter={() => handleMouseEnter("Industries")}
                  onMouseLeave={handleMouseLeave}
                >
                  <MegaDropDownIndustries onCLick={handleLinkClick}/>
                </div>
              )}
            </li>

            <Link
              href={"/work"}
              onMouseEnter={() => handleMouseEnter("work")}
              onMouseLeave={handleMouseLeave}
              className={`${hovered === "work" ? "text-tirtry" : ""}`}
            >
              Our Work
            </Link>

            <Link
              href={"/blog"}
              onMouseEnter={() => handleMouseEnter("Blog")}
              onMouseLeave={handleMouseLeave}
              className={`${hovered === "Blog" ? "text-tirtry" : ""}`}
            >
              Blogs
            </Link>
            {/* <Link href={"/admin"}>Add Blog</Link> */}
          </ul>
        </div>
        <Link
          href="/contact"
          className="hidden md:block border-2 bg-forth text-secondary font-semibold rounded-full py-3 px-6 text-sm"
        >
          Contact US
        </Link>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start bg-white px-2">
          <Link href={"/"} className="py-1" onClick={toggleMenu}>
            Home
          </Link>
          <div className="py-1" onClick={toggleMenu}>
    
    <Link href={"/about"} className="w-full">
      About
    </Link>

</div>
          <div className="py-1" onClick={toggleServicesDropdown}>
            <div className="flex justify-between w-full items-center">
              <Link href="/services" className="w-full">
                Services
              </Link>
              {servicesDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          <div onClick={toggleMenu}>
          {servicesDropdownOpen && <Megadropdown />}
          </div>
          </div>
          <div className="py-1" onClick={toggleIndustriesDropdown}>
            <div className="flex justify-between w-full items-center">
              <Link href={"/"} className="w-full">
                Industries
              </Link>
              {industriesDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            <div onClick={toggleMenu}>
            {industriesDropdownOpen && <MegaDropDownIndustries />}
            </div>
          </div>
          <Link href={"/work"} className="py-1" onClick={toggleMenu}>
            Our Work
          </Link>
         
          <Link href={"/blog"} className="py-1" onClick={toggleMenu}>
            Blogs
          </Link>
          {/* <Link href={"/admin"} className="py-2" onClick={toggleMenu}>
            Add Blog
          </Link> */}
          <Link
            href="/contact"
            className="py-1 border-2 bg-forth text-secondary font-semibold rounded-xl px-6 text-sm my-6"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </div>
      )}
    </div> 
  );
};

export default Navbar;
