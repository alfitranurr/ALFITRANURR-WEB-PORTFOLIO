import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ProfileIMG from "../../assets/images/Heading/Profile Picture.png"; // Import the image

interface TopSectionProps {
  name: string;
  profileImage?: string; // This can remain optional
}

// Variants for typewriter animation
const letterVariants = {
  hidden: { opacity: 0, x: -20 }, // Start slightly to the left
  visible: { opacity: 1, x: 0 }, // Move to original position
  exit: { opacity: 0, x: 20 }, // Exit to the right
};

const TopSection: React.FC<TopSectionProps> = ({
  name,
  profileImage = ProfileIMG,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateText = async () => {
      const allLetters = name.split(""); // Split into individual characters, including spaces
      const letterDuration = 0.1; // Duration for each letter transition
      const delayPerLetter = 0.05; // Delay between letters

      // Infinite animation loop
      const animateLetter = async () => {
        // Show each letter from left to right
        for (let i = 0; i < allLetters.length; i++) {
          await controls.start((index) => {
            if (index === i) {
              return {
                opacity: 1,
                x: 0,
                transition: { duration: letterDuration, ease: "easeInOut" },
              };
            }
            return {};
          });
          await new Promise((resolve) =>
            setTimeout(resolve, delayPerLetter * 1000)
          );
        }

        // Pause for 2 seconds after the name is fully displayed
        await new Promise((resolve) => setTimeout(resolve, 3000)); // 2000ms = 2 seconds

        // Hide each letter from right to left
        for (let i = allLetters.length - 1; i >= 0; i--) {
          await controls.start((index) => {
            if (index === i) {
              return {
                opacity: 0,
                x: 20,
                transition: { duration: letterDuration, ease: "easeInOut" },
              };
            }
            return {};
          });
          await new Promise((resolve) =>
            setTimeout(resolve, delayPerLetter * 1000)
          );
        }

        // Restart the animation
        animateLetter();
      };

      animateLetter();
    };

    animateText();
  }, [controls, name]);

  return (
    <div className="text-center text-white mt-27">
      {/* Bingkai Foto Lingkaran */}
      <div className="mb-6 flex justify-center">
        <motion.div
          className="w-36 h-36 rounded-full overflow-hidden border-4 border-white bg-gray-200"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <svg
              className="w-full h-full text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 15"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          )}
        </motion.div>
      </div>

      <h1 className="text-2xl font-light">
        Hello, I<span className="text-[var(--warna3-color)]">'</span>m
      </h1>

      {/* Typewriter Effect for h2 */}
      <h2 className="text-2xl font-semibold mt-2">
        <span className="inline-block">
          {name.split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block text-white"
              custom={index}
              variants={letterVariants}
              initial="hidden"
              animate={controls}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              style={{ minWidth: letter === " " ? "0.5em" : "auto" }} // Ensure spaces are visible
            >
              {letter === " " ? "\u00A0" : letter}{" "}
              {/* Use non-breaking space for visibility */}
            </motion.span>
          ))}
        </span>
      </h2>

      <div className="border-t border-white w-full max-w-[85%] my-4 mx-auto"></div>

      <p className="text-lg font-light mt-4 mb-45">
        Data Enthusiast | Digital Marketing Enthusiast
      </p>
    </div>
  );
};

export default TopSection;
