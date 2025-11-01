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
      "Cursor is an AI-powered coding assistant that enhances developer productivity with intelligent autocompletion, in-line debugging, and command-line integration. It helps streamline your development workflow and reduce repetitive coding tasks.",
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
      "Notion AI is a productivity and writing enhancement tool built into Notion. It assists with summarizing, brainstorming, translating, and automating content creation within your workspace.",
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
      "Runway ML is an AI-powered video editing and creative platform that lets you generate, edit, and enhance media content using advanced generative AI models.",
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
  // {
  //   name: "Perplexity AI",
  //   description:
  //     "Perplexity AI is an AI search engine that provides accurate, cited answers with context. It combines conversational search with web-based retrieval to give users trustworthy results quickly.",
  //   price: "Free",
  //   oldPrice: "$5/month",
  //   rating: "88%",
  //   features: [
  //     "Conversational search",
  //     "Cited sources for reliability",
  //     "Web-based context awareness",
  //     "Custom search collections",
  //     "AI summarization of results",
  //   ],
  //   benefits: [
  //     "Faster information retrieval",
  //     "Accurate and verified sources",
  //     "Simple, intuitive interface",
  //     "Ideal for research",
  //   ],
  //   audience: "Students & Researchers",
  //   platforms: ["Web", "Mobile"],
  // },
  // {
  //   name: "Gamma App",
  //   description:
  //     "Gamma App lets users create beautiful, presentation-ready documents using AI. It turns text prompts into clean, modern slides or webpages automatically.",
  //   price: "$10/month",
  //   oldPrice: "$20/month",
  //   rating: "87%",
  //   features: [
  //     "AI slide generation",
  //     "Template customization",
  //     "Collaborative editing",
  //     "Export to PDF or web",
  //     "Live presentation mode",
  //   ],
  //   benefits: [
  //     "Instant professional presentations",
  //     "Zero design skills needed",
  //     "Real-time collaboration",
  //     "Cloud storage and sharing",
  //   ],
  //   audience: "Business Professionals",
  //   platforms: ["Web"],
  // },
];


  return (
    <div className="min-h-screen  text-white  relative overflow-hidden">
      {/* Header */}
      <div className="relative z-10 text-center pt-5 pb-10">
        <h1 className="relative z-10 text-white text-4xl sm:text-5xl font-bold leading-snug tracking-wide text-center">
          Smart Comparisons for <br />
          <span className="bg-gradient-to-r from-[#007BFF] to-[#00C26F] bg-clip-text text-transparent">
            Smarter Decisions
          </span>
        </h1>
      </div>

      {/* Comparison Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 px-6 pb-20 ">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="bg-[#0d0d0d]/90 border border-gray-800 rounded-3xl p-6 w-[340px] sm:w-[380px] flex flex-col shadow-2xl hover:shadow-blue-600/20 transition duration-300 "
            whileHover={{ scale: 1.02 }}
          >
            {/* Header Badge */}
            <div className="flex items-center mb-4">
              <div className="flex items-center bg-black/50 border border-green-500/40 rounded-full px-3 py-1 text-sm text-green-400">
                <Tag size={14} className="mr-1 text-green-400" />
                Editors Choice
              </div>
            </div>

            {/* Title + Description */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">{tool.name}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {tool.description}
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="bg-black rounded-2xl mt-6 h-36 flex justify-center items-center">
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
              <span className="text-gray-500 line-through text-sm">
                {tool.oldPrice}
              </span>
              <span className="text-green-400 font-medium text-sm">
                {tool.price}
              </span>
            </div>

            {/* Key Features */}
            <div className="mt-6">
              <h3 className="font-semibold mb-3 text-white">Key Features</h3>
              <ul className="space-y-2">
                {tool.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-300 text-sm"
                  >
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Benefits */}
            <div className="mt-6">
              <h3 className="font-semibold mb-3 text-white">Key Benefits</h3>
              <div className="flex flex-wrap gap-2">
                {tool.benefits.map((b, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-[#101010] border border-blue-900 text-blue-400 text-xs"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Audience */}
            <div className="mt-6">
              <h3 className="font-semibold mb-1 text-white">Target Audience</h3>
              <p className="text-gray-400 text-sm">{tool.audience}</p>
            </div>

            {/* Supporting Platforms */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2 text-white">
                Supporting Platforms
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Globe size={16} className="text-blue-400" />
                  Web
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Monitor size={16} className="text-green-400" />
                  Desktop
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="mt-6">
              <h3 className="font-semibold text-white mb-1">Users Rating</h3>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-2 bg-green-500 w-[80%]"></div>
              </div>
              <p className="text-sm text-gray-400 mt-1">{tool.rating}</p>
            </div>

            {/* Buy Button */}
            <button className="mt-6 w-full py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition text-white font-semibold">
              Buy Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductComparisonPage;
