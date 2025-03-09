import OrganizationImage from "../../assets/images/Pantai.png";

const committees = [
  {
    id: 1,
    title: "Organization Management Committee",
    description:
      "A committee dedicated to managing the structure and processes of the organization, ensuring smooth operations and high member engagement.",
    image: OrganizationImage,
    tags: ["Committee", "Organization Management", "Leadership", "Strategy"],
    buttons: [
      {
        text: "View Committee",
        link: "/committee/organization-management", // Adjust this URL based on the real path
      },
      {
        text: "View Project",
        link: "/projects/organization-management", // Adjust this URL based on the real path
      },
    ],
  },
  {
    id: 2,
    title: "Event Planning Committee",
    description:
      "A team focused on organizing and executing events, from small workshops to large conferences, ensuring seamless planning and execution.",
    image: OrganizationImage,
    tags: ["Committee", "Event Planning", "Logistics", "Teamwork"],
    buttons: [
      {
        text: "View Committee",
        link: "/committee/event-planning", // Adjust this URL based on the real path
      },
      {
        text: "View Project",
        link: "/projects/event-planning", // Adjust this URL based on the real path
      },
    ],
  },
  {
    id: 3,
    title: "Public Relations and Communications Committee",
    description:
      "A group that handles the external communications, public relations strategies, and branding of the organization to maintain a positive public image.",
    image: OrganizationImage,
    tags: ["Committee", "Public Relations", "Communications", "Branding"],
    buttons: [
      {
        text: "View Committee",
        link: "/committee/public-relations", // Adjust this URL based on the real path
      },
      {
        text: "View Project",
        link: "/projects/public-relations", // Adjust this URL based on the real path
      },
    ],
  },
  {
    id: 4,
    title: "Membership and Recruitment Committee",
    description:
      "A committee focused on expanding the organization's membership, recruiting new members, and maintaining strong engagement with current members.",
    image: OrganizationImage,
    tags: ["Committee", "Membership", "Recruitment", "Community Building"],
    buttons: [
      {
        text: "View Committee",
        link: "/committee/membership-recruitment", // Adjust this URL based on the real path
      },
      {
        text: "View Project",
        link: "/projects/membership-recruitment", // Adjust this URL based on the real path
      },
    ],
  },
];

export default committees;
