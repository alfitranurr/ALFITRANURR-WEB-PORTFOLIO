import { useState, useRef } from "react";
import RiseDown from "../RiseDown/RiseDown";
import {
  AiOutlineUp,
  AiOutlineDown,
  AiOutlineStop,
  AiOutlineRight,
} from "react-icons/ai";
import cardsData from "../../database/Experience/ProfessionalExperience";

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
                <img
                  src={card.logo}
                  alt="Professional Experience Logo"
                  className="w-12 h-12"
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