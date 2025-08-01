'use client';
import React from 'react';
import { motion } from 'motion/react'; // ✅ Correct motion import
import Link from 'next/link';
import Background from '@/components/GlowingBackgroundWithParticles';

const Introduction = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {/* Background animation */}
      <Background />

      {/* Foreground content */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex flex-col justify-center items-center px-4 text-center gap-6 min-h-screen"
      >
        {/* Logo */}
        <div className="flex gap-2 items-center mb-4">
          <img src="/logo.png" alt="Logo" className="w-9 h-9" />
          <span className="text-sm text-gray-300">Link Sharing Platform</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-4">
          <div>Connect, Share,</div>
          <div>and Grow with Linkcore</div>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg max-w-xl text-[#aeaeaf] mb-6 px-4">
          Build your personal link hub, connect with followers, and grow your brand — all from one simple platform.
        </p>

        {/* Button */}
        <Link href="/signup" passHref>
          <button className="px-6 py-3 text-sm sm:text-base rounded-lg bg-[#1c1a1e] hover:bg-[#8855ff] transition-colors duration-300">
            Get Started
          </button>
        </Link>
      </motion.section>
    </div>
  );
};

export default Introduction;
