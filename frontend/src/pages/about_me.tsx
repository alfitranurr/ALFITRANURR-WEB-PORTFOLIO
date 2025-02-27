// src/pages/about_me.tsx
const AboutMe = () => {
  return (
    <section id="about-me" className="flex justify-center mt-6 px-4 pt-[60px]">
      <div className="max-w-6xl w-full p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-md flex flex-col items-center">
        <h1 className="text-lg font-semibold text-warna3 text-center mb-4">
          ABOUT ME
        </h1>
        <p className="text-sm text-warna3 text-justify leading-relaxed">
          An Informatics undergraduate at the University of Muhammadiyah Malang,
          currently in the 6th semester, showcasing a strong passion and
          aptitude for data analytics, data science, data engineering, machine
          learning, and research. Possessing a robust background in mathematics
          and programming, complemented by effective communication abilities.
          Well-versed in handling big data and proficient in Python, SQL, Excel,
          and Tableau. Actively seeking opportunities to apply my knowledge and
          skills in a dynamic professional environment. Committed to continuous
          learning and personal growth, with a future objective of contributing
          to innovative projects and advancing in the realm of data-related
          technologies.
        </p>

        {/* AL FITRA NUR RAMADHANI'S RESUME */}
        <div className="mt-6 mb-2 flex justify-center">
          <a
            href="https://drive.google.com/file/d/1V4Y25IxtnVF95nSm0oc-fJ28I9UZIxsP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-xs text-white font-semibold rounded-xl shadow-md text-center transition duration-300 bg-[var(--warna2-color)] hover:bg-white hover:text-[var(--warna2-color)] hover:border hover:border-[var(--warna2-color)] hover:transform-none hover:scale-100"
          >
            <i>Al Fitra Nur Ramadhani's Resume</i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
