import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface RiseDownProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
}

const RiseDown: React.FC<RiseDownProps> = ({
  isOpen,
  children,
  className = "",
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  // Measure content height when children or visibility changes
  useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        if (contentRef.current && isOpen) {
          setContentHeight(contentRef.current.scrollHeight);
        }
      });

      resizeObserver.observe(contentRef.current);

      // Set initial height
      if (isOpen) {
        setContentHeight(contentRef.current.scrollHeight);
      }

      return () => {
        if (contentRef.current) {
          resizeObserver.disconnect();
        }
      };
    }
  }, [children, isOpen]);

  // Better animation variants
  const variants = {
    open: {
      height: contentHeight,
      opacity: 1,
      transition: {
        height: {
          type: "spring",
          stiffness: 300,
          damping: 100,
          duration: 20,
        },
        opacity: {
          duration: 0.25,
          delay: 0.1,
        },
      },
    },
    closed: {
      height: 0,
      opacity: 1,
      transition: {
        height: {
          type: "spring",
          stiffness: 300,
          damping: 100,
          duration: 20,
        },
        opacity: {
          duration: 0.25,
          delay: 0.1,
        },
      },
    },
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      className={`overflow-hidden will-change-transform ${className}`}
      style={{
        // Add hardware acceleration for mobile devices
        WebkitOverflowScrolling: "touch",
        transform: "translateZ(0)",
      }}
    >
      <div ref={contentRef} className={`text-white text-sm mb-4 px-2 py-1`}>
        {children}
      </div>
    </motion.div>
  );
};

export default RiseDown;
