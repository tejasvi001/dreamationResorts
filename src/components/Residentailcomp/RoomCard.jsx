"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RoomCard = ({ order, title, imageSrc, description, buttonText }) => {
    const router = useRouter();
  
  return (
    <div className="relative flex flex-col sm:flex-row w-full">
      <Image
        src={imageSrc} 
        alt={title}
        className={`sm:w-1/2 md:w-1/2 order-${order === 1 ? "last" : "first"} object-cover  grid `}
      />
      <div className="sm:max-w-1/3 p-6 bg-white text-black flex flex-col justify-center">
        <h2 className="justify-start text-[#484848] text-5xl font-normal font-Abhaya_Libre">
          {title}
        </h2>
        <p className="mt-2 justify-start text-[#484848] text-2xl font-normal font-Lato">
          {description}
        </p>
        <button className="mt-4 px-4 w-full max-w-[340px] py-2 border border-[#b16c11] text-sm rounded-full text-[#b16c11] transition-all cursor-pointer"           onClick={() => router.push("/Contact")}
>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
