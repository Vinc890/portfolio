export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Work" },
  { id: "contact", title: "Contact" },
];

import {
  web,
  mobile,
  backend,
  creator,
} from "../assets";

export const services = [
  {
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "Mobile App Engineering",
    icon: mobile,
  },
  {
    title: "AI Integration & APIs",
    icon: backend,
  },
  {
    title: "Enterprise Systems",
    icon: creator,
  },
];

export const technologies = [
  { name: "React JS" },
  { name: "Next JS" },
  { name: "Generative AI APIs" },
  { name: "Prompt Engineering" },
  { name: "Three JS" },
  { name: "Node JS" },
  { name: "MongoDB" },
  { name: "Firebase" },
  { name: "SQL" },
  { name: "Tailwind CSS" },
];

export const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "BlitzCode Systems",
    date: "Sept 2023 - Present",
    points: [
      "Built an AI Avatar-powered roleplay platform featuring Voice and Video Agents that conduct and record live candidate simulations.",
      "Engineered a system where AI personas coach and assess candidates, dynamically analyzing session video and audio against report parameters to generate structured performance evaluations.",
      "Developed a web app for employee assessments, streamlining promotions and recruitment processes to enhance efficiency.",
      "Built a parent-engagement mobile app facilitating canteen orders, uniform purchases, event scheduling, and payment management.",
      "Created a BRSR (Business Responsibility & Sustainability Reporting) compliance web app, automating cross-departmental report generation.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "BlitzCode Systems",
    date: "Jan 2023 - Jun 2023",
    points: [
      "Migrated a website from ReactJS to Next JS, leveraging pre-rendering capabilities to boost SEO performance.",
      "Enhanced the user interface for a modern, streamlined experience, leading to significantly faster load times.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Exposys Data Labs",
    date: "Jul 2022 - Aug 2022",
    points: [
      "Developed a responsive multi-page website, emphasizing modern aesthetics and intuitive functionality.",
      "Successfully deployed the website on free hosting platforms Vercel and Netlify, ensuring accessible and scalable performance.",
    ],
  },
];

import {
  pharma,
  vuconnect,
  metaverse,
  typingame,
} from "../assets";

export const projects = [
  {
    name: "Citizen Grievance Portal",
    description:
      "A modern web platform designed to streamline the submission and tracking of civic issues, featuring an intuitive UI and efficient routing of user reports.",
    tags: [
      { name: "nextjs" },
      { name: "fullstack" },
      { name: "modern-ui" },
    ],
    image: pharma,
    link: "https://citizen-grievance-portal-vincent.vercel.app/en",
    source_code_link: "https://github.com/vincentvarghese01/citizen-grievance-portal",
  },
  {
    name: "VU Connect",
    description:
      "An inclusive social networking platform for the VU community, integrating Firebase authentication to foster open community engagement and networking among students, faculty, and alumni.",
    tags: [
      { name: "react" },
      { name: "firebase" },
      { name: "tailwindcss" },
    ],
    image: vuconnect,
    link: "https://github.com/vincentvarghese01",
    source_code_link: "https://github.com/vincentvarghese01/vu-connect",
  },
  {
    name: "The Metaverse Landing Page",
    description:
      "A visually captivating and interactive landing page showcasing the concept of the metaverse. Designed with immersive visuals and CSS animations to entice visitors into exploring virtual environments.",
    tags: [
      { name: "react" },
      { name: "css-animations" },
      { name: "ui-ux" },
    ],
    image: metaverse,
    link: "https://meta-land.netlify.app/",
    source_code_link: "https://github.com/vincentvarghese01/metaverse-landing-page",
  },
  {
    name: "Typing Game",
    description:
      "An interactive typing game featuring random sentence generation and a built-in timer. Implemented real-time feedback by highlighting correct and incorrect characters dynamically to improve typing speed.",
    tags: [
      { name: "vanilla-js" },
      { name: "html" },
      { name: "css" },
    ],
    image: typingame,
    link: "https://typiingame.netlify.app/",
    source_code_link: "https://github.com/vincentvarghese01/typing-game",
  }
];

export const testimonials = [];