const graphicDesignProjects = [
  {
    id: 1,
    title: "Brand Identity Design",
    description:
      "Created a cohesive brand identity with logo design, color schemes, and typography.",
  },
  {
    id: 2,
    title: "Website Design",
    description:
      "Designed visually engaging and user-friendly websites to enhance user experience.",
  },
  {
    id: 3,
    title: "Print Media Design",
    description:
      "Designed print materials like brochures, flyers, and posters for various campaigns.",
  },
  {
    id: 4,
    title: "Packaging Design",
    description:
      "Developed eye-catching packaging designs that align with brand identity and target audience.",
  },
];

const GraphicDesign = () => {
  return (
    <section id="graphicdesign" className="mt-[-20px] px-4">
      {/* GRAPHIC DESIGN PROJECTS */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          GRAPHIC DESIGN PROJECTS
        </h1>
      </div>

      {/* CONTENT AREA */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {graphicDesignProjects.map((project) => (
            <div
              key={project.id}
              className="max-w-[250px] w-full border border-white rounded-lg p-4 shadow transition transform hover:scale-95 hover:shadow-lg hover:cursor-pointer hover:bg-white hover:text-[var(--warna1-color)]"
            >
              <h3 className="text-base font-bold">{project.title}</h3>
              <p className="mt-1 text-xs">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicDesign;
