"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react"

const pages = [
  { name: "Home", path: "/", image: "/food.png" },
  { 
    name: "Accommodations", 
    path: "/Accomodation", 
    image: "/Acc1.png",
    submenu: [
      { name: "Rooms", path: "/accommodations/rooms", image: "/cutlery.png" },
      { name: "Suites", path: "/accommodations/suites", image: "/getQuote.png" },
      { name: "Villas", path: "/accommodations/villas", image: "/logo.png" },
      { name: "Amenities", path: "/accommodations/amenities", image: "/facility1.png" }
    ]
  },
  { name: "Activities", path: "/Activities", image: "/Acc2.png" },
  { name: "Spa", path: "/portfolio", image: "/bg.png" },
  { name: "Dine/Drink", path: "/blog", image: "/car-rental.png" },
]

export default function KeyholeNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(pages[0].image)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const [hoveredSubmenuItem, setHoveredSubmenuItem] = useState(null)

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-black text-white"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 flex items-center justify-center"
          >
            <div className="w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row">
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
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        onMouseEnter={() => {
                          setActiveImage(page.image)
                          setHoveredIndex(index)
                        }}
                        onMouseLeave={() => {
                          setHoveredIndex(null)
                          if (!hoveredSubmenuItem) {
                            setActiveImage(pages[0].image)
                          }
                        }}
                        className="relative group"
                      >
                        <div className="flex items-center  gap-2">
                          <a
                            href={page.path}
                            className={`text-3xl md:text-4xl font-bold text-white hover:text-gray-300 transition-colors duration-300 ${
                              hoveredIndex === index ? "text-gray-300" : ""
                            }`}
                          >
                            {page.name}
                          </a>
                          {page.submenu && (
                            <button 
                              onClick={() => toggleSubmenu(index)}
                              className="text-white focus:outline-none"
                              onMouseEnter={() => setActiveImage(page.image)}
                            >
                              <ChevronDown 
                                size={24} 
                                className={`transition-transform duration-300 ${openSubmenu === index ? 'rotate-180' : ''}`}
                              />
                            </button>
                          )}
                        </div>

                        {page.submenu && (
                          <AnimatePresence>
                            {openSubmenu === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                                onMouseLeave={() => {
                                  setHoveredSubmenuItem(null)
                                  setActiveImage(page.image)
                                }}
                              >
                                <ul className="mt-2 space-y-2 pl-4">
                                  {page.submenu.map((subitem, subIndex) => (
                                    <motion.li 
                                      key={subitem.name}
                                      initial={{ x: -20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ duration: 0.2 }}
                                      onMouseEnter={() => {
                                        setActiveImage(subitem.image)
                                        setHoveredSubmenuItem(subIndex)
                                      }}
                                      onMouseLeave={() => {
                                        setHoveredSubmenuItem(null)
                                        setActiveImage(page.image)
                                      }}
                                    >
                                      <a
                                        href={subitem.path}
                                        className="text-xl text-gray-300 hover:text-white transition-colors duration-200 block py-1"
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

                        {hoveredIndex === index && (
                          <motion.div
                            layoutId="underline"
                            className="absolute -right-2 top-1/2 w-2 h-2 bg-white rounded-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
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
                className="flex-1 flex justify-center items-center p-4 border-2 border-red-700"
              >
                <div className="relative w-64 h-80 md:w-80 md:h-96">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="w-full h-full relative">
                      <img
                        src={activeImage || "/food.png"}
                        alt="Navigation preview"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 keyhole-mask" />
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className=" flex items-center justify-center px-20"
              >
                <div className="space-y-8">
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex items-center space-x-4"
                  >
                    <Phone className="text-white" size={24} />
                    <span className="text-xl text-white">+1 (555) 123-4567</span>
                  </motion.div>

                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex items-center space-x-4"
                  >
                    <Mail className="text-white" size={24} />
                    <span className="text-xl text-white">contact@example.com</span>
                  </motion.div>

                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex items-center space-x-4"
                  >
                    <MapPin className="text-white" size={24} />
                    <span className="text-xl text-white">123 Main Street, City</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}