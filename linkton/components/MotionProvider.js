"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

export const MotionProvider = ({ children }) => {
  const pathname = usePathname();

  return (
    <MotionConfig transition={{ type: "spring", stiffness: 100, damping: 20 }}>
      <AnimatePresence mode="wait">
        <motion.div key={pathname} className="contents">
          {children}
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
};


