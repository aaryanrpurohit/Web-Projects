"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-screen border-[#211e29] border"></div>
      <div className="w-full bg-[#080411] text-white py-6 md:py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-4">

            {/* Top Row on Mobile: Logo and Social Icons */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center lg:justify-start gap-4 sm:gap-6 lg:gap-16">
              {/* Logo */}
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <img
                  src="/images/logo.png"
                  alt="Linkcore Logo"
                  className="w-8 h-8 cursor-pointer hover:rotate-90 transition-transform duration-1000 ease-linear"
                />
                <span className="text-xl md:text-2xl font-semibold">LinkCore.</span>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 justify-center sm:justify-start">
                <a
                  href="https://github.com/aaryanrpurohit"
                  className="w-10 h-10 md:w-11 md:h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/ioihllwu.json"
                    trigger="hover"
                    colors="primary:#ebe6ef,secondary:#000000"
                    style={{ width: "35px", height: "35px" }}
                  ></lord-icon>
                </a>
                <a
                  href="https://twitter.com/aaryanrpurohit"
                  className="w-10 h-10 md:w-11 md:h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/cbxaxfqs.json"
                    trigger="hover"
                    colors="primary:#242424,secondary:#ebe6ef"
                    style={{
                      width: "30px",
                      height: "30px",
                      filter: "invert(1)",
                    }}
                  ></lord-icon>
                </a>
                <a
                  href="https://linkedin.com/in/aaryanrpurohit"
                  className="w-10 h-10 md:w-11 md:h-11 bg-blue-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/nwqudhei.json"
                    trigger="hover"
                    colors="primary:#ffffff,secondary:#30c9e8"
                    style={{ width: "35px", height: "35px" }}
                  ></lord-icon>
                </a>
              </div>
            </div>

            {/* Middle Section - Email Signup */}
            <div className="flex items-center justify-center lg:justify-start order-3 lg:order-2">
              <div className="flex bg-gray-800 rounded-full p-1 w-full max-w-[400px] min-w-0">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 md:px-6 py-2 md:py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm md:text-base min-w-0"
                />
                <Link href="/signup">
                  <button className="px-4 md:px-8 py-2 md:py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 font-medium text-sm md:text-base whitespace-nowrap">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>

            {/* Bottom Section - Copyright */}
            <div className="text-center lg:text-right order-2 lg:order-3">
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                © 2025 Linkcore by{" "}
                <span className="text-purple-400 font-medium">
                  Aaryan Rajpurohit
                </span>
                .<br className="sm:hidden" /> All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
