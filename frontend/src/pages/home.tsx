import React, { useState, useEffect } from "react";
import AboutMe from "../pages/about_me";
import Education from "../pages/education";
import Experience from "../pages/experience";
import Projects from "../pages/projects";
import Certificate from "../pages/certificate";
import Contact from "../pages/contact";
import TopSection from "../components/TopSection/topsection";
import PoliceLine from "../components/PoliceLine/policeline";
import TechStacks from "../components/TechStacks/techstacks";
import MapCard from "../components/MapCard/mapcard";
import ScrollToTopButton from "../components/ScrollToTopButton/scrolltotopbutton";

const Home: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation on first load
    setIsLoaded(true);

    // Function to check scroll position for the scroll-to-top button
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 100) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 100) {
        setShowScroll(false);
      }
    };

    // Add scroll event listener for scroll-to-top button
    window.addEventListener("scroll", checkScrollTop);

    // Clean up
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  const name = "Al Fitra Nur Ramadhani";

  const items = [
    "Web Portfolio",
    "Data Analyst",
    "Data Engineering",
    "Data Scientist",
    "Bussiness Intelligence Analyst",
    "Digital Marketing Enthusiast",
  ];

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex flex-col justify-center items-center min-h-screen relative w-full transition-all duration-1000 ease-out ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        {/* ==================== TOP SECTION ==================== */}
        <TopSection name={name} />

        {/* ==================== POLICE LINE ==================== */}
        <PoliceLine items={items} isLoaded={true} />

        {/* ==================== SECTIONS ==================== */}
        {/* ABOUT ME */}
        <section id="about-me" className="mt-16 w-full">
          <AboutMe />
        </section>

        {/* TECH STACKS */}
        <div id="tech-stacks" className="w-full">
          <TechStacks />
        </div>

        {/* MAP CARD */}
        <div id="map-card" className="w-full">
          <MapCard />
        </div>

        {/* WRAP EDUCATION & EXPERIENCE IN A FLEX CONTAINER */}
        <div className="flex flex-col md:flex-row justify-between w-full md:space-y-0 md:space-x-4 mt-8 px-4 max-w-[1180px] mx-auto">
          {/* EDUCATION */}
          <section id="education" className="w-full md:w-1/2">
            <Education />
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="w-full md:w-1/2 mt-8 md:mt-0">
            <Experience />
          </section>
        </div>

        {/* PROJECTS */}
        <section id="projects" className="w-full">
          <Projects />
        </section>

        {/* CERTIFICATE */}
        <section id="certificate" className="w-full">
          <Certificate />
        </section>

        {/* CONTACT */}
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <ScrollToTopButton showScroll={showScroll} />
    </div>
  );
};

export default Home;
