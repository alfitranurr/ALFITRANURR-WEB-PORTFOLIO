import React from "react";
import { ChevronUp } from "lucide-react";

interface ScrollToTopButtonProps {
  showScroll: boolean;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  showScroll,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showScroll && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all hover:cursor-pointer"
        aria-label="Scroll to Top"
        style={{ zIndex: 9999 }}
      >
        <ChevronUp size={15} />
      </button>
    )
  );
};

export default ScrollToTopButton;
