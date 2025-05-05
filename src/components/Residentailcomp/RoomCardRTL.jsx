import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RoomCardRTL = ({ order, title, imageSrc, description, buttonText }) => {
      const router = useRouter();
  
  return (
    <div className="relative flex flex-col sm:flex-row w-full">
      <div className="sm:max-w-1/2 bg-[#d69d52] p-6 w-full text-black flex flex-col justify-center">
        <div className="sm:max-w-lg mx-auto">
          <h2 className="justify-start text-[#484848] text-5xl font-normal font-Abhaya_Libre">
            {title}
          </h2>
          <p className="mt-2 justify-start text-[#484848] text-2xl font-normal font-Lato">
            {description}
          </p>
          <button className="mt-4 px-4 w-full max-w-[340px] cursor-pointer py-2 border border-[#b16c11] text-sm rounded-full text-[#b16c11] transition-all"   onClick={() => router.push("/Contact")}>
            {buttonText}
          </button>
        </div>
      </div>
      <Image
        src={imageSrc}
        alt={title}
        className={`sm:w-1/2 md:w-1/2 order-${order === 1 ? "last" : "first"} object-cover grid`}
      />
    </div>
  );
};

export default RoomCardRTL;
