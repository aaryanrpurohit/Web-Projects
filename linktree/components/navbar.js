"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <nav className="z-50 fixed left-1/2 -translate-x-1/2 backdrop-blur-md bg-black/10 rounded-xl w-[95%] max-w-7xl mx-auto px-4 p-5 flex items-center justify-between shadow-md border border-white/10">

      <Link href="/" className="flex justify-center items-center gap-1.5">
        <motion.img
          src="/images/logo.png"
          alt="Linkcore Logo"
          width={35}
          height={35}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          animate={isHovering ? { rotate: 360 } : { rotate: 0 }}
          transition={{
            repeat: isHovering ? Infinity : 0,
            duration: 0.6,
            ease: "linear",
          }}
          className="cursor-pointer"
        />
        <div className="mt-0.5 text-2xl">LinkCore</div>
      </Link>

      {/* Navigation Buttons */}
      <div className="flex gap-2 sm:gap-4">
        <Link href="/signin">
          <button className="px-4 py-2 sm:px-5 sm:py-2.5 backdrop-blur-md bg-black/10 rounded-lg hover:bg-[#8855ff] transition duration-300 text-sm sm:text-base">
            Sign In
          </button>
        </Link>
        <Link href="/signup">
          <button className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg backdrop-blur-md bg-black/10 hover:bg-[#8855ff] transition duration-300 text-sm sm:text-base">
            Join Linkcore
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
