import React from "react";
import { Plus, Sparkles, User } from "lucide-react";
import { Button } from "./ui/moving-border";
import logo from "../assets/logo.webp";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-transparent">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        {/* Logo (clickable) */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 focus:outline-none cursor-pointer z-50"
        >
          <img
            src={logo}
            alt="AppRanker Logo"
            className="w-40 h-14 object-contain select-none pointer-events-auto"
          />
        </button>

        {/* Explore Button */}
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 gap-2"
        >
          <span>Explore</span>
          <Sparkles size={18} />
        </Button>

        {/* Add Icon */}
        <button className="bg-black p-2 rounded-full transition hover:scale-105">
          <Plus size={25} color="cyan" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Profile Section */}
        <div
          className="flex items-center bg-black/80 rounded-full border border-gray-700 px-3 py-1.5 cursor-pointer"
          onClick={() => navigate("/impact")}
        >
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
                strokeDashoffset="12"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Text */}
          <span className="text-white text-sm font-semibold mr-3">
            87% Impact
          </span>

          {/* Profile Image */}
          
        </div>
        <div>
          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
          onClick={() => navigate("/admin")}>
            <User/>
          </div>
        </div>
      </div>
    </nav>
  );
}
