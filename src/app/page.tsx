"use client";
import { useEffect, useState } from "react";
import HomePage from "./Home/page.jsx";
import Preloader from "../components/GlobalComp/Preloader.jsx";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("visited")) {
      setLoading(false);
    } else {
      sessionStorage.setItem("visited", "true");
      const timer = setTimeout(() => setLoading(false), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative">
      {loading ? (
        <div className="absolute top-0 left-0 w-full h-full z-50 bg-white">
          <Preloader />
        </div>
      ) : (
        <HomePage />
      )}
    </div>
  );
}
