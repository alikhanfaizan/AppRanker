import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Tag, BadgeCheck } from "lucide-react";

const Cards = ({ query }) => {
  const [hovered, setHovered] = useState(null);
  const [showCards, setShowCards] = useState(true);

  const cards = [
    {
      id: 1,
      tag: "Best Rating",
      icon: <Star size={16} className="text-orange-400" />,
      tagColor: "bg-orange-700/60 text-orange-300",
      title: "Loom",
      desc: "Video messaging tool",
      image: "https://via.placeholder.com/300x150",
    },
    {
      id: 2,
      tag: "Editor's Choice",
      icon: <BadgeCheck size={16} className="text-green-400" />,
      tagColor: "bg-green-700/60 text-green-300",
      title: "Surfer SEO",
      desc: "SEO content optimization",
      image: "https://via.placeholder.com/300x150",
    },
    {
      id: 3,
      tag: "Best Price",
      icon: <Tag size={16} className="text-blue-400" />,
      tagColor: "bg-blue-700/60 text-blue-300",
      title: "Sora",
      desc: "Create hyperreal visuals",
      image: "https://via.placeholder.com/300x150",
    },
  ];

  return (
    <>
      {showCards && (
        <>
          <div className="relative z-50 flex justify-center gap-6 mt-8 w-full">
            {cards.map((card) => (
              <div key={card.id} className="relative">
                {/* Tag above the card */}
                <div
                  className={`absolute -top-6 left-4 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${card.tagColor}`}
                >
                  {card.icon}
                  {card.tag}
                </div>

                <motion.div
                  className=" bg-black/80 border border-white/10 rounded-2xl p-4 text-white shadow-md cursor-pointer hover:border-white border-2 flex-grow flex-shrink"
                  onHoverStart={() => setHovered(card.id)}
                  onHoverEnd={() => setHovered(null)}
                  animate={{
                    flex: hovered === card.id ? 1.9 : 0.75,
                    scale: hovered === card.id ? 1.02 : 1,
                    transition: { duration: 0.5, ease: "easeOut" },
                  }}
                  style={{
                    height: "220px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: "0",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-28 object-cover rounded-xl mb-4"
                  />
                  <div className="w-full flex justify-between items-center">
                    <div>
                      <h2 className="text-lg font-semibold">{card.title}</h2>
                      <p className="text-gray-400 text-sm">{card.desc}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 line-through text-sm">$10</p>
                      <p className="text-green-400 font-semibold text-lg">$0</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <button className="mt-6 bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-500 transition">
            Compare These Options
          </button>
        </>
      )}
    </>
  );
};

export default Cards;
