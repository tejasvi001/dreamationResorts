"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Navigation data
const pages = [
  { name: "Home", path: "/", image: "/Facility1.webp" },
  {
    name: "Accommodations",
    path: "/Accomodation",
    image: "/Facility2.webp",
    submenu: [
      {
        name: "Acorn Luxury Cottages",
        path: "/Acorn",
        image: "/Facility4.webp",
      },
      {
        name: "Fern Luxury Swisstents",
        path: "/Fern",
        image: "/Facility3.webp",
      },
      {
        name: "Earthen Echo Mud House",
        path: "/Eathern",
        image: "/earth.webp",
      },
    ],
  },
  {
    name: "Activities",
    path: "/Activities",
    image: "/activities/Rectangle 61.webp",
  },
  {
    name: "Dine/Drink",
    path: "/Dinning",
    image: "/activities/Rectangle 67.jpg",
    submenu: [
      {
        name: "Bamboo And Brew Café ",
        path: "/BrewCafe",
        image: "/images/brew/download (2).jpeg",
      },
      {
        name: "Akhada Bar",
        path: "/AkhadaBar",
        image: "/activities/Rectangle 59.jpg",
      },
      {
        name: "Hamlet Eatery",
        path: "/HamletEatery",
        image: "/activities/Rectangle 61.webp",
      },
    ],
  },
];

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(pages[0].image);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [hoveredSubmenuItem, setHoveredSubmenuItem] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredd, setIsHoveredd] = useState(false);

  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const router = useRouter();

  const handleGetInTouch = () => {
    router.push("/Contact");
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Close mobile menu on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Toggle mobile submenu
  const toggleMobileSubmenu = (index) => {
    setMobileSubmenu(mobileSubmenu === index ? null : index);
  };

  return (
    <>
      {/* Mobile Navbar (sm and md screens) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white text-black shadow-sm">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* CTA Button */}
          <button
            onClick={handleGetInTouch}
            className="text-sm px-4 py-2 rounded-full border border-black bg-white font-medium"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white overflow-hidden"
            >
              <nav className="px-4 py-4">
                <ul className="space-y-4">
                  {pages.map((page, index) => (
                    <li
                      key={page.name}
                      className="border-b border-gray-500 pb-2"
                    >
                      {page.submenu ? (
                        <div>
                          <div
                            className="flex items-center justify-between"
                            onClick={() => toggleMobileSubmenu(index)}
                          >
                            <span className="text-lg font-medium">
                              {page.name}
                            </span>
                            <ChevronDown
                              size={20}
                              className={`transition-transform  duration-300 ${mobileSubmenu === index ? "rotate-180" : ""
                                }`}
                            />
                          </div>
                          <AnimatePresence>
                            {mobileSubmenu === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden "
                              >
                                <ul className="pl-4 mt-2 space-y-2 ">
                                  {page.submenu.map((subitem) => (
                                    <li key={subitem.name}>
                                      <Link
                                        href={subitem.path}
                                        className="text-gray-600  hover:text-gray-900 block py-1"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {subitem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={page.path}
                          className="text-lg  font-medium block"
                          onClick={() => setIsOpen(false)}
                        >
                          {page.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Contact Info */}
                <div className="mt-8 space-y-4  border-gray-100 pt-2">
                  <div>
                    <h1 className="text-lg">Contact INFO.</h1>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-gray-400" size={18} />
                    <a href="tel:7837000888">
                      <span className="text-sm">+91 7837000888 </span>
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-gray-400" size={18} />
                    <a href="mailto:info@dreamationresorts.com">
                      <span className="text-sm">info@dreamationresorts.com</span>
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-gray-400" size={18} />
                    <a href="https://maps.app.goo.gl/xiUZZVMoVkXfCZtb8">
                      <span className="text-sm">Dreamation Resorts, Ghornala, Bir, Baijnath, Kangra</span>
                    </a>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Desktop Keyhole Navbar (lg screens) */}
      <div className="hidden lg:block">
        <div className="px-10 cursor-pointer">
          {/* <button
            onClick={() => setIsOpen(!isOpen)}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 p-2 border-4 bg-white border-gray-800 rounded-full cursor-pointer ${
              isHoveredd ?  "text-white" : "text-black"
            }` }
            onMouseEnter={() => setIsHoveredd(true)}
              onMouseLeave={() => setIsHoveredd(false)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
            <motion.span
                initial={{ height: 0 }}
                animate={{ height: isHoveredd ? "100%" : "0%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-full rounded-full bg-black z-0"
              />
          </button> */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 p-2 border-2  cursor-pointer overflow-hidden  rounded-full  border-black bg-white font-medium group"
            onMouseEnter={() => setIsHoveredd(true)}
            onMouseLeave={() => setIsHoveredd(false)}
          >
            <span
              className={`relative z-10 transition-colors duration-300 ${isHoveredd ? "text-white" : "text-black"
                }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}              </span>
            <motion.span
              initial={{ height: 0 }}
              animate={{ height: isHoveredd ? "100%" : "0%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute bottom-0 left-0  w-full bg-black z-0"
            />
          </button>

          <div className="">
            <img
              src="/logo.png"
              alt="Logo"
              className="fixed top-4 left-6   z-50 h-15 w-36"
              onClick={() => (window.location.href = "/")}
            />
          </div>

          <div className="">
            <button
              onClick={handleGetInTouch}
              className="fixed top-4 right-6 z-50 p-2 border-2  cursor-pointer overflow-hidden px-6 py-3 rounded-full  border-black bg-white font-medium group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span
                className={`relative z-10 transition-colors duration-300 ${isHovered ? "text-white" : "text-black"
                  }`}
              >
                GET IN TOUCH
              </span>
              <motion.span
                initial={{ height: 0 }}
                animate={{ height: isHovered ? "100%" : "0%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-full bg-black z-0"
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-white  flex items-center justify-center"
            >
              <div className="w-full h-full max-w-7xl  mx-auto flex flex-col md:flex-row">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-center justify-center"
                >
                  <nav>
                    <ul className="space-y-6 text-right px-20">
                      {pages.map((page, index) => (
                        <motion.li
                          key={page.name}
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            delay: 0.3 + index * 0.1,
                            duration: 0.5,
                          }}
                          onMouseEnter={() => {
                            setActiveImage(page.image);
                            setHoveredIndex(index);
                            if (page.submenu) setOpenSubmenu(index);
                          }}
                          onMouseLeave={() => {
                            setHoveredIndex(null);
                            setHoveredSubmenuItem(null);
                            setOpenSubmenu(null);
                            setActiveImage(pages[0].image);
                          }}
                          className="relative group"
                        >
                          <div className="flex items-center gap-2">
                            <a
                              href={page.path}
                              className={`text-3xl md:text-4xl font-bold text-black hover:text-gray-500 transition-colors duration-300 ${hoveredIndex === index ? "text-gray-500" : "text-black"
                                }`}
                            >
                              {page.name}
                            </a>
                            {page.submenu && (
                              <div className="text-black cursor-pointer">
                                <ChevronDown
                                  size={24}
                                  className={`transition-transform duration-300 ${openSubmenu === index ? "rotate-180" : ""
                                    }`}
                                />
                              </div>
                            )}
                          </div>

                          {page.submenu && (
                            <AnimatePresence>
                              {openSubmenu === index && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <ul className="mt-2 space-y-2 pl-4">
                                    {page.submenu.map((subitem, subIndex) => (
                                      <motion.li
                                        key={subitem.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                        onMouseEnter={() => {
                                          setActiveImage(subitem.image);
                                          setHoveredSubmenuItem(subIndex);
                                        }}
                                        onMouseLeave={() => {
                                          setHoveredSubmenuItem(null);
                                          setActiveImage(page.image);
                                        }}
                                      >
                                        <a
                                          href={subitem.path}
                                          className="text-xl text-black hover:text-gray-700 transition-colors duration-200 block py-1"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          {subitem.name}
                                        </a>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          )}
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                </motion.div>

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex-1 flex justify-center items-center p-4"
                >
                  {/* <div className="relative w-64 h-80 md:w-80 md:h-96">
                    <div className="absolute w-full h-full z-50 overflow-hidden rounded-[2vw] hover:rounded-[5vw] duration-1000">
                      <img
                        src={activeImage || "/Facility1.png"}
                        alt="Navigation preview"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute inset-0 keyhole-mask" />
                  </div> */}
                  <div className="hidden md:flex scale-90 hover:scale-105 duration-1000 cursor-pointer">
                    <svg
                      width="33vw"
                      height="60vh"
                      viewBox="0 0 300 500"
                      preserveAspectRatio="xMidYMid meet"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    >
                      <defs>
                        <clipPath
                          id="keyholeClip"
                          clipPathUnits="userSpaceOnUse"
                        >
                          <path d="M 150 0 C 210 0, 270 60, 270 120 C 270 180, 210 240, 150 240 C 90 240, 30 180, 30 120 C 30 60, 90 0, 150 0 Z M 90 220 L 210 220 L 240 450 L 60 450 Z" />
                        </clipPath>
                      </defs>

                      <image
                        href={activeImage || "/Facility1.webp"}
                        width="300"
                        height="500"
                        clipPath="url(#keyholeClip)"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-center justify-center px-20"
                >
                  <div className="space-y-8">
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="flex items-center space-x-4"
                    >
                      <Phone className="" size={24} />
                      <a href="tel:7837000888 ">
                        <span className="text-xl ">
                          +91 7837000888
                        </span>
                      </a>
                    </motion.div>

                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="flex items-center space-x-4"
                    >
                      <Mail className="" size={24} />
                      <a href="mailto:info@dreamationresorts.com">
                        <span className="text-xl ">
                          info@dreamationresorts.com
                        </span>
                      </a>
                    </motion.div>

                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="flex items-center space-x-4"
                    >
                      <MapPin className="" size={24} />
                      <a href="https://maps.app.goo.gl/xiUZZVMoVkXfCZtb8">
                        <span className="text-xl ">
                          Dreamation Resorts, Ghornala,<br /> Bir, Baijnath, Kangra
                        </span>
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Spacer for fixed mobile header */}
      <div className="h-20 lg:h-0"></div>
    </>
  );
}
