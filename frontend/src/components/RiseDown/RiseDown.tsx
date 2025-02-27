// /components/RiseDown/risedown.tsx
import { motion } from "framer-motion";
import React from "react";

interface RiseDownProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const RiseDown: React.FC<RiseDownProps> = ({ isOpen, children }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden"
    >
      <div className="text-white text-sm mb-4">{children}</div>
    </motion.div>
  );
};

export default RiseDown;
