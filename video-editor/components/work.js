"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideosPortfolio() {
    const containerRef = useRef();
    const longFormRef = useRef();
    const shortFormRef = useRef();
    const [selectedVideo, setSelectedVideo] = useState(null);

    // ✅ Long Form videos (new video added here)
    const longFormVideos = [
        { id: "vFLmJ6FY1eg", title: "Long Form Video 2", url: "https://www.youtube.com/embed/vFLmJ6FY1eg" },
        { id: "HKvNXjs_1DM", title: "Long Form Video 3", url: "https://www.youtube.com/embed/HKvNXjs_1DM" },
        { id: "4o1c97NSils", title: "Long Form Video 1", url: "https://www.youtube.com/embed/4o1c97NSils" },
        { id: "9vF3IeZgsYE", title: "Long Form Video 5", url: "https://www.youtube.com/embed/9vF3IeZgsYE" },
        { id: "pBCpOpG6c5Q", title: "Long Form Video 4", url: "https://www.youtube.com/embed/pBCpOpG6c5Q" },
        { id: "r3-j099YSVM", title: "New Long Form Video", url: "https://www.youtube.com/embed/r3-j099YSVM" } // ✅ added
    ];

    // ✅ Short Form videos unchanged
    const shortFormVideos = [
        { id: "XLkBN3PiSgU", title: "Short Form Video 1", url: "https://www.youtube.com/embed/XLkBN3PiSgU" },
        { id: "LJJ46GgqLeA", title: "Short Form Video 2", url: "https://www.youtube.com/embed/LJJ46GgqLeA" },
        { id: "tqODaGBxmK0", title: "Short Form Video 3", url: "https://www.youtube.com/embed/tqODaGBxmK0" }
    ];

    // Video Card
    const VideoCard = ({ video, isShort = false }) => (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className={`group cursor-pointer ${isShort ? "flex justify-center" : ""}`}
            onClick={() => setSelectedVideo(video)}
        >
            <div
                className={`relative overflow-hidden rounded-lg sm:rounded-xl bg-gray-900 shadow-xl sm:shadow-2xl transition-all duration-500 ${isShort
                        ? "aspect-[9/16] w-full max-w-[280px] sm:max-w-xs mx-auto"
                        : "aspect-video w-full h-[200px] sm:h-[250px] lg:h-[300px]"
                    }`}
            >
                <iframe
                    src={`${video.url}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=1&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&playsinline=1`}
                    title={video.title}
                    className="w-full h-full rounded-lg transition-transform duration-500 group-hover:scale-105"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                <style jsx>{`
          .group iframe {
            pointer-events: none;
          }
          .group:hover iframe {
            pointer-events: auto;
          }
        `}</style>
            </div>
        </motion.div>
    );

    // Modal
    const VideoModal = ({ video, onClose }) => (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className="relative w-full max-w-6xl mx-auto aspect-video"
                    onClick={(e) => e.stopPropagation()}
                >
                    <iframe
                        src={`${video.url}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&playsinline=1`}
                        title={video.title}
                        className="w-full h-full rounded-lg sm:rounded-xl shadow-2xl"
                        frameBorder="0"
                        allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                    <motion.button
                        onClick={onClose}
                        className="absolute -top-8 sm:-top-12 right-0 text-white hover:text-gray-300 text-xl sm:text-2xl font-light w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        ✕
                    </motion.button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );

    return (
        <div ref={containerRef} className="min-h-screen bg-black py-8 sm:py-12 lg:py-20 px-3 sm:px-4 lg:px-8">
            <div className="max-w-8xl mx-auto">
                {/* Long Form Section */}
                <div ref={longFormRef} className="mb-16 sm:mb-20 lg:mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center leading-tight bg-gradient-to-r from-gray-500 via-gray-300 to-white bg-clip-text text-transparent tracking-tight px-2 z-50">
                        Long Form
                    </h2>
                    {/* ✅ Removed two-grid, now all videos in a single grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {longFormVideos.map((video) => (
                            <VideoCard key={video.id} video={video} />
                        ))}
                    </div>
                </div>

                {/* Short Form Section */}
                <div ref={shortFormRef}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center leading-tight bg-gradient-to-r from-gray-500 via-gray-300 to-white bg-clip-text text-transparent tracking-tight px-2 z-50">
                        Short Form
                    </h2>
                    <div className="flex justify-center px-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
                            {shortFormVideos.map((video) => (
                                <VideoCard key={video.id} video={video} isShort={true} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />}
            </AnimatePresence>
        </div>
    );
}
