"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, Scissors, Palette, Volume2, Zap } from 'lucide-react';

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
    features: [
      { name: "Cutting", description: "Keep only what matters." },
      { name: "Trimming", description: "Sharp, clean edits." },
      { name: "Syncing", description: "Audio and video in sync." }
    ]
  },
  {
    id: 2,
    icon: Play,
    title: "Storytelling",
    features: [
      { name: "Flow", description: "Smooth, seamless scenes." },
      { name: "Pacing", description: "Perfect story rhythm." },
      { name: "Hooks", description: "Grab attention fast." }
    ]
  },
  {
    id: 3,
    icon: Zap,
    title: "Motion & Animation",
    features: [
      { name: "3D", description: "Depth and impact." },
      { name: "Titles", description: "Bold cinematic text." },
      { name: "Captions", description: "Clear, branded subs." }
    ]
  },
  {
    id: 4,
    icon: Palette,
    title: "Color & Visuals",
    features: [
      { name: "Correction", description: "Clean, polished look." },
      { name: "Grading", description: "Cinematic tones." },
      { name: "Matching", description: "Consistent shots." }
    ]
  },
  {
    id: 5,
    icon: Volume2,
    title: "Sound Design",
    features: [
      { name: "Cleanup", description: "Noise-free audio." },
      { name: "Music", description: "Emotional soundtracks." },
      { name: "Effects", description: "Immersive layers." }
    ]
  }
];



  // Animation container + stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Cards now ONLY fade in (no y movement)
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
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="group relative rounded-xl  bg-gradient-to-r from-gray-600  to-black"
              >
                <div className="bg-[#161616] rounded-xl p-8 h-full transition-all duration-300">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#161616] border-2 border-gray-700 flex items-center justify-center group-hover:border-gray-600 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-gray-400 group-hover:text-gray-200 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent">
                      {service.title}
                    </h3>

                    {/* Feature List */}
                    <div className="space-y-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          {/* Dot */}
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white mt-2 shadow-sm shadow-blue-400/50"></div>
                          <div className="flex-1">
                            <span className="text-gray-300 font-semibold">{feature.name}</span>
                            <span className="text-gray-500 text-sm ml-1">— {feature.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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
            <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent font-bold">stand out, connect, and leave a lasting impression.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
