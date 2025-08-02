"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Background from "@/components/GlowingBackgroundWithParticles";

const Introduction = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {/* Background animation */}
      <Background />

      {/* Foreground content */}
      <section className="relative z-20 flex flex-col justify-center items-center px-4 text-center min-h-screen">
        {/* Logo */}
        <motion.div
          animate={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="flex gap-2 items-center mb-6 sm:mb-10"
        >
          <img src="/logo.png" alt="Logo" className="w-8 h-8 sm:w-9 sm:h-9" />
          <span className="text-xs sm:text-sm">Link Sharing Platform</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          animate={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 sm:mb-8"
        >
          <div>Connect, Share,</div>
          <div>and Grow with Linkcore</div>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          animate={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-xl text-[#aeaeaf] mb-8 sm:mb-10 px-2 sm:px-4"
        >
          Build your personal link hub, connect with followers, and grow your
          brand — all from one simple platform.
        </motion.p>

        {/* Button */}
        <Link href="/signup" passHref>
          <motion.button
            animate={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="px-5 py-2 sm:px-6 sm:py-3 border border-[#241f2e] text-sm sm:text-base rounded-lg hover:bg-[#8855ff] transition-colors duration-300"
          >
            Get Started
          </motion.button>
        </Link>
      </section>
    </div>
  );
};

export default Introduction;
