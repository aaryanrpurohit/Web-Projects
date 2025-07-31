"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.section
        initial={{
          y: -500,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative overflow-hidden bg-[#222222] rounded-b-3xl px-4 py-8 mx-2 sm:mx-6 md:mx-11 lg:px-20 md:py-12 content-center flex flex-col md:flex-row items-center gap-6 md:gap-10"
      >
        {/* Image */}
        <motion.img
          initial={{
            x: 500,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease:"easeInOut"
          }}
          className="absolute w-32 sm:w-40 md:w-64 lg:w-80 top-[15%] sm:top-[20%] md:top-[10%] right-4 sm:right-8 lg:right-20 pointer-events-none opacity-90 md:opacity-100"
          src="/Linkcoreg.png"
          alt="Image 1"
          width={400}
          height={400}
        />

        {/* Text Content */}
        <div className="z-10 max-w-xl text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight flex flex-col text-white">
            <span>Your Personalized Link</span>
            <div className="flex items-center justify-center md:justify-start content-center gap-2 md:gap-3">
              <span className="text-[#741fd9]">Page </span>
              <motion.span
                className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-gray-400"
                animate={{ width: ["0ch", "10ch", "0ch"] }}
                transition={{
                  delay: 1.5,
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                  ease: "easeInOut",
                }}
              >
                for Everything
              </motion.span>
            </div>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 px-4 md:px-0">
            Share all your content, links, and profiles from one beautifully{" "}
            <br className="hidden lg:block" />
            designed bio page.
          </p>
          <motion.button
            initial={{
              y: 1000,
            }}
            animate={{
              y:0,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease:"easeInOut"
            }}
            className="hover:scale-105 duration-100 p-3 sm:p-3.5 px-8 sm:px-10 mt-6 cursor-pointer bg-[#662bc4] rounded-xl text-white font-medium text-sm sm:text-base"
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>

      <section className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 mt-12 md:mt-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-center md:text-left">
          <span className="text-[#741fd9] font-bold">Link </span>
          <span>page in 3 steps</span>
        </h2>
        <div className="flex flex-col md:flex-row mt-6 gap-4 sm:gap-6 md:gap-7">
          <div className="bg-[#121213] w-full md:w-1/3 rounded-xl flex flex-col gap-4 sm:gap-6 md:gap-7 p-4 sm:p-5">
            <img
              className="w-8 sm:w-10 md:w-12"
              src="https://img.icons8.com/?size=50&id=84898&format=png&color=6523c0"
              alt="Profile"
              width={40}
            />
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Personalize Your Profile</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Upload your photo, set your name, and write a short, snappy bio. Your online presence starts with your story.
              </p>
            </div>
          </div>
          <div className="bg-[#121213] w-full md:w-1/3 rounded-xl flex flex-col gap-4 sm:gap-6 md:gap-7 p-4 sm:p-5">
            <img
              className="w-8 sm:w-10 md:w-12"
              src="https://img.icons8.com/?size=100&id=ci7vwMOzcK0P&format=png&color=6523c0"
              alt="Links"
              width={40}
            />
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Add Your Links</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Paste your important links — YouTube, Instagram, website, shop, or anything else.
              </p>
            </div>
          </div>
          <div className="bg-[#121213] w-full md:w-1/3 rounded-xl flex flex-col gap-4 sm:gap-6 md:gap-7 p-4 sm:p-5">
            <img
              className="w-8 sm:w-10 md:w-12"
              src="https://img.icons8.com/?size=100&id=u7Xh1lT96OHA&format=png&color=6523c0"
              alt="Edit"
              width={40}
            />
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Design It Your Way</h3>
              <p className="text-sm sm:text-base text-gray-300">
               Choose themes, colors, and layouts — see changes live
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
