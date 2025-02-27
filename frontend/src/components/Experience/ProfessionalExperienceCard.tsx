import { useState, useRef } from "react";
import RiseDown from "../RiseDown/RiseDown";
import {
  AiOutlineUp,
  AiOutlineDown,
  AiOutlineStop,
  AiOutlineRight,
} from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component"; // Import LazyLoadImage
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional: to add a blur effect while loading

import LogoAzkaGroup from "../../assets/images/Logo Azka Group.png";
import LogoMetadari from "../../assets/images/Logo Metadari.png";
import LogoINDEF from "../../assets/images/Logo INDEF.png";
import LogoMySkill from "../../assets/images/Logo MySkill.png";

const ProfessionalExperienceCard = () => {
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleCard = (cardIndex: number) => {
    setOpenCards((prevState) =>
      prevState.includes(cardIndex)
        ? prevState.filter((id) => id !== cardIndex)
        : [...prevState, cardIndex]
    );
  };

  const cardsData = [
    {
      id: 1,
      logo: LogoAzkaGroup,
      title: "Web Development • Data Automation • Graphic Design",
      company: "CV. Indo Azka Konsultan",
      duration: "Jan 2025 - Mar 2025",
      location: "Malang, East Java, Indonesia",
      description: [
        "• Created automated financial reporting for the company's 6 branches using Macro VBA in Excel, resulting in a 90% increase in work efficiency",
        "• Developed a frontend e-commerce website for Depo79 using React Framework, enabling all sales to be conducted directly on the platform.",
        "• Performed data preprocessing on a product sales list of 3,709 items using Python, cleaning the data by removing duplicates, handling missing values, and transforming it into the appropriate format, resulting in structured, consistent data ready for e-commerce website use.",
      ],
    },
    {
      id: 2,
      logo: LogoMetadari,
      title: "Data Analyst",
      company: "Digital Art and Information (DARI)",
      duration: "Dec 2024 - Now",
      location: "Malang, East Java, Indonesia",
      description: [
        "• Analyzed metaverse data and tracked virtual reality development, contributing to a 30% increase in metaverse engagement both within UMM and externally",
        "• Creating reports to support business decisions Created an operational team attendance system in Looker Studio, improving tracking efficiency and boosting team productivity by 50%.",
      ],
    },
    {
      id: 3,
      logo: LogoINDEF,
      title: "Enumerator",
      company: "Institute for Development of Economics and Finance (INDEF)",
      duration: "Aug 2024 - Sep 2024",
      location: "Malang, East Java, Indonesia",
      description: [
        "• Represented INDEF for the Malang region, conducted surveys with GOJEK, engaged 10 drivers, 3 restaurants, and 1 school, delivering valid data for the analysis of President Prabowo’s program and the MBG (Makan Bergizi Gratis) initiative",
      ],
    },
    {
      id: 4,
      logo: LogoMySkill,
      title: "Data Analysis : Fullstack Intensive Bootcamp",
      company: "MySkill",
      duration: "May 2024 - July 2024",
      location: "Work From Home (WFH)",
      description: [
        "• Completed a 30-day Fullstack Data Analyst Bootcamp with Distinction score (92/100), covering SQL, Python analysis, and dashboard creation presented to stakeholders.",
      ],
    },
  ];

  const totalCards = cardsData.length;
  const cardsPerPage = 3;

  const scrollUp = () => {
    setVisibleStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollDown = () => {
    setVisibleStartIndex((prev) =>
      Math.min(prev + 1, totalCards - cardsPerPage)
    );
  };

  return (
    <div className="relative overflow-hidden w-full px-1">
      <div ref={containerRef} className="relative space-y-2">
        {cardsData
          .slice(visibleStartIndex, visibleStartIndex + cardsPerPage)
          .map((card) => (
            <div
              key={card.id}
              className="p-6 rounded-2xl shadow-lg w-full cursor-pointer transform hover:scale-95 hover:shadow-2xl transition-all duration-300 ease-in-out"
              style={{ backgroundColor: "var(--bas-color)" }}
              onClick={() => toggleCard(card.id)}
            >
              <div className="flex items-center space-x-4 mb-2">
                <LazyLoadImage
                  src={card.logo}
                  alt="Professional Experience Logo"
                  className="w-12 h-12"
                  effect="blur" // Optional: adds a blur effect while loading
                  height="48" // Optional: Ensures a consistent image height
                  width="48" // Optional: Ensures a consistent image width
                />
                <div>
                  <h3 className="text-white text-md font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {card.company} • {card.location}
                  </p>
                  {/* Added margin-top to give space between company/location and duration */}
                  <p className="text-gray-300 text-sm mt-2">{card.duration}</p>
                </div>
              </div>
              <RiseDown isOpen={openCards.includes(card.id)}>
                <div className="space-y-2">
                  {card.description.map((desc, index) => (
                    <p key={index} className="text-gray-300 text-sm">
                      {desc}
                    </p>
                  ))}
                </div>
              </RiseDown>
            </div>
          ))}
      </div>

      {/* SCROLL UP & DOWN BUTTONS AT THE BOTTOM */}
      <div className="flex justify-center items-center space-x-6 mt-4">
        <div className="text-center">
          <button
            onClick={scrollUp}
            disabled={visibleStartIndex === 0}
            className={`p-3 rounded-full ${
              visibleStartIndex === 0
                ? "bg-white text-black cursor-not-allowed"
                : "bg-[var(--warna1-color)] text-white hover:opacity-70 cursor-pointer"
            }`}
          >
            {visibleStartIndex === 0 ? (
              <AiOutlineStop size={10} />
            ) : (
              <AiOutlineUp size={10} />
            )}
          </button>
          <p className="text-white text-xs mt-2">Scroll Up</p>
        </div>
        <div className="text-center">
          <button
            onClick={scrollDown}
            disabled={visibleStartIndex + cardsPerPage >= totalCards}
            className={`p-3 rounded-full ${
              visibleStartIndex + cardsPerPage >= totalCards
                ? "bg-white text-black cursor-not-allowed"
                : "bg-[var(--warna1-color)] text-white hover:opacity-70 cursor-pointer"
            }`}
          >
            {visibleStartIndex + cardsPerPage >= totalCards ? (
              <AiOutlineStop size={10} />
            ) : (
              <AiOutlineDown size={10} />
            )}
          </button>
          <p className="text-white text-xs mt-2">Scroll Down</p>
        </div>
      </div>

      {/* MORE BUTTON AT BOTTOM RIGHT */}
      <div className="absolute bottom-4 right-1">
        <button className="flex items-center space-x-2 p-2 rounded-full bg-[var(--warna1-color)] text-white hover:bg-white hover:text-[var(--base-color)] transition-all duration-300 cursor-pointer">
          <p className="text-xs">More</p>
          <AiOutlineRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProfessionalExperienceCard;
