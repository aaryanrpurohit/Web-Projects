"use client";

import { motion } from "motion/react";

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
        className="relative overflow-hidden bg-[#222222] rounded-b-3xl px-4 py-12 mx-11 md:px-20  content-center flex flex-col md:flex-row items-center gap-10"
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
          className="absolute w-48 md:w-80 top-[50%] md:top-[10%] right-20 pointer-events-none"
          src="/Linkcoreg.png"
          alt="Image 1"
          width={400}
          height={400}
        />

        {/* Text Content */}
        <div className="z-10 max-w-xl ">
          <h2 className="text-xl md:text-5xl font-bold leading-tight flex flex-col text-white">
            <span>Your Personalized Link</span>
            <div className="flex items-center content-center gap-3">
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
          <p className="mt-4 text-xs md:text-lg">
            Share all your content, links, and profiles from one beautifully{" "}
            <br className="hidden md:block" />
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
            className="hover:scale-105 duration-100 p-3.5 px-10 mt-6 cursor-pointer bg-[#662bc4] rounded-xl"
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>

      <section className="mx-20 mt-20">
        <h2 className="text-xl md:text-[40px] font-semibold">
          <span className="text-[#741fd9] font-bold">Link </span>
          <span>page in 3 steps</span>
        </h2>
        <div className="flex mt-6 m-5 gap-7">
          <div className="bg-[#121213] w-1/3 min-h-1/3 rounded-xl flex flex-col gap-7 p-5">
            <img
              className=""
              src="https://img.icons8.com/?size=50&id=84898&format=png&color=6523c0"
              alt="Profile"
              width={40}
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold">Personalize Your Profile</h3>
              <p className="">
                Upload your photo, set your name, and write a short, snappy bio. Your online presence starts with your story.
              </p>
            </div>
          </div>
          <div className="bg-[#121213] w-1/3 min-h-1/3 rounded-xl flex flex-col gap-7 p-5">
            <img
              className=""
              src="https://img.icons8.com/?size=100&id=ci7vwMOzcK0P&format=png&color=6523c0"
              alt="Links"
              width={40}
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold">Add Your Links</h3>
              <p className="">
                Paste your important links — YouTube, Instagram, website, shop, or anything else.
              </p>
            </div>
          </div>
          <div className="bg-[#121213] w-1/3 min-h-1/3 rounded-xl flex flex-col gap-7 p-5">
            <img
              className=""
              src="https://img.icons8.com/?size=100&id=u7Xh1lT96OHA&format=png&color=6523c0"
              alt="Edit"
              width={40}
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold">Design It Your Way</h3>
              <p className="">
               Choose themes, colors, and layouts — see changes live
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
