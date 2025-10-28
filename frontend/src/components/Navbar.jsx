import React from "react";
import { Plus, Sparkles } from "lucide-react";
import { Button } from "./ui/moving-border";
import logo from "../assets/logo.webp";

export default function Navbar() {
  return (
    <nav
      className="flex items-center justify-between px-6 md:px-12 py-4 
      "
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-extrabold tracking-wide">
         
            <img
              src={logo}
              alt="AppRanker Logo"
              className="w-40 h-14 object-contain"
            />
        </span>
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 gap-4"
        >
          <span>Explore</span>
          <Sparkles size={18} />
        </Button>

        {/* Add Icon */}
        <button className="bg-black  p-2 rounded-full transition hover:scale-105">
          <Plus size={25} color="cyan" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Profile Section */}
        <div className="flex items-center bg-black/80 rounded-full border border-gray-700 px-3 py-1.5">
          {/* Progress Ring */}
          <div className="relative flex items-center justify-center w-8 h-8 mr-3">
            <svg className="w-8 h-8 transform -rotate-90">
              <circle
                cx="16"
                cy="16"
                r="14"
                stroke="#1dd75f"
                strokeWidth="3"
                fill="none"
                className="opacity-30"
              />
              <circle
                cx="16"
                cy="16"
                r="14"
                stroke="#1dd75f"
                strokeWidth="3"
                fill="none"
                strokeDasharray="88"
                strokeDashoffset="12" // (approx 87% filled)
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Text */}
          <span className="text-white text-sm font-semibold mr-3">
            87% impact
          </span>

          {/* Profile Image */}
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
