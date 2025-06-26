"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const shapes = {
  pyramid: (
    <polygon points="50,0 0,100 100,100" stroke="#8f00ff" strokeWidth="2" fill="none" />
  ),
  cube: (
    <>
      <rect x="10" y="10" width="60" height="60" stroke="#00f0ff" strokeWidth="2" />
      <line x1="10" y1="10" x2="30" y2="0" stroke="#00f0ff" />
      <line x1="70" y1="10" x2="90" y2="0" stroke="#00f0ff" />
      <line x1="90" y1="0" x2="90" y2="60" stroke="#00f0ff" />
      <line x1="90" y1="60" x2="70" y2="70" stroke="#00f0ff" />
    </>
  ),
  diamond: (
    <polygon points="50,0 100,50 50,100 0,50" stroke="#00fff7" strokeWidth="2" fill="none" />
  ),
  link: (
    <path
      d="M10 14L14 10M7 17C5.895 17 5 16.105 5 15V13C5 11.895 5.895 11 7 11H9M15 7C16.105 7 17 7.895 17 9V11C17 12.105 16.105 13 15 13H13"
      stroke="#00ffcc"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  sheet: (
    <>
      <rect x="10" y="10" width="80" height="80" stroke="#00ffc3" strokeWidth="2" />
      <line x1="10" y1="30" x2="90" y2="30" stroke="#00ffc3" strokeWidth="1.5" />
      <line x1="10" y1="50" x2="90" y2="50" stroke="#00ffc3" strokeWidth="1.5" />
      <line x1="10" y1="70" x2="90" y2="70" stroke="#00ffc3" strokeWidth="1.5" />
    </>
  ),
};

const positionClass = {
  "top-left": "top-30 left-30",
  "top-right": "top-30 right-30",
  "bottom-left": "bottom-30 left-30",
  "bottom-right": "bottom-34 right-34",
  "top-center": "top-36 left-1/2 -translate-x-1/2",
};


export const GlowyShape = ({
  type = "pyramid",
  position = "top-left",
  className,
}) => {
  return (
    <motion.svg
      className={clsx(
        "absolute w-20 h-20 glow pointer-events-none",
        positionClass[position],
        className
      )}
      viewBox="0 0 100 100"
      fill="none"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {shapes[type]}
    </motion.svg>
  );
};
