import OrganizationImage from "../../assets/images/Pantai.png";

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
    title: "Data Science Workshop",
    description:
      "A hands-on workshop that explores the fundamental techniques in data science, including machine learning, data visualization, and statistical analysis.",
    image: OrganizationImage,
    tags: ["Seminar", "Data Science", "Machine Learning", "Workshop"],
    buttons: [
      {
        text: "View Seminar Details",
        link: "/seminars/data-science-workshop", // Adjust the URL based on your routing
      },
      {
        text: "View Project",
        link: "/projects/data-science-workshop", // Adjust the URL based on your routing
      },
    ],
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    description:
      "An intensive seminar focused on building digital marketing strategies for business growth, exploring SEO, content marketing, and social media advertising.",
    image: OrganizationImage,
    tags: ["Seminar", "Digital Marketing", "SEO", "Social Media"],
    buttons: [
      {
        text: "View Seminar Details",
        link: "/seminars/digital-marketing-mastery", // Adjust the URL based on your routing
      },
      {
        text: "View Project",
        link: "/projects/digital-marketing-mastery", // Adjust the URL based on your routing
      },
    ],
  },
  {
    id: 3,
    title: "Artificial Intelligence Fundamentals",
    description:
      "A beginner-friendly seminar covering the basics of AI and its applications in various industries like healthcare, finance, and manufacturing.",
    image: OrganizationImage,
    tags: ["Seminar", "AI", "Artificial Intelligence", "Tech"],
    buttons: [
      {
        text: "View Seminar Details",
        link: "/seminars/ai-fundamentals", // Adjust the URL based on your routing
      },
      {
        text: "View Project",
        link: "/projects/ai-fundamentals", // Adjust the URL based on your routing
      },
    ],
  },
  {
    id: 4,
    title: "Blockchain and Cryptocurrency Workshop",
    description:
      "A hands-on workshop diving into blockchain technology, cryptocurrency, and their potential in revolutionizing industries like finance and supply chain.",
    image: OrganizationImage,
    tags: ["Seminar", "Blockchain", "Cryptocurrency", "Tech"],
    buttons: [
      {
        text: "View Seminar Details",
        link: "/seminars/blockchain-cryptocurrency", // Adjust the URL based on your routing
      },
      {
        text: "View Project",
        link: "/projects/blockchain-cryptocurrency", // Adjust the URL based on your routing
      },
    ],
  },
];

export default seminars;
