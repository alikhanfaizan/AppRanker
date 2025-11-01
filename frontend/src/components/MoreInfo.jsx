import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const MoreInfo = ({ onClose }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Sora?",
      answer:
        "Sora is an AI platform that creates hyperreal videos with sound from text-based ideas.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Pricing details depend on your plan. Sora offers different tiers for creators and businesses.",
    },
    {
      question: "What features does Sora have?",
      answer:
        "It includes AI-driven video generation, sound synthesis, editing tools, and seamless export options.",
    },
  ];

  return (
    <div className="relative z-20 bg-[#0b0b0b] text-white rounded-3xl shadow-xl w-[445px] h-[590px] p-6 flex flex-col border border-[#1a1a1a]">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-gray-400 text-lg font-medium tracking-wide">
          More Info
        </h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition"
        >
          <X size={22} />
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-8">
        Sora is an innovative platform that allows users to create hyperreal
        videos with sound from their ideas. It leverages advanced AI technology
        to transform concepts into visually stunning video content, making it
        accessible for creators of all levels.
      </p>

      {/* FAQ Section */}
      <div className="mt-auto">
        <h3 className="text-gray-500 text-sm uppercase mb-4 tracking-wide">
          FAQ
        </h3>

        <div className="flex flex-col space-y-5">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-white font-medium text-base hover:text-gray-200 transition"
              >
                {faq.question}
                <span className="text-gray-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence> {openIndex === index && ( <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-gray-400 text-sm mt-2 pl-1" > {faq.answer} </motion.p> )} </AnimatePresence>
            </div>
          ))}
        </div>
        
      </div>
      </motion.div>
    </div>
  );
};

export default MoreInfo;
