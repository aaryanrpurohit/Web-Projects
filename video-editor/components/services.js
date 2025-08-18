"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Scissors, Palette, Volume2, Zap } from "lucide-react";

const ServicesSection = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const taglineRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, threshold: 0.3 });
  const gridInView = useInView(gridRef, { once: true, threshold: 0.1 });
  const taglineInView = useInView(taglineRef, { once: true, threshold: 0.3 });

  const services = [
    {
      id: 1,
      icon: Scissors,
      title: "Video Editing",
      description:
        "Keep only what matters, trim clean edits, and sync audio & video perfectly."
    },
    {
      id: 2,
      icon: Play,
      title: "Storytelling",
      description:
        "Craft smooth transitions, perfect pacing, and strong hooks to engage instantly."
    },
    {
      id: 3,
      icon: Zap,
      title: "Motion & Animation",
      description:
        "Bring depth with 3D, bold cinematic titles, and branded captions."
    },
    {
      id: 4,
      icon: Palette,
      title: "Color & Visuals",
      description:
        "Deliver polished looks, cinematic grading, and consistent shots every time."
    },
    {
      id: 5,
      icon: Volume2,
      title: "Sound Design",
      description:
        "Enhance with clean audio, emotional soundtracks, and immersive effects."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-500 via-gray-300 to-white bg-clip-text text-transparent tracking-tight">
            Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-16 leading-relaxed max-w-2xl mx-auto font-light bg-gradient-to-r from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
            From cinematic edits to flawless sound design — we transform raw footage into powerful stories that{" "}
            <span className="font-bold">captivate, engage, and inspire action.</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0px 0px 30px rgba(200,200,200,0.15)"
                }}
                className="rounded-2xl relative bg-gradient-to-br from-gray-400/40 via-gray-700/30 to-black p-[1px] transition-all"
              >
                <div className="bg-[#0d0d0d] rounded-2xl p-8 h-[280px] flex flex-col">
                  {/* Icon Box */}
                  <div className="w-14 h-14 mb-6 rounded-xl bg-[#1a1a1a] flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-gray-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Tagline */}
        <motion.div
          ref={taglineRef}
          initial={{ opacity: 0, y: 30 }}
          animate={taglineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-lg leading-tight bg-gradient-to-r from-gray-500 via-gray-300 to-white bg-clip-text text-transparent tracking-tight">
            Professional video editing crafted to make your brand{" "}
            <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent font-bold">
              stand out, connect, and leave a lasting impression.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
