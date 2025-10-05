"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function GlassmorphicNavbar() {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for better glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-full px-6 py-3 transition-all duration-300 ${
            scrolled ? "shadow-xl" : "shadow-lg"
          }`}
          style={{
            background: scrolled
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center"
                style={{
                  boxShadow: "0 4px 15px rgba(139, 92, 246, 0.3)",
                }}
              >
                <img src="/assets/images/logo.png" alt="C" />
              </div>
              <span
                className="font-bold text-xl hidden sm:inline bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400"
              >
                Chattrix
              </span>
            </motion.div>

            {/* Navigation Links - Hidden on mobile, shown on tablet+ */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-sm font-medium transition-colors duration-200 hover:text-purple-400"
                style={{ color: "var(--color-text, #ffffff)" }}
              >
                Features
              </a>
              <a
                href="#about"
                className="text-sm font-medium transition-colors duration-200 hover:text-purple-400"
                style={{ color: "var(--color-text, #ffffff)" }}
              >
                About
              </a>
              <a
                href="#Support"
                className="text-sm font-medium transition-colors duration-200 hover:text-purple-400"
                style={{ color: "var(--color-text, #ffffff)" }}
              >
                Support
              </a>
            </div>

            {/* CTA Button */}
            <motion.a
              href="/join"
              className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(99, 102, 241, 0.8))",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 15px rgba(139, 92, 246, 0.3)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 20px rgba(139, 92, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
