"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/Facility1.webp",
  "/Facility2.webp",
  "/Acc1.webp",
  "/Acc2.webp",
  "/bbg2.webp",
  "/bbg1.webp",
];

const durations = [300, 300, 300, 300, 500, 800];

const Preloader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Preload all images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (currentIndex >= images.length) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, durations[currentIndex]);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const isLastImage = currentIndex === images.length - 1;

  const scaleAnimation = isLastImage
    ? { scaleX: [1, 1.5, 15], scaleY: [1, 1.5, 10] }
    : { scale: 1 };

  return (
    <div className="w-full h-[90vh] md:h-screen bg-white flex items-center justify-center overflow-hidden relative">
      <motion.div
        className="relative flex items-center justify-center"
        animate={scaleAnimation}
        transition={{
          duration: isLastImage ? 1.2 : 0.3,
          ease: "easeInOut",
        }}
      >
        <svg
          width="200"
          height="300"
          viewBox="0 0 300 500"
          preserveAspectRatio="xMidYMid meet"
          className="z-10 absolute"
        >
          <defs>
            <clipPath id="keyholeClip" clipPathUnits="userSpaceOnUse">
              <path d="M150 0 C210 0, 270 60, 270 120 C270 180, 210 240, 150 240 C90 240, 30 180, 30 120 C30 60, 90 0, 150 0 Z M90 220 L210 220 L240 450 L60 450 Z" />
            </clipPath>
          </defs>

          <motion.image
            href={images[currentIndex]}
            width="300"
            height="500"
            clipPath="url(#keyholeClip)"
            preserveAspectRatio="xMidYMid slice"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.5 }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Preloader;
