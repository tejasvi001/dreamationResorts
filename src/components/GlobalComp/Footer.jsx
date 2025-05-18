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
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-black/95 text-white py-8 md:py-[3vw] w-full">
      <div className="flex flex-col gap-[2vw] max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-[5vw]">
          {/* Address Section */}
          <div className="text-lg lg:text-xl font-normal font-Lato leading-8 md:leading-[2vw]">
            <a
              href="https://maps.app.goo.gl/xiUZZVMoVkXfCZtb8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors block max-w-[550px]"
            >
              Dreamation Resorts, Ghornala, Bir, Baijnath, Kangra, Himachal Pradesh
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2">
            {[
              { label: "Accommodations", href: "/Accomodation" },
              { label: "Activities", href: "/Activities" },
              { label: "Contact", href: "/Contact" },
            ].map((item) => (
              <p
                key={item.href}
                onClick={() => router.push(item.href)}
                className="cursor-pointer hover:text-gray-300 transition-colors text-lg lg:text-xl font-normal font-Lato tracking-wide leading-8 md:leading-[2vw]"
              >
                {item.label}
              </p>
            ))}
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-2 md:gap-4">
            <a
              href="mailto:info@dreamationresorts.com"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="text-md md:text-lg">info@dreamationresorts.com</span>
            </a>
            <a
              href="tel:7837000888"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="text-md md:text-lg">+91 7837000888</span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400 pt-4">
          <p className="text-sm md:text-xl font-Lato leading-loose tracking-tight text-center sm:text-left">
            © Copyright 2025. All Rights Reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/dreamationresorts?igsh=aTlyaWo5MWo1Ym4z&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
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
