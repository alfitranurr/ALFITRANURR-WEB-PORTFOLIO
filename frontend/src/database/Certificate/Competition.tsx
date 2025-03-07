import OrganizationImage from "../../assets/images/Pantai.png";

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
    title: "International Coding Championship",
    description:
      "A global competition for developers to showcase their coding skills and problem-solving abilities. The event features multiple coding challenges and prizes.",
    image: OrganizationImage,
    tags: ["Competition", "Coding", "Technology", "International"],
    buttons: [
      {
        text: "View Competition",
        link: "/competitions/coding-championship", // Adjust this URL based on the real path
      },
      {
        text: "View Project",
        link: "/projects/international-coding-championship", // Adjust this URL based on the real path
      },
    ],
  },
  {
    id: 2,
    title: "Business Strategy Challenge",
    description:
      "A competition for aspiring entrepreneurs to pitch their business ideas, compete for funding, and showcase their business strategies in front of investors.",
    image: OrganizationImage,
    tags: ["Competition", "Business", "Entrepreneurship", "Pitching"],
    buttons: [
      {
        text: "View Competition",
        link: "/competitions/business-strategy-challenge", // Adjust this URL based on the real path
      },
      {
        text: "View Project",
        link: "/projects/business-strategy-challenge", // Adjust this URL based on the real path
      },
    ],
  },
  {
    id: 3,
    title: "Digital Art and Design Contest",
    description:
      "A creative competition for graphic designers and digital artists to demonstrate their artistic talent, with a chance to win recognition and rewards.",
    image: OrganizationImage,
    tags: ["Competition", "Design", "Digital Art", "Creativity"],
    buttons: [
      {
        text: "View Competition",
        link: "/competitions/digital-art-design-contest", // Adjust this URL based on the real path
      },
      {
        text: "View Project",
        link: "/projects/digital-art-design-contest", // Adjust this URL based on the real path
      },
    ],
  },
  {
    id: 4,
    title: "Public Speaking and Debate Tournament",
    description:
      "A competition where participants debate on various topics, showcasing their public speaking and argumentation skills to a panel of judges.",
    image: OrganizationImage,
    tags: ["Competition", "Public Speaking", "Debate", "Communication"],
    buttons: [
      {
        text: "View Competition",
        link: "/competitions/public-speaking-debate", // Adjust this URL based on the real path
      },
      {
        text: "View Project",
        link: "/projects/public-speaking-debate", // Adjust this URL based on the real path
      },
    ],
  },
];

export default competitions;
