import Pantai from "../../../../assets/images/Pantai.png";
import React from "react";
import { useState, useEffect, useMemo } from "react";
import { FiArrowRight } from "react-icons/fi"; // Import ikon arrow
import ScrollToTopButton from "../../../../components/ScrollToTopButton/scrolltotopbutton";
import { CSSTransition } from "react-transition-group"; // Import react-transition-group

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
  const [isDissolving, setIsDissolving] = useState(true); // Set initial state to true
  const [showScroll, setShowScroll] = useState(false);
  const [, setIsLoaded] = useState(false); // State to manage loading

  // Memoize the unique tags
  const uniqueTags = useMemo(() => {
    return [
      ...new Set(dataVisualizationProjects.flatMap((project) => project.tags)),
    ];
  }, []);

  // Memoize the filtered projects based on selectedTag
  const filteredProjects = useMemo(() => {
    return selectedTag
      ? dataVisualizationProjects.filter((project) =>
          project.tags.includes(selectedTag)
        )
      : dataVisualizationProjects;
  }, [selectedTag]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true); // Set isLoaded state to true after 1000ms
      setIsDissolving(false); // End dissolve effect after content is ready
    }, 1000); // Adjust delay for the dissolve effect

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(true); // Show ScrollToTopButton if scrolled more than 50px
      } else {
        setShowScroll(false); // Hide ScrollToTopButton otherwise
      }
    };

    // Debouncing the scroll handler to improve performance
    const debouncedScroll = debounce(handleScroll, 200);
    window.addEventListener("scroll", debouncedScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, []); // Empty dependency array so this effect runs once after initial render

  useEffect(() => {
    // Reset the dissolve effect when changing the tag
    setIsDissolving(true);
    setIsLoaded(false);

    const timer = setTimeout(() => {
      setIsLoaded(true); // Set isLoaded state to true after 1000ms
      setIsDissolving(false); // End dissolve effect after content is ready
    }, 1000); // Adjust delay for the dissolve effect

    return () => {
      clearTimeout(timer);
    };
  }, [selectedTag]); // This effect runs every time the selectedTag changes

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Debounce function to limit how often scroll handler is called
  const debounce = (func: Function, delay: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const TagButton = React.memo(({ tag, isSelected, onClick }: any) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${
          isSelected ? "bg-[#50577A] text-white" : "bg-[#f3f4f6] text-[#333]"
        } hover:bg-[#50577A] hover:text-white`}
      >
        {tag}
      </button>
    );
  });

  return (
    <section id="datavisualization" className="mt-[-20px] px-4">
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          DATA VISUALIZATION PROJECTS
        </h1>
      </div>

      {/* Loading Animation (Dissolve Effect) */}
      {isDissolving && (
        <div className="w-full h-full fixed top-0 left-0 bg-white z-50 flex justify-center items-center">
          <div className="animate-pulse">
            <div className="h-4 w-32 bg-[#50577A] rounded-full mb-2"></div>
            <div className="h-2 w-24 bg-[#50577A] rounded-full"></div>
          </div>
        </div>
      )}

      {/* Content After Loading */}
      <CSSTransition
        in={!isDissolving}
        timeout={500}
        classNames="dissolve"
        unmountOnExit
      >
        <div
          className={`w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center transition-opacity duration-500 ${
            isDissolving ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex justify-start gap-4 mb-6 rounded-full bg-[#f3f4f6] p-2">
            <TagButton
              tag="All"
              isSelected={!selectedTag}
              onClick={() => setSelectedTag(null)}
            />
            {uniqueTags.map((tag) => (
              <TagButton
                key={tag}
                tag={tag}
                isSelected={selectedTag === tag}
                onClick={() => setSelectedTag(tag)}
              />
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
                      loading="lazy" // Add lazy loading for images
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
      </CSSTransition>

      {/* Scroll to Top Button */}
      <ScrollToTopButton showScroll={showScroll} />
    </section>
  );
};

export default DataVisualization;
