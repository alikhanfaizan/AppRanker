import React, { useState } from "react";
import { X } from "lucide-react";

export function Gallery({ onClose }) {
  const data = [
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?auto=format&fit=crop&w=1950&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2940&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=2762&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?auto=format&fit=crop&w=2832&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?auto=format&fit=crop&w=1950&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2940&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=2762&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?auto=format&fit=crop&w=2832&q=80",
    },
  ];

  const [active, setActive] = useState(data[0].imgelink);

  return (
    <div className="bg-[#0b0b0b] rounded-2xl p-4 text-white w-[450px] mx-auto shadow-xl">
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
