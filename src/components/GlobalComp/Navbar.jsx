"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import LogoIcon from "../../assets/logo.png";
import resortImage from "../../assets/resort.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Accommodations", href: "/Accomodation" },
    { title: "Activities", href: "#" },
    { title: "Contact", href: "#" },
    { title: "News", href: "#" },
  ];

  return (
    <nav className=' w-full z-50 bg-black/10'>
      {/* Main Navbar */}
      <div className='bg-transparent'>
        <div className='max-w-7xl mx-auto px-8'>
          <div className='flex items-center justify-between '>
            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-white p-2'
              aria-label='Toggle menu'
            >
              {isOpen ? (
                <X className='h-8 w-8' />
              ) : (
                <Menu className='h-16 w-16 stroke-1' />
              )}
            </button>

            {/* Logo */}
            {/* <div className='flex-shrink-0'>
              <Image
                className='w-[165px] object-contain'
                src={LogoIcon}
                alt='Logo'
              />
            </div> */}
            <Logo />
            <GetInTouch />
          </div>
        </div>
      </div>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/90 backdrop-blur-sm transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } transition-all duration-500 ease-in-out`}
      >
        <div className='h-full flex flex-col'>
          {/* Top Bar in Menu */}
          <div className='px-8'>
            <div className='flex items-center justify-between'>
              <button
                onClick={() => setIsOpen(false)}
                className='text-white p-2'
                aria-label='Close menu'
              >
                <X className='h-16 stroke-1 w-16' />
              </button>

              {/* Logo */}
              <Logo />

              <GetInTouch />
            </div>
          </div>

          {/* Menu Items */}
          <div className='flex mt-5 px-5 items-center justify-center'>
            <div className=' flex gap-5 flex-wrap justify-evenly w-full items-center'>
              {menuItems.map((item, index) => (
                <React.Fragment key={item.title}>
                  <a
                    href={item.href}
                    className=' text-neutral-50 items-center flex text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-Abhaya_Libre hover:text-gray-300 transition-colors'
                    onClick={() => setIsOpen(false)}
                  >
                    {index !== 0 && (
                      <span className='text-white text-4xl mx-4'>•</span>
                    )}
                    {item.title}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className=' grid grid-cols-3 gap-5 items-center justify-center overflow-hidden px-5 mt-16 pb-20 flex-1'>
            <div className=' text-white break-all text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-Abhaya_Libre'>
              Dreamation Resort!
            </div>
            <Image
              src={resortImage}
              className='w-auto h-auto object-contain mx-auto'
              alt='dreamation_resort'
            />
            <div className='text-white break-all text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-Abhaya_Libre'>
              info@dreamationresorts.com
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const GetInTouch = () => {
  return (
    <button className='py-2 px-8 min-[400px]:block hidden rounded-[25.05px] border-[2.51px] border-white justify-start text-white md:text-2xl texl lg:text-3xl font-bold font-Abhaya_Libre'>
      Get in Touch
    </button>
  );
};

const Logo = () => {
  return (
    <a href='/' className='flex-shrink-0'>
      <Image
        className='size-[100px] sm:size-[130px] object-contain md:w-[165px] mg:h-[165px]'
        src={LogoIcon}
        alt='Logo'
      />
    </a>
  );
};
