"use client"

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Bottombox = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col gap-[5vw]"> 
      {/* Contact Info Section */}
      <div 
        className="relative bg-cover bg-center py-16 px-8" 
        style={{ backgroundImage: "url('/activities/Rectangle 63.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
          {/* Location */}
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-3xl mb-4" />
            <h3 className="text-lg font-semibold">Corporate Location</h3>
            <p>Dremations Tourism & Hospitality Private Limited Hadbast No - 1037,
            – Baijnath District – Himachal Pradesh, 176077</p>
          </div>
          
          {/* Phone */}
          <div className="flex flex-col items-center border-l border-r border-gray-400 px-8">
            <FaPhoneAlt className="text-3xl mb-4" />
            <h3 className="text-lg font-semibold">Call Us at</h3>
            <p>+91 7837000888</p>
          </div>
          
          {/* Email */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-3xl mb-4" />
            <h3 className="text-lg font-semibold">Email Us at</h3>
            <p>info@dreamationresorts.com</p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="bg-[#D69D52] text-white text-center py-16 px-10 md:px-32 mx-2 md:mx-20 rounded-t-2xl md:rounded-t-[2vw] overflow-hidden">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-3xl font-bold">Book Your Next Vacation!</h2>
          <button className="px-6 py-2 cursor-pointer border border-white rounded-full text-lg hover:bg-white hover:text-orange-500 transition"  onClick={() => router.push("/Contact")}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bottombox;
