"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/Facility1.webp",
  "/Facility2.webp",
  "/Acc1.webp",
  "/Acc2.webp",
  "/bbg2.webp",
  "/bbg1.webp",
];

const durations = [500, 500, 500, 500, 800, 1200];

const Preloader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (currentIndex >= images.length) return;

    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
      setCurrentIndex((prev) => prev + 1);
    }, durations[currentIndex]);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const scaleAnimation =
    currentIndex === images.length - 1
      ? { scaleX: [1, 1.5, 15], scaleY: [1, 1.5, 10] }
      : {};

  return (
    <div className="w-full h-[90vh] md:h-screen bg-white flex flex-col items-center justify-center overflow-hidden relative">
      <motion.div
        className="relative flex items-center justify-center"
        animate={scaleAnimation}
        transition={{
          duration: currentIndex < images.length - 1 ? 0.5 : 1.5,
          ease: "easeInOut",
        }}
      >
        <svg
          width="33vw"
          height="60vh"
          viewBox="0 0 300 500"
          preserveAspectRatio="xMidYMid meet"
          className="z-10 absolute"
        >
          <defs>
            <clipPath id="keyholeClip" clipPathUnits="userSpaceOnUse">
              <path d="M 150 0 C 210 0, 270 60, 270 120 C 270 180, 210 240, 150 240 C 90 240, 30 180, 30 120 C 30 60, 90 0, 150 0 Z M 90 220 L 210 220 L 240 450 L 60 450 Z" />
            </clipPath>
          </defs>

          <AnimatePresence mode="wait">
            <motion.image
              key={images[currentIndex]}
              href={images[currentIndex]}
              width="300"
              height="500"
              clipPath="url(#keyholeClip)"
              preserveAspectRatio="xMidYMid slice"
              className="bg-transparent"
              initial={{ opacity: 0.5, }}
              animate={{ opacity: 0.9, }}
              exit={{ opacity: 0.5, }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </svg>
      </motion.div>
    </div>
  );
};

export default Preloader;
