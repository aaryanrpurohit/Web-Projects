import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function GlassmorphicNavbar({ onNavigate }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Work', id: 'work' },
        { name: 'Services', id: 'services' },
        { name: 'About Me', id: 'about' },
        { name: 'Contact', id: 'contact' }
    ];


    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 py-4 mt-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2
            }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
                <div className="flex items-center justify-between">
                    <div className="relative flex items-center justify-between w-full">
                        {/* Empty left space for balance - hidden on mobile */}
                        <div className="hidden lg:block lg:w-32"></div>

                        <div className="flex items-center justify-center flex-1">
                            <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-full px-4 py-3 sm:px-8 sm:py-4 lg:px-13 lg:py-5 shadow-lg">
                                <div className="flex items-center space-x-3 sm:space-x-6 lg:space-x-8">

                                    {navItems.map((item) => (
                                        <button
                                            key={item.name}
                                            onClick={() => onNavigate && onNavigate(item.id)}  // check so it won’t break if missing
                                            className="text-white/60 hover:text-white font-normal text-sm sm:text-base lg:text-[16px] transition-all duration-300 ease-out whitespace-nowrap"
                                        >
                                            {item.name}
                                        </button>
                                    ))}

                                </div>
                            </div>
                        </div>

                        {/* Book a Call Button at Right End */}
                        <div className="ml-2 sm:ml-4 lg:w-40 lg:flex lg:justify-end">
                            <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-full shadow-lg">
                                <a
                                    href="https://calendly.com/rajpurohitmohit954/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4 text-white/60 hover:text-white text-sm sm:text-base lg:text-[16px] font-normal transition-all duration-300 whitespace-nowrap"
                                >
                                    Book a Call
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
