import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/Chat-GPT-logo.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.jpeg";
const SearchBox = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [showCards, setShowCards] = useState(false);

  const [hovered, setHovered] = useState(null);


  
  const handleSearch = () => {
    if (query.trim() !== "") {
      setShowCards(true);
    } else {
      setShowCards(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-4xl mx-auto">
      {/* Search Input */}
      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Social Media Management Platform"
          className="w-full bg-black/70 text-gray-300 placeholder-gray-400 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-gray-400 border border-white/20 px-6 py-2 rounded-full hover:bg-black/70 transition hover:scale-105"
        >
          Explore
        </button>
      </div>

      {/* Display 3 Cards if searched */}
      {showCards && (
        <>
          <div className="z-50 flex justify-center gap-6 mt-1 w-full">
            {[
              {
                id: 1,
                title: "Loom",
                subtitle: "Video messaging tool",
                tag: "Best Rating",
                tagColor: "bg-orange-500/20 text-orange-400",
                img: img1,
              },
              {
                id: 2,
                title: "Surfer SEO",
                subtitle: "SEO content optimization",
                tag: "Editor's Choice",
                tagColor: "bg-green-500/20 text-green-400",
                img: img2,
              },
              {
                id: 3,
                title: "Sora",
                subtitle: "Create hyperrealistic AI videos",
                tag: "Best Price",
                tagColor: "bg-blue-500/20 text-blue-400",
                img:img3,
              },
            ].map((card) => (
              <motion.div
                key={card.id}
                className="relative bg-black/80 border border-white/10 rounded-2xl p-4 text-white shadow-md cursor-pointer hover:border-white border-2 flex-grow flex-shrink overflow-hidden"
                onHoverStart={() => setHovered(card.id)}
                onHoverEnd={() => setHovered(null)}
                animate={{
                  flex: hovered === card.id ? 1.9 : 0.75,
                  scale: hovered === card.id ? 1.02 : 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                style={{
                  height: "250px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minWidth: "0",
                }}
                onClick={() => navigate(`/product/${card.id}`)}
              >
                {/* Image Section */}
                <div className="w-full h-32 rounded-lg overflow-hidden flex justify-center items-center bg-gray-800">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Section */}
                <div className="flex justify-between items-end mt-2">
                  <div>
                    <h2 className="text-lg font-semibold">{card.title}</h2>
                    <p className="text-gray-400 text-sm">{card.subtitle}</p>
                  </div>

                  {/* Price Section */}
                  <div className="text-right">
                    <p className="text-gray-500 text-xs line-through">$10</p>
                    <p className="text-green-400 font-semibold text-sm">$0</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="mt-1 z-10 bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-500 transition"
          onClick={() => navigate(`/comparison`)}>
            Compare These Options
          </button>
        </>
      )}
    </div>
  );
};

export default SearchBox;
