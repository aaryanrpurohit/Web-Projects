"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Shield, Zap, Users, Gift, Globe } from 'lucide-react';

// ===== ANIMATION VARIANTS =====
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotateY: -90,
    z: -200
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    z: 0,
    transition: {
      type: "spring",
      duration: 1.2,
      bounce: 0.4,
      opacity: { duration: 0.6 }
    }
  }
};

const headingVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const iconFloat = {
  animate: {
    y: [0, -6, 0],
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// ===== FLOATING BACKGROUND SHAPE COMPONENT =====
const FloatingShape = ({ delay = 0, duration = 35, size = 350, color, blur = 100, top, left, opacity = 0.15 }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      background: `radial-gradient(circle, ${color}, transparent)`,
      filter: `blur(${blur}px)`,
      top,
      left,
      opacity
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 20, 0],
      scale: [1, 1.1, 1],
      rotate: [0, 10, 0]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

// ===== FEATURE CARD COMPONENT =====
const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    variants={itemVariants}
    className="relative rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-500 hover:shadow-2xl group overflow-hidden"
    style={{
      background: 'var(--color-surface, rgba(255, 255, 255, 0.05))',
      backdropFilter: 'blur(20px)',
      border: '1px solid var(--color-border, rgba(255, 255, 255, 0.1))',
      transformStyle: 'preserve-3d',
      perspective: 1000
    }}
    whileHover={{
      scale: 1.03,
      y: -8,
      rotateX: 2,
      rotateY: 2,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    }}
  >
    {/* Animated gradient background on hover */}
    <motion.div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
      style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15), transparent 60%)',
      }}
    />

    {/* Icon with floating animation */}
    <motion.div
      className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
      style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(99, 102, 241, 0.2))',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        boxShadow: '0 8px 32px rgba(139, 92, 246, 0.2)'
      }}
      variants={iconFloat}
      animate="animate"
    >
      <Icon
        className="w-8 h-8"
        style={{ color: 'var(--color-accent, #a78bfa)' }}
      />

      {/* Icon glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%)',
          filter: 'blur(10px)'
        }}
      />
    </motion.div>

    {/* Title */}
    <h3
      className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300"
      style={{ color: 'var(--color-text, #ffffff)' }}
    >
      {title}
    </h3>

    {/* Description */}
    <p
      className="text-base sm:text-lg leading-relaxed"
      style={{ color: 'var(--color-text, rgba(255, 255, 255, 0.75))' }}
    >
      {description}
    </p>

    {/* Bottom accent line */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    />

    {/* Corner decorative elements */}
    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
    <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-indigo-400 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
  </motion.div>
);

// ===== MAIN FEATURES SECTION COMPONENT =====
export default function FeaturesSection() {
  // Features data array
  const features = [
    {
      icon: MessageCircle,
      title: "Real-Time Messaging",
      description: "Instant message delivery with typing indicators and read receipts. Stay connected seamlessly."
    },
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "End-to-end encryption keeps your conversations completely private and secure."
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Blazingly fast with optimized infrastructure. Zero lag, pure speed."
    },
    {
      icon: Users,
      title: "Smart Group Chats",
      description: "Create unlimited groups with polls, media galleries, and powerful admin controls."
    },
    {
      icon: Gift,
      title: "Rich Media Sharing",
      description: "Express yourself with thousands of stickers, GIFs, emojis, and HD media."
    },
    {
      icon: Globe,
      title: "Cross-Platform Sync",
      description: "Seamlessly switch between devices. Start on mobile, continue on desktop."
    }
  ];

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'var(--color-bg, #0a0a0f)',
        color: 'var(--color-text, #ffffff)'
      }}
    >
      {/* ===== ANIMATED BACKGROUND SHAPES ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape
          delay={0}
          duration={40}
          size={450}
          color="rgba(139, 92, 246, 0.25)"
          blur={140}
          top="5%"
          left="5%"
          opacity={0.2}
        />
        <FloatingShape
          delay={5}
          duration={38}
          size={380}
          color="rgba(99, 102, 241, 0.25)"
          blur={130}
          top="50%"
          left="75%"
          opacity={0.18}
        />
        <FloatingShape
          delay={2}
          duration={42}
          size={350}
          color="rgba(168, 85, 247, 0.2)"
          blur={120}
          top="70%"
          left="10%"
          opacity={0.15}
        />
        <FloatingShape
          delay={3}
          duration={36}
          size={320}
          color="rgba(147, 51, 234, 0.2)"
          blur={110}
          top="20%"
          left="60%"
          opacity={0.12}
        />
        <FloatingShape
          delay={6}
          duration={44}
          size={400}
          color="rgba(79, 70, 229, 0.22)"
          blur={125}
          top="85%"
          left="70%"
          opacity={0.16}
        />
        <FloatingShape
          delay={1}
          duration={39}
          size={330}
          color="rgba(124, 58, 237, 0.2)"
          blur={115}
          top="40%"
          left="40%"
          opacity={0.14}
        />

        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.15), transparent 60%)'
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.12, 0.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* ===== MAIN CONTENT CONTAINER ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">

        {/* ===== SECTION HEADING ===== */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingVariants}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 sm:mb-6">
            Powerful{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600">
              Features
            </span>
          </h2>

          {/* Subheading */}
          <motion.p
            className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ opacity: 0.8 }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 0.8, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Everything you need for seamless communication and connection.
          </motion.p>
        </motion.div>

        {/* ===== FEATURES GRID ===== */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, var(--color-bg, #0a0a0f), transparent)'
        }}
      />
    </section>
  );
}
