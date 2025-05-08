"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GalleryItemRight = ({ image, title, description }) => {
  const router = useRouter();

  return (
    <div className="relative w-full sm:w-1/2 mt-[-5vh] sm:mt-[-11vh] sm:ml-auto">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={960}
        height={640}
        className="w-full h-[60vh] sm:h-[80vh]  object-cover"
      />

      {/* Text Box */}
      <div
        className="sm:absolute sm:right-[85%] sm:top-1/2 sm:transform sm:-translate-y-1/2
        bg-black text-white p-6 sm:p-10 rounded-lg shadow-lg 
        w-full sm:w-[400px]  xl:w-[500px] 
        flex flex-col justify-center items-center text-center sm:items-center sm:text-center 
        mt-6 sm:mt-6"
      >
        <h3 className="text-xl  sm:text-3xl font-semibold mb-4 sm:mb-6">{title}</h3>
        <p className="text-sm  sm:text-lg mb-4">{description}</p>
       
      </div>
    </div>
  );
};

export default GalleryItemRight;
