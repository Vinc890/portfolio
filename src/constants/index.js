import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  pharma,
  todo,
  typingame,
  vuconnect,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Front-end Developer",
    icon: backend,
  },
  {
    title: "Content writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Exposys Data Labs",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Designed and developed a responsive multipage website during my internship at Exposys Data Labs, gaining hands-on experience in web development and design.",
      "Learned the significance of aesthetics and functionality in website design, emphasizing the need for visually appealing layouts alongside intuitive user interactions.",
      "Acquired knowledge in website performance optimization techniques, implementing strategies like image compression, lazy loading, and code optimization to enhance loading speed and overall user experience.",
      "Demonstrated a keen understanding of responsive design principles, ensuring the website's adaptability across various devices, providing users a good browsering experience.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "BlitzCode Systems",
    icon: tesla,
    iconBg: "#383E56",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Completed website migration tasks as an intern at BlitzCode Systems, successfully transitioning existing websites to Next.js, a powerful React framework that enables server-side rendering and enhanced performance.",
      "Took on the responsibility of improving UI/UX aspects of the migrated websites, focusing on creating user-friendly interfaces and visually appealing designs.",
      "Implemented server-side rendering techniques to optimize website loading times and enhance SEO performance, ensuring a smoother and faster browsing experience for users.",
      "Gained valuable experience in web development and collaboration by working closely with the development team, fostering a collaborative environment that facilitated knowledge exchange and skill enhancement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "VUConnect",
    description:"he purpose of VU Connect is to create a vibrant and inclusive social networking platform exclusively for the VU community, including current students, faculty, and alumni.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: vuconnect,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pharma-Website-Template",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pharma,
    source_code_link: "https://github.com/",
  },
  {
    name: "ToDo-List",
    description:
      "I created a To-Do List website using React.js with basic functionalities such as adding, completing, updating, and deleting tasks. The main objective was to create a user-friendly interface with a dark theme that effectively highlights the tasks. The website allows users to easily manage and organize their tasks. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Typing-Game",
    description:
      "I have developed a typing game using HTML, CSS, and JavaScript. The game includes a timer that starts when the game begins and generates random sentences for typing practice. As players type, the text is dynamically highlighted to indicate the accuracy of their typing. Correctly typed characters are highlighted differently from incorrect ones. This interactive feedback helps players improve their typing skills by providing real-time feedback.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: typingame,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
