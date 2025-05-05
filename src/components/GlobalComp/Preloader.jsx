"use client"
import { useState, useEffect } from "react";

const images = [
  "/images/Rectangle4559.png",
  "/images/Rectangle4560.png",
  "/bg.png",
  "/Facility3.png",
  "/bbg2.jpg",
  "/cutlery.png",
  "/Facility1.png",
  "/Facility2.png",
  "/Facility3.jpg",
  "/bbg1.jpg",
];

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [scaleUp, setScaleUp] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setScaleUp(true);
              setTimeout(() => setIsVisible(false), 500);
            }, 1000);
            return 100;
          }
          return prev + 1;
        });
      }, 20);
    }
  }, [loading]);

  const currentImage = images[Math.floor(progress / 10)] || images[9];

  if (!isVisible) return null;

  return (
    <div className="w-full h-[90vh] md:h-screen bg-white flex flex-col items-center justify-center overflow-hidden relative">
      {/* The clip-path container */}
      <div
        className="relative flex items-center justify-center"
        style={{
          transform: scaleUp ? "scale(50)" : loading ? "scale(1)" : "scale(1.5)",
          transition: "transform 3s ease-in-out",
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
            onLoad={() => setLoading(false)}
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
