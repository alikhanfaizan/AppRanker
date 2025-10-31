import React, { useState } from "react";
import { Eye, Check, X, AlertCircle, RefreshCw } from "lucide-react";

const AppsPending = () => {
  const initialData = [
    {
      id: 1,
      name: "Design Studio",
      vendor: "Creative Labs",
      date: "2025-10-22",
      logo: "/logos/design.png",
      status: "Pending",
    },
    {
      id: 2,
      name: "SecureVault VPN",
      vendor: "Privacy Solutions",
      date: "2025-10-22",
      logo: "/logos/securevault.png",
      status: "Pending",
    },
    {
      id: 3,
      name: "TaskMaster Pro",
      vendor: "Productivity Co",
      date: "2025-10-22",
      logo: "/logos/taskmaster.png",
      status: "Pending",
    },
  ];

  const [apps, setApps] = useState(initialData);
  const [filters, setFilters] = useState({ name: "", vendor: "", date: "" });
  const [modalData, setModalData] = useState(null);

  const handleAction = (id, action) => {
    setApps((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, status: action } : app
      )
    );
  };

  const filteredApps = apps.filter(
    (app) =>
      app.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      app.vendor.toLowerCase().includes(filters.vendor.toLowerCase()) &&
      (filters.date ? app.date === filters.date : true)
  );

  const summary = {
    approved: apps.filter((a) => a.status === "Approved").length,
    rejected: apps.filter((a) => a.status === "Rejected").length,
    changes: apps.filter((a) => a.status === "Changes Requested").length,
    total: apps.length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1522] to-[#162235] lg:ml-56  p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl font-semibold mb-6">Apps Pending (FIFO)</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-green-800/30 border border-green-600 rounded-xl p-4 flex flex-col justify-between">
          <p className="text-sm opacity-80">Approved This Month</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-2xl font-bold">{summary.approved}</span>
            <Check className="text-green-400" />
          </div>
        </div>
        <div className="bg-red-800/30 border border-red-600 rounded-xl p-4">
          <p className="text-sm opacity-80">Rejected This Month</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-2xl font-bold">{summary.rejected}</span>
            <X className="text-red-400" />
          </div>
        </div>
        <div className="bg-yellow-800/30 border border-yellow-600 rounded-xl p-4">
          <p className="text-sm opacity-80">Changes Requested</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-2xl font-bold">{summary.changes}</span>
            <AlertCircle className="text-yellow-400" />
          </div>
        </div>
        <div className="bg-blue-800/30 border border-blue-600 rounded-xl p-4">
          <p className="text-sm opacity-80">Total Submitted</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-2xl font-bold">{summary.total}</span>
            <RefreshCw className="text-blue-400" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          placeholder="Filter by name..."
          className="bg-slate-800/50 border border-slate-600 rounded-md px-3 py-2 text-sm text-white placeholder-gray-400"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by vendor..."
          className="bg-slate-800/50 border border-slate-600 rounded-md px-3 py-2 text-sm text-white placeholder-gray-400"
          value={filters.vendor}
          onChange={(e) => setFilters({ ...filters, vendor: e.target.value })}
        />
        <input
          type="date"
          className="bg-slate-800/50 border border-slate-600 rounded-md px-3 py-2 text-sm text-white"
          value={filters.date}
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
        />
      </div>

      {/* App Table */}
      <div className="bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-800/70 text-left">
            <tr>
              <th className="p-3">App Name</th>
              <th className="p-3">Vendor</th>
              <th className="p-3">Submitted On</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApps.map((app) => (
              <tr key={app.id} className="border-t border-slate-700">
                <td className="p-3 flex items-center space-x-2">
                  <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                    {app.name.slice(0, 3)}
                  </div>
                  <span>{app.name}</span>
                </td>
                <td className="p-3">{app.vendor}</td>
                <td className="p-3">
                  {new Date(app.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => setModalData(app)}
                    className="bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded text-sm flex items-center gap-1"
                  >
                    <Eye size={16} /> View
                  </button>
                  <button
                    onClick={() => handleAction(app.id, "Approved")}
                    className="bg-green-700 hover:bg-green-600 px-3 py-1 rounded text-sm"
                  >
                    ✓ Approve
                  </button>
                  <button
                    onClick={() => handleAction(app.id, "Changes Requested")}
                    className="bg-yellow-700 hover:bg-yellow-600 px-3 py-1 rounded text-sm"
                  >
                    ⚠ Request Changes
                  </button>
                  <button
                    onClick={() => handleAction(app.id, "Rejected")}
                    className="bg-red-700 hover:bg-red-600 px-3 py-1 rounded text-sm"
                  >
                    ✕ Reject
                  </button>
                </td>
              </tr>
            ))}
            {filteredApps.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center text-gray-400 py-6 italic"
                >
                  No matching results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-xl p-6 max-w-md w-full shadow-lg border border-slate-700">
            <h2 className="text-xl font-semibold mb-2">{modalData.name}</h2>
            <p className="text-gray-300 text-sm mb-2">
              Vendor: {modalData.vendor}
            </p>
            <p className="text-gray-300 text-sm mb-4">
              Submitted On:{" "}
              {new Date(modalData.date).toLocaleDateString("en-GB")}
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Status: <span className="font-medium">{modalData.status}</span>
            </p>
            <button
              onClick={() => setModalData(null)}
              className="w-full bg-blue-700 hover:bg-blue-600 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppsPending;
