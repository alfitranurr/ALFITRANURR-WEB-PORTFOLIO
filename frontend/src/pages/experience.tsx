import { useState, useEffect } from "react";
import ProfessionalExperienceCard from "../components/Experience/ProfessionalExperienceCard";
import CommitteesOrganizationsCard from "../components/Experience/CommitteesOrganizationsCard";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<"professional" | "committees">(
    "professional"
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedTab, setDisplayedTab] = useState<
    "professional" | "committees"
  >("professional");

  const handleTabClick = (tab: "professional" | "committees") => {
    if (tab !== activeTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(tab);
        setDisplayedTab(tab);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }
  };

  useEffect(() => {
    // Initialize the displayed content
    setDisplayedTab(activeTab);
  }, []);

  return (
    <section
      id="experience"
      className="w-full p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-md flex flex-col items-center mt-20"
    >
      <h2 className="text-lg font-semibold text-white mb-6 w-full text-center">
        EXPERIENCE
      </h2>

      {/* BUTTON CONTAINER WITH CIRCULAR BUTTONS */}
      <div className="flex mb-6 justify-center items-center">
        {/* INNER CONTAINER FOR THE BUTTONS */}
        <div
          className="flex rounded-full p-1"
          style={{ backgroundColor: "var(--warna1-color)" }}
        >
          {/* PROFESSIONAL EXPERIENCE BUTTON */}
          <button
            onClick={() => handleTabClick("professional")}
            className={`px-4 py-1 text-xs font-semibold cursor-pointer ${
              activeTab === "professional"
                ? "bg-white text-[var(--base-color)] rounded-full shadow-md"
                : "text-gray-300 hover:bg-gray-500 rounded-full"
            } transition-all duration-300 ease-in-out mx-2`}
          >
            Professional Experience
          </button>

          {/* COMMITTEES & ORGANIZATIONS BUTTON */}
          <button
            onClick={() => handleTabClick("committees")}
            className={`px-4 py-1 text-xs font-semibold cursor-pointer ${
              activeTab === "committees"
                ? "bg-white text-[var(--base-color)] rounded-full shadow-md"
                : "text-gray-300 hover:bg-gray-500 rounded-full"
            } transition-all duration-300 ease-in-out mx-2`}
          >
            Committee & Organization
          </button>
        </div>
      </div>

      {/* CONTENT CONTAINER WITH SMOOTH TRANSITION */}
      <div className="w-full overflow-hidden">
        <div
          className={`w-full transition-all duration-300 ease-in-out ${
            isTransitioning
              ? "opacity-0 transform translate-y-4"
              : "opacity-100 transform translate-y-0"
          }`}
        >
          {displayedTab === "professional" ? (
            <ProfessionalExperienceCard />
          ) : (
            <CommitteesOrganizationsCard />
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
