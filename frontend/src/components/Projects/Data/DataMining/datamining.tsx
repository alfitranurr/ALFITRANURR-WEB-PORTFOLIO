const dataMiningProjects = [
  {
    id: 1,
    title: "Customer Segmentation",
    description:
      "Used data mining techniques to segment customers based on purchasing behavior for targeted marketing.",
  },
  {
    id: 2,
    title: "Fraud Detection",
    description:
      "Developed a data mining model to detect fraudulent transactions in financial systems.",
  },
  {
    id: 3,
    title: "Predictive Analytics",
    description:
      "Built a predictive model using data mining to forecast sales and optimize inventory management.",
  },
  {
    id: 4,
    title: "Market Basket Analysis",
    description:
      "Applied association rule mining to uncover patterns in customer purchase behavior for product recommendations.",
  },
];

const DataMining = () => {
  return (
    <section id="datamining" className="mt-[-20px] px-4">
      {/* DATA MINING PROJECTS */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          DATA MINING PROJECTS
        </h1>
      </div>

      {/* KONTEN ISI */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {dataMiningProjects.map((project) => (
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

export default DataMining;
