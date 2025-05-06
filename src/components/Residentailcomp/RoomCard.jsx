"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RoomCard = ({ order, title, imageSrc, description, buttonText }) => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col sm:flex-row w-full h-full md:h-[70vh] gap-4 md:gap-0">
      <div className="w-full md:w-1/2 h-full overflow-hidden">
        <Image
          src={imageSrc}
          width={500} 
          height={500}
          alt={title}
          className={`w-full h-full order-${
            order === 1 ? "last" : "first"
          } object-cover  grid `}
        />
      </div>
      <div className="w-full md:w-1/2 p-6 bg-white text-black flex flex-col justify-center">
        <h2 className="justify-start text-[#484848] text-5xl font-normal font-Abhaya_Libre">
          {title}
        </h2>
        <p className="mt-2 justify-start text-[#484848] text-2xl font-normal font-Lato">
          {description}
        </p>
        <button
          className="mt-4 px-4 w-full max-w-[340px] py-2 border border-[#b16c11] text-sm rounded-full hover:text-white hover:bg-[#b16c11] text-[#b16c11] transition-all cursor-pointer"
          onClick={() => router.push("/Contact")}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
