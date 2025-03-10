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
  const [sectionVisibility, setSectionVisibility] = useState({
    about: false,
    techStacks: false,
    mapCard: false,
    education: false,
    experience: false,
    projects: false,
    certificate: false,
    contact: false,
  });

  useEffect(() => {
    // Set isLoaded after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);

      // Sequence the section animations
      const sectionTimers = [
        setTimeout(
          () => setSectionVisibility((prev) => ({ ...prev, about: true })),
          300
        ),
        setTimeout(
          () => setSectionVisibility((prev) => ({ ...prev, techStacks: true })),
          350
        ),
        setTimeout(
          () => setSectionVisibility((prev) => ({ ...prev, mapCard: true })),
          400
        ),
        setTimeout(
          () => setSectionVisibility((prev) => ({ ...prev, education: true })),
          450
        ),
        setTimeout(
          () => setSectionVisibility((prev) => ({ ...prev, experience: true })),
          500
        ),
        setTimeout(
          () => setSectionVisibility((prev) => ({ ...prev, projects: true })),
          550
        ),
        setTimeout(
          () =>
            setSectionVisibility((prev) => ({ ...prev, certificate: true })),
          600
        ),
        setTimeout(
          () => setSectionVisibility((prev) => ({ ...prev, contact: true })),
          650
        ),
      ];

      return () => sectionTimers.forEach((timer) => clearTimeout(timer));
    }, 100);

    // Function to check scroll position and update state
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 100) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 100) {
        setShowScroll(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", checkScrollTop);

    // Clean up
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  const name = "Al Fitra Nur Ramadhani";

  const items = [
    "Web Portfolio",
    "Data Analyst",
    "Data Engineering",
    "Data Scientist",
    "Digital Marketing Enthusiast",
  ];

  // Reusable transition style
  interface TransitionStyle {
    opacity: number;
    transform: string;
    transition: string;
  }

  const getTransitionStyle = (isVisible: boolean): TransitionStyle => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(30px)",
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
  });

  return (
    <div className="overflow-x-hidden w-full">
      <div
        className="flex flex-col justify-center items-center min-h-screen relative max-w-full"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease-out, transform 1s ease-out",
        }}
      >
        {/* ==================== TOP SECTION ====================*/}
        <TopSection name={name} />
        {/* ==================== POLICE LINE ==================== */}
        <PoliceLine items={items} isLoaded={isLoaded} />
        {/* ==================== SECTION ==================== */}
        {/* ABOUT ME */}
        <section
          id="about-me"
          className="scroll-margin-top-16 w-full"
          style={{
            position: "relative",
            ...getTransitionStyle(sectionVisibility.about),
          }}
        >
          <AboutMe />
        </section>
        {/* TECH STACKS */}
        <div
          className="w-full"
          style={getTransitionStyle(sectionVisibility.techStacks)}
        >
          <TechStacks />
        </div>
        {/* MAP CARD */}
        <div
          className="w-full"
          style={getTransitionStyle(sectionVisibility.mapCard)}
        >
          <MapCard />
        </div>
        {/* WRAP EDUCATION & EXPERIENCE IN A FLEX CONTAINER */}
        <div
          className="flex flex-col md:flex-row justify-between w-full md:space-y-0 md:space-x-4 mt-8 px-4"
          style={{ maxWidth: "1180px", margin: "0 auto" }}
        >
          {/* EDUCATION */}
          <section
            id="education"
            className="scroll-margin-top-16 w-full md:w-1/2"
            style={{
              position: "relative",
              ...getTransitionStyle(sectionVisibility.education),
            }}
          >
            <Education />
          </section>

          {/* EXPERIENCE */}
          <section
            id="experience"
            className="scroll-margin-top-16 w-full md:w-1/2 mt-8 md:mt-0"
            style={{
              position: "relative",
              ...getTransitionStyle(sectionVisibility.experience),
            }}
          >
            <Experience />
          </section>
        </div>
        {/* PROJECTS */}
        <section
          id="projects"
          className="scroll-margin-top-16 w-full"
          style={{
            position: "relative",
            ...getTransitionStyle(sectionVisibility.projects),
          }}
        >
          <Projects />
        </section>
        {/* CERTIFICATE */}
        <section
          id="certificate"
          className="scroll-margin-top-16 w-full"
          style={{
            position: "relative",
            ...getTransitionStyle(sectionVisibility.certificate),
          }}
        >
          <Certificate />
        </section>
        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-margin-top-16 w-full"
          style={{
            position: "relative",
            ...getTransitionStyle(sectionVisibility.contact),
          }}
        >
          <Contact />
        </section>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <ScrollToTopButton showScroll={showScroll} />
    </div>
  );
};

export default Home;
