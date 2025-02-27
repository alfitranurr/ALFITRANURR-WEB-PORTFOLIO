import React, { useState, useEffect } from "react";
import { RiAlertLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const AlertInitially: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 10000); // Hide the alert after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleCloseAlert = () => {
    console.log("Alert closed by user");
    setShowAlert(false);
  };

  if (!showAlert) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
        className="bg-white p-4 sm:p-6 rounded-xl shadow-lg max-w-xs sm:max-w-md text-center relative transform transition-all duration-500 ease-out"
        style={{
          animation: "slideInFromTop 0.8s ease-out", // Slightly adjusted duration for smoother effect
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleCloseAlert}
          className="absolute top-2 right-2 text-2xl text-gray-600 cursor-pointer hover:text-red-500"
        >
          <AiOutlineClose />
        </button>

        {/* Alert Icon */}
        <div className="flex justify-center mb-4">
          <RiAlertLine className="text-3xl sm:text-4xl text-yellow-500" />
        </div>

        {/* Alert Text with smaller font size and bold */}
        <p
          className="text-sm sm:text-lg font-bold"
          style={{ color: "var(--warna1-color)" }}
        >
          Mohon maaf website masih dalam tahap pengembangan, Saya akan update
          terus menerus secara berkala, Stay Tuned!
        </p>
      </div>
    </div>
  );
};

export default AlertInitially;
