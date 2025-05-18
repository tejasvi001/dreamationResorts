"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Bottle = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col lg:flex-row mt-0">
      <div className="relative w-full lg:w-1/2 h-[529px] -mt-32 z-20">
        <Image
          src="/images/Accomodationimg/res_6_11zon.webp"
          alt="Scenic dining vacation experience"
          fill
          className="object-cover rounded-t-3xl"
        />
      </div>

      {/* Right Text Content */}
      <div className="w-full lg:w-1/2 bg-[#D69D52] px-6 py-8 sm:px-8 sm:py-12 md:px-10 md:py-16 text-white flex flex-col justify-start mt-8 lg:mt-0 min-h-[300px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6">
          Dine & Drink Experience
        </h2>
        <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-line">
          Welcome to an unforgettable dining journey in the heart of nature.{"\n"}
          From locally sourced ingredients to handcrafted cocktails,{"\n"}
          every bite and sip celebrates taste, tradition, and togetherness.{"\n"}
          Whether you're enjoying breakfast with a view or an evening under the stars,{"\n"}
          our Hamlet Eatery delivers exceptional hospitality in every meal.
        </p>

        <button
          className="w-full md:w-[200px] py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all cursor-pointer mx-auto mt-6"
          onClick={() => router.push("/Contact")}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Bottle;
