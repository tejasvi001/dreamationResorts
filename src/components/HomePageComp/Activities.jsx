"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "Amazing pool in the Mountains",
    description:
      "Pool is more than just a place to swim: it's a focal point of relaxation, socializing, and enjoyment for guests of all ages.",
    image: "/logo.png", // You'll replace this with your actual image
  },
  {
    title: "Luxurious Beach Villas",
    description:
      "Experience the ultimate beachfront living with our exclusive villas offering panoramic ocean views and private access to pristine beaches.",
    image: "/activities/img1.png", // You'll replace this with your actual image
  },
  {
    title: "Serene Forest Retreats",
    description:
      "Nestled among ancient trees, our forest cabins provide a peaceful escape from the hustle and bustle of everyday life.",
    image: "/activities/img1.png", // You'll replace this with your actual image
  },
]

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="relative  w-4/5 mx-auto">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/activities/background.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
   
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-between py-16 px-8 text-white ">
        {/* Heading */}
        <h1 className="text-5xl font-normal mt-8 font-Abhaya-Libre">Activities & Properties</h1>

        {/* Main Content */}
        <div className="flex flex-col items-center max-w-2xl text-center  mt-8">
          <img src={slides[currentIndex].image} alt="" className="w-72 h-72 "  />
          <h2 className="text-4xl font-light absolute font-AbhayaLibre top-[59%] ">{slides[currentIndex].title}</h2>
          <p className="text-lg mb-8 font-normal font-Lato">{slides[currentIndex].description}</p>
          <button className="border-2 border-white hover:bg-white hover:text-blue-900 transition-colors px-8 py-3 rounded-full">
            Find Properties
          </button>
        </div>

        
        
      </div>

      {/* Left Arrow */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 cursor-pointer" onClick={prevSlide}>
        <div className="w-14 h-14  flex items-center justify-center  text-white hover:scale-110 hover:text-blue-900 transition-colors">
       
         <img src="/activities/left.png" alt=""  />
        </div>
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 cursor-pointer" onClick={nextSlide}>
        <div className="w-14 h-14  flex items-center justify-center  text-white hover:scale-110 hover:text-blue-900 transition-colors">
        <img src="/activities/right.png" alt=""  />
        </div>
      </div>
    </div>
  )
}

