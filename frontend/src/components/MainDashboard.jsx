import React, { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  DollarSign,
  TrendingUp,
  Activity,
  Target,
  Calendar,
  Info,
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
const MainDashboard = () => {
     const [selectedRange, setSelectedRange] = useState("6 Months");
     const revenueData = [
    { month: "Apr 2025", value: 30 },
    { month: "May 2025", value: 500 },
    { month: "Jun 2025", value: 120 },
    { month: "Jul 2025", value: 200 },
    { month: "Aug 2025", value: 90 },
    { month: "Sep 2025", value: 400 },
    { month: "Oct 2025", value: 320 },
  ];

  const newUserData = [
    { date: "Week 1", users: 45 },
    { date: "Week 2", users: 78 },
    { date: "Week 3", users: 2 },
    { date: "Week 4", users: 22 },
    { date: "Week 5", users: 112 },
    { date: "Week 6", users: 88 },
  ];

  const appSubmissionData = [
    { category: "E-commerce", count: 135, color: "#3b82f6" },
    { category: "Social Media", count: 228, color: "#8b5cf6" },
    { category: "Productivity", count: 662, color: "#10b981" },
    { category: "Entertainment", count: 15, color: "#f59e0b" },
  ];

  const pendingApprovalData = [
    {
      name: "ShopifyConnect Pro",
      status: "Review",
      date: "2 hours ago",
      priority: "high",
    },
    {
      name: "Social Analytics Dashboard",
      status: "Testing",
      date: "5 hours ago",
      priority: "medium",
    },
    {
      name: "Task Manager Plus",
      status: "Documentation",
      date: "1 day ago",
      priority: "low",
    },
    {
      name: "Video Streaming App",
      status: "Review",
      date: "1 day ago",
      priority: "high",
    },
    {
      name: "Email Marketing Suite",
      status: "Testing",
      date: "2 days ago",
      priority: "medium",
    },
  ];

  const dateRanges = ["7 Days", "30 Days", "3 Months", "6 Months", "1 Year"];

  const totalNewUsers = newUserData.reduce((acc, curr) => acc + curr.users, 0);
  const totalSubmissions = appSubmissionData.reduce(
    (acc, curr) => acc + curr.count,
    0
  );
  return (
    <div className="lg:ml-56 p-4 md:p-6 lg:p-8">
          {/* Date Range Selector */}
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 mb-6 lg:mb-8">
            <div className="flex items-center space-x-2 text-slate-300">
              <Calendar size={20} />
              <span className="text-sm font-medium">Date Range:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {dateRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedRange(range)}
                  className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                    selectedRange === range
                      ? "bg-cyan-500 text-white"
                      : "bg-slate-800/50 text-slate-400 hover:bg-slate-700/50"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2 lg:space-x-3 lg:ml-auto">
              <input
                type="text"
                value="04/22/2025"
                readOnly
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg px-2 md:px-4 py-2 text-xs md:text-sm w-24 md:w-32 text-center"
              />
              <span className="text-white text-xs md:text-sm">to</span>
              <input
                type="text"
                value="10/22/2025"
                readOnly
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg px-2 md:px-4 py-2 text-xs md:text-sm w-24 md:w-32 text-center"
              />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 lg:mb-8">
            {/* Total Revenue Card */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative bg-gradient-to-br from-emerald-900/40 to-emerald-700/20 border border-emerald-700/40 rounded-2xl p-4 md:p-6 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.25)] overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-emerald-400/10 opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-emerald-300">
                  <span className="text-xs md:text-sm font-medium">
                    Total Revenue
                  </span>
                  <Info size={14} className="text-emerald-400" />
                </div>
                <DollarSign size={20} className="text-emerald-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                $400
              </div>

              {/* Gradient line */}
              <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full" />
            </motion.div>

            {/* Vendor Conversion Rate Card */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative bg-gradient-to-br from-blue-900/40 to-blue-700/20 border border-blue-700/40 rounded-2xl p-4 md:p-6 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.25)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-blue-300">
                  <span className="text-xs md:text-sm font-medium">
                    Vendor Conversion Rate
                  </span>
                  <Info size={14} className="text-blue-400" />
                </div>
                <TrendingUp size={20} className="text-blue-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                80%
              </div>
              <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
            </motion.div>

            {/* GMV Card */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative bg-gradient-to-br from-purple-900/40 to-purple-700/20 border border-purple-700/40 rounded-2xl p-4 md:p-6 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.25)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-purple-400/10 opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-purple-300">
                  <span className="text-xs md:text-sm font-medium">GMV</span>
                  <Info size={14} className="text-purple-400" />
                </div>
                <Activity size={20} className="text-purple-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                $3200
              </div>
              <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full" />
            </motion.div>

            {/* ARR Card */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative bg-gradient-to-br from-amber-900/40 to-amber-700/20 border border-amber-700/40 rounded-2xl p-4 md:p-6 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.25)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-amber-400/10 opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-amber-300">
                  <span className="text-xs md:text-sm font-medium">ARR</span>
                  <Info size={14} className="text-amber-400" />
                </div>
                <Target size={20} className="text-amber-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                $659.76
              </div>
              <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />
            </motion.div>
          </div>

          {/* Revenue Trend Chart */}
          <div className="bg-gradient-to-br from-cyan-900/20 to-slate-800/20 border border-cyan-700/30 rounded-2xl p-4 md:p-6 backdrop-blur-sm mb-6 lg:mb-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl font-semibold text-white flex items-center gap-2">
                Revenue Trend
              </h3>
              <span className="text-xs text-cyan-300/70">
                (Monthly Overview)
              </span>
            </div>

            {/* Chart */}
            <ResponsiveContainer
              width="100%"
              height={260}
              className="md:h-[300px]"
            >
              <LineChart data={revenueData}>
                <defs>
                  {/* Gradient for Line */}
                  <linearGradient
                    id="revenueGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.1} />
                  </linearGradient>
                </defs>

                {/* Axes */}
                <XAxis
                  dataKey="month"
                  stroke="#64748b"
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  axisLine={{ stroke: "#334155" }}
                />
                <YAxis
                  stroke="#64748b"
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  axisLine={{ stroke: "#334155" }}
                  ticks={[0, 80, 160, 240, 320]}
                />

                {/* Tooltip */}
                <Tooltip
                  cursor={{
                    strokeDasharray: "4 4",
                    stroke: "rgba(6,182,212,0.4)",
                  }}
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                  labelStyle={{ color: "#22d3ee" }}
                />

                {/* Line */}
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="url(#revenueGradient)"
                  strokeWidth={3}
                  dot={{ fill: "#22d3ee", r: 5 }}
                  activeDot={{
                    r: 7,
                    stroke: "#06b6d4",
                    strokeWidth: 2,
                    fill: "#0f172a",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bottom Cards with Data */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* New Users Card */}
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-2xl p-4 md:p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-blue-300">
                  <span className="text-sm md:text-base font-medium">
                    New Users
                  </span>
                  <Info size={14} className="text-blue-400" />
                </div>
                <Users size={20} className="text-blue-400" />
              </div>

              {/* Total Count */}
              <div className="text-2xl md:text-3xl font-bold text-white mb-4">
                {totalNewUsers}
              </div>

              {/* Chart */}
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={newUserData}>
                  <XAxis
                    dataKey="date"
                    stroke="#64748b"
                    tick={{ fill: "#94a3b8", fontSize: 10 }}
                    axisLine={{ stroke: "#334155" }}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(59,130,246,0.1)" }}
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      color: "#fff",
                      fontSize: "11px",
                    }}
                    labelStyle={{ color: "#60a5fa" }}
                  />
                  <Bar
                    dataKey="users"
                    fill="#3b82f6"
                    radius={[8, 8, 0, 0]}
                    className="transition-all duration-300 hover:opacity-80"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* App Submissions Card */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-purple-700/40 rounded-2xl p-4 md:p-6 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.3)] overflow-hidden"
            >
              {/* Subtle glow layer */}
              <div className="absolute inset-0 bg-purple-500/10 opacity-0 hover:opacity-20 transition-all duration-500 blur-2xl" />

              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-purple-300">
                  <span className="text-sm md:text-base font-medium tracking-wide">
                    App Submissions
                  </span>
                  <Info size={14} className="text-purple-400" />
                </div>
                <FileText size={22} className="text-purple-400" />
              </div>

              {/* Main Value */}
              <div className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-sm">
                {totalSubmissions}
              </div>

              {/* Pie Chart & Legend */}
              <div className="flex items-center justify-between">
                <ResponsiveContainer width="50%" height={150}>
                  <PieChart>
                    <Pie
                      data={appSubmissionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={35}
                      outerRadius={55}
                      paddingAngle={4}
                      dataKey="count"
                    >
                      {appSubmissionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

                {/* Legend */}
                <div className="space-y-2 text-xs">
                  {appSubmissionData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 px-2 py-1 rounded-md transition"
                    >
                      <div
                        className="w-3 h-3 rounded-full "
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-slate-300 font-medium">
                        {item.category}: {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Gradient Accent */}
              <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full" />
            </motion.div>

            {/* Pending Approval Card */}
            <div className="bg-gradient-to-br from-amber-900/20  to-amber-800/10 border border-amber-700/30 rounded-2xl p-4 md:p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(251,191,36,0.15)]">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-amber-300">
                  <span className="text-sm md:text-base font-medium">
                    Pending Approval
                  </span>
                  <Info size={14} className="text-amber-400" />
                </div>
                <Clock size={20} className="text-amber-400" />
              </div>

              {/* Count */}
              <div className="text-2xl md:text-3xl font-bold text-white mb-4">
                {pendingApprovalData.length}
              </div>

              {/* Pending List */}
              <div className="space-y-2 max-h-[150px] overflow-y-auto [&::-webkit-scrollbar]:hidden">
                {pendingApprovalData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors duration-200"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-white truncate">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-400">{item.date}</div>
                    </div>
                    <div className="ml-2 flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          item.priority === "high"
                            ? "bg-red-500/20 text-red-400"
                            : item.priority === "medium"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  )
}

export default MainDashboard