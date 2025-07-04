import CareerNextAMCOR from "../../assets/images/Certificate/SeminarWorkshop/Certificate - Career Next with Jobstreet and P&G - 2025.png";
import QA from "../../assets/images/Certificate/SeminarWorkshop/Certificate - Quality Assurance - 2023.png";
import MSIB6 from "../../assets/images/Certificate/SeminarWorkshop/Certificate - Sosialisasi (MSIB) Batch 6 - 2023.png";
import BIMTEK from "../../assets/images/Certificate/SeminarWorkshop/Certificate - BIMTEK Perpustakaan - 2022.png";
import AI_Ignition from "../../assets/images/Certificate/SeminarWorkshop/Certificate - AI Ignition.png";

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
    title: "AI Ignition Training - From Basics to Breakthroughs in AI",
    description: "",
    image: AI_Ignition,
    tags: ["Participant"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1DwKz4v10ZCjtUgLT7yPfmWdCqX7jgUxH/view?usp=sharing",
      },
    ],
  },
  {
    id: 2,
    title: "Career Next with Jobstreet and P&G",
    description: "",
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
    id: 3,
    title: "Quality Assurance 101 A Beginner's Guide to Quality Assurance",
    description: "",
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
    id: 4,
    title: "MSIB Batch 6 Socialization",
    description: "",
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
    id: 5,
    title: "UMM Library Technology Guidance",
    description: "",
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
