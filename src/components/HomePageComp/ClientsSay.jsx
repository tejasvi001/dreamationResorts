"use client";
import { useState, useCallback, useMemo } from "react";
import Image from "next/image";

const defaultTestimonials = [
  {
    id: 1,
    name: "Anuj Kumar",
    quote:
      "Staying at Dreamation was an absolute delight! From the warm welcome at check-in to the impeccable service throughout my stay, every moment felt like a luxurious escape.",
    image: "/user1.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    quote:
      "The attention to detail was remarkable. The staff anticipated our needs before we even had to ask. I've never experienced such personalized service anywhere else.",
    image: "/user2.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    quote:
      "From the gourmet breakfast to the sunset views from our balcony, everything exceeded our expectations. We're already planning our return visit!",
    image: "/user3.jpg",
  },
];

const ClientsSay = ({ clientsSayData }) => {
  const data = clientsSayData || defaultTestimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  }, [data.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  }, [data.length]);

  // Memoize current testimonial to avoid re-render on unrelated changes
  const currentTestimonial = useMemo(() => data[currentIndex], [data, currentIndex]);

  return (
    <section className="relative w-full mx-auto px-4 py-12 text-center bg-amber-50 flex flex-col gap-4" aria-label="Client testimonials">
      <div className="flex justify-center items-center">
        <div className="h-20 md:h-28 md:w-28 w-20 overflow-hidden relative">
          <Image
            src="/getQuote.png"
            alt="Quote symbol"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      <h2 className="text-4xl font-serif text-amber-700 mb-6 mt-4">
        What Our Clients Say?
      </h2>

      <div className="flex justify-between items-center w-[90%] mx-auto h-60 md:h-[10vw]">
        <button
          onClick={goToPrevious}
          className="text-amber-700 hover:text-amber-500 transition transform scale-110 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <Image
            src="/leftButton.svg"
            alt="Previous"
            width={100}
            height={100}
            priority
            className="scale-150 sm:scale-60 md:scale-40"
          />
        </button>

        <blockquote className="max-w-lg px-4">
          <p className="text-lg text-gray-800 italic">"{currentTestimonial.quote}"</p>
          <footer className="mt-4 text-amber-700 font-medium text-lg">
            — {currentTestimonial.name}
          </footer>
        </blockquote>

        <button
          onClick={goToNext}
          className="text-amber-700 hover:text-amber-500 transition transform scale-110 cursor-pointer"
          aria-label="Next testimonial"
        >
          <Image
            src="/rightButton.svg"
            alt="Next"
            width={100}
            height={100}
            priority
            className="scale-150 sm:scale-60 md:scale-40"
          />
        </button>
      </div>
    </section>
  );
};

export default ClientsSay;
