import React, { useState, useEffect } from "react";
import RiseDown from "../RiseDown/RiseDown";
import professionalData from "../../database/Experience/ProfessionalExperience";
import committeesData from "../../database/Experience/CommitteesOrganizations";

const FullExperience: React.FC = () => {
  const [openProfessionalCards, setOpenProfessionalCards] = useState<number[]>(
    []
  );
  const [openCommitteeCards, setOpenCommitteeCards] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll to top and trigger load animation when component mounts
  useEffect(() => {
    // Scroll to the top immediately
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Wait for the scroll to finish (smooth behavior takes time), then trigger animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300); // Increased delay to ensure scroll completes before animation starts

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, []);

  // Toggle functions for card expansion
  const toggleProfessionalCard = (cardId: number) => {
    setOpenProfessionalCards((prevState) =>
      prevState.includes(cardId)
        ? prevState.filter((id) => id !== cardId)
        : [...prevState, cardId]
    );
  };

  const toggleCommitteeCard = (cardId: number) => {
    setOpenCommitteeCards((prevState) =>
      prevState.includes(cardId)
        ? prevState.filter((id) => id !== cardId)
        : [...prevState, cardId]
    );
  };

  return (
    <section
      id="fullExperience"
      className="flex justify-center px-4 mt-[-20px]"
    >
      <div
        className={`max-w-6xl w-full p-4 bg-[var(--bg-color)] transition-all duration-700 ease-in-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Professional Experience Column */}
          <div className="space-y-6">
            <h2 className="text-xl md:text-xl font-semibold text-white border-b-4 border-white pb-2 mb-4 text-center rounded-2xl">
              Professional Experience
            </h2>

            {professionalData.map((experience, index) => (
              <div
                key={experience.id}
                className="p-6 rounded-2xl shadow-lg w-full cursor-pointer bg-[var(--base-color)] hover:scale-95 hover:shadow-2xl transition-all duration-300 ease-in-out animate-item-slide-up"
                style={{
                  animationDelay: `${
                    (professionalData.length - 1 - index) * 0.1
                  }s`, // Reverse the delay: bottom items animate first
                }}
                onClick={() => toggleProfessionalCard(experience.id)}
              >
                <div className="flex items-center space-x-4 mb-2">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-white text-md font-semibold">
                      {experience.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {experience.company} • {experience.location}
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      {experience.duration}
                    </p>
                  </div>
                </div>

                <RiseDown
                  isOpen={openProfessionalCards.includes(experience.id)}
                >
                  <div className="space-y-2 mt-4 pt-4 border-t border-gray-700">
                    {experience.description.map((desc, index) => (
                      <p key={index} className="text-gray-300 text-sm">
                        {desc}
                      </p>
                    ))}
                  </div>
                </RiseDown>
              </div>
            ))}
          </div>

          {/* Committee & Organization Column */}
          <div className="space-y-6">
            <h2 className="text-xl md:text-xl font-semibold text-white border-b-4 border-white pb-2 mb-4 text-center rounded-2xl">
              Committee & Organization
            </h2>

            {committeesData.map((committee, index) => (
              <div
                key={committee.id}
                className="p-6 rounded-2xl shadow-lg w-full cursor-pointer bg-[var(--base-color)] hover:scale-95 hover:shadow-2xl transition-all duration-300 ease-in-out animate-item-slide-up"
                style={{
                  animationDelay: `${
                    (committeesData.length - 1 - index) * 0.1
                  }s`, // Reverse the delay: bottom items animate first
                }}
                onClick={() => toggleCommitteeCard(committee.id)}
              >
                <div className="flex items-center space-x-4 mb-2">
                  <img
                    src={committee.logo}
                    alt={`${committee.organization} logo`}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-white text-md font-semibold">
                      {committee.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {committee.organization} • {committee.location}
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      {committee.duration}
                    </p>
                  </div>
                </div>

                <RiseDown isOpen={openCommitteeCards.includes(committee.id)}>
                  <div className="space-y-2 mt-4 pt-4 border-t border-gray-700">
                    {committee.description.map((desc, index) => (
                      <p key={index} className="text-gray-300 text-sm">
                        {desc}
                      </p>
                    ))}
                  </div>
                </RiseDown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullExperience;
