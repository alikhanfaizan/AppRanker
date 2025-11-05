import React, { useState } from "react";
import { Plus, Sparkles, User, Menu, X, Home, Bell, Trophy, Settings, LogOut } from "lucide-react";
import { Button } from "./ui/moving-border";
import logo from "../assets/logo.webp";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { icon: <Home size={18} />, label: "Home", path: "/" },
    { icon: <User size={18} />, label: "Profile", path: "/profile" },
    { icon: <Bell size={18} />, label: "Notifications", path: "/notifications" },
    { icon: <Trophy size={18} />, label: "Your Score", path: "/impact" },
    { icon: <Settings size={18} />, label: "Admin Panel", path: "/admin" },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-transparent">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 focus:outline-none cursor-pointer z-50"
        >
          <img
            src={logo}
            alt="AppRanker Logo"
            className="w-36 h-12 object-contain select-none pointer-events-auto"
          />
        </button>
        <div className="hidden md:flex">
          <Button
          borderRadius="1.75rem"
          className=" bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 gap-2"
        >
          <span>Explore</span> <Sparkles size={18} />
        </Button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        

        <button className="bg-black p-2 rounded-full transition hover:scale-105">
          <Plus size={25} color="cyan" />
        </button>

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
          <span className="text-white text-sm font-semibold mr-3">87% Impact</span>
        </div>

        <div
          className="w-8 h-8 rounded-full overflow-hidden cursor-pointer flex items-center justify-center bg-gray-800"
          onClick={() => navigate("/admin")}
        >
          <User className="text-white" size={20} />
        </div>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 rounded-lg bg-black/70 text-white z-50"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="fixed top-0 right-0 h-full w-72 bg-[#0b1120] shadow-2xl text-white flex flex-col justify-between py-6 px-5 md:hidden z-40"
          >
            {/* Header */}
            <div>
              

              {/* Impact Badge */}
              <div className="bg-[#0e1b26] border border-cyan-400/30 rounded-full py-2 px-4 flex items-center justify-center text-cyan-400 font-semibold mb-6 mt-10">
                <span className="text-lg mr-2">50</span> Impact
              </div>

              {/* Nav Items */}
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      navigate(item.path);
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-3 text-gray-200 hover:text-cyan-400 transition"
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={() => {
                setMenuOpen(false);
                // add logout logic if needed
              }}
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-semibold transition"
            >
              <LogOut size={18} /> Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
