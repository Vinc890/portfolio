// Set to false to hide the case study (e.g. until your employer is happy
// for you to describe it). The nav link hides with it.
export const showCaseStudy = true;

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  ...(showCaseStudy ? [{ id: "case-study", title: "Case Study" }] : []),
  { id: "contact", title: "Contact" },
];

// Work project: no client names, code, screenshots or vendor names.
export const caseStudy = {
  title: "AI Voice-Agent Roleplay Platform",
  context:
    "A platform where people practise difficult calls, like handling an upset customer, with an AI voice agent, then get a report on how they did. I built the web app and the pipeline that records each session. A partner team built the part that scores it.",
  outcome:
    "Two enterprise clients have since signed on: a large Indian BPO and an insurance training institute in Singapore.",
  note: "A work project. I've left out client names, code and screenshots.",
  flow: [
    {
      stage: "During the call",
      nodes: [
        { name: "Voice agent", detail: "A third-party voice AI service that runs the conversation", mine: false },
        { name: "Web app", detail: "The call screen, admin dashboard and agent setup", mine: true, link: "both" },
        { name: "Cloud storage", detail: "The candidate's video, uploaded in small pieces during the call", mine: true },
      ],
    },
    {
      stage: "After the call",
      nodes: [
        { name: "Cloud function", detail: "Pulls the agent's audio and joins it with the video", mine: true },
        { name: "Session recording", detail: "One complete file for each session", mine: true },
        { name: "Evaluation", detail: "The partner team's backend turns it into a report", mine: false },
      ],
    },
  ],
  problems: [
    {
      title: "Two halves of one recording",
      text: "The candidate's video was recorded in the browser, but the agent's voice lived with the voice service. I uploaded the video in pieces during the call and joined everything up in a cloud function afterwards, so the evaluation had one complete recording to work with.",
    },
    {
      title: "New scenarios without new code",
      text: "Admins set up the persona, the scenario and what the report should look at from the dashboard. The app then creates or updates the agent through the voice service's API.",
    },
    {
      title: "Keeping agents in character",
      text: "Each agent has its own prompt and background notes. I tuned them over a lot of test calls until they stopped drifting off script.",
    },
    {
      title: "Working across teams",
      text: "The scoring backend belonged to a partner team and the designs came from outside agencies, so a good part of the job was agreeing APIs and fitting redesigns into a product people were already using.",
    },
  ],
  stack: ["React", "Voice AI", "Serverless functions", "Cloud storage", "LLM APIs"],
};

import { web, mobile, backend, creator } from "../assets";

export const services = [
  { title: "Web Apps", icon: web },
  { title: "AI Features", icon: backend },
  { title: "Voice Agents", icon: mobile },
  { title: "Working with Clients", icon: creator },
];

export const technologies = [
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Node.js" },
  { name: "Express" },
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "Firebase" },
  { name: "Supabase" },
  { name: "Google Cloud" },
  { name: "LLM APIs" },
  { name: "Three.js" },
  { name: "Tailwind CSS" },
  { name: "Figma" },
];

export const experiences = [
  {
    title: "Senior Software Developer",
    company_name: "BlitzCode Systems",
    date: "Nov 2026 - Present",
    points: [
      "Own the frontend and AI features on client projects, from the first conversation with the client through to release.",
      "Still look after the voice-agent platform, which two enterprise clients have since signed on to use.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "BlitzCode Systems",
    date: "Sep 2023 - Oct 2026",
    points: [
      "Built the web app for an AI roleplay platform, where voice agents run practice calls with candidates and their performance is assessed afterwards.",
      "Connected the app to a voice AI service for live calls, and let admins create and set up new agents from the dashboard.",
      "Wrote the cloud function that joins each session's video with the agent's audio into one recording for the evaluation step.",
      "Wrote the prompts and background material behind each agent, and tuned them over many test calls.",
      "Built the earlier, manual version of the platform: question banks, multi-step tests and screens for human reviewers.",
      "Built a form engine for ESG compliance reports. Admins design the forms, including tables with merged cells and nested headers, and each department fills in its own part before everything is merged into one report.",
      "Added offline saving to a registration app used in areas with poor connectivity, so records sync once the device is back online.",
      "Also worked on a parent app for a school-services client in Europe, and rebuilt our company website.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "BlitzCode Systems",
    date: "Jan 2023 - Jul 2023",
    points: [
      "Moved a client's React site to Next.js so its pages could be pre-rendered for better SEO.",
      "Cleaned up the UI along the way.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Exposys Data Labs",
    date: "Jul 2022 - Aug 2022",
    points: ["Built and deployed a multi-page website during a short internship."],
  },
];

import { citizen, feedback_portal } from "../assets";

export const projects = [
  {
    name: "FlowSync",
    description:
      "A Kanban board for freelancers. Clients send feedback through a private link without needing an account, and changes show up for everyone straight away.",
    tags: [{ name: "nextjs" }, { name: "websockets" }, { name: "redis" }],
    image: feedback_portal,
    link: "https://feedback-portal-vincent.vercel.app",
  },
  {
    name: "Citizen Grievance Portal",
    description:
      "A place for citizens to report civic issues and follow them up. Complaints go to the right department, and people can type or speak in their own language.",
    tags: [{ name: "nextjs" }, { name: "supabase" }, { name: "i18n" }],
    image: citizen,
    link: "https://citizen-grievance-portal-vincent.vercel.app/en",
  },
];

export const testimonials = [];
