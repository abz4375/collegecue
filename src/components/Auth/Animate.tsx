'use client'
import React from "react";
import { motion } from "framer-motion";

const Animate = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <motion.div
      className=" "
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 0 }} // Add an exit animation
      transition={{ duration: 0.8, ease: "easeInOut" }} // Adjust duration and easing
    >
      {children}
    </motion.div>
  );
};

export default Animate;