import React from 'react';
import { motion } from 'framer-motion';

export default function InfoSection() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main content container */}
      <motion.div
        className="relative z-10 mt-10 text-center max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.3
        }}
      >
        {/* Main heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight bg-gradient-to-r from-gray-500 via-gray-300 to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.5
          }}
        >
          Video editing,
          <br />
          the efficient way
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl mb-16 leading-relaxed max-w-2xl mx-auto font-light bg-gradient-to-r from-gray-500 via-gray-300 to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.7
          }}
        >
          Edits that grab attention, tell your story, and keep viewers watching.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 1.0
          }}
        >
          <a
            href="https://calendly.com/rajpurohitmohit954/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 sm:px-10 sm:py-5 bg-white hover:bg-gray-100 text-black font-semibold text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Let's Work Together
          </a>
        </motion.div>

        {/* Creator credit */}
        <motion.div
          className="mt-12 text-gray-600 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 1.2
          }}
        >
          Video Editor · Mohit Rajpurohit
        </motion.div>
      </motion.div>

      {/* Subtle gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-gray-900/20 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-balckrounded-full blur-3xl"></div>
    </div>
  );
}
