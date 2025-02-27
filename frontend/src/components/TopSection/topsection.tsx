// ../components/TopSection/topsection.tsx
import React from "react";
import { motion } from "framer-motion";

interface TopSectionProps {
  name: string;
}

const TopSection: React.FC<TopSectionProps> = ({ name }) => {
  return (
    <div className="text-center text-white mt-45">
      <h1 className="text-2xl font-light">
        Hello, I<span style={{ color: "var(--warna3-color)" }}>'</span>m
      </h1>

      <h2 className="text-2xl font-semibold mt-2">
        {name.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-2">
            {word.split("").map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                style={{ color: "white" }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        ))}
      </h2>

      <div
        className="border-t border-white w-full my-4 mx-auto"
        style={{ maxWidth: "85%" }}
      ></div>

      <p className="text-lg font-light mt-4 mb-70">
        Data Enthusiast | Digital Marketing Enthusiast
      </p>
    </div>
  );
};

export default TopSection;
