export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

import { web, mobile, backend, creator } from "../assets";

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
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
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
  { name: "Git" },
  { name: "AI Integrated IDEs" },
  { name: "Figma" },
];

export const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "BlitzCode Systems",
    date: "Sept 2023 - Present",
    points: [
      "Built an AI Avatar-powered roleplay platform featuring Voice and Video Agents that conduct and record live candidate simulations where AI personas coach and assess candidates via simulated utility and customer interactions, then session video and audio are analyzed against dynamic report parameters to generate structured performance evaluations — replacing manual assessment entirely.",
      "Developed a web app for employee assessments, streamlining promotions and recruitment processes. This tool Is focused on enhancing efficiency in evaluating skills and performance.",
      "Built a mobile app for parents, enhancing parent’s engagement with school events and services. The app facilitated ordering of canteen food, uniforms, and stationery. Scheduling volunteering events and managing school calendar and payments.",
      "Created a BRSR (Business Responsibility & Sustainability Reporting) compliance web app, automating report creation by segmenting and assigning by departments and compiling inputs to generate the final draft. This innovative tool simplified the reporting process significantly.",
      "Designed the BlitzCode website, establishing a key online presence for company information. The site serves as a comprehensive resource for products and services.",
      "Developed an event booking site, simplifying planning with venue and service reservations. This platform provided a seamless user experience for event organizers.",
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

import { pharma, vuconnect, metaverse, typingame, citizen, feedback_portal } from "../assets";

export const projects = [
  {
    name: "FlowSync",
    description:
      "A zero-friction client feedback portal and real-time Kanban workspace built for independent professionals.",
    tags: [{ name: "nextjs" }, { name: "WebSockets" }, { name: "Redis" }, { name: "fullstack" }, { name: "modern-ui" }],
    image: feedback_portal,
    link: "https://feedback-portal-vincent.vercel.app",
  },
  {
    name: "Citizen Grievance Portal",
    description:
      "A modern web platform designed to streamline the submission and tracking of civic issues, featuring an intuitive UI and efficient routing of user reports.",
    tags: [{ name: "nextjs" }, { name: "fullstack" }, { name: "modern-ui" }],
    image: citizen,
    link: "https://citizen-grievance-portal-vincent.vercel.app/en",
  },
  {
    name: "VU Connect",
    description:
      "An inclusive social networking platform for the VU community, integrating Firebase authentication to foster open community engagement and networking among students, faculty, and alumni.",
    tags: [{ name: "react" }, { name: "firebase" }, { name: "tailwindcss" }],
    image: vuconnect,
    link: "https://github.com/vincentvarghese01",
  },
  {
    name: "The Metaverse Landing Page",
    description:
      "A visually captivating and interactive landing page showcasing the concept of the metaverse. Designed with immersive visuals and CSS animations to entice visitors into exploring virtual environments.",
    tags: [{ name: "react" }, { name: "css-animations" }, { name: "ui-ux" }],
    image: metaverse,
    link: "https://meta-land.netlify.app/",
  },
  {
    name: "Typing Game",
    description:
      "An interactive typing game featuring random sentence generation and a built-in timer. Implemented real-time feedback by highlighting correct and incorrect characters dynamically to improve typing speed.",
    tags: [{ name: "vanilla-js" }, { name: "html" }, { name: "css" }],
    image: typingame,
    link: "https://typiiingame.netlify.app/",
  },
  {
    name: "Basic Website Template",
    description:
      "A basic website template for businesses and organizations. Build as part of internship program",
    tags: [{ name: "html" }, { name: "css" }],
    image: pharma,
    link: "https://virtue-pharma.netlify.app/",
  },
];

export const testimonials = [];
