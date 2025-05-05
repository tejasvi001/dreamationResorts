"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RoomCardRTL = ({ order, title, imageSrc, description, buttonText }) => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col sm:flex-row w-full h-full md:h-[70vh] gap-4 md:gap-0">
      <div className="w-full md:w-1/2 bg-[#d69d52] p-6 text-white flex flex-col justify-center">
        <div className="w-full mx-auto">
          <h2 className="justify-start text-5xl font-normal font-Abhaya_Libre">
            {title}
          </h2>
          <p className="mt-2 justify-start text-2xl font-normal font-Lato">
            {description}
          </p>
          <button
            className="mt-4 px-4 w-full max-w-[340px] cursor-pointer py-2 border border-white hover:bg-white hover:text-black text-sm rounded-full transition-all"
            onClick={() => router.push("/Contact")}
          >
            {buttonText}
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          className={`w-full h-full order-${
            order === 1 ? "last" : "first"
          } object-cover grid`}
        />
      </div>
    </div>
  );
};

export default RoomCardRTL;
