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
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const textLines = [
    "Hi, I'm Mohit — a video editor who believes every frame has the power to tell a story.",
    "I help creators, YouTubers, and brands turn raw footage into videos that connect, inspire, and keep viewers watching.",
    "Whether it's a short reel or a long-form story, I focus on making every second count."
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black py-20 px-6 flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-800/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div
            className={`transition-all duration-1200 delay-300 ${
              isVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative group">
              {/* Gradient border container */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-white to-gray-400 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:blur-none" />

              {/* Image container */}
              <div className="relative bg-black rounded-xl p-1">
                <img
                  src="/MyImage.jpg"
                  alt="Mohit - Video Editor"
                  className="w-full h-[450px] object-cover rounded-xl"
                />
              </div>

              {/* Hover glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-600/20 via-white/20 to-gray-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6">
            {textLines.map((line, index) => (
              <div
                key={index}
                className={`transition-all duration-800 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: `${400 + index * 200}ms`
                }}
              >
                {index === 0 ? (
                  // First line with special styling for name and role
                  <p className="text-xl md:text-2xl leading-relaxed">
                    <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent font-semibold">
                      Hi, I'm Mohit
                    </span>
                    <span className="text-gray-300"> — a </span>
                    <span className="font-bold bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent">
                      video editor
                    </span>
                    <span className="text-gray-300"> who believes every frame has the power to tell a story.</span>
                  </p>
                ) : index === 1 ? (
                  // Second line with highlighted roles
                  <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                    I help{' '}
                    <span className="font-bold bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent">
                      creators, YouTubers, and brands
                    </span>
                    {' '}turn raw footage into videos that connect, inspire, and keep viewers watching.
                  </p>
                ) : (
                  // Third line - standard styling
                  <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                    {line}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
