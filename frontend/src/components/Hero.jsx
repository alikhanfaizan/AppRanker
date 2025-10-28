import React from "react";
import { Button } from "./ui/rainbow-borders-button";
import logo from "../assets/logo.webp";
import SearchBox from "./SearchBox";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center flex-grow text-center px-6 md:px-12">
      {/* Logo Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-2 mt-13 flex items-center gap-3">
        <img
          src={logo}
          alt="AppRanker Logo"
          className="w-full h-14 object-contain"
        />
      </h1>
      <p className="text-gray-300 mb-6 text-lg md:text-xl">
        Apps For Everything. Prices For Everyone
      </p>

      {/* Search Box */}
      <SearchBox/>
    </section>
  );
}
