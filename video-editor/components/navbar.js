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
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 lg:py-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between">
            {/* Left spacer */}
            <div className="w-32 lg:w-40"></div>

            {/* Center navigation */}
            <div className="flex items-center justify-center flex-1">
              <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-full px-6 py-3 lg:px-8 lg:py-4 shadow-lg">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.id)}
                      className="text-white/60 hover:text-white font-normal text-sm lg:text-base transition-all duration-300 ease-out whitespace-nowrap"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right CTA button */}
            <div className="w-32 lg:w-40 flex justify-end">
              <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-full shadow-lg">
                <a
                  href="https://calendly.com/rajpurohitmohit954/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 lg:px-8 lg:py-4 text-white/60 hover:text-white text-sm lg:text-base font-normal transition-all duration-300 whitespace-nowrap"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between">
            {/* Mobile menu button - moved to left */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="backdrop-blur-md bg-black/30 border border-white/10 rounded-full p-2.5 shadow-lg"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white/60" />
              ) : (
                <Menu className="w-5 h-5 text-white/60" />
              )}
            </button>

            {/* Empty center for alignment */}
            <div></div>

            {/* Book a Call button - on the right */}
            <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-full shadow-lg">
              <a
                href="https://calendly.com/rajpurohitmohit954/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2.5 text-white/60 hover:text-white text-sm font-normal transition-all duration-300 whitespace-nowrap"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute top-20 left-4 right-4"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-6 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.id)}
                      className="w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg font-normal text-base transition-all duration-200"
                      // initial={{ opacity: 0,}}
                      // animate={{ opacity: 1, }}
                      // transition={{ delay: index * 0.1 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
