"use client"
import React, { useEffect, useRef, useState } from 'react';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const textLines = [
    "Hi, I'm Mohit — a passionate video editor helping creators, YouTubers, and brands transform raw footage into content that's polished, engaging, and memorable.",
    "With expertise in video editing, motion graphics, sound design, and color grading, I create visuals that connect emotionally and keep viewers hooked.",
    "Whether it’s fast-paced reels or cinematic storytelling, my focus is on precision, creativity, and making every second count."
  ];

  const highlight = (text, i) => (
    <span
      key={i}
      className="font-bold bg-gradient-to-r from-gray-300 via-gray-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(255,255,255,0.6)]"
    >
      {text}
    </span>
  );

  return (
    <section
      ref={sectionRef}
      className="h-auto bg-black py-20 px-6 flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center h-auto">
          {/* Left Column - Image */}
          <div
            className={`transition-all duration-1200 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative group flex justify-center">
              <img
                src="/MyImage.jpg"
                alt="Mohit - Video Editor"
                className="w-[85%] md:w-[70%] lg:w-[90%] h-auto rounded-2xl object-cover shadow-lg"
              />
              {/* Hover glow effect */}
              {/* <div className="absolute -inset-2 bg-gradient-to-r from-gray-600/20 via-white/20 to-gray-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" /> */}
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6">
            {textLines.map((line, index) => (
              <div
                key={index}
                className={`transition-all duration-800 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <p className="text-xl md:text-2xl lg:text-[1.7rem] leading-relaxed text-gray-300">
                  {line
                    .replace("video editor", "§video editor§")
                    .replace("creators", "§creators§")
                    .replace("YouTubers", "§YouTubers§")
                    .replace("brands", "§brands§")
                    .replace("motion graphics", "§motion graphics§")
                    .replace("sound design", "§sound design§")
                    .replace("color grading", "§color grading§")
                    .split(/(§.*?§)/g)
                    .map((part, i) =>
                      part.startsWith("§")
                        ? highlight(part.replace(/§/g, ""), i)
                        : <span key={i}>{part}</span>
                    )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
