import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function GlassmorphicNavbar({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Work", id: "work" },
    { name: "Services", id: "services" },
    { name: "About Me", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    onNavigate && onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 py-4 bg-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Left spacer */}
            <div className="w-32"></div>

            {/* Center navigation */}
            <div className="flex items-center justify-center">
              <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-full px-8 py-4 shadow-lg">
                <div className="flex items-center space-x-8">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.id)}
                      className="relative text-white/80 hover:text-white text-sm font-medium transition-all duration-300 group overflow-hidden"
                    >
                      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                        {item.name}
                      </span>
                      <span className="absolute top-0 left-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                        {item.name}
                      </span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA button */}
            <div className="w-34 flex justify-end">
              <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-full shadow-lg">
                <a
                  href="https://calendly.com/rajpurohitmohit954/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-4 text-white/80 hover:text-white text-sm font-medium transition-all duration-300"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Navigation */}
          <div className="lg:hidden flex items-center justify-between">
            {/* Menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 backdrop-blur-md bg-black/30 border border-white/10 rounded-full p-2.5 shadow-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white/80" />
                ) : (
                  <Menu className="w-5 h-5 text-white/80" />
                )}
              </div>
            </button>

            {/* CTA button */}
            <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-full shadow-lg">
              <a
                href="https://calendly.com/rajpurohitmohit954/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2.5 text-white/80 hover:text-white text-sm font-medium transition-all duration-300"
              >
                Book Call
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 left-0 w-80 max-w-[60vw] h-full bg-black/40 backdrop-blur-xl border-r border-white/10 z-40 lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="text-white font-semibold text-xl"></div>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 py-8">
                  <nav className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavClick(item.id)}
                        className="w-full text-left px-6 py-4 text-white/80 hover:text-white hover:bg-white/5 text-lg font-medium transition-all duration-200 border-l-2 border-transparent hover:border-white/30"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </nav>
                </div>

                {/* Footer CTA */}
                <div className="p-6 border-t border-white/10">
                  <motion.a
                    href="https://calendly.com/rajpurohitmohit954/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-white text-black px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:bg-white/90"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book a Call
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
