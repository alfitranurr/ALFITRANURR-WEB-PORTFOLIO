import { FaReact, FaNodeJs, FaPython, FaJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiGoogleanalytics,
  SiDbeaver,
  SiPostgresql,
  SiGooglecolab,
  SiMysql,
  SiTableau,
  SiGooglebigquery,
} from "react-icons/si";
import { motion } from "framer-motion";

const techStacks = [
  { name: "Python", icon: <FaPython className="text-blue-500 text-xl" /> },
  {
    name: "Looker Studio",
    icon: <SiGoogleanalytics className="text-red-500 text-xl" />,
  },
  { name: "DBeaver", icon: <SiDbeaver className="text-blue-400 text-xl" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-500 text-xl" />,
  },
  {
    name: "Google Colab",
    icon: <SiGooglecolab className="text-orange-400 text-xl" />,
  },
  { name: "React", icon: <FaReact className="text-blue-400 text-xl" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-cyan-400 text-xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-xl" />,
  },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600 text-xl" /> },
  { name: "Tableau", icon: <SiTableau className="text-blue-600 text-xl" /> },
  {
    name: "Google BigQuery",
    icon: <SiGooglebigquery className="text-blue-500 text-xl" />,
  },
  { name: "New Tech", icon: <FaReact className="text-pink-500 text-xl" /> },
];

const techStacksInfinite = [...Array(4)].flatMap(() => techStacks);

const InfiniteScroll = () => {
  return (
    <div className="bg-[var(--base-color)] w-full p-4 rounded-xl shadow-md text-white max-w-6xl mx-auto mt-6 overflow-hidden flex flex-col items-center text-center">
      <h2 className="text-lg font-semibold text-center mb-6 w-full">
        Tech Stacks That I Have Used
      </h2>

      <div className="relative w-full overflow-hidden flex flex-col items-center">
        {[0, 1, 2].map((row) => (
          <motion.div
            key={row}
            className="flex space-x-4 mb-3"
            animate={{
              x: row === 0 ? [0, -1000] : row === 1 ? [0, 2000] : [0, -1500],
            }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 60,
            }}
            style={{
              display: "flex",
              flexWrap: "nowrap",
              willChange: "transform",
            }}
          >
            {/* Limiting the number of items rendered per row */}
            {techStacksInfinite.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-1 rounded-full px-4 py-2 border-2 border-gray-500 transition-all hover:border-white"
                style={{
                  display: "inline-flex",
                  whiteSpace: "nowrap",
                  minWidth: "auto",
                }}
              >
                <div className="text-3xl">{tech.icon}</div>
                <span className="text-xs">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
