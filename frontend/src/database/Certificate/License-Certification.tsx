import Quran30Juz_Surkati from "../../assets/images/Certificate/LicenseCertification/Certificate - Memorizing the Quran 30 Juz in One Sitting.png";
import SLQ_UMM from "../../assets/images/Certificate/LicenseCertification/Certificate - Semarak Literasi Al-Quran - 2023.png";
import MySkill_DataAnalysis from "../../assets/images/Certificate/LicenseCertification/Certificate - Data Analysis Fullstack Intensive Bootcamp.png";
import MySkill_MarketingManagement from "../../assets/images/Certificate/LicenseCertification/Certificate - E-Learning MySkill Marketing Management.png";
import ASEAN_DSE from "../../assets/images/Certificate/LicenseCertification/Certificate -  ASEAN DSE - 2024.png";
import OracleAcademy from "../../assets/images/Certificate/LicenseCertification/Certificate - Oracle Academy_Database - 2024.png";
import DicodingAcademy from "../../assets/images/Certificate/LicenseCertification/Certificate - Dicoding Academy_Belajar Dasar Data Science - 2023.png";
import FLSPUMM from "../../assets/images/Certificate/LicenseCertification/Certificate - Qualification of FLSP UMM - 2024.png";
import ExcelEdutify from "../../assets/images/Certificate/LicenseCertification/Certificate - Filosofi Excel by Edutify - 2024.png";
import ExcelKarirNext from "../../assets/images/Certificate/LicenseCertification/Certificate - Karirnex Bootcamp Excel - 2024.png";
import RakaminKimiaFarmaBDA from "../../assets/images/Certificate/LicenseCertification/Certificate - PBI Big Data Analytics Rakamin Academy x Kimia Farma.png";

interface License {
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

const licenses: License[] = [
  {
    id: 1,
    title: "Rakamin Academy - Big Data Analytics Intern Kimia Farma",
    description: "",
    image: RakaminKimiaFarmaBDA,
    tags: ["National"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1hEpRzMbf_mbioM6ilx-Aq3LB9IqCW6YB/view?usp=sharing",
      },
    ],
  },
  {
    id: 2,
    title: "MySkill - Data Analysis Fullstack Intensive Bootcamp",
    description: "",
    image: MySkill_DataAnalysis,
    tags: ["National"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/drive/folders/1UIaqEc2T4qEtJ5myMbDjtlSbaqiZYCZu?usp=sharing",
      },
    ],
  },
  {
    id: 3,
    title: "MySkill - Marketing Management",
    description: "",
    image: MySkill_MarketingManagement,
    tags: ["National"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1NTAvHDFl-3lpn2GyAxbDMipeDwZpaKQ8/view?usp=sharing",
      },
    ],
  },
  {
    id: 4,
    title: "UMM - Semarak Literasi Al-Quran",
    description: "",
    image: SLQ_UMM,
    tags: ["Local"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1S43dnSJKZAu6LCRad_PHCKS84rfDWP0w/view?usp=sharing",
      },
    ],
  },
  {
    id: 5,
    title: "As-Surkati - Memorizing the Quran 30 Juz in One Sitting",
    description: "",
    image: Quran30Juz_Surkati,
    tags: ["Local"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/drive/folders/1SKS3Ntr0Bmr96ojVh7WwPetOZTj2sKTO?usp=sharing",
      },
    ],
  },
  {
    id: 6,
    title: "ASEAN Data Science Explorers 2024 Enablement Session",
    description: "",
    image: ASEAN_DSE,
    tags: ["National"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1ZP4BagM1dobaerWz_Quc1j-Y_h-e9K_q/view?usp=sharing",
      },
    ],
  },
  {
    id: 7,
    title: "Oracle Academy - Database",
    description: "",
    image: OracleAcademy,
    tags: ["National"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1M_HxiW0cpfp2bU8DkDcLWzu0LtECZZo_/view?usp=sharing",
      },
    ],
  },
  {
    id: 8,
    title: "Dicoding Academy - Data Science",
    description: "",
    image: DicodingAcademy,
    tags: ["National"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/drive/folders/1oocyFFkiWcciPSuKpd8mCTUPmngUgVR3?usp=sharing",
      },
    ],
  },
  {
    id: 9,
    title: "UMM - FLSP",
    description: "",
    image: FLSPUMM,
    tags: ["Local"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1IhaILHUtunljwD1AGQ_5lCGYIXnq2BcS/view?usp=sharing",
      },
    ],
  },
  {
    id: 10,
    title: "Edutify - Filosofi Excel",
    description: "",
    image: ExcelEdutify,
    tags: ["National"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1aTzpzon0C8Ny4mwVyFC1uRtDfNNyoWXk/view?usp=sharing",
      },
    ],
  },
  {
    id: 11,
    title: "KarirNext - Karirnex Bootcamp Excel",
    description: "",
    image: ExcelKarirNext,
    tags: ["National"],
    buttons: [
      {
        text: "View Certificate",
        link: "https://drive.google.com/file/d/1c1PPOV_jvyBACZfRPAZDTXAmGelyLNOb/view?usp=sharing",
      },
    ],
  },
];

export default licenses;
