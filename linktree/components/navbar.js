'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react'; // ✅ correct import

const Navbar = () => {
  return (
    <nav className="z-50 fixed top-4 left-1/2 -translate-x-1/2 backdrop-blur-md bg-black/10 rounded-xl w-[95%] max-w-7xl mx-auto px-4 py-2 flex items-center justify-between shadow-md">
      {/* Logo */}
      <motion.img
        src="/logonamenav.png"
        alt="Linkcore Logo"
        width={150}
        height={30}
        className="hover:scale-105 transition-transform duration-200"
      />

      {/* Navigation Buttons */}
      <div className="flex gap-3">
        <Link href="/signin" passHref>
          <button className="px-5 py-2 rounded-xl bg-[#020005] hover:bg-[#8855ff] transition-colors duration-300 text-sm sm:text-base">
            Sign In
          </button>
        </Link>
        <Link href="/signup" passHref>
          <button className="px-5 py-2 rounded-xl bg-[#1c1a1e] hover:bg-[#8855ff] transition-colors duration-300 text-sm sm:text-base">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
