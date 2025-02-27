import Pantai from "../../../../assets/images/Pantai.png";
import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi"; // Import ikon arrow
import ScrollToTopButton from "../../../../components/ScrollToTopButton/scrolltotopbutton";

const dataVisualizationProjects = [
  {
    id: 1,
    title: "Sales Analytics",
    description:
      "Visualized sales data to provide insights into business performance and trends.",
    image: Pantai,
    tags: ["Infographic"],
  },
  {
    id: 2,
    title: "Customer Insights",
    description:
      "Created visualizations to explore customer demographics and preferences.",
    image: Pantai,
    tags: ["Dashboard"],
  },
  {
    id: 3,
    title: "Market Trends",
    description:
      "Analyzed and visualized market trends to inform strategic decision-making.",
    image: Pantai,
    tags: ["Dashboard"],
  },
  {
    id: 4,
    title: "Financial Data",
    description:
      "Built financial dashboards for easy tracking and monitoring of key metrics.",
    image: Pantai,
    tags: ["Infographic", "Dashboard"],
  },
];

const tagColors = ["bg-[#50577A]", "bg-[#6B728E]"];

const DataVisualization = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isDissolving, setIsDissolving] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [, setIsLoaded] = useState(false); // State to manage loading

  const uniqueTags = [
    ...new Set(dataVisualizationProjects.flatMap((project) => project.tags)),
  ];

  const filteredProjects = selectedTag
    ? dataVisualizationProjects.filter((project) =>
        project.tags.includes(selectedTag)
      )
    : dataVisualizationProjects;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true); // Set isLoaded state to true after 100ms
    }, 100);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(true); // Show ScrollToTopButton if scrolled more than 50px
      } else {
        setShowScroll(false); // Hide ScrollToTopButton otherwise
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array so this effect runs once after initial render

  useEffect(() => {
    setIsDissolving(true);
    const timeout = setTimeout(() => {
      setIsDissolving(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [selectedTag]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="datavisualization" className="mt-[-20px] px-4">
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          DATA VISUALIZATION PROJECTS
        </h1>
      </div>

      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="flex justify-start gap-4 mb-6 rounded-full bg-[#f3f4f6] p-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${
              !selectedTag
                ? "bg-[#50577A] text-white"
                : "bg-[#f3f4f6] text-[#333]"
            } hover:bg-[#50577A] hover:text-white`}
          >
            All
          </button>

          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${
                selectedTag === tag
                  ? "bg-[#50577A] text-white"
                  : "bg-[#f3f4f6] text-[#333]"
              } hover:bg-[#50577A] hover:text-white`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`w-full border border-white rounded-lg p-4 shadow transition transform hover:shadow-lg hover:bg-white hover:text-[var(--warna1-color)] group ${
                isDissolving
                  ? "opacity-0 transition-opacity duration-500 ease-in-out"
                  : "opacity-100 transition-opacity duration-500 ease-in-out"
              }`}
            >
              <div className="relative mb-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[230px] object-cover transition duration-300 ease-in-out transform scale-110 hover:brightness-55 hover:scale-100"
                  />
                </div>
              </div>

              <h3 className="text-base font-bold pointer-events-none">
                {project.title}
              </h3>
              <p className="mt-1 text-xs pointer-events-none">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 rounded-full ${
                      tagColors[index % tagColors.length]
                    } cursor-pointer group-hover:text-white ${
                      tagColors[index % tagColors.length] === "bg-[#6B728E]"
                        ? "group-hover:text-white"
                        : "group-hover:text-black"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button View Project */}
              <div className="mt-4 text-center group relative">
                <button className="w-full px-4 py-2 bg-[#474E68] text-white rounded-lg cursor-pointer shadow-xl hover:bg-[#6B728E] hover:shadow-lg transition-all duration-300">
                  View Project
                  <span
                    className="absolute right-4 opacity-0 transform translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <FiArrowRight />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopButton showScroll={showScroll} />
    </section>
  );
};

export default DataVisualization;
