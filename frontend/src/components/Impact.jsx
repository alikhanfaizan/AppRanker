import React, { useEffect, useState } from "react";
import { Users, Heart, ShoppingCart, Share2, Compass } from "lucide-react";

import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";

export default function Impact() {
  const [scores, setScores] = useState({
    discovery: 0,
    engagement: 0,
    influence: 0,
    loyalty: 0,
    impact: 0,
  });

  const finalScores = {
    discovery: 482,
    engagement: 96,
    influence: 668,
    loyalty: 121,
    impact: 900,
  };

  useEffect(() => {
    const duration = 1500; // 1.5s
    const frameRate = 30;
    const totalFrames = duration / (1000 / frameRate);

    const increments = {
      discovery: finalScores.discovery / totalFrames,
      engagement: finalScores.engagement / totalFrames,
      influence: finalScores.influence / totalFrames,
      loyalty: finalScores.loyalty / totalFrames,
      impact: finalScores.impact / totalFrames,
    };

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      setScores((prev) => ({
        discovery: Math.min(
          finalScores.discovery,
          Math.floor(prev.discovery + increments.discovery)
        ),
        engagement: Math.min(
          finalScores.engagement,
          Math.floor(prev.engagement + increments.engagement)
        ),
        influence: Math.min(
          finalScores.influence,
          Math.floor(prev.influence + increments.influence)
        ),
        loyalty: Math.min(
          finalScores.loyalty,
          Math.floor(prev.loyalty + increments.loyalty)
        ),
        impact: Math.min(
          finalScores.impact,
          Math.floor(prev.impact + increments.impact)
        ),
      }));
      if (frame >= totalFrames) clearInterval(counter);
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, []);

  const rewards = [
    {
      title: "ENGAGEMENT REWARDS",
      color: "text-sky-400",
      items: [
        { name: "Create account", points: "+60" },
        { name: "Add profile picture", points: "+15" },
        { name: "Add full name", points: "+15" },
        { name: "Choose nickname", points: "+15" },
        { name: "Select interests", points: "+15" },
        { name: "First login", points: "+50" },
      ],
    },
    {
      title: "DISCOVERY REWARDS",
      color: "text-emerald-400",
      items: [
        { name: "Daily login (7-day streak bonus)", points: "+75" },
        { name: "Visit new product page", points: "+5" },
        { name: "Watch demo video", points: "+10" },
        { name: "Visit comparison page", points: "+15" },
        { name: "Save to favorites", points: "+5" },
      ],
    },
    {
      title: "INFLUENCE REWARDS",
      color: "text-purple-400",
      items: [
        { name: "User arrives from your social link", points: "+200" },
        { name: "Referred friend makes first purchase", points: "+500" },
      ],
    },
    {
      title: "LOYALTY REWARDS",
      color: "text-yellow-400",
      items: [
        { name: "Make purchase", points: "+100" },
        { name: "Purchase Editor’s Choice product", points: "+50" },
        { name: "Reach $100 cumulative purchases", points: "+250" },
      ],
    },
  ];

  return (
    <div className="min-h-screen text-white px-6 py-4 relative overflow-hidden">
      <h1 className="text-center text-5xl font-extrabold mb-10">
        Your Impact Dashboard
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#0D1B2A]/70 backdrop-blur-lg border border-[#1E293B] rounded-xl p-5 text-center shadow">
            <div className="flex justify-center items-center gap-1 mb-1">
              <Compass className="text-emerald-400 w-5 h-5" />
              <h3 className="text-emerald-400 font-medium">Discovery Score</h3>
            </div>
            <p className="text-4xl font-bold mb-1">{scores.discovery}</p>
            <p className="text-gray-400 text-xs">
              Activity, curiosity, and exploration across the platform
            </p>
          </div>

          <div className="bg-[#0D1B2A]/70 backdrop-blur-lg border border-[#1E293B] rounded-xl p-5 text-center shadow">
            <div className="flex justify-center items-center gap-1 mb-1">
              <Users className="text-emerald-400 w-5 h-5" />
              <h3 className="text-emerald-400 font-medium">Engagement Score</h3>
            </div>
            <p className="text-4xl font-bold mb-1">{scores.engagement}</p>
            <p className="text-gray-400 text-xs">
              Profile completion and initial platform engagement
            </p>
          </div>
        </div>

        {/* Center Impact Score */}
        <BackgroundGradient className="rounded-[22px] ">
          <div className="bg-[#0D1B2A]/70 backdrop-blur-lg border border-[#1E293B] rounded-xl p-18 flex flex-col justify-center items-center shadow">
            {" "}
            <Heart className="text-emerald-400 w-5 h-5 mb-1" />{" "}
            <h3 className="text-emerald-400 font-medium">Impact Score</h3>{" "}
            <p className="text-5xl font-extrabold mt-1">{scores.impact}</p>{" "}
            <p className="text-gray-300 text-sm mt-1">Total Points</p>{" "}
          </div>
        </BackgroundGradient>
        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#0D1B2A]/70 backdrop-blur-lg border border-[#1E293B] rounded-xl p-5 text-center shadow">
            <div className="flex justify-center items-center gap-1 mb-1">
              <Share2 className="text-emerald-400 w-5 h-5" />
              <h3 className="text-emerald-400 font-medium">Influence Score</h3>
            </div>
            <p className="text-4xl font-bold mb-1">{scores.influence}</p>
            <p className="text-gray-400 text-xs">
              Community growth through shares and referrals
            </p>
          </div>

          <div className="bg-[#0D1B2A]/70 backdrop-blur-lg border border-[#1E293B] rounded-xl p-5 text-center shadow">
            <div className="flex justify-center items-center gap-1 mb-1">
              <ShoppingCart className="text-emerald-400 w-5 h-5" />
              <h3 className="text-emerald-400 font-medium">Loyalty Score</h3>
            </div>
            <p className="text-4xl font-bold mb-1">{scores.loyalty}</p>
            <p className="text-gray-400 text-xs">
              Purchases and repeat engagement
            </p>
          </div>
        </div>
      </div>

      {/* Rewards Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 pb-0">
        {rewards.map((reward, index) => (
          <div
            key={index}
            className="bg-[#0D1B2A]/70 backdrop-blur-lg border border-[#1E293B] rounded-xl p-5 shadow"
          >
            <h3 className={`font-bold mb-3 ${reward.color}`}>{reward.title}</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              {reward.items.map((item, i) => (
                <li key={i} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="text-emerald-400 font-semibold">
                    {item.points}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
