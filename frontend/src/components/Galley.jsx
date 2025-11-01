import React, { useState } from "react";
import { X } from "lucide-react";
import img1 from "../assets/Chat-GPT-logo.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/stripe.png";
import img5 from "../assets/vs.webp";

export function Gallery({ onClose }) {
  const data = [
    {
      imgelink:
        img1,
    },
    {
      imgelink:
        img2,
    },
    {
      imgelink:
        img3,
    },
    {
      imgelink:
        img4,
    },
    {
      imgelink:
        img5,
    },
    {
      imgelink:
        img2,
    },
    {
      imgelink:
       img5,
    },
    {
      imgelink:
        img4,
    },
    {
      imgelink:
        img3,
    },
    {
      imgelink:img1,
    },
  ];

  const [active, setActive] = useState(data[0].imgelink);

  return (
    <div className="relative z-20 bg-[#0b0b0b] rounded-2xl p-4 text-white w-[450px] mx-auto shadow-xl">
      {/* Header */}
      <div className="flex  justify-between items-center mb-3 px-2">
        <h2 className="text-gray-300 text-lg font-medium">Screenshot Gallery</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition"
        >
          <X size={22} />
        </button>
      </div>

      {/* Main Image */}
      <div className="bg-black rounded-2xl overflow-hidden flex items-center justify-center mb-4 border border-gray-800">
        <img
          src={active}
          alt="Active preview"
          className="w-full h-[320px] object-contain bg-black rounded-2xl"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-3 px-2">
        {data.slice(0, 10).map(({ imgelink }, index) => (
          <div
            key={index}
            onClick={() => setActive(imgelink)}
            className={`rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
              active === imgelink
                ? "border-blue-500"
                : "border-transparent hover:border-gray-600"
            }`}
          >
            <img
              src={imgelink}
              alt={`Thumbnail ${index}`}
              className="object-cover w-full h-20 rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
