"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

const GetInTouch = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const contactDetailsRef = useRef(null);
  const socialsRef = useRef(null);

  const [copied, setCopied] = useState(null);

  // Intersection Observer animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");

            setTimeout(() => headingRef.current?.classList.add("animate-fade-in-up"), 200);
            setTimeout(() => subtextRef.current?.classList.add("animate-fade-in-up"), 400);

            setTimeout(() => {
              if (contactDetailsRef.current) {
                const details = contactDetailsRef.current.querySelectorAll(".contact-item");
                details.forEach((detail, index) => {
                  setTimeout(() => detail.classList.add("animate-fade-in-up"), index * 150);
                });
              }
            }, 600);

            setTimeout(() => {
              if (socialsRef.current) {
                const socials = socialsRef.current.querySelectorAll(".social-item");
                socials.forEach((social, index) => {
                  setTimeout(() => social.classList.add("animate-scale-in"), index * 100);
                });
              }
            }, 1000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Copy handler
  const handleCopy = (value, label) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "rajpurohitmohit954@gmail.com",
      href: "mailto:rajpurohitmohit954@gmail.com",
      copy: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 89550 91513",
      href: "tel:+918955091513",
      copy: true,
    },
    {
      icon: MapPin,
      label: "Address",
      value: "1P14, Old Housing Board, Pali, Rajpurohit, India",
      href: null,
      copy: false,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rajpurohitmohit/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/dawid_pietrasiak/",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@MohitRajpurohitofficial",
      label: "YouTube",
    },
  ];

  return (
    <div className="bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .gradient-text {
          background: linear-gradient(135deg, #9ca3af, #d1d5db, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-underline {
          position: relative;
        }
        .gradient-underline::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background: linear-gradient(135deg, #374151, #6b7280, #9ca3af);
          border-radius: 1px;
          opacity: 0.6;
        }
        .contact-item,
        .social-item {
          opacity: 0;
        }
        .glow-hover {
          transition: all 0.3s ease;
        }
        .glow-hover:hover {
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
          transform: translateY(-2px);
          border-color: #4b5563;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <section ref={sectionRef} className="opacity-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-12 text-center lg:text-left">
              <div className="space-y-6">
                <h2
                  ref={headingRef}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text gradient-underline opacity-0"
                >
                  Get in Touch
                </h2>
                <p
                  ref={subtextRef}
                  className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed opacity-0 max-w-lg mx-auto lg:mx-0"
                >
                  Let’s create something{" "}
                  <span className="font-semibold text-white">amazing</span> together.
                </p>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 1.0,
                }}
              >
                <a
                  href="https://calendly.com/rajpurohitmohit954/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-white hover:bg-gray-100 text-black font-semibold text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Let's Connect
                </a>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              {/* Contact Details */}
              <div ref={contactDetailsRef} className="space-y-6">
                {contactDetails.map((detail, index) => {
                  const IconComponent = detail.icon;
                  return (
                    <div key={index} className="contact-item">
                      <div
                        onClick={() =>
                          detail.copy && handleCopy(detail.value, detail.label)
                        }
                        className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:bg-zinc-800/50 glow-hover group cursor-pointer"
                      >
                        <div className="p-2 sm:p-3 rounded-lg bg-zinc-800 border border-zinc-700 group-hover:bg-zinc-700 group-hover:scale-105 transition-all duration-300">
                          {copied === detail.label ? (
                            <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                          ) : (
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-white" />
                          )}
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-gray-400 text-xs sm:text-sm font-medium">
                            {detail.label}
                          </p>
                          <p className="text-white text-sm sm:text-base md:text-lg font-semibold truncate">
                            {copied === detail.label
                              ? `${detail.label} Copied!`
                              : detail.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Connect with me
                </h3>
                <div ref={socialsRef} className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-item w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-zinc-700 hover:border-zinc-600 group"
                        title={social.label}
                      >
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GetInTouch;
