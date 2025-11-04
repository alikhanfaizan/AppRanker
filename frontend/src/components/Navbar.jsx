import React, { useState } from "react";
import { Plus, Sparkles, User, Menu, X } from "lucide-react";
import { Button } from "./ui/moving-border";
import logo from "../assets/logo.webp";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Explore + Add icons (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-3">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 gap-2"
          >
            <span>Explore</span>
            <Sparkles size={18} />
          </Button>

          <button className="bg-black p-2 rounded-full transition hover:scale-105">
            <Plus size={25} color="cyan" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Impact Section */}
        <div
          className="flex items-center bg-black/80 rounded-full border border-gray-700 px-3 py-1.5 cursor-pointer"
          onClick={() => navigate("/impact")}
        >
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
          <span className="text-white text-sm font-semibold mr-3">
            87% Impact
          </span>
        </div>

        {/* Profile */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center bg-black cursor-pointer"
          onClick={() => navigate("/admin")}
        >
          <User className="text-white" size={20} />
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-full border border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-200"
        >
          {menuOpen ? (
            <X size={24} color="#00FFFF" />
          ) : (
            <Menu size={24} color="#00FFFF" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0b0f1a] border-t border-gray-800 flex flex-col items-center space-y-4 py-6 md:hidden">
          <button className="w-4/5 py-2 rounded-xl bg-[#12182a] text-white border border-gray-800 hover:bg-[#1a2033] transition">
            Explore
          </button>

          <button className="bg-black p-2 rounded-full transition hover:scale-105">
            <Plus size={25} color="cyan" />
          </button>

          <div
            className="flex items-center bg-black/80 rounded-full border border-gray-700 px-3 py-1.5 cursor-pointer w-4/5 justify-center"
            onClick={() => navigate("/impact")}
          >
            <div className="relative flex items-center justify-center w-8 h-8 mr-3">
              {/* <svg className="w-8 h-8 transform -rotate-90">
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
              </svg> */}
            </div>
            <span className="text-white text-sm font-semibold">87% Impact</span>
          </div>

          <div
            className="w-8 h-8 rounded-full flex items-center justify-center bg-black cursor-pointer"
            onClick={() => navigate("/admin")}
          >
            <User className="text-white" size={20} />
          </div>
        </div>
      )}
    </nav>
  );
}
