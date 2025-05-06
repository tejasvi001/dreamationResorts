"use client";
import React from "react";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Router,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  // const handleNewsletterSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle newsletter submission
  // };

  return (
    <footer className="bg-black/95 text-white py-8 md:py-[3vw] w-full md:pt-[10vw]">
      <div className="flex flex-col gap-[2vw]">
        <div className="w-full md:max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-[5vw]">
          {/* Address Section */}
          <div className="justify-start text-white text-lg lg:text-xl font-normal font-Lato leading-8 md:leading-[2vw]">
            <a href="https://maps.app.goo.gl/xiUZZVMoVkXfCZtb8">
              <p className="max-w-[550px] ">
              Dreamation Resorts, Ghornala, Bir, Baijnath, Kangra
              </p>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col">
            <p
              onClick={() => router.push("/Accomodation")}
              className="hover:text-gray-300 transition-colors justify-start text-neutral-50 text-lg lg:text-xl font-normal font-Lato tracking-wide leading-8 md:leading-[2vw] cursor-pointer"
            >
              Accommodations
            </p>
            <p
              onClick={() => router.push("/Activities")}
              className="hover:text-gray-300 transition-colors justify-start text-neutral-50 text-lg lg:text-xl font-normal font-Lato tracking-wide leading-8 md:leading-[2vw] cursor-pointer"
            >
              Activities
            </p>
            <p
              onClick={() => router.push("/Contact")}
              className="hover:text-gray-300 transition-colors justify-start text-neutral-50 text-lg lg:text-xl font-normal font-Lato tracking-wide leading-8 md:leading-[2vw] cursor-pointer"
            >
              Contact
            </p>
          </div>

          {/* Newsletter Section */}
          <div>
            {/* <h3 className="justify-start text-white text-lg lg:text-xl font-bold font-Lato tracking-wide leading-8 md:leading-[2vw]">
              Newsletter
            </h3> */}
            {/* <form onSubmit={handleNewsletterSubmit}>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email adress"
                  className="bg-transparent border-0 outline-none border-b border-white/30 justify-start text-white text-xl font-light font-Lato leading-loose tracking-tight transition-colors"
                />
                <div className="pb-4 border-b border-white/10">
                  <button
                    type="submit"
                    className="self-start border-2 flex justify-center items-center backdrop-blur-sm text-white px-6 py-1 rounded-full text-lg md:text-xl font-bold font-Abhaya_Libre hover:bg-white/30 transition-colors "
                  >
                    Send
                  </button>
                </div>
              </div>
            </form> */}
            <div className="flex flex-col w-full md:flex-row justify-center md:justify-between mt-2 ">
              <div className=" sm:items-center md:max-w-7xl sm:flex-row flex-col mx-auto md:px-8 w-full justify-center sm:space-x-8 mb-6 md:mb-0 ">
                <a
                  href="mailto:info@dreamationresorts.com"
                  className="flex items-center hover:text-gray-300 py-2 transition-colors justify-start gap-2"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-md md:text-lg">
                    info@dreamationresorts.com
                  </span>
                </a>
                <a
                  href="tel:7837000888"
                  className="flex items-center hover:text-gray-300 py-2 transition-colors gap-2 justify-start"
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-md md:text-lg">+91 7837000888</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}

        {/* Copyright */}
        <div className="w-full border-t border-white/10 flex max-w-7xl mx-auto sm:flex-row flex-col px-8 items-center justify-between mt-1 text-sm text-gray-400 py-3 gap-3">
          <p className="text-center justify-start text-neutral-50 text-sm md:text-xl font-normal font-Lato leading-loose tracking-tight">
            {" "}
            © Copyright 2025. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/dreamationresorts?igsh=aTlyaWo5MWo1Ym4z&utm_source=qr" className="hover:text-gray-300 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
