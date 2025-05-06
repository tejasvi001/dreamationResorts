"use client"

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Bottombox = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col gap-30 mt-20"> 
      {/* Orange Grid Section */}
      <div className="relative w-full h-[300px] flex items-center justify-center mt-12">
        <Image 
          src="/activities/Rectangle 77.jpg" 
          alt="Background" 
          width={1920} 
          height={1080} 
          className="absolute w-full h-full object-cover" 
        />
        
        {/* <div className="relative bg-[#D69D52] grid grid-cols-3 w-340 h-110 gap-x-19 gap-y-1 text-white text-lg mt-1 p-15 m-5">
          {Array.from({ length: 15 }).map((_, index) => (
            <div key={index} className="flex items-center gap-x-6 gap-y-10 mr-2 ">
              <span className="w-3 h-3 bg-white rounded-full inline-block mr-3 mt-2 ml-4 mb-3 aspect-square"></span>
              <h2 className="mb-3 whitespace-nowrap">Lorem ipsum dolor sit amet</h2>
            </div>
          ))}
        </div> */}
      </div>

      {/* Contact Info Section */}
      <div 
        className="relative bg-cover bg-center py-16 px-8" 
        style={{ backgroundImage: "url('/images/Rectangle 79.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
          {/* Location */}
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-3xl mb-4" />
            <h3 className="text-lg font-semibold">Corporate Location</h3>
            <p>Dremations Tourism & Hospitality Private Limited Hadbast No - 1037,
            – Baijnath District – Kangra (H.P.) 176077</p>
          </div>
          
          {/* Phone */}
          <div className="flex flex-col items-center border-l border-r border-gray-400 px-8">
            <FaPhoneAlt className="text-3xl mb-4" />
            <h3 className="text-lg font-semibold">Call Us at</h3>
            <p>85 Today!</p>
          </div>
          
          {/* Email */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-3xl mb-4" />
            <h3 className="text-lg font-semibold">Email Us</h3>
            <p>info@dreamationresorts.com Today!</p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="bg-[#D69D52] text-white text-center py-16 px-10 md:px-32 mx-2 md:mx-20">
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
