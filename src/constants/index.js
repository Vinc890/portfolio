// Set to false to hide the voice-agent case study (e.g. if your employer
// prefers you don't describe it). The nav link hides with it.
export const showCaseStudy = true;

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  ...(showCaseStudy ? [{ id: "case-study", title: "Case Study" }] : []),
  { id: "contact", title: "Contact" },
];

// Work project: anonymised, no client code, screenshots or names.
export const caseStudy = {
  title: "AI Voice-Agent Roleplay Platform",
  context:
    "An HR-tech platform where AI voice and video agents run live roleplay simulations, such as customer-service calls, to coach and assess candidates. I built the web app and the media pipeline; a partner team built the evaluation backend.",
  outcome:
    "Now contracted by a large Indian BPO and a Singapore-based insurance training institute.",
  flow: [
    {
      stage: "During the session",
      nodes: [
        { name: "ElevenLabs voice agent", detail: "Real-time voice conversation via the Conversational AI SDK", mine: false },
        { name: "React web app", detail: "Live session UI, admin dashboard, agent setup", mine: true, link: "both" },
        { name: "Cloud Storage", detail: "Candidate video uploaded in chunks as the session runs", mine: true },
      ],
    },
    {
      stage: "After the session",
      nodes: [
        { name: "GCP Cloud Function", detail: "Fetches agent audio and stitches it with the video chunks", mine: true },
        { name: "Final recording", detail: "One complete session file, back in Cloud Storage", mine: true },
        { name: "LLM evaluation", detail: "Partner backend scores the session into a structured report", mine: false },
      ],
    },
  ],
  problems: [
    {
      title: "One recording from two sources",
      text: "The candidate's video was captured in the browser, but the agent's voice lived on ElevenLabs. Uploading the video in chunks during the call and merging everything in a Cloud Function afterwards gave the evaluator one complete recording.",
    },
    {
      title: "Agents configured from the dashboard",
      text: "Admins define the persona, the scenario and the report parameters in the UI, and the app creates and updates the matching ElevenLabs agent through its API, so new roleplays need no code.",
    },
    {
      title: "Personas that stay in character",
      text: "Each agent gets a role-specific knowledge base and system prompt, refined over repeated test sessions until it holds the scenario consistently.",
    },
    {
      title: "Shipping alongside other teams",
      text: "Feature APIs were agreed with the partner backend team, and successive redesigns from external UI/UX agencies were rolled into the live product.",
    },
  ],
  stack: [
    "React",
    "ElevenLabs Conversational AI",
    "GCP Cloud Functions",
    "Cloud Storage",
    "LLM APIs",
  ],
};

import { web, mobile, backend, creator } from "../assets";

export const services = [
  {
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "AI & LLM Integration",
    icon: backend,
  },
  {
    title: "Voice Agents & Media Pipelines",
    icon: mobile,
  },
  {
    title: "Client-Facing Delivery",
    icon: creator,
  },
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
  { name: "GCP" },
  { name: "LLM APIs" },
  { name: "Prompt Engineering" },
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
      "Own frontend architecture and AI integrations for client products, from requirements with clients through to delivery, working closely with the founder and partner backend teams.",
      "Continue to own the frontend and media pipeline of the AI voice-agent roleplay platform, now contracted by an Indian BPO and a Singapore insurance training institute.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "BlitzCode Systems",
    date: "Sep 2023 - Oct 2026",
    points: [
      "AI voice-agent roleplay platform (HR-tech): built the full web frontend from scratch, covering live roleplay sessions, the admin dashboard and agent setup, integrating APIs from a partner backend team.",
      "Integrated the ElevenLabs SDK for live voice and video sessions, and built flows that create and configure agents through its API.",
      "Built a GCP Cloud Function that stitches chunked session video from Cloud Storage with agent audio into one recording, which feeds an LLM-based evaluation pipeline.",
      "Designed agent personas through system prompts and role-specific knowledge bases, refined across repeated test sessions.",
      "Built the frontend for the platform's earlier manual version: admin question banks, multi-step assessment wizards and reviewer workflows.",
      "ESG compliance (BRSR) reporting tool: built a schema-driven form engine with an admin builder UI and complex tables (multi-level headers, merged cells, locked values), split across departments and merged into one final report.",
      "Offline-first field registration app: built on-device storage with sync to the central database when connectivity returns.",
      "Also added features to a parent-engagement mobile app for a European client and rebuilt the company website in Next.js.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "BlitzCode Systems",
    date: "Jan 2023 - Jun 2023",
    points: [
      "Migrated a client web app from React to Next.js, using pre-rendering for better SEO and load times.",
      "Refreshed the UI for a cleaner, faster experience.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Exposys Data Labs",
    date: "Jul 2022 - Aug 2022",
    points: [
      "Built and deployed a responsive multi-page website with HTML, CSS and JavaScript on Vercel and Netlify.",
    ],
  },
];

import { citizen, feedback_portal } from "../assets";

export const projects = [
  {
    name: "FlowSync",
    description:
      "A real-time Kanban workspace and client feedback portal for freelancers. Clients submit feedback through a private link with no sign-up, and tasks sync instantly as they move across the board.",
    tags: [{ name: "nextjs" }, { name: "websockets" }, { name: "redis" }],
    image: feedback_portal,
    link: "https://feedback-portal-vincent.vercel.app",
  },
  {
    name: "Citizen Grievance Portal",
    description:
      "A civic grievance platform with citizen, department and admin roles. Complaints route to the right department, with speech-to-text, multilingual input and a CMS-style admin panel for homepage content.",
    tags: [{ name: "nextjs" }, { name: "supabase" }, { name: "i18n" }],
    image: citizen,
    link: "https://citizen-grievance-portal-vincent.vercel.app/en",
  },
];

export const testimonials = [];
