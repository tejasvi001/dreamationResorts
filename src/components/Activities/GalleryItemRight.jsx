"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GalleryItemRight = ({ image, title, description }) => {
  const router = useRouter();

  return (
    <div className="relative w-full md:w-1/2 mt-[-5vh] md:mt-[-11vh] lg:ml-auto">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={960}
        height={640}
        className="w-full h-[60vh] md:h-[80vh]  object-cover"
      />

      {/* Text Box */}
      <div
        className="lg:absolute lg:right-[85%] lg:top-1/2 lg:transform lg:-translate-y-1/2
        bg-black text-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg 
        w-full md:w-[400px] lg:w-[450px] xl:w-[500px] 
        flex flex-col justify-center items-center text-center md:items-center md:text-center 
        mt-6 md:mt-6"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6">{title}</h3>
        <p className="text-sm sm:text-base md:text-sm mb-4">{description}</p>
        <button
          className="w-full sm:w-[200px] py-2 border border-white rounded-full text-white 
          hover:bg-white hover:text-black transition-all"
          onClick={() => router.push("/Contact")}
        >
          Let's Explore
        </button>
      </div>
    </div>
  );
};

export default GalleryItemRight;
