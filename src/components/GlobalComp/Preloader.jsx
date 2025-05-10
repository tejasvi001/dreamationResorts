"use client";
import { useState, useEffect } from "react";

// Use only 5 images in the array
const images = [
  "/images/Rectangle4559.webp",
  "/images/Rectangle4560.webp",
  "/bg.webp",
  "/bbg2.webp",
  "/bbg1.webp",
];

const Preloader = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scaleUp, setScaleUp] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Preload images first
  useEffect(() => {
    const preloadAllImages = async () => {
      await Promise.all(
        images.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );
      setLoading(true); // All images loaded
    };

    preloadAllImages();
  }, []);

  // Progress bar logic
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setScaleUp(true);
              setTimeout(() => setIsVisible(false), 500);
            }, 500);
            return 100;
          }
          return prev + 1;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [loading]);

  // Calculate the current image index based on progress.
  // For 5 images, each image is shown for 20% of the progress (100/5).
  const imageIndex = Math.floor(progress / (100 / images.length));
  const currentImage = images[imageIndex] || images[images.length - 1];

  if (!isVisible) return null;

  return (
    <div className="w-full h-[90vh] md:h-screen bg-white flex flex-col items-center justify-center overflow-hidden relative">
      {/* Keyhole clip-path container */}
      <div
        className="relative flex items-center justify-center"
        style={{
          transform: scaleUp ? "scale(50)" : loading ? "scale(1)" : "scale(1.5)",
          transition: "transform 2s ease-in-out",
        }}
      >
        <svg
          width="33vw"
          height="60vh"
          viewBox="0 0 300 500"
          preserveAspectRatio="xMidYMid meet"
          className="absolute z-10"
        >
          <defs>
            <clipPath id="keyholeClip" clipPathUnits="userSpaceOnUse">
              <path d="M 150 0 C 210 0, 270 60, 270 120 C 270 180, 210 240, 150 240 C 90 240, 30 180, 30 120 C 30 60, 90 0, 150 0 Z M 90 220 L 210 220 L 240 450 L 60 450 Z" />
            </clipPath>
          </defs>
          <image
            href={currentImage}
            width="300"
            height="500"
            clipPath="url(#keyholeClip)"
            preserveAspectRatio="xMidYMid slice"
            className="bg-transparent"
          />
        </svg>
      </div>

      {/* Loading Progress Bar */}
      {!scaleUp && (
        <div
          className="absolute bottom-[10%] md:bottom-[5vw] w-full flex flex-col gap-[1vw]"
          style={{ maxWidth: "80vw" }}
        >
          <div className="text-red-500 text-4xl flex justify-between">
            <p>Loading...</p>
            <p>{progress}%</p>
          </div>
          <div
            className="bg-gray-300 h-[0.3vw] w-full rounded"
            style={{
              width: `${progress}%`,
              background: progress === 100 ? "#4caf50" : "#2196F3",
              transition: "width 0.1s ease-in-out",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Preloader;



