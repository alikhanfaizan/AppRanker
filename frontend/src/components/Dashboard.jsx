import React, { useState } from "react";

import {
  DollarSign,
  Target,
  LayoutDashboard,
  Clock,
  FileText,
  Bell,
  Users,
  Trophy,
  Ticket,
  GitCompare,
  Search,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import AppsPending from "./AppsPending";
import CompareApps from "./CompareApps";
import MainDashboard from "./MainDashboard";
import Navbar2 from "./Navbar2";
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currView, setCurrView] = useState("dashboard");

  return (
    <div>
      <Navbar2 sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div className="z-10 min-h-screen text-white px-6 py-1 relative overflow-hidden">
      {/* Mobile Menu Button */}
     

      {/* Sidebar */}
      <div
        className={`fixed left-0 h-full [&::-webkit-scrollbar]:hidden w-60 bg-slate-800 border-r border-slate-900/50 transition-transform duration-300 z-10 overflow-y-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Main Section */}
        <div className="px-4 py-6">
          <div className="text-xs text-slate-500 mb-3 font-semibold">MAIN</div>
          <div className="space-y-1">
            <div
              onClick={() => setCurrView("dashboard")}
              className={`flex items-center space-x-3 hover:text-white hover:bg-slate-800/30 cursor-pointer px-3 py-2 ${
                currView === "dashboard"
                  ? "bg-slate-800/50 text-white"
                  : "text-slate-400"
              }  rounded-lg text-sm`}
            >
              <LayoutDashboard size={16} />
              <span>Dashboard</span>
            </div>
            <div
              onClick={() => setCurrView("appsPending")}
              className={`flex items-center space-x-3 hover:text-white hover:bg-slate-800/30 cursor-pointer px-3 py-2 ${
                currView === "appsPending"
                  ? "bg-slate-800/50 text-white"
                  : "text-slate-400"
              }  rounded-lg text-sm`}
            >
              <Clock size={16} />
              <span>Apps Pending</span>
            </div>
            <div className="flex items-center space-x-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800/30 rounded-lg text-sm cursor-pointer">
              <FileText size={16} />
              <span>Media Library Pro</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-4 py-6 border-t border-slate-700/50">
          <div className="text-xs text-slate-500 mb-3 font-semibold">
            CONTENT
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800/30 rounded-lg text-sm cursor-pointer">
              <Target size={16} />
              <span>Apps</span>
            </div>
            <div className="flex items-center space-x-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800/30 rounded-lg text-sm cursor-pointer">
              <FileText size={16} />
              <span>Manage Pages</span>
            </div>
            <div className="flex items-center space-x-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800/30 rounded-lg text-sm cursor-pointer">
              <Bell size={16} />
              <span>Notifications</span>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="px-4 py-6 border-t border-slate-700/50">
          <div className="text-xs text-slate-500 mb-3 font-semibold">
            COMMUNITY
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800/30 rounded-lg text-sm cursor-pointer">
              <Users size={16} />
              <span>Users</span>
            </div>
            <div className="flex items-center space-x-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800/30 rounded-lg text-sm cursor-pointer">
              <Trophy size={16} />
              <span>Gamification</span>
            </div>
          </div>
        </div>

        {/* Business Section */}
        <div className="px-4 py-6 border-t border-slate-700/50">
          <div className="text-xs text-slate-500 mb-3 font-semibold">
            BUSINESS
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800/30 rounded-lg text-sm cursor-pointer">
              <DollarSign size={16} />
              <span>Financials</span>
            </div>
            <div className="flex items-center space-x-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800/30 rounded-lg text-sm cursor-pointer">
              <Ticket size={16} />
              <span>Coupons</span>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="px-4 py-6 border-t border-slate-700/50">
          <div className="text-xs text-slate-500 mb-3 font-semibold">TOOLS</div>
          <div className="space-y-1">
            <div
              onClick={() => setCurrView("compareApps")}
              className={`flex items-center space-x-3 hover:text-white hover:bg-slate-800/30 cursor-pointer px-3 py-2 ${
                currView === "compareApps"
                  ? "bg-slate-800/50 text-white"
                  : "text-slate-400"
              }  rounded-lg text-sm`}
            >
              <GitCompare size={16} />
              <span>Compare Apps</span>
            </div>
          </div>
        </div>

        {/* System Section */}
        <div className="px-4 py-6 border-t border-slate-700/50">
          <div className="text-xs text-slate-500 mb-3 font-semibold">
            SYSTEM
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800/30 rounded-lg text-sm cursor-pointer">
              <Search size={16} />
              <span>SEO Tools</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className=" lg:hidden fixed inset-0 bg-black/50"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {currView === "dashboard" && (
        <MainDashboard/>
      )}
      {currView === "appsPending" && <AppsPending />}
      {currView === "compareApps" && <CompareApps />}
    </div>
    </div>
  );
};

export default Dashboard;
