import OrganizationImage from "../../../assets/images/Pantai.png";

const graphicdesign = [
  {
    id: 1,
    title: "Graphic Design Research Group",
    description:
      "A global group dedicated to advancing research in graphic design, exploring innovative techniques, and promoting creativity among graphic design experts.",
    image: OrganizationImage,
    tags: ["Committee", "Graphic Design", "Research"],
    buttons: [
      {
        text: "View Committee",
        link: "https://drive.google.com/drive/folders/1-4R1VSKn6FQnBoxEx4ZwyvFTyP970WQj?usp=sharing", // Adjust the link accordingly
      },
      {
        text: "View Project",
        link: "/projects/graphic-design-research", // Adjust the link accordingly
      },
    ],
  },
  {
    id: 2,
    title: "Design for Social Impact Coalition",
    description:
      "A coalition of organizations focused on using graphic design to solve global challenges such as education, environmental sustainability, and social justice.",
    image: OrganizationImage,
    tags: ["Committee", "Graphic Design", "Social Impact"],
    buttons: [
      {
        text: "View Committee",
        link: "/committee/social-impact", // Adjust the link accordingly
      },
      {
        text: "View Project",
        link: "/projects/social-impact", // Adjust the link accordingly
      },
    ],
  },
  {
    id: 3,
    title: "Design Ethics and Visual Culture Forum",
    description:
      "An interdisciplinary forum discussing the ethical implications of graphic design, the influence of visual culture, and its impact on society.",
    image: OrganizationImage,
    tags: ["Committee", "Design Ethics", "Visual Culture"],
    buttons: [
      {
        text: "View Committee",
        link: "/committee/design-ethics", // Adjust the link accordingly
      },
      {
        text: "View Project",
        link: "/projects/design-ethics", // Adjust the link accordingly
      },
    ],
  },
  {
    id: 4,
    title: "Graphic Design Innovation and Startups Hub",
    description:
      "An initiative to foster innovation in the graphic design startup ecosystem, connecting designers, entrepreneurs, and professionals in the field.",
    image: OrganizationImage,
    tags: [
      "Committee",
      "Design Startups",
      "Innovation",
      "Entrepreneurship",
      "Graphic Design",
    ],
    buttons: [
      {
        text: "View Committee",
        link: "/committee/design-startups", // Adjust the link accordingly
      },
      {
        text: "View Project",
        link: "/projects/design-startups", // Adjust the link accordingly
      },
    ],
  },
];

export default graphicdesign;
