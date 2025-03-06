import OrganizationImage from "../../assets/images/Pantai.png";

interface License {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const licenses: License[] = [
  {
    id: 1,
    title: "Certified Ethical Hacker (CEH)",
    description:
      "A certification that focuses on ethical hacking skills, including penetration testing, network security, and risk management, ideal for professionals seeking careers in cybersecurity.",
    image: OrganizationImage,
    tags: ["Certification", "Cybersecurity", "Ethical Hacking", "IT"],
  },
  {
    id: 2,
    title: "Project Management Professional (PMP)",
    description:
      "A globally recognized certification for project management professionals that demonstrates your skills and expertise in leading projects and teams.",
    image: OrganizationImage,
    tags: ["Certification", "Project Management", "Leadership", "Business"],
  },
  {
    id: 3,
    title: "Google Analytics Certification",
    description:
      "A certification program for mastering Google Analytics, enabling you to track and analyze website traffic, understand audience behavior, and improve online marketing strategies.",
    image: OrganizationImage,
    tags: ["Certification", "Analytics", "Digital Marketing", "Google"],
  },
  {
    id: 4,
    title: "Certified Public Accountant (CPA)",
    description:
      "A certification for accounting professionals that is recognized worldwide, demonstrating expertise in accounting principles, taxation, and financial reporting.",
    image: OrganizationImage,
    tags: ["Certification", "Accounting", "Finance", "Taxation"],
  },
];

export default licenses;
