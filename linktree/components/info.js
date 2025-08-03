"use client"
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

const Info = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Brand logos data using your actual image paths
  const brands = [
    { name: "Google", src: "/images/google.png", alt: "google" },
    { name: "Microsoft", src: "/images/microsoft.png", alt: "microsoft" },
    { name: "Apple", src: "/images/apple.png", alt: "apple", invert: true },
    { name: "Meta", src: "/images/meta.png", alt: "meta" },
    { name: "Instagram", src: "/images/instagram.png", alt: "instagram" },
    { name: "Netflix", src: "/images/netflix.png", alt: "netflix" },
  ];

  // Calculate positions for logos in a horizontal line
  const centerX = 400;
  const centerY = 280;
  const brandY = 100;
  const startX = 150;
  const spacing = 100;

  const brandPositions = brands.map((brand, index) => ({
    ...brand,
    x: startX + index * spacing,
    y: brandY,
  }));

  // Generate smooth curved path - simplified and more natural
  const generateSmoothPath = (x1, y1, x2, y2) => {
    const midY = y1 + (y2 - y1) * 0.7;
    const controlX = x1 + (x2 - x1) * 0.3;

    return `M ${x1} ${y1}
            Q ${x1} ${midY} ${controlX} ${midY}
            Q ${x2} ${midY} ${x2} ${y2}`;
  };

  const AnimatedBrandNetwork = () => {
    if (!isClient) {
      return (
        <div className="w-full h-96 flex items-center justify-center bg-black">
          <div className="animate-pulse text-white">Loading...</div>
        </div>
      );
    }

    return (
      <div className="w-full flex justify-center items-center mt-10 bg-black rounded-xl overflow-hidden">
        <div className="relative w-full max-w-5xl h-96">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            {/* Define gradients and filters */}
            <defs>
              <linearGradient
                id="flowGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
                <stop offset="30%" stopColor="#4F46E5" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#06B6D4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
              </linearGradient>

              <linearGradient
                id="returnGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
                <stop offset="30%" stopColor="#06B6D4" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>

              <filter
                id="glowEffect"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Animated gradient for flowing effect */}
              <linearGradient
                id="animatedGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0">
                  <animate
                    attributeName="stop-opacity"
                    values="0;1;0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.8">
                  <animate
                    attributeName="stop-opacity"
                    values="0.8;1;0.8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0">
                  <animate
                    attributeName="stop-opacity"
                    values="0;1;0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>

            {/* Static connection lines (always visible) */}
            {brandPositions.map((brand, index) => {
              const pathToCenter = generateSmoothPath(
                brand.x,
                brand.y,
                centerX,
                centerY
              );

              return (
                <g key={`connection-${brand.name}`}>
                  {/* Base static path - always visible */}
                  <path
                    d={pathToCenter}
                    stroke="#374151"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.4"
                  />

                  {/* Phase 1: Brand border glow starts */}
                  <motion.circle
                    cx={brand.x}
                    cy={brand.y}
                    r="27"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    opacity="0"
                    animate={{
                      opacity: [0, 1, 1, 0],
                      scale: [0.9, 1, 1, 0.9],
                    }}
                    transition={{
                      duration: 1,
                      delay: index * 0.2,
                      repeat: Infinity,
                      repeatDelay: 6,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Phase 2: Flowing line - brands to center (fully visible) */}
                  <motion.path
                    d={pathToCenter}
                    stroke="#4F46E5"
                    strokeWidth="3"
                    fill="none"
                    filter="url(#glowEffect)"
                    opacity="0"
                    animate={{
                      opacity: [0, 0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 8,
                      delay: index * 0.5 + 6,
                      repeat: Infinity,
                      repeatDelay: 10,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Phase 3: Traveling pulse along the path */}
                  <motion.circle
                    r="4"
                    fill="#06B6D4"
                    filter="url(#glowEffect)"
                    opacity="0"
                  >
                    <animateMotion
                      dur="3s"
                      begin={`${index * 0.2 + 5}s`}
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href={`#path-${index}`} />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      dur="1.5s"
                      begin={`${index * 0.2 + 5}s`}
                      repeatCount="indefinite"
                    />
                  </motion.circle>

                  {/* Hidden path for animateMotion */}
                  <path
                    id={`path-${index}`}
                    d={pathToCenter}
                    fill="none"
                    stroke="none"
                  />

                  {/* Phase 5: Return flow - center to brands */}
                  <motion.path
                    d={pathToCenter}
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                    filter="url(#glowEffect)"
                    opacity="0"
                    animate={{
                      opacity: [0, 0, 0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 8,
                      delay: index * 0.4 + 12,
                      repeat: Infinity,
                      repeatDelay: 20,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Phase 6: Return pulse */}
                  <motion.circle
                    r="3"
                    fill="#8B5CF6"
                    filter="url(#glowEffect)"
                    opacity="0"
                  >
                    <animateMotion
                      dur="4s"
                      begin={`${index * 0.4 + 8}s`}
                      repeatCount="indefinite"
                      rotate="auto"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      dur="4s"
                      begin={`${index * 0.4 + 8}s`}
                      repeatCount="indefinite"
                    />
                  </motion.circle>

                  {/* Reverse path for return animation */}
                  <path
                    id={`reverse-path-${index}`}
                    d={generateSmoothPath(centerX, centerY, brand.x, brand.y)}
                    fill="none"
                    stroke="none"
                  />

                  {/* Phase 7: Brand receives the glow back */}
                  <motion.circle
                    cx={brand.x}
                    cy={brand.y}
                    r="27"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    opacity="0"
                    animate={{
                      opacity: [0, 0, 0, 0, 0, 1, 1, 0],
                      scale: [0.9, 0.9, 0.9, 0.9, 0.9, 1, 1.1, 0.9],
                    }}
                    transition={{
                      duration: 4,
                      delay: index * 0.3 + 11,
                      repeat: Infinity,
                      repeatDelay: 14,
                      ease: "easeInOut",
                    }}
                  />
                </g>
              );
            })}

            {/* Brand logo containers */}
            {brandPositions.map((brand, index) => (
              <motion.g
                key={brand.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Background rectangle */}
                <motion.rect
                  x={brand.x - 25}
                  y={brand.y - 25}
                  width="50"
                  height="50"
                  rx="12"
                  fill="#1F2937"
                  stroke="#374151"
                  strokeWidth="1"
                  className="cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    fill: "#374151",
                    stroke: "#4F46E5",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                />

                {/* Brand logo */}
                <foreignObject
                  x={brand.x - 25}
                  y={brand.y - 25}
                  width="50"
                  height="50"
                  className="cursor-pointer"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <motion.img
                      src={brand.src}
                      alt={brand.alt}
                      className={`cursor-pointer w-8 h-8 object-contain ${
                        brand.invert ? "invert" : ""
                      }`}

                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>
                </foreignObject>
              </motion.g>
            ))}

            {/* Central logo */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {/* Phase 4: Central logo receives all energy and glows intensely */}
              <motion.circle
                cx={centerX}
                cy={centerY}
                r="40"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="3"
                opacity="0"
                animate={{
                  opacity: [0, 0, 0, 0, 1, 1, 1, 1, 0],
                  scale: [1, 1, 1, 1, 1.2, 1.2, 1.2, 1, 1],
                  stroke: [
                    "#06B6D4",
                    "#06B6D4",
                    "#06B6D4",
                    "#06B6D4",
                    "#4F46E5",
                    "#8B5CF6",
                    "#06B6D4",
                    "#06B6D4",
                    "#06B6D4",
                  ],
                }}
                transition={{
                  duration: 7,
                  delay: 0 * 0.6 + 10, // Fixed: replaced 'i' with '0'
                  repeat: Infinity,
                  repeatDelay: 22,
                  ease: "easeOut",
                }}
              />

              {/* Secondary glow ring */}
              <motion.circle
                cx={centerX}
                cy={centerY}
                r="50"
                fill="none"
                stroke="#4F46E5"
                strokeWidth="1"
                opacity="0"
                animate={{
                  opacity: [0, 0, 0, 0, 0.5, 0.8, 0.5, 0.3, 0],
                  scale: [1, 1, 1, 1, 1.1, 1.3, 1.5, 1.7, 1],
                }}
                transition={{
                  duration: 5,
                  delay: 5.5,
                  repeat: Infinity,
                  repeatDelay: 14,
                  ease: "easeOut",
                }}
              />

              {/* Central logo background */}
              <motion.rect
                x={centerX - 30}
                y={centerY - 25}
                width="60"
                height="50"
                rx="12"
                fill="#1F2937"
                stroke="#4F46E5"
                strokeWidth="2"
                className="cursor-pointer"
                animate={{
                  stroke: [
                    "#4F46E5",
                    "#4F46E5",
                    "#4F46E5",
                    "#4F46E5",
                    "#06B6D4",
                    "#8B5CF6",
                    "#4F46E5",
                    "#4F46E5",
                    "#4F46E5",
                  ],
                  strokeWidth: [2, 2, 2, 2, 3, 3, 3, 2, 2],
                }}
                transition={{
                  duration: 5,
                  delay: 5,
                  repeat: Infinity,
                  repeatDelay: 14,
                  ease: "easeInOut",
                }}
              />

              {/* Central logo */}
              <foreignObject
                x={centerX - 30}
                y={centerY - 25}
                width="60"
                height="50"
                className="cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <motion.img
                    src="/images/logo.png"
                    alt="Linkcore Logo"
                    className="w-10 h-8 object-contain"
                    animate={{
                      scale: [1, 1, 1, 1, 1.1, 1.1, 1.1, 1, 1],
                    }}
                    transition={{
                      duration: 5,
                      delay: 5,
                      repeat: Infinity,
                      repeatDelay: 14,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </foreignObject>
            </motion.g>

            {/* Energy particles */}
            {[...Array(6)].map((_, i) => (
              <motion.circle
                key={`particle-${i}`}
                r="2"
                fill="#06B6D4"
                opacity="0"
                animate={{
                  cx: [centerX, centerX + Math.cos((i * Math.PI) / 3) * 80],
                  cy: [centerY, centerY + Math.sin((i * Math.PI) / 3) * 80],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 7,
                  delay: i * 0.6 + 10,
                  repeat: Infinity,
                  repeatDelay: 22,
                  ease: "easeOut",
                }}
              />
            ))}
          </svg>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full min-h-screen flex flex-col gap-16 justify-center items-center px-4 py-16">
      {/* Header */}
      <div className="text-center flex flex-col gap-5 max-w-xl">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
          What Makes Linkcore Great?
        </h4>
        <p className="text-base sm:text-lg text-[#aeaeaf]">
          Simple, modern tools to connect your audience with everything you do.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 px-2 sm:px-6 w-full max-w-7xl">
        {[
          {
            icon: "https://img.icons8.com/?size=30&id=ShxmdGrBKyPw&format=png&color=FFFFFF",
            title: "One Link for Everything",
            description:
              "Collect all your social profiles, websites, and content in one simple page.",
          },
          {
            icon: "https://img.icons8.com/?size=30&id=102595&format=png&color=FFFFFF",
            title: "Customizable Design",
            description:
              "Personalize your page with custom colors, fonts, and layout styles.",
          },
          {
            icon: "https://img.icons8.com/?size=30&id=ZwGNoFXGbt9n&format=png&color=FFFFFF",
            title: "Mobile-Optimized",
            description:
              "Flawless experience across all devices — from pocket to desktop.",
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            className="border border-[#1c1a1e] rounded-lg p-6 flex flex-col gap-6 group cursor-pointer transition-transform hover:scale-[1.03]"
          >
            <div className="w-12 h-12 rounded-lg bg-[#1c1a1e] flex justify-center items-center group-hover:bg-[#8855ff] transition-colors duration-300">
              <img src={feature.icon} alt="icon" className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl sm:text-2xl font-semibold">
                {feature.title}
              </h4>
              <p className="text-sm sm:text-base text-[#aeaeaf]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Brand Network */}
      <AnimatedBrandNetwork />
    </section>
  );
};

export default Info;
