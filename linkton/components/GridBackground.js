"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

export const GridBackground = ({ className }) => {
  return (
    <motion.div
      className={clsx(
        "absolute inset-0 -z-10 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:16px_16px]",
        className
      )}
      animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};
