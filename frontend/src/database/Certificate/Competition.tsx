{
  /* WINNER */
}
import SIC_INDICATION from "../../assets/images/Certificate/Competition/Certificate - SIC INDICATION - 2024.jpg";
import Juara1_PKP2_PTMA from "../../assets/images/Certificate/Competition/Certificate - 1st Winner PKP2 PTMA PKM KC.png";
import Passed_The_Univ_Level from "../../assets/images/Certificate/Competition/Certificate - Passed The Univ Level - PKM KC 2025.png";

{
  /* PARTICIPANTS */
}
import DataMiningHology7_0 from "../../assets/images/Certificate/Competition/Certficate - Data Mining Hology 7.0 - 2024.png";
import FILKOM_UB_4C from "../../assets/images/Certificate/Competition/Certificate - 4C FILKOM UB - 2024.png";
import KemostanUB from "../../assets/images/Certificate/Competition/Certificate - Kemostan UB - 2024.png";
import KimiaKovalenUNS from "../../assets/images/Certificate/Competition/Certificate - Kimia Kovalen UNS - 2019.png";
import Participants_of_PKP2_PTMA from "../../assets/images/Certificate/Competition/Certificate - Participants of PKP2 PTMA - PKM KC 2025.png";

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
    title: "1st Winner of PKP2 PTMA - PKM KC 2025",
    description: "",
    image: Juara1_PKP2_PTMA,
    tags: ["Win", "National"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1EPePD0fPPPIVPzwVQvT7DHMimiad4mTn/view?usp=sharing",
      },
    ],
  },{
    id: 2,
    title: "Participants of PKP2 PTMA - PKM KC 2025",
    description: "",
    image: Participants_of_PKP2_PTMA,
    tags: ["Participant", "National"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1wEdVQ5pnpG6BKTJawqI_SFeeJ7YBlyyB/view?usp=sharing",
      },
    ],
  },{
    id: 3,
    title: "Passed The Univ Level - PKM KC 2025",
    description: "",
    image: Passed_The_Univ_Level,
    tags: ["Win", "National"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1VLwLzjNXM4ojH2MES8mBUvSuc6CZjuyD/view?usp=sharing",
      },
    ],
  },
  {
    id: 4,
    title: "SIC INDICATION UMM - Infographic",
    description: "",
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
    id: 5,
    title: "Hology 7.0 UB - Data Mining",
    description: "",
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
    id: 6,
    title: "4C FILKOM UB - Infographic Poster",
    description: "",
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
    id: 7,
    title: "KEMOSTAN UB - Infographic",
    description: "",
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
    id: 8,
    title: "Kovalen Edufair IX HMP UNS - Covalent Chemistry",
    description: "",
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
