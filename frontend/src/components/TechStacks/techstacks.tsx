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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExcel,
  faFilePowerpoint,
} from "@fortawesome/free-solid-svg-icons";
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
  {
    name: "Microsoft Excel",
    icon: (
      <FontAwesomeIcon icon={faFileExcel} className="text-green-600 text-xl" />
    ),
  },
  {
    name: "Microsoft PowerPoint",
    icon: (
      <FontAwesomeIcon
        icon={faFilePowerpoint}
        className="text-orange-600 text-xl"
      />
    ),
  },
];

const techStacksInfinite = [...Array(4)].flatMap(() => techStacks);

const InfiniteScroll = () => {
  return (
    <section
      id="tech-stacks"
      className="flex justify-center mt-6 px-4 pt-[20px]"
    >
      <div className="max-w-6xl w-full p-4 overflow-hidden flex flex-col items-center text-center mx-auto">
        <h1 className="text-lg font-semibold text-center mb-6 w-full">
          Tech Stacks That I Have Used
        </h1>

        <div className="relative w-full overflow-hidden flex flex-col items-center">
          {/* Left edge gradient brush */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--base-color)] to-transparent z-10"></div>

          {/* Right edge gradient brush */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--base-color)] to-transparent z-10"></div>

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
              {techStacksInfinite.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-1 rounded-full px-4 py-1 border-2 border-gray-500 transition-all hover:border-white"
                  style={{
                    display: "inline-flex",
                    whiteSpace: "nowrap",
                    minWidth: "auto",
                  }}
                >
                  <div className="text-2xl">{tech.icon}</div>
                  <span className="text-xs">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteScroll;
