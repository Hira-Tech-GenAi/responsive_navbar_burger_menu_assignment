"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

// define props type
type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBG, setNavBG] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBG(true);
      }
      if (window.scrollY < 90) {
        setNavBG(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`bg-[#240046] ${navBG ? "bg-[#240b39]" : ""}`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto text-w">
        {/* Logo */}
        <Image
          src="/h_logo.png"
          alt="logo"
          width={100}
          height={100}
          className="ml-[-1.5rem] sm:ml-0"
        />

        {/* Links */}
        <div className="flex items-center space-x-10 ">
          <div className="hidden lg:flex md:flex items-center space-x-8">
            {navLinks.map((navLink) => {
              return (
                <Link href={navLink.url} key={navLink.id}>
                  <p className="text-white text-base md:text-lg lg:text-xl font-semibold tracking-wide hover:text-blue-200 transition duration-300 ease-in-out">
                    {navLink.label}
                  </p>
                </Link>
              );
            })}
          </div>

          {/*Burger */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer lg:hidden md:hidden text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
