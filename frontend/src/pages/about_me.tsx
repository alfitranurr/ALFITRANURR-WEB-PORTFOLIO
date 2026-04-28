const AboutMe = () => {
  return (
    <section id="about-me" className="flex justify-center mt-6 px-4 pt-[60px]">
      <div className="max-w-6xl w-full p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-[0_0_20px_5px_rgba(255,255,255,0.1)] flex flex-col items-center">
        <h1 className="text-lg font-semibold text-warna3 text-center mb-4">
          ABOUT ME
        </h1>
        <p className="text-sm text-warna3 text-justify leading-relaxed">
          Informatics graduate from University of Muhammadiyah Malang, specializing in data analytics and machine learning. 
          Proficient in Python, SQL, Excel, and Tableau, with experience in end-to-end data handling and a solid foundation in 
          mathematics and programming, strong analytical, problem-solving skills and a passion for continuous learning. Seeking 
          opportunities to apply expertise in dynamic environments while advancing in data-driven technologies.
        </p>

        {/* AL FITRA NUR RAMADHANI'S RESUME */}
        <div className="mt-6 mb-2 flex justify-center">
          <a
            href="https://drive.google.com/file/d/1Vsvs-r_GoxGEAanwEWqOFiGXUiqn_pkg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-xs text-white font-semibold rounded-xl shadow-md text-center transition duration-300 bg-[var(--warna2-color)] border border-transparent hover:bg-white hover:text-[var(--warna2-color)] hover:border-[var(--warna2-color)]"
          >
            <i>Al Fitra Nur Ramadhani's Resume</i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
