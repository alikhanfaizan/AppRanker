"use client";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

export default function Starrybg({ children }) {
  const starsRef = useRef(null);

  useAnimationFrame((t) => {
    if (!starsRef.current) return;
    const speed = 0.02;
    const x = (t * speed) % 1000;
    const y = (t * speed) % 1000;
    starsRef.current.style.backgroundPosition = `${-x}px ${-y}px`;
  });

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#0a1d3a,#020617_80%)] text-white">
      <motion.div
        ref={starsRef}
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, white, transparent),
            radial-gradient(1px 1px at 200px 150px, white, transparent),
            radial-gradient(2px 2px at 400px 300px, #a9c7ff, transparent),
            radial-gradient(1px 1px at 600px 450px, white, transparent),
            radial-gradient(2px 2px at 800px 600px, #8fbaff, transparent),
            radial-gradient(1px 1px at 1000px 700px, white, transparent)
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "1000px 1000px",
          backgroundPosition: "0 0",
        }}
      />

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(50,100,255,0.15),transparent_70%)]" />

      <main className="relative z-10">{children}</main>
    </div>
  );
}
