// ../components/TopSection/topsection.tsx
import React from "react";
import { motion } from "framer-motion";
import PMMKarangkates from "../../assets/images/Certificate/CommitteeOrganization/Certificate - PMM 101 Karangkates - 2024-1.png";

interface TopSectionProps {
  name: string;
  profileImage?: string;
}

const TopSection: React.FC<TopSectionProps> = ({ name, profileImage }) => {
  return (
    <div className="text-center text-white mt-28">
      {/* Bingkai Foto Lingkaran */}
      <div className="mb-6 flex justify-center">
        <motion.div
          className="w-36 h-36 rounded-full overflow-hidden border-4 border-white" // Changed from w-32 h-32 to w-36 h-36
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img
            src={profileImage || PMMKarangkates} // Gunakan PMMKarangkates sebagai fallback
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <h1 className="text-2xl font-light">
        Hello, I<span className="text-[var(--warna3-color)]">'</span>m
      </h1>

      <h2 className="text-2xl font-semibold mt-2">
        {name.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-2">
            {word.split("").map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block text-white"
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        ))}
      </h2>

      <div className="border-t border-white w-full max-w-[85%] my-4 mx-auto"></div>

      <p className="text-lg font-light mt-4 mb-45">
        Data Enthusiast | Digital Marketing Enthusiast
      </p>
    </div>
  );
};

export default TopSection;
