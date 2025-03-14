import * as React from "react";
import { useState, useEffect, useRef } from "react";

interface ProgressBarProps {
  className?: string;
  color?: string;
  height?: string;
  easing?: string;
  rounded?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  className = "",
  color = "bg-white",
  height = "h-0.5",
  easing = "ease-out",
  rounded = true,
}) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const targetProgressRef = useRef<number>(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Calculate the current scroll position as a percentage
  const calculateScrollPercentage = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    return totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;
  };

  // Update target progress value on scroll
  const handleScroll = () => {
    targetProgressRef.current = calculateScrollPercentage();
  };

  // Smooth animation loop using requestAnimationFrame
  const animateProgress = (time: number) => {
    if (previousTimeRef.current === null) {
      previousTimeRef.current = time;
    }

    const deltaTime = time - (previousTimeRef.current || 0);
    previousTimeRef.current = time;

    // Smoothly interpolate between current and target values
    // Lower value = smoother but slower transition
    const smoothingFactor = 0.1;
    const newProgress =
      scrollProgress +
      (targetProgressRef.current - scrollProgress) *
        Math.min(smoothingFactor * (deltaTime / 16.67), 1);

    if (Math.abs(newProgress - scrollProgress) > 0.01) {
      setScrollProgress(newProgress);
    }

    requestRef.current = requestAnimationFrame(animateProgress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    requestRef.current = requestAnimationFrame(animateProgress);

    // Initialize the progress immediately
    targetProgressRef.current = calculateScrollPercentage();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Adding dependency to trigger re-animation when progress changes
  useEffect(() => {
    if (requestRef.current === null) {
      requestRef.current = requestAnimationFrame(animateProgress);
    }

    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
    };
  }, [scrollProgress]);

  // Get the rounded class based on the prop
  const roundedClass = rounded ? "rounded-full" : "";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
      <div
        ref={progressBarRef}
        className={`${height} ${color} transform-gpu ${roundedClass} ${className}`}
        style={{
          width: `${scrollProgress}%`,
          transition: `transform 50ms ${easing}`,
          transformOrigin: "left center",
          // Add a slight shadow for better visibility
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
