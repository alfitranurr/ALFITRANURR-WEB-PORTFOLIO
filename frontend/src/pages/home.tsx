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
    const timer = setTimeout(() => {
      setIsLoaded(true);
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

  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative">
      {/* ==================== TOP SECTION ====================*/}
      <TopSection name={name} />
      {/* ==================== POLICE LINE ==================== */}
      <PoliceLine items={items} isLoaded={isLoaded} />
      {/* ==================== SECTION ==================== */}
      {/* ABOUT ME */}
      <section
        id="about-me"
        className="scroll-margin-top-16"
        style={{
          position: "relative",
        }}
      >
        <AboutMe />
      </section>
      {/* TECH STACKS */}
      <TechStacks />
      {/* MAP CARD */}
      <MapCard />
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
        }}
      >
        <Contact />
      </section>
      {/* ==================== SCROLL TO TOP BUTTON ==================== */}
      <ScrollToTopButton showScroll={showScroll} />{" "}
    </div>
  );
};

export default Home;
