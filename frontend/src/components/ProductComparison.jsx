import React from "react";
import {
  CheckCircle,
  Globe,
  Monitor,
  ChevronLeft,
  ChevronRight,
  Tag,
} from "lucide-react";
import { motion } from "framer-motion";
import img1 from "../assets/notion_logo.jpg";
import img2 from "../assets/img2.webp";
import img3 from "../assets/images (1).jpeg";

const ProductComparisonPage = () => {
  const tools = [
    {
      name: "Cursor",
      description:
        "Cursor is an AI-powered coding assistant that enhances developer productivity with intelligent autocompletion, in-line debugging, and command-line integration.",
      price: "$0",
      oldPrice: "$10/month",
      rating: "85%",
      features: [
        "AI-powered code completion",
        "Command-line integration",
        "Smart debugging assistance",
        "Git-aware code suggestions",
        "Support for major programming languages",
      ],
      image: img2,
      benefits: [
        "Faster code writing",
        "Reduced syntax errors",
        "Improved workflow",
        "Collaborative editing",
      ],
      audience: "Developers",
      platforms: ["Web", "Desktop"],
    },
    {
      name: "Notion AI",
      description:
        "Notion AI is a productivity and writing enhancement tool built into Notion. It assists with summarizing, brainstorming, translating, and automating content creation.",
      price: "$8/month",
      oldPrice: "$15/month",
      rating: "90%",
      image: img1,
      features: [
        "Smart document summarization",
        "AI brainstorming tools",
        "Automatic translation",
        "Task and note generation",
        "Integrated with Notion workspace",
      ],
      benefits: [
        "Boost writing efficiency",
        "Organize content intelligently",
        "Save hours on documentation",
        "Enhance creative output",
      ],
      audience: "Writers & Teams",
      platforms: ["Web", "Mobile", "Desktop"],
    },
    {
      name: "Runway ML",
      description:
        "Runway ML is an AI-powered video editing platform that lets you generate, edit, and enhance media content using advanced generative AI models.",
      price: "$15/month",
      oldPrice: "$25/month",
      rating: "92%",
      image: img3,
      features: [
        "AI video editing",
        "Text-to-video generation",
        "Background removal",
        "Style transfer",
        "Real-time collaboration tools",
      ],
      benefits: [
        "Save time on post-production",
        "High-quality AI effects",
        "No coding required",
        "Creative freedom for editors",
      ],
      audience: "Video Creators",
      platforms: ["Web"],
    },
  ];

  return (
    <div className="z-10 min-h-screen text-white  overflow-hidden">
      {/* Header */}
      <div className="text-center pt-10 pb-14 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tight">
          Smart Comparisons for <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#007BFF] to-[#00C26F] bg-clip-text text-transparent">
            Smarter Decisions
          </span>
        </h1>
      </div>

      {/* Comparison Cards */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-4 sm:px-6 md:px-10 pb-24">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="bg-[#0d0d0d]/90 border border-gray-800 rounded-3xl p-5 sm:p-6 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] xl:w-[28%] flex flex-col shadow-2xl hover:shadow-blue-600/20 transition duration-300"
            whileHover={{ scale: 1.03 }}
          >
            {/* Header Badge */}
            <div className="flex items-center mb-4">
              <div className="flex items-center bg-black/50 border border-green-500/40 rounded-full px-3 py-1 text-xs sm:text-sm text-green-400 font-medium">
                <Tag size={14} className="mr-1 text-green-400" />
                Editors Choice
              </div>
            </div>

            {/* Title + Description */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold">{tool.name}</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {tool.description}
              </p>
            </div>

            {/* Image */}
            <div className="bg-black rounded-2xl mt-6 h-32 sm:h-40 flex justify-center items-center overflow-hidden">
              <img
                src={tool.image}
                alt="logo"
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <button className="p-1.5 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a]">
                  <ChevronLeft size={16} />
                </button>
                <button className="p-1.5 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a]">
                  <ChevronRight size={16} />
                </button>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(6)].map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === 1 ? "bg-blue-500" : "bg-gray-500/40"
                    }`}
                  ></span>
                ))}
              </div>
            </div>

            {/* Price Section */}
            <div className="flex items-center space-x-2 mt-4">
              <span className="text-gray-500 line-through text-xs sm:text-sm">
                {tool.oldPrice}
              </span>
              <span className="text-green-400 font-semibold text-sm sm:text-base">
                {tool.price}
              </span>
            </div>

            {/* Key Features */}
            <div className="mt-6">
              <h3 className="font-semibold mb-3 text-white text-base sm:text-lg">
                Key Features
              </h3>
              <ul className="space-y-2">
                {tool.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-300 text-xs sm:text-sm"
                  >
                    <CheckCircle
                      size={14}
                      className="text-green-400 mr-2 flex-shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Benefits */}
            <div className="mt-6">
              <h3 className="font-semibold mb-3 text-white text-base sm:text-lg">
                Key Benefits
              </h3>
              <div className="flex flex-wrap gap-2">
                {tool.benefits.map((b, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 rounded-full bg-[#101010] border border-blue-900 text-blue-400 text-xs sm:text-sm"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Audience */}
            <div className="mt-6">
              <h3 className="font-semibold mb-1 text-white text-base sm:text-lg">
                Target Audience
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {tool.audience}
              </p>
            </div>

            {/* Supporting Platforms */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2 text-white text-base sm:text-lg">
                Supporting Platforms
              </h3>
              <div className="flex flex-wrap gap-4">
                {tool.platforms.map((platform, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    {platform === "Web" && (
                      <Globe size={16} className="text-blue-400" />
                    )}
                    {platform === "Desktop" && (
                      <Monitor size={16} className="text-green-400" />
                    )}
                    {platform}
                  </div>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="mt-6">
              <h3 className="font-semibold text-white mb-1 text-base sm:text-lg">
                Users Rating
              </h3>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-green-500"
                  style={{ width: tool.rating }}
                ></div>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                {tool.rating}
              </p>
            </div>

            {/* Buy Button */}
            <button className="mt-6 w-full py-2 sm:py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition text-white font-semibold text-sm sm:text-base">
              Buy Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductComparisonPage;
