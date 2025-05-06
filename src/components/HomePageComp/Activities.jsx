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
    title: "Fern Luxury Swisstents",
    description:
      "The Fern Seaside Luxurious Tent Resort offers a unique blend of upscale comfort and eco-conscious design, providing guests with an exceptional glamping experience along the scenic coasts.",
    image: "/activities/img1.webp", // You'll replace this with your actual image
    redirectTo: "/Fern",
  },
  {
    title: "Earthen echo mud house",
    description:
      "An Earthon Echo Mud House is a sustainable, eco-friendly housing concept typically designed using mud as a primary building material. These types of homes are often seen as a solution to climate-conscious living, especially in regions with hot climates.",
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
    <div className="relative   w-4/5 mx-auto h-full md:h-[90vh]">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-4xl"
        style={{
          backgroundImage: `url(/activities/background.webp)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-between py-4 md:py-8 px-8 text-white gap-4 md:gap-0">
        {/* Heading */}
        <h1 className="text-2xl md:text-5xl font-normal md:mt-8 font-Abhaya-Libre text-center">
          Activities & Properties
        </h1>

        {/* Main Content */}
        <div className="flex flex-col items-center max-w-2xl text-center  md:mt-8 h-full overflow-hidden gap-4">
          <img src={slides[currentIndex].image} alt="" className="w-72 h-72 rounded-2xl" />
          <h2 className="text-2xl md:text-4xl font-light absolute font-AbhayaLibre top-[40%] md:top-[50%] ">
            {slides[currentIndex].title}
          </h2>
          <p className="text-md md:text-xl mb-2 font-semibold font-Lato">
            {slides[currentIndex].description}
          </p>
          <button
            className="border-2 border-white hover:bg-white hover:text-black transition-colors px-8 py-3 rounded-full cursor-pointer"
            onClick={() => router.push(slides[currentIndex].redirectTo)}
          >
            Find Properties
          </button>
        </div>
      </div>

      {/* Left Arrow */}
      <div
        className="absolute top-1/2 -left-4 md:left-8 -translate-y-1/2 cursor-pointer"
        onClick={prevSlide}
      >
        <div className="w-14 h-14  flex items-center justify-center  text-white hover:scale-110 hover:text-black transition-colors">
          <img src="/activities/left.png" alt="" />
        </div>
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 -right-4 md:right-8 -translate-y-1/2 cursor-pointer"
        onClick={nextSlide}
      >
        <div className="w-14 h-14  flex items-center justify-center  text-white hover:scale-110 hover:text-black transition-colors">
          <img src="/activities/right.png" alt="" />
        </div>
      </div>
    </div>
  );
}
