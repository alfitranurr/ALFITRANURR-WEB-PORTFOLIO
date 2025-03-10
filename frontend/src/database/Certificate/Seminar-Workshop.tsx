import CareerNextAMCOR from "../../assets/images/Certificate/SeminarWorkshop/Certificate - Career Next with Jobstreet and P&G - 2025.png";
import QA from "../../assets/images/Certificate/SeminarWorkshop/Certificate - Quality Assurance - 2023.png";
import MSIB6 from "../../assets/images/Certificate/SeminarWorkshop/Certificate - Sosialisasi (MSIB) Batch 6 - 2023.png";
import BIMTEK from "../../assets/images/Certificate/SeminarWorkshop/Certificate - BIMTEK Perpustakaan - 2022.png";

interface Seminar {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  buttons: {
    text: string;
    link: string;
  }[];
}

const seminars: Seminar[] = [
  {
    id: 1,
    title: "Career Next with Jobstreet and P&G",
    description:
      "A hands-on workshop that explores the fundamental techniques in data science, including machine learning, data visualization, and statistical analysis.",
    image: CareerNextAMCOR,
    tags: ["Participant"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/16lXfM9dJaeHdXAr9n3u5_FooKA6N1Ddq/view?usp=sharing",
      },
    ],
  },
  {
    id: 2,
    title: "Quality Assurance 101 A Beginner's Guide to Quality Assurance",
    description:
      "An intensive seminar focused on building digital marketing strategies for business growth, exploring SEO, content marketing, and social media advertising.",
    image: QA,
    tags: ["Participant"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1NUOI7mK_8x-9rp9olGkGCxEdPbrUhsZU/view?usp=sharing",
      },
    ],
  },
  {
    id: 3,
    title: "MSIB Batch 6 Socialization",
    description:
      "A beginner-friendly seminar covering the basics of AI and its applications in various industries like healthcare, finance, and manufacturing.",
    image: MSIB6,
    tags: ["Participant"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1_NikR0nAQ39U2ho4_ZGKlhPWTwVmdUpl/view?usp=sharing",
      },
    ],
  },
  {
    id: 4,
    title: "UMM Library Technology Guidance",
    description:
      "A hands-on workshop diving into blockchain technology, cryptocurrency, and their potential in revolutionizing industries like finance and supply chain.",
    image: BIMTEK,
    tags: ["Participant"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1VWVHID4BV6sDrePb1ZkN_HbfR1Gs9f6d/view?usp=sharing",
      },
    ],
  },
];

export default seminars;
