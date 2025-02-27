// src/pages/contact.tsx

import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="flex justify-center mt-4 px-4 pt-[60px]">
      <div
        className="max-w-6xl w-full p-4 bg-white/20 backdrop-blur-md md:backdrop-blur-md rounded-2xl shadow-md flex flex-col items-center mx-auto"
        style={{ backgroundColor: "var(--base-color)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6 w-full">
          {/* ==================== LEFT SECTION (CONTACT INFO) ==================== */}
          <div className="space-y-6 text-white flex flex-col justify-start">
            <h2 className="text-lg font-bold text-left">Get In Touch</h2>
            <p className="text-sm text-left">
              I'm excited to connect with you. Whether it's about collaborating
              on a project, discussing design opportunities, or just saying
              hello, feel free to drop me a message. I'm looking forward to
              hearing from you!
            </p>

            {/* SOCIAL MEDIA LINKS */}
            <div className="flex space-x-6 text-white">
              <a
                href="https://www.instagram.com/rmdhani_ii/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E1306C] hover:scale-120 transition-all duration-300"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://wa.me/+6285158779239"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] hover:scale-120 transition-all duration-300"
              >
                <FaWhatsapp size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/al-fitra-nur-ramadhani/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0077B5] hover:scale-120 transition-all duration-300"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com/alfitranurr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#333] hover:scale-120 transition-all duration-300"
              >
                <FaGithub size={22} />
              </a>
            </div>

            <div className="space-y-4 text-left">
              <div>
                <p className="text-sm font-semibold">Address</p>
                <a
                  href="https://maps.app.goo.gl/7yAnq69K3S2v73bV6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-var(--warna2-color) transition"
                  style={{ textDecoration: "none" }}
                >
                  Perum Istana Kepuh Regency Blok H 161, Kepuharjo, Karangploso,
                  Kabupaten Malang, Jawa Timur, Indonesia
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold">Call Me</p>
                <a
                  href="https://wa.me/6285158779239"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-var(--warna2-color) transition"
                  style={{ textDecoration: "none" }}
                >
                  +62 851-5877-9239 (WhatsApp)
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold">Mail Me</p>
                <a
                  href="mailto:alfitranurr@gmail.com"
                  className="text-sm hover:text-var(--warna2-color) transition"
                  style={{ textDecoration: "none" }}
                >
                  alfitranurr@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* ==================== RIGHT SECTION (CONTACT FORM) ==================== */}
          <div className="space-y-4">
            <div className="p-6 bg-white/20 backdrop-blur-none lg:backdrop-blur-md rounded-lg shadow-md">
              <form className="space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-2 text-sm text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="p-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-var(--warna2-color)"
                    style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-2 text-sm text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="p-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-var(--warna2-color)"
                    style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="mb-2 text-sm text-white">
                    Your Message (optional)
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    className="p-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-var(--warna2-color)"
                    rows={4}
                    style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-var(--warna1-color) text-white p-3 rounded-md w-full transition duration-200 text-sm"
                    style={{
                      backgroundColor: "var(--warna1-color)",
                      borderColor: "var(--warna1-color)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "white";
                      e.currentTarget.style.color = "var(--warna1-color)";
                      e.currentTarget.style.cursor = "pointer";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--warna1-color)";
                      e.currentTarget.style.color = "white";
                    }}
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
