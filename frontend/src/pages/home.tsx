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
          400
        ),
        setTimeout(
          () => setSectionVisibility((prev) => ({ ...prev, mapCard: true })),
          500
        ),
        setTimeout(
          () => setSectionVisibility((prev) => ({ ...prev, education: true })),
          600
        ),
        setTimeout(
          () => setSectionVisibility((prev) => ({ ...prev, experience: true })),
          700
        ),
        setTimeout(
          () => setSectionVisibility((prev) => ({ ...prev, projects: true })),
          800
        ),
        setTimeout(
          () =>
            setSectionVisibility((prev) => ({ ...prev, certificate: true })),
          900
        ),
        setTimeout(
          () => setSectionVisibility((prev) => ({ ...prev, contact: true })),
          1000
        ),
      ];

      return () => sectionTimers.forEach((timer) => clearTimeout(timer));
    }, 100);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div
      className="flex flex-col justify-center items-center min-h-screen relative"
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
      <div style={getTransitionStyle(sectionVisibility.techStacks)}>
        <TechStacks />
      </div>
      {/* MAP CARD */}
      <div style={getTransitionStyle(sectionVisibility.mapCard)}>
        <MapCard />
      </div>
      {/* WRAP EDUCATION & EXPERIENCE IN A FLEX CONTAINER */}
      <div
        className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8 mt-8"
        style={{ maxWidth: "1130px", width: "90%", margin: "0 auto" }}
      >
        {/* EDUCATION */}
        <section
          id="education"
          className="scroll-margin-top-16"
          style={{
            position: "relative",
            flex: 1,
            ...getTransitionStyle(sectionVisibility.education),
          }}
        >
          <Education />
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="scroll-margin-top-16"
          style={{
            position: "relative",
            flex: 1,
            ...getTransitionStyle(sectionVisibility.experience),
          }}
        >
          <Experience />
        </section>
      </div>
      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-margin-top-16"
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
        className="scroll-margin-top-16"
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
        className="scroll-margin-top-16"
        style={{
          position: "relative",
          ...getTransitionStyle(sectionVisibility.contact),
        }}
      >
        <Contact />
      </section>
      {/* ==================== SCROLL TO TOP BUTTON ==================== */}
      <ScrollToTopButton showScroll={showScroll} />
    </div>
  );
};

export default Home;
