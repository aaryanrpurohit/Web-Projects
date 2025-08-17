"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function VideosPortfolio() {
    const containerRef = useRef();
    const longFormRef = useRef();
    const shortFormRef = useRef();
    const [visibleVideos, setVisibleVideos] = useState(new Set());
    const iframeRefs = useRef({});

    const longFormVideos = [
        {
            id: '4o1c97NSils',
            title: 'Long Form Video 1',
            thumbnail: `https://img.youtube.com/vi/4o1c97NSils/maxresdefault.jpg`,
            url: 'https://www.youtube.com/embed/4o1c97NSils'
        },
        {
            id: 'vFLmJ6FY1eg',
            title: 'Long Form Video 2',
            thumbnail: `https://img.youtube.com/vi/vFLmJ6FY1eg/maxresdefault.jpg`,
            url: 'https://www.youtube.com/embed/vFLmJ6FY1eg'
        },
        {
            id: 'HKvNXjs_1DM',
            title: 'Long Form Video 3',
            thumbnail: `https://img.youtube.com/vi/HKvNXjs_1DM/maxresdefault.jpg`,
            url: 'https://www.youtube.com/embed/HKvNXjs_1DM'
        },
        {
            id: 'pBCpOpG6c5Q',
            title: 'Long Form Video 4',
            thumbnail: `https://img.youtube.com/vi/pBCpOpG6c5Q/maxresdefault.jpg`,
            url: 'https://www.youtube.com/embed/pBCpOpG6c5Q'
        },
        {
            id: '9vF3IeZgsYE',
            title: 'Long Form Video 5',
            thumbnail: `https://img.youtube.com/vi/9vF3IeZgsYE/maxresdefault.jpg`,
            url: 'https://www.youtube.com/embed/9vF3IeZgsYE'
        }
    ];

    const shortFormVideos = [
        {
            id: 'XLkBN3PiSgU',
            title: 'Short Form Video 1',
            thumbnail: `https://img.youtube.com/vi/XLkBN3PiSgU/maxresdefault.jpg`,
            url: 'https://www.youtube.com/embed/XLkBN3PiSgU'
        },
        {
            id: 'LJJ46GgqLeA',
            title: 'Short Form Video 2',
            thumbnail: `https://img.youtube.com/vi/LJJ46GgqLeA/maxresdefault.jpg`,
            url: 'https://www.youtube.com/embed/LJJ46GgqLeA'
        },
        {
            id: 'tqODaGBxmK0',
            title: 'Short Form Video 3',
            thumbnail: `https://img.youtube.com/vi/tqODaGBxmK0/maxresdefault.jpg`,
            url: 'https://www.youtube.com/embed/tqODaGBxmK0'
        }
    ];

    const [selectedVideo, setSelectedVideo] = useState(null);


    const VideoCard = ({ video, index, isShort = false, className = "" }) => {
        const isVisible = visibleVideos.has(video.id);

        return (
            <div
                className={`group cursor-pointer ${className} ${isShort ? 'flex justify-center' : ''}`}
                onClick={() => setSelectedVideo(video)}
                data-video-id={video.id}
            >
                <div className={`relative overflow-hidden rounded-lg sm:rounded-xl bg-gray-900 shadow-xl sm:shadow-2xl transition-all duration-500 ${isShort ? 'aspect-[9/16] w-full max-w-[280px] sm:max-w-xs mx-auto' : 'aspect-video w-full h-[200px] sm:h-[250px] lg:h-[300px]'} ${isVisible ? 'ring-1 sm:ring-2 ring-red-500/30 shadow-red-500/20' : ''}`}>
                    <iframe
                        key={`${video.id}-${isVisible ? 'play' : 'pause'}`}
                        src={isVisible
                            ? `${video.url}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&modestbranding=0&rel=0&iv_load_policy=3&fs=0&disablekb=1&showinfo=0&start=0&enablejsapi=1&playsinline=1`
                            : `${video.url}?autoplay=0&mute=1&loop=1&playlist=${video.id}&controls=0&modestbranding=0&rel=0&iv_load_policy=3&fs=0&disablekb=1&showinfo=0&start=0&enablejsapi=1&playsinline=1`
                        }
                        title={video.title}
                        className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
            </div>
        );
    };

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
                        src={`${video.url}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&playsinline=1`}
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
                    <h2 className="long-form-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-8 sm:mb-12 lg:mb-16 text-center tracking-tight px-2 z-50">
                        Long Form
                    </h2>

                    {/* First three videos - responsive grid */}
                    <div className="long-form-videos grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mb-8 sm:mb-10 lg:mb-12">
                        {longFormVideos.slice(0, 3).map((video, index) => (
                            <VideoCard key={video.id} video={video} index={index} className="long-form-video" />
                        ))}
                    </div>

                    {/* Last two videos centered - responsive */}
                    <div className="long-form-videos-bottom flex justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 max-w-6xl w-full">
                            {longFormVideos.slice(3).map((video, index) => (
                                <VideoCard key={video.id} video={video} index={index} className="long-form-video-bottom" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Short Form Section */}
                <div ref={shortFormRef}>
                    <h2 className="short-form-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-8 sm:mb-12 lg:mb-16 text-center tracking-tight px-2">
                        Short Form
                    </h2>
                    <div className="short-form-videos flex justify-center px-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 max-w-5xl w-full">
                            {shortFormVideos.map((video, index) => (
                                <VideoCard key={video.id} video={video} index={index} isShort={true} className="short-form-video" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
                )}
            </AnimatePresence>
        </div>
    );
}
