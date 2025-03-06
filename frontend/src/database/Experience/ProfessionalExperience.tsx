import LogoAzkaGroup from "../../assets/images/Logo Azka Group.png";
import LogoMetadari from "../../assets/images/Logo Metadari.png";
import LogoINDEF from "../../assets/images/Logo INDEF.png";
import LogoMySkill from "../../assets/images/Logo MySkill.png";

const cardsData = [
  {
    id: 1,
    logo: LogoAzkaGroup,
    title: "Web Development • Data Automation • Graphic Design",
    company: "CV. Indo Azka Konsultan",
    duration: "Jan 2025 - Mar 2025",
    location: "Malang, East Java, Indonesia",
    description: [
      "• Created automated financial reporting for the company's 6 branches using Macro VBA in Excel, resulting in a 90% increase in work efficiency",
      "• Developed a frontend e-commerce website for Depo79 using React Framework, enabling all sales to be conducted directly on the platform.",
      "• Performed data preprocessing on a product sales list of 3,709 items using Python, cleaning the data by removing duplicates, handling missing values, and transforming it into the appropriate format, resulting in structured, consistent data ready for e-commerce website use.",
    ],
  },
  {
    id: 2,
    logo: LogoMetadari,
    title: "Data Analyst",
    company: "Digital Art and Information (DARI)",
    duration: "Dec 2024 - Now",
    location: "Malang, East Java, Indonesia",
    description: [
      "• Analyzed metaverse data and tracked virtual reality development, contributing to a 30% increase in metaverse engagement both within UMM and externally",
      "• Creating reports to support business decisions Created an operational team attendance system in Looker Studio, improving tracking efficiency and boosting team productivity by 50%.",
    ],
  },
  {
    id: 3,
    logo: LogoINDEF,
    title: "Enumerator",
    company: "Institute for Development of Economics and Finance (INDEF)",
    duration: "Aug 2024 - Sep 2024",
    location: "Malang, East Java, Indonesia",
    description: [
      "• Represented INDEF for the Malang region, conducted surveys with GOJEK, engaged 10 drivers, 3 restaurants, and 1 school, delivering valid data for the analysis of President Prabowo's program and the MBG (Makan Bergizi Gratis) initiative",
    ],
  },
  {
    id: 4,
    logo: LogoMySkill,
    title: "Data Analysis : Fullstack Intensive Bootcamp",
    company: "MySkill",
    duration: "May 2024 - July 2024",
    location: "Work From Home (WFH)",
    description: [
      "• Completed a 30-day Fullstack Data Analyst Bootcamp with Distinction score (92/100), covering SQL, Python analysis, and dashboard creation presented to stakeholders.",
    ],
  },
];

export default cardsData;