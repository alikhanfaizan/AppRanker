import React, { useState, useEffect } from "react";
import { Star, ChevronLeft } from "lucide-react";
import { Gallery } from "./Galley";
import MoreInfo from "./MoreInfo";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/img3.jpeg";

function Product() {
  const [activePanel, setActivePanel] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closePanel = () => setActivePanel(null);

  const slideLeft = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  const slideRight = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <div className="z-10 flex items-center justify-between min-h-screen px-4 py-8">
      {/* Main Card */}
      <motion.div
        {...(!isSmallScreen ? slideLeft : {})}
        className="bg-[#0d0d0d] text-white rounded-3xl max-w-xl w-full mx-auto p-8 shadow-xl border border-gray-800 flex flex-col space-y-4 font-[Poppins] z-10"
      >
        {/* Back Button */}
        <div>
          <button>
            <ChevronLeft size={24} className="text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Placeholder Image */}
        <div className="bg-[#1a1a1a] rounded-xl w-full h-40 overflow-hidden -mt-5">
          <img src={img1} alt="placeholder" className="w-full h-full object-cover" />
        </div>

        {/* Title + Category */}
        <div className="flex justify-between items-start border-b pb-6 border-white/20">
          <div>
            <h2 className="text-xl font-semibold">Surfer SEO</h2>
            <p className="text-gray-400 text-sm mt-1">SEO Tools</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 line-through text-sm">$10</span>
            <span className="text-green-400 font-medium text-sm">$0</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed">
          Surfer SEO is a powerful content optimization platform designed to
          enhance online visibility across various search engines. It provides
          tools for content creation, auditing, and tracking to help users
          improve their SEO strategies effectively.
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 text-sm">Rating:</span>
          <span className="text-gray-300 text-sm">4/5</span>
          <div className="flex items-center space-x-1">
            {[...Array(4)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
            ))}
            <Star size={16} className="text-gray-500" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex space-x-2 w-full justify-between">
            <button
              onClick={() => setActivePanel("gallery")}
              className="px-4 py-1.5 rounded-full bg-[#1a1a1a] border border-gray-700 text-gray-300 text-sm hover:bg-gray-800 transition"
            >
              Gallery
            </button>
            <button
              onClick={() => setActivePanel("info")}
              className="px-4 py-1.5 rounded-full bg-[#1a1a1a] border border-gray-700 text-gray-300 text-sm hover:bg-gray-800 transition"
            >
              More Info
            </button>
          </div>
        </div>

        {/* Buy Now */}
        <button className="mt-4 w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium">
          Buy Now
        </button>
      </motion.div>

      {/* Gallery Panel */}
      <AnimatePresence>
        {activePanel === "gallery" && (
          <motion.div
            {...(!isSmallScreen ? slideLeft : {})}
            className={`absolute left-0 ${isSmallScreen ? "w-full" : "ml-5"}`}
          >
            <Gallery onClose={closePanel} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* More Info Panel */}
      <AnimatePresence>
        {activePanel === "info" && (
          <motion.div
            {...(!isSmallScreen ? slideRight : {})}
            className={`absolute right-0 ${isSmallScreen ? "w-full" : "mr-5"}`}
          >
            <MoreInfo onClose={closePanel} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Product;
