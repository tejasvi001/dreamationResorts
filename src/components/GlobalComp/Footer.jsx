"use client";
import React from "react";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
  };

  return (
    <footer className='bg-black/95 text-white pt-16 pb-8'>
      <div className=''>
        <div className='max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Address Section */}
          <div className='justify-start text-white text-2xl lg:text-3xl font-normal font-Lato'>
            <p className='max-w-[550px] '>
              Aamation Tourism & Hospitality Private Limited Hadbast No - 1037,
              Mohal – Ghornala Post Office – Bir, Tehsil – Baijnath District –
              Kangra (H.P.) 176077
            </p>
          </div>

          {/* Navigation Links */}
          <div className='flex flex-col space-y-3'>
            <a
              href='#'
              className='hover:text-gray-300 transition-colors justify-start text-neutral-50 text-2xl lg:text-3xl font-normal font-Lato leading-[48px] tracking-wide'
            >
              Accommodations
            </a>
            <a
              href='#'
              className='hover:text-gray-300 transition-colors justify-start text-neutral-50 text-2xl lg:text-3xl font-normal font-Lato leading-[48px] tracking-wide'
            >
              Activities
            </a>
            <a
              href='#'
              className='hover:text-gray-300 transition-colors justify-start text-neutral-50 text-2xl lg:text-3xl font-normal font-Lato leading-[48px] tracking-wide'
            >
              Contact
            </a>
            <a
              href='#'
              className='hover:text-gray-300 transition-colors justify-start text-neutral-50 text-2xl lg:text-3xl font-normal font-Lato leading-[48px] tracking-wide'
            >
              News
            </a>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className='justify-start text-white text-2xl lg:text-3xl font-bold font-Lato md:leading-10 lg:leading-[48px] tracking-wide'>
              Newsletter
            </h3>
            <form onSubmit={handleNewsletterSubmit}>
              <div className='flex flex-col space-y-3'>
                {/* <div className="w-[300.59px] justify-start text-white text-xl font-light font-['Lato'] leading-loose tracking-tight">Enter your email adress</div> */}
                <input
                  type='email'
                  placeholder='Enter your email adress'
                  className='bg-transparent border-0 outline-none border-b border-white/30 justify-start text-white text-xl font-light font-Lato leading-loose tracking-tight transition-colors'
                />
                <button
                  type='submit'
                  className='self-start border-2 flex justify-center items-center backdrop-blur-sm text-white px-8 py-1 md:py-2 rounded-full text-lg md:text-2xl font-bold font-Abhaya_Libre hover:bg-white/30 transition-colors'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className='flex flex-col w-full md:flex-row justify-between items-center mt-12 pb-8 border-b border-white/10'>
          <div className='flex sm:items-center max-w-7xl sm:flex-row flex-col mx-auto px-8 w-full justify-center sm:space-x-8 mb-6 md:mb-0'>
            <a
              href='mailto:info@dreamationresorts.com'
              className='flex items-center space-x-2 hover:text-gray-300 transition-colors'
            >
              <Mail className='h-5 w-5' />
              <span>info@dreamationresorts.com</span>
            </a>
            <a
              href='tel:8580758626'
              className='flex items-center space-x-2 hover:text-gray-300 transition-colors'
            >
              <Phone className='h-5 w-5' />
              <span>8580758626, 7837000888</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className='flex max-w-7xl mx-auto sm:flex-row flex-col px-8 items-center justify-between mt-8 text-sm text-gray-400'>
          <p className='justify-start text-neutral-50 text-xl font-normal font-Lato leading-loose tracking-tight'>
            {" "}
            © Copyright 2025. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className='flex space-x-6'>
            <a href='#' className='hover:text-gray-300 transition-colors'>
              <Instagram className='h-5 w-5' />
            </a>
            <a href='#' className='hover:text-gray-300 transition-colors'>
              <Facebook className='h-5 w-5' />
            </a>
            <a href='#' className='hover:text-gray-300 transition-colors'>
              <Youtube className='h-5 w-5' />
            </a>
            <a href='#' className='hover:text-gray-300 transition-colors'>
              <Twitter className='h-5 w-5' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
