import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ChevronDown } from "lucide-react";

const CompareApps = () => {
  const apps = [
    {
      id: "app1",
      name: "Design Studio",
      vendor: "Creative Labs",
      category: "Graphic Design",
      pricing: "$29/month",
      logo: "https://via.placeholder.com/40x40.png?text=DS",
      features: {
        "Cloud Sync": true,
        "Team Collaboration": true,
        "Offline Mode": false,
        "AI Assistance": true,
        "Export Options": true,
      },
    },
    {
      id: "app2",
      name: "SecureVault VPN",
      vendor: "Privacy Solutions",
      category: "Cybersecurity",
      pricing: "$9/month",
      logo: "https://via.placeholder.com/40x40.png?text=VPN",
      features: {
        "Cloud Sync": false,
        "Team Collaboration": false,
        "Offline Mode": true,
        "AI Assistance": false,
        "Export Options": true,
      },
    },
    {
      id: "app3",
      name: "TaskMaster Pro",
      vendor: "Productivity Co",
      category: "Project Management",
      pricing: "$19/month",
      logo: "https://via.placeholder.com/40x40.png?text=TMP",
      features: {
        "Cloud Sync": true,
        "Team Collaboration": true,
        "Offline Mode": true,
        "AI Assistance": false,
        "Export Options": true,
      },
    },
  ];

  const [app1, setApp1] = useState("");
  const [app2, setApp2] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);

  const selectedApp1 = apps.find((app) => app.id === app1);
  const selectedApp2 = apps.find((app) => app.id === app2);

  const handleSelect = (id, value) => {
    if (id === "app1") setApp1(value);
    else setApp2(value);
    setOpenDropdown(null);
  };

  return (
    <div className="lg:ml-56 p-4 md:p-6 lg:p-8 min-h-screen bg-[#0b1522] text-slate-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold mb-6">App Comparison Tool</h2>

        {/* Select Section */}
        <div className="flex flex-col sm:flex-row bg-[#15232a] p-4 rounded-xl gap-6 mb-8">
          {/* Dropdown 1 */}
          <div className="w-full sm:w-1/2 relative">
            <label className="text-sm text-slate-400 mb-2 block">
              Select App 1
            </label>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "app1" ? null : "app1")
              }
              className="w-full flex justify-between items-center bg-slate-800 border border-slate-700 text-slate-200 px-4 py-2 rounded-md"
            >
              <span>
                {selectedApp1 ? selectedApp1.name : "Select App 1"}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openDropdown === "app1" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "app1" && (
              <div className="absolute z-20 mt-2 w-full bg-slate-800 border border-slate-700 rounded-md shadow-lg">
                {apps.map((app) => (
                  <div
                    key={app.id}
                    onClick={() => handleSelect("app1", app.id)}
                    className="px-4 py-2 hover:bg-slate-700 cursor-pointer text-slate-200"
                  >
                    {app.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dropdown 2 */}
          <div className="w-full sm:w-1/2 relative">
            <label className="text-sm text-slate-400 mb-2 block">
              Select App 2
            </label>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "app2" ? null : "app2")
              }
              className="w-full flex justify-between items-center bg-slate-800 border border-slate-700 text-slate-200 px-4 py-2 rounded-md"
            >
              <span>
                {selectedApp2 ? selectedApp2.name : "Select App 2"}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openDropdown === "app2" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "app2" && (
              <div className="absolute z-20 mt-2 w-full bg-slate-800 border border-slate-700 rounded-md shadow-lg">
                {apps.map((app) => (
                  <div
                    key={app.id}
                    onClick={() => handleSelect("app2", app.id)}
                    className="px-4 py-2 hover:bg-slate-700 cursor-pointer text-slate-200"
                  >
                    {app.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Comparison Table */}
        {(selectedApp1 || selectedApp2) && (
          <div className="overflow-x-auto border border-slate-700/50 rounded-xl bg-slate-800/60">
            <table className="min-w-full divide-y bg-[#15232a] divide-slate-700/30">
              <thead>
                <tr className="text-slate-400 text-sm">
                  <th className="px-4 py-3 text-left font-medium">Feature</th>
                  <th className="px-4 py-3 text-left font-medium">
                    {selectedApp1 ? selectedApp1.name : "-"}
                  </th>
                  <th className="px-4 py-3 text-left font-medium">
                    {selectedApp2 ? selectedApp2.name : "-"}
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y bg-[#192d37] divide-slate-700/30">
                <tr>
                  <td className="px-4 py-3 font-medium">Logo</td>
                  <td className="px-4 py-3">
                    {selectedApp1 && (
                      <img
                        src={selectedApp1.logo}
                        alt={selectedApp1.name}
                        className="w-10 h-10 rounded-md"
                      />
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {selectedApp2 && (
                      <img
                        src={selectedApp2.logo}
                        alt={selectedApp2.name}
                        className="w-10 h-10 rounded-md"
                      />
                    )}
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium">Vendor</td>
                  <td className="px-4 py-3 text-slate-300">
                    {selectedApp1?.vendor || "-"}
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    {selectedApp2?.vendor || "-"}
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium">Category</td>
                  <td className="px-4 py-3 text-slate-300">
                    {selectedApp1?.category || "-"}
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    {selectedApp2?.category || "-"}
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium">Pricing</td>
                  <td className="px-4 py-3 text-slate-300">
                    {selectedApp1?.pricing || "-"}
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    {selectedApp2?.pricing || "-"}
                  </td>
                </tr>

                {Object.keys(apps[0].features).map((feature) => (
                  <tr key={feature}>
                    <td className="px-4 py-3 font-medium">{feature}</td>
                    <td className="px-4 py-3">
                      {selectedApp1 ? (
                        selectedApp1.features[feature] ? (
                          <Check className="text-emerald-500 w-4 h-4" />
                        ) : (
                          <X className="text-red-500 w-4 h-4" />
                        )
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {selectedApp2 ? (
                        selectedApp2.features[feature] ? (
                          <Check className="text-emerald-500 w-4 h-4" />
                        ) : (
                          <X className="text-red-500 w-4 h-4" />
                        )
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                ))}

                <tr>
                  <td className="px-4 py-3 font-medium"></td>
                  <td className="px-4 py-3">
                    {selectedApp1 && (
                      <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                        Buy Now
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {selectedApp2 && (
                      <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                        Buy Now
                      </button>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {!app1 && !app2 && (
          <p className="text-slate-400 text-center mt-10">
            Please select apps to compare.
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default CompareApps;
