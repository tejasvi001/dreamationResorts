"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const slides = [
  {
    title: "Acorn Luxury cottage",
    description:
      "Stylish Interiors: Tastefully furnished with a blend of modern amenities and classic or country-style décor — think wooden beams, stone fireplaces, and plush furniture.",
    image: "/bg.webp", // You'll replace this with your actual image
    redirectTo: "/Acorn",
  },
  {
    title: "Fern Luxury Swiss Tents",
    description:
      "The Fern Luxurious Tent Resort offers a unique blend of upscale comfort and eco-conscious design, providing guests with an exceptional glamping experience amidst scenic mountain landscapes.",
    image: "/Activities/img1.webp", // You'll replace this with your actual image
    redirectTo: "/Fern",
  },
  {
    title: "Earthen echo mud house",
    description:
      "An Earthon Echo Mud House is a sustainable, eco-friendly housing concept typically designed using mud as a primary building material. ",
    image: "/earth.webp", // You'll replace this with your actual image
    redirectTo: "/Eathern",
  },
];

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-4/5 mx-auto h-full md:h-[95vh]">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-4xl overflow-hidden"
        style={{
          backgroundImage: `url(/Activities/background.webp)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full opacity-30 bg-gray-900"></div>
      </div>

      {/* Content Container */}
      <div className="relative  flex flex-col items-center justify-between py-4 md:py-8  text-white gap-4 md:gap-16">
        {/* Heading */}
        <h1 className="text-2xl md:text-5xl font-normal md:mt-8 font-Abhaya-Libre text-center">
          Activities & Properties
        </h1>

        {/* Main Content */}
        <div className="flex  flex-col items-center max-w-2xl text-center  overflow-hidden gap-2">
          <div className="w-full h-full flex justify-center relative">
            <div className="absolute  w-52 h-52 md:w-72 md:h-72 rounded-2xl opacity-30 bg-black"></div>
          <img src={slides[currentIndex].image} alt="" className="w-52 h-52 md:w-72 md:h-72 rounded-2xl" />
          </div>
          <button className="text-[4vw] md:text-[3vw] font-bold absolute  cursor-pointer font-AbhayaLibre top-[40%] md:top-[50%] "             onClick={() => router.push(slides[currentIndex].redirectTo)}
>
            {slides[currentIndex].title}
          </button>
          <p className="text-[2vw] md:text-[1vw]  font-semibold font-Lato">
            {slides[currentIndex].description}
          </p>
          <button
            className="border-2 border-white hover:bg-white hover:text-black transition-colors px-8 py-3 rounded-full cursor-pointer"
                  onClick={() => router.push('/Activities')}

          >
            More Activities to do 
          </button>
        </div>
      </div>

      {/* Left Arrow */}
      <div
        className="absolute top-1/2 -left-0 md:left-10 -translate-y-1/2  cursor-pointer"
        onClick={prevSlide}
      >
        <div className="w-10 md:w-14 h-10 md:h-14 flex items-center justify-center transition-transform hover:scale-110">
  <img src="/Activities/left.png" alt="left arrow" className="w-6 h-6 md:w-8 md:h-8" />
</div>

      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 -right-0 md:right-10 -translate-y-1/2 cursor-pointer"
        onClick={nextSlide}
      >
        <div className="w-10 md:w-14 h-10 md:h-14 flex items-center justify-center  text-white hover:scale-110 hover:text-black transition-colors">
          <img src="/Activities/right.png" alt="" className="w-6 h-6 md:w-8 md:h-8" />
        </div>
      </div>
    </div>
  );
}
