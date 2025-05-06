"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const bottle = ({ image, title }) => {
  const router = useRouter();

  return (
    <div className="absolute w-full md:w-1/2 mt-[-90vh]">
      <Image
        src={image}
        alt={title}
        width={960}
        height={640}
        className="w-full h-[80vh] object-cover"
      />

      {/* Floating Text Boxcd */}
      <div
        className="absolute md:left-130 md:top-1/2 transform md:-translate-y-1/2
  bg-[#D69D52] text-white p-10 rounded-lg shadow-lg w-[52vw] h-120 
  flex flex-col justify-center"
      >
        <h3 className="text-2xl mb-6">Best Restuants</h3>
        <p className="text-3xl font-bold mb-6">Dinning Service</p>
        <p className="text-lg mb-6">
          Dining services in a resort are designed to enhance the guest
          experience by offering a range of culinary options in diverse
          settings, from casual and relaxed to upscale and elegant. Whether
          guests are seeking a romantic dinner for two, a family-friendly meal,
          or a lively gathering with friends, resorts strive to provide
          memorable dining experiences that cater to every palate.
        </p>
        <button
          className="w-[200px] py-2 border border-white rounded-full text-white 
  hover:bg-white hover:text-black transition-all cursor-pointer mx-auto" onClick={() => router.push("/Contact")}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default bottle;
