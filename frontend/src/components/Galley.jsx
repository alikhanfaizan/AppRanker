import React, { useState } from "react";
import { X } from "lucide-react";
import img1 from "../assets/Chat-GPT-logo.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/stripe.png";
import img5 from "../assets/vs.webp";

export function Gallery({ onClose }) {
  const data = [
    { imgelink: img1 },
    { imgelink: img2 },
    { imgelink: img3 },
    { imgelink: img4 },
    { imgelink: img5 },
    { imgelink: img2 },
    { imgelink: img5 },
    { imgelink: img4 },
    { imgelink: img3 },
    { imgelink: img1 },
  ];

  const [active, setActive] = useState(data[0].imgelink);

  return (
    <div
      className="
        relative z-20
        bg-[#0b0b0b] text-white
        rounded-3xl shadow-xl
        border border-[#1a1a1a]
        p-6
        w-full max-w-[445px]
        sm:w-[90%] md:w-[80%] lg:w-[445px]
        h-auto max-h-[90vh]
        overflow-y-auto
        flex flex-col
        mx-auto
      "
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-gray-400 text-lg font-medium tracking-wide">
          Screenshot Gallery
        </h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition"
        >
          <X size={22} />
        </button>
      </div>

      {/* Main Image */}
      <div className="bg-black rounded-2xl overflow-hidden flex items-center justify-center mb-5 border border-gray-800">
        <img
          src={active}
          alt="Active preview"
          className="
            w-full 
            h-[320px] 
            sm:h-[260px] 
            xs:h-[220px]
            object-contain 
            bg-black 
            rounded-2xl
          "
        />
      </div>

      {/* Thumbnails */}
      <div
        className="
          grid 
          grid-cols-3 sm:grid-cols-4 md:grid-cols-5 
          gap-3 px-1
        "
      >
        {data.map(({ imgelink }, index) => (
          <div
            key={index}
            onClick={() => setActive(imgelink)}
            className={`
              rounded-xl overflow-hidden cursor-pointer 
              border-2 transition-all duration-200 
              ${
                active === imgelink
                  ? "border-blue-500"
                  : "border-transparent hover:border-gray-600"
              }
            `}
          >
            <img
              src={imgelink}
              alt={`Thumbnail ${index}`}
              className="
                object-cover 
                w-full 
                h-20 sm:h-16 xs:h-14 
                rounded-xl
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
