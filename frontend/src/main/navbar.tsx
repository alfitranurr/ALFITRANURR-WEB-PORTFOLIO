import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState<string>(location.pathname);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Update active page on location change
  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  // Handle scroll progress
  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / totalHeight) * 100;
    setScrollProgress(progress);

    // If scrolled to the top, set active page to "HOME"
    if (scrollPosition === 0) {
      setActivePage("/");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle section change when clicking links
  const handleSetActive = (section: string) => {
    setActivePage(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to handle section visibility on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePage(entry.target.id);
          }
        });
      },
      { threshold: 0.8 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleNavigateToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: "easeInOutQuad" });
  };

  return (
    <>
      {/* PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 right-0 h-0.5 bg-white z-20 transition-all duration-800"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* NAVBAR */}
      <nav className="bg-[var(--warna1-color)] p-4 shadow-xl rounded-4xl mt-4 mb max-w-3xl mx-auto fixed top-0 left-0 right-0 z-[1]">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <ul className="flex space-x-10">
            {/* HOME */}
            <li className="text-xs text-white relative group">
              <Link
                to="/"
                className={`hover:text-white transition-all duration-300 transform ${
                  activePage === "/" ? "text-white" : ""
                }`}
                onClick={handleNavigateToTop}
              >
                HOME
                <span
                  className={`absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 ${
                    activePage === "/"
                      ? "w-full left-1/2 -translate-x-1/2"
                      : "group-hover:w-full group-hover:left-0"
                  }`}
                ></span>
              </Link>
            </li>

            {/* ABOUT ME */}
            <li className="text-xs text-white relative group">
              <button
                onClick={() => handleSetActive("about-me")}
                className={`hover:text-white transition-all duration-300 transform cursor-pointer ${
                  activePage === "about-me" ? "text-white" : "text-white"
                }`}
              >
                ABOUT ME
                <span
                  className={`absolute left-1/2 bottom-[-4px] h-[2px] bg-white transform transition-all duration-300 ${
                    activePage === "about-me"
                      ? "w-full left-1/2 -translate-x-1/2"
                      : "w-0 group-hover:w-full group-hover:left-0"
                  }`}
                ></span>
              </button>
            </li>

            {/* EDUCATION */}
            <li className="text-xs text-white relative group">
              <button
                onClick={() => handleSetActive("education")}
                className={`hover:text-white transition-all duration-300 transform cursor-pointer ${
                  activePage === "education" ? "text-white" : "text-white"
                }`}
              >
                EDUCATION
                <span
                  className={`absolute left-1/2 bottom-[-4px] h-[2px] bg-white transform transition-all duration-300 ${
                    activePage === "education"
                      ? "w-full left-1/2 -translate-x-1/2"
                      : "w-0 group-hover:w-full group-hover:left-0"
                  }`}
                ></span>
              </button>
            </li>

            {/* PROFESSIONAL */}
            <li className="text-xs text-white relative group">
              <button
                onClick={() => handleSetActive("experience")}
                className={`hover:text-white transition-all duration-300 transform cursor-pointer ${
                  activePage === "professional" ? "text-white" : "text-white"
                }`}
              >
                EXPERIENCE
                <span
                  className={`absolute left-1/2 bottom-[-4px] h-[2px] bg-white transform transition-all duration-300 ${
                    activePage === "experience"
                      ? "w-full left-1/2 -translate-x-1/2"
                      : "w-0 group-hover:w-full group-hover:left-0"
                  }`}
                ></span>
              </button>
            </li>

            {/* PROJECTS */}
            <li className="text-xs text-white relative group">
              <button
                onClick={() => handleSetActive("projects")}
                className={`hover:text-white transition-all duration-300 transform cursor-pointer ${
                  activePage === "projects" ? "text-white" : "text-white"
                }`}
              >
                PROJECTS
                <span
                  className={`absolute left-1/2 bottom-[-4px] h-[2px] bg-white transform transition-all duration-300 ${
                    activePage === "projects"
                      ? "w-full left-1/2 -translate-x-1/2"
                      : "w-0 group-hover:w-full group-hover:left-0"
                  }`}
                ></span>
              </button>
            </li>

            {/* CERTIFICATE */}
            <li className="text-xs text-white relative group">
              <button
                onClick={() => handleSetActive("certificate")}
                className={`hover:text-white transition-all duration-300 transform cursor-pointer ${
                  activePage === "certificate" ? "text-white" : "text-white"
                }`}
              >
                CERTIFICATE
                <span
                  className={`absolute left-1/2 bottom-[-4px] h-[2px] bg-white transform transition-all duration-300 ${
                    activePage === "certificate"
                      ? "w-full left-1/2 -translate-x-1/2"
                      : "w-0 group-hover:w-full group-hover:left-0"
                  }`}
                ></span>
              </button>
            </li>

            {/* CONTACT */}
            <li className="text-xs text-white relative group">
              <button
                onClick={() => handleSetActive("contact")}
                className={`hover:text-white transition-all duration-300 transform cursor-pointer ${
                  activePage === "contact" ? "text-white" : "text-white"
                }`}
              >
                CONTACT
                <span
                  className={`absolute left-1/2 bottom-[-4px] h-[2px] bg-white transform transition-all duration-300 ${
                    activePage === "contact"
                      ? "w-full left-1/2 -translate-x-1/2"
                      : "w-0 group-hover:w-full group-hover:left-0"
                  }`}
                ></span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="pt-[120px]"> </div>
    </>
  );
};

export default Navbar;
