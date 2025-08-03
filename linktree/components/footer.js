"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
        <div className="w-screen border-[#211e29] border"></div>
      <div className="w-full bg-[#080411] text-white py-8 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex justify-between items-center">
            {/* Left Section - Logo and Social Icons */}
            <div className="flex items-center gap-16">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img
                  src="/images/logo.png"
                  alt="Linkcore Logo"
                  className="w-8 h-8 cursor-pointer hover:rotate-90 transition-transform duration-1000 ease-linear"
                />
                <span className="text-2xl font-semibold">LinkCore.</span>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/aaryanrpurohit"
                  className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/ioihllwu.json"
                    trigger="hover"
                    colors="primary:#ebe6ef,secondary:#000000"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                </a>
                <a
                  href="https://twitter.com/aaryanrpurohit"
                  className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/cbxaxfqs.json"
                    trigger="hover"
                    colors="primary:#242424,secondary:#ebe6ef"
                    style={{
                      width: "35px",
                      height: "35px",
                      filter: "invert(1)",
                    }}
                  ></lord-icon>
                </a>
                <a
                  href="https://linkedin.com/in/aaryanrpurohit"
                  className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/nwqudhei.json"
                    trigger="hover"
                    colors="primary:#ffffff,secondary:#30c9e8"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                </a>
              </div>
            </div>

            {/* Center Section - Email Signup */}
            <div className="flex items-center">
              <div className="flex bg-gray-800 rounded-full p-1 min-w-[400px]">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-6 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
                <Link href="/signup">
                  <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 font-medium">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Section - Copyright */}
            <div className="text-right">
              <p className="text-gray-300 text-sm">
                © 2025 Linkcore by{" "}
                <span className="text-purple-400 font-medium">
                  Aaryan Rajpurohit
                </span>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
