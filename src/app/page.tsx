"use client";
import { useEffect, useState } from "react";
import HomePage from "./Home/page.jsx";
import Preloader from "../components/GlobalComp/Preloader.jsx";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <HomePage />
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full z-50">
          <Preloader />
        </div>
      )}
    </div>
  );
}
