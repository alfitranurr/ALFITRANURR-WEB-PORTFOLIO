import * as React from "react";
import { useState, useEffect } from "react";

interface ProgressBarProps {
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ className = "" }) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Handle scroll progress
  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-0.5 bg-white z-20 transition-all duration-800 ${className}`}
      style={{ width: `${scrollProgress}%` }}
    ></div>
  );
};

export default ProgressBar;
