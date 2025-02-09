import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activePage, setActivePage] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (page: string) => {
    setActivePage(page);
  };

  const handleNavigateToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top
  };

  // Scroll to the specific section
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="bg-[#474E68] p-4 shadow-lg fixed top-0 left-0 w-full z-[9999] mb-10">
        {/* Progress Bar */}
        <div
          className="fixed top-0 left-0 right-0 h-0.5 bg-white z-[9998] transition-all duration-800"
          style={{ width: `${scrollProgress}%` }}
        ></div>

        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Hamburger button */}
          <button className="lg:hidden text-white mr-auto" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Left-aligned text */}
          <div className="text-white text-lg font-semibold ml-auto">
            Ramdhani's Portfolio
          </div>
        </div>

        {/* Menu (hidden or visible based on isOpen state) */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-1/2 h-full bg-[#474E68] p-4 transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
          } z-[9999]`}
        >
          <div className="flex justify-between items-center">
            <div className="text-white text-lg font-semibold">
              Ramdhani's Portfolio
            </div>
            {/* Close button */}
            <button className="text-white" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <ul className="space-y-4 text-left mt-8 mb-8">
            {/* HOME */}
            <li className="text-xs text-white relative group">
              <button
                onClick={() => {
                  handleSetActive("/"); // Set active page to "/"
                  handleNavigateToTop(); // Scroll to the top
                }}
                className={`hover:text-white transition-all duration-300 transform ${
                  activePage === "/" ? "text-white" : "text-white"
                }`}
              >
                HOME
                <span
                  className={`absolute left-1/2 bottom-[-4px] h-[2px] bg-white transform transition-all duration-300 ${
                    activePage === "/"
                      ? "w-full left-1/2 -translate-x-1/2"
                      : "w-0 group-hover:w-full group-hover:left-0"
                  }`}
                ></span>
              </button>
            </li>

            {/* ABOUT ME */}
            <li className="text-xs text-white relative group">
              <button
                onClick={() => {
                  handleSetActive("about-me");
                  handleScrollToSection("about-me");
                }}
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
                onClick={() => {
                  handleSetActive("education");
                  handleScrollToSection("education");
                }}
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

            {/* EXPERIENCE */}
            <li className="text-xs text-white relative group">
              <button
                onClick={() => {
                  handleSetActive("experience");
                  handleScrollToSection("experience");
                }}
                className={`hover:text-white transition-all duration-300 transform cursor-pointer ${
                  activePage === "professional" ? "text-white" : "text-white"
                }`}
              >
                EXPERIENCE
                <span
                  className={`absolute left-1/2 bottom-[-4px] h-[2px] bg-white transform transition-all duration-300 ${
                    activePage === "professional"
                      ? "w-full left-1/2 -translate-x-1/2"
                      : "w-0 group-hover:w-full group-hover:left-0"
                  }`}
                ></span>
              </button>
            </li>

            {/* PROJECTS */}
            <li className="text-xs text-white relative group">
              <button
                onClick={() => {
                  handleSetActive("projects");
                  handleScrollToSection("projects");
                }}
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
                onClick={() => {
                  handleSetActive("certificate");
                  handleScrollToSection("certificate");
                }}
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
                onClick={() => {
                  handleSetActive("contact");
                  handleScrollToSection("contact");
                }}
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

      {/* Main Content */}
      <div className="pt-[100px]">
        {/* Adjust this value to match the height of your navbar */}
        {/* Add your page content here */}
      </div>
    </div>
  );
};

export default NavbarMobile;
