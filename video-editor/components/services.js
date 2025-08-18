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
        { name: "Cutting", description: "Remove unwanted sections." },
        { name: "Trimming", description: "Keep essential moments." },
        { name: "Syncing", description: "Align audio and visuals." }
      ]
    },
    {
      id: 2,
      icon: Play,
      title: "Storytelling",
      features: [
        { name: "Flow", description: "Natural engaging rhythm." },
        { name: "Pacing", description: "Perfect energy balance." },
        { name: "Hooks", description: "Grab attention instantly." }
      ]
    },
    {
      id: 3,
      icon: Zap,
      title: "Motion & Animation",
      features: [
        { name: "3D Animation", description: "Immersive effects." },
        { name: "Titles", description: "Dynamic text elements." },
        { name: "Captions", description: "Clear subtitles." }
      ]
    },
    {
      id: 4,
      icon: Palette,
      title: "Color & Visual Enhancement",
      features: [
        { name: "Correction", description: "Fix lighting and color balance." },
        { name: "Grading", description: "Add cinematic tones and mood." },
        { name: "Matching", description: "Maintain visual consistency." }
      ]
    },
    {
      id: 5,
      icon: Volume2,
      title: "Sound Design",
      features: [
        { name: "Cleanup", description: "Remove noise for crisp audio." },
        { name: "Music", description: "Curated soundtracks that fit." },
        { name: "Effects", description: "Immersive audio layers." }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
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
            Crafting compelling visuals with precision, creativity, and storytelling — your vision, perfectly edited.
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
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-[#161616] rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-700/10"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#161616] border-2 border-gray-700 flex items-center justify-center group-hover:border-gray-600 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-gray-500 group-hover:text-gray-300 transition-colors duration-300" />
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
                        {/* Blue Dot */}
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-2 shadow-sm shadow-blue-400/50"></div>
                        <div className="flex-1">
                          <span className="text-gray-300 font-semibold">
                            {feature.name}
                          </span>
                          <span className="text-gray-500 text-sm ml-1">
                            — {feature.description}
                          </span>
                        </div>
                      </div>
                    ))}
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
            Professional video editing solutions designed to make your content{' '}
            <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent font-bold">unforgettable</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
