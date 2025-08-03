"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="z-50 fixed left-1/2 -translate-x-1/2 backdrop-blur-md bg-black/20 border border-white/20 rounded-xl w-[95%] max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 flex items-center justify-between shadow-lg">

        {/* Logo Section */}
        <Link href="/" className="flex justify-center items-center gap-1.5 flex-shrink-0">
          <motion.img
            src="/images/logo.png"
            alt="Linkcore Logo"
            width={30}
            height={30}
            className="sm:w-[35px] sm:h-[35px] cursor-pointer"
            whileHover={{
              rotate: 90
            }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
          />
          <div className="mt-0.5 text-lg sm:text-xl md:text-2xl font-semibold text-white">
            LinkCore.
          </div>
        </Link>

        {/* Desktop Navigation Buttons */}
        <div className="hidden sm:flex gap-2 md:gap-4">
          <Link href="/signin">
            <button className="cursor-pointer px-3 py-2 md:px-5 md:py-2.5 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg hover:bg-[#8855ff] hover:border-[#8855ff]/50 transition-all duration-300 text-sm md:text-base text-white font-medium">
              Sign In
            </button>
          </Link>
          <Link href="/signup">
            <button className="cursor-pointer px-3 py-2 md:px-5 md:py-2.5 rounded-lg backdrop-blur-md bg-[#8855ff]/80 border border-[#8855ff] hover:bg-[#8855ff] hover:scale-105 transition-all duration-300 text-sm md:text-base text-white font-medium">
              Join Linkcore
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 cursor-pointer z-60"
          aria-label="Toggle mobile menu"
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white transition-all duration-300"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white transition-all duration-300"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white transition-all duration-300"
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`sm:hidden fixed top-20 left-1/2 -translate-x-1/2 w-[95%] max-w-sm z-40 ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="backdrop-blur-md bg-black/30 border border-white/20 rounded-xl p-4 shadow-xl">
          <div className="flex flex-col gap-3">
            <Link
              href="/signin"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <button className="w-full cursor-pointer px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg hover:bg-[#8855ff] hover:border-[#8855ff]/50 transition-all duration-300 text-base text-white font-medium">
                Sign In
              </button>
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <button className="w-full cursor-pointer px-4 py-3 rounded-lg backdrop-blur-md bg-[#8855ff]/80 border border-[#8855ff] hover:bg-[#8855ff] transition-all duration-300 text-base text-white font-medium">
                Join Linkcore
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
