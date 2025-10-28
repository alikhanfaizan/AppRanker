 {showCards && (
  <>
    <div className="z-50 flex justify-center gap-6 mt-1 w-full">
      {[
        { id: 1, title: "Loom", subtitle: "Video messaging tool", tag: "Best Rating", tagColor: "bg-orange-500/20 text-orange-400", img: "https://via.placeholder.com/300x150" },
        { id: 2, title: "Surfer SEO", subtitle: "SEO content optimization", tag: "Editor's Choice", tagColor: "bg-green-500/20 text-green-400", img: "https://via.placeholder.com/300x150" },
        { id: 3, title: "Sora", subtitle: "Create hyperrealistic AI videos", tag: "Best Price", tagColor: "bg-blue-500/20 text-blue-400", img: "https://via.placeholder.com/300x150" },
      ].map((card) => (
        <motion.div
          key={card.id}
          className="relative bg-black/80 border border-white/10 rounded-2xl p-4 text-white shadow-md cursor-pointer hover:border-white border-2 flex-grow flex-shrink overflow-hidden"
          onHoverStart={() => setHovered(card.id)}
          onHoverEnd={() => setHovered(null)}
          animate={{
            flex: hovered === card.id ? 1.9 : 0.75,
            scale: hovered === card.id ? 1.02 : 1,
            transition: { duration: 0.5, ease: 'easeOut' },
          }}
          style={{
            height: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minWidth: '0',
          }}
        >
          {/* Top Tag */}
          <div
            className={`absolute -top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${card.tagColor} border border-white/10 backdrop-blur-sm`}
          >
            {card.tag}
          </div>

          {/* Image Section */}
          <div className="w-full h-32 rounded-lg overflow-hidden flex justify-center items-center bg-gray-800">
            <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
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

    <button className="mt-1 bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-500 transition">
      Compare These Options
    </button>
  </>
)}