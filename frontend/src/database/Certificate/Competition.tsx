{
  /* WINNER */
}
import SIC_INDICATION from "../../assets/images/Certificate/Competition/Certificate - SIC INDICATION - 2024.jpg";

{
  /* PARTICIPANTS */
}
import DataMiningHology7_0 from "../../assets/images/Certificate/Competition/Certficate - Data Mining Hology 7.0 - 2024.png";
import FILKOM_UB_4C from "../../assets/images/Certificate/Competition/Certificate - 4C FILKOM UB - 2024.png";
import KemostanUB from "../../assets/images/Certificate/Competition/Certificate - Kemostan UB - 2024.png";
import KimiaKovalenUNS from "../../assets/images/Certificate/Competition/Certificate - Kimia Kovalen UNS - 2019.png";

interface Competition {
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

const competitions: Competition[] = [
  {
    id: 1,
    title: "SIC INDICATION UMM - Infographic",
    description:
      "A competition where participants debate on various topics, showcasing their public speaking and argumentation skills to a panel of judges.",
    image: SIC_INDICATION,
    tags: ["Win", "Regional"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1acZSavssYEDdthaOGP_eEYOdEXAQ1DfH/view?usp=sharing",
      },
    ],
  },
  {
    id: 2,
    title: "Hology 7.0 UB - Data Mining",
    description:
      "A global competition for developers to showcase their coding skills and problem-solving abilities. The event features multiple coding challenges and prizes.",
    image: DataMiningHology7_0,
    tags: ["Participant", "National"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1fqm9XvVwSDHC1uaQzzJKluL4Ux2XOEX4/view?usp=sharing",
      },
    ],
  },
  {
    id: 3,
    title: "4C FILKOM UB - Infographic Poster",
    description:
      "A competition for aspiring entrepreneurs to pitch their business ideas, compete for funding, and showcase their business strategies in front of investors.",
    image: FILKOM_UB_4C,
    tags: ["Participant", "National"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1eqpCwscke4hquUbHcNXDG4VFBdTlyTMs/view?usp=sharing",
      },
    ],
  },
  {
    id: 4,
    title: "KEMOSTAN UB - Infographic",
    description:
      "A creative competition for graphic designers and digital artists to demonstrate their artistic talent, with a chance to win recognition and rewards.",
    image: KemostanUB,
    tags: ["Participant", "National"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1cBoKgI5k1rJyewbF3xrgOcMakRjrLqJ9/view?usp=sharing",
      },
    ],
  },
  {
    id: 5,
    title: "Kovalen Edufair IX HMP UNS - Covalent Chemistry",
    description:
      "A competition where participants debate on various topics, showcasing their public speaking and argumentation skills to a panel of judges.",
    image: KimiaKovalenUNS,
    tags: ["Participant", "National"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1MmXQr8JvHX9S54c-pdt81RiuR8IGgA_v/view?usp=sharing",
      },
    ],
  },
];

export default competitions;
