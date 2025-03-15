import React, { useState, useEffect, useRef } from "react";
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

  // Refs for each section
  const aboutRef = useRef<HTMLDivElement>(null);
  const techStacksRef = useRef<HTMLDivElement>(null);
  const mapCardRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificateRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // State to track visibility of each section
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
    // Set initial load animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Function to check scroll position for the scroll-to-top button
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 100) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 100) {
        setShowScroll(false);
      }
    };

    // Setup Intersection Observer for each section
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.1, // trigger when 10% of the element is visible
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;

        if (entry.isIntersecting) {
          // Update visibility state based on section ID
          switch (id) {
            case "about-me":
              setSectionVisibility((prev) => ({ ...prev, about: true }));
              break;
            case "tech-stacks":
              setSectionVisibility((prev) => ({ ...prev, techStacks: true }));
              break;
            case "map-card":
              setSectionVisibility((prev) => ({ ...prev, mapCard: true }));
              break;
            case "education":
              setSectionVisibility((prev) => ({ ...prev, education: true }));
              break;
            case "experience":
              setSectionVisibility((prev) => ({ ...prev, experience: true }));
              break;
            case "projects":
              setSectionVisibility((prev) => ({ ...prev, projects: true }));
              break;
            case "certificate":
              setSectionVisibility((prev) => ({ ...prev, certificate: true }));
              break;
            case "contact":
              setSectionVisibility((prev) => ({ ...prev, contact: true }));
              break;
            default:
              break;
          }
        }
      });
    }, observerOptions);

    // Observe all section refs that exist
    const refs = [
      { ref: aboutRef, id: "about-me" },
      { ref: techStacksRef, id: "tech-stacks" },
      { ref: mapCardRef, id: "map-card" },
      { ref: educationRef, id: "education" },
      { ref: experienceRef, id: "experience" },
      { ref: projectsRef, id: "projects" },
      { ref: certificateRef, id: "certificate" },
      { ref: contactRef, id: "contact" },
    ];

    refs.forEach(({ ref }) => {
      if (ref.current) {
        sectionObserver.observe(ref.current);
      }
    });

    // Add scroll event listener for scroll-to-top button
    window.addEventListener("scroll", checkScrollTop);

    // Clean up
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", checkScrollTop);
      sectionObserver.disconnect();
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

  // Animation styles for sections
  const getAnimationStyle = (isVisible: boolean) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    transition: "opacity 1.5s ease-out, transform 1s ease-out",
  });

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex flex-col justify-center items-center min-h-screen relative w-full"
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

        {/* ==================== SECTIONS ==================== */}
        {/* ABOUT ME */}
        <section
          id="about-me"
          ref={aboutRef}
          className="scroll-margin-top-16 w-full"
          style={getAnimationStyle(sectionVisibility.about)}
        >
          <AboutMe />
        </section>

        {/* TECH STACKS */}
        <div
          id="tech-stacks"
          ref={techStacksRef}
          className="w-full"
          style={getAnimationStyle(sectionVisibility.techStacks)}
        >
          <TechStacks />
        </div>

        {/* MAP CARD */}
        <div
          id="map-card"
          ref={mapCardRef}
          className="w-full"
          style={getAnimationStyle(sectionVisibility.mapCard)}
        >
          <MapCard />
        </div>

        {/* WRAP EDUCATION & EXPERIENCE IN A FLEX CONTAINER */}
        <div className="flex flex-col md:flex-row justify-between w-full md:space-y-0 md:space-x-4 mt-8 px-4 max-w-[1180px] mx-auto">
          {/* EDUCATION */}
          <section
            id="education"
            ref={educationRef}
            className="scroll-margin-top-16 w-full md:w-1/2"
            style={getAnimationStyle(sectionVisibility.education)}
          >
            <Education />
          </section>

          {/* EXPERIENCE */}
          <section
            id="experience"
            ref={experienceRef}
            className="scroll-margin-top-16 w-full md:w-1/2 mt-8 md:mt-0"
            style={getAnimationStyle(sectionVisibility.experience)}
          >
            <Experience />
          </section>
        </div>

        {/* PROJECTS */}
        <section
          id="projects"
          ref={projectsRef}
          className="scroll-margin-top-16 w-full"
          style={getAnimationStyle(sectionVisibility.projects)}
        >
          <Projects />
        </section>

        {/* CERTIFICATE */}
        <section
          id="certificate"
          ref={certificateRef}
          className="scroll-margin-top-16 w-full"
          style={getAnimationStyle(sectionVisibility.certificate)}
        >
          <Certificate />
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          ref={contactRef}
          className="scroll-margin-top-16 w-full"
          style={getAnimationStyle(sectionVisibility.contact)}
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
