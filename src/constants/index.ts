import {
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
  threejs,
  mobile,
  backend,
  simplifi_app,
  travel_plus,
  dinki_app,
} from "../assets";

import react from "../assets/react.png";
import reactnative from "../assets/reactnative.png";
import express from "../assets/express.png";
import teach from "../assets/teach.png";

import naf_awc from "../assets/projects/naf_awc.png";
import schoola_src from "../assets/projects/schoola_src.png";
import schoola_lms from "../assets/projects/schoola_lms.png";
import schoola_landing from "../assets/projects/schoola_landing.png";
import schoola_curri from "../assets/projects/schoola_curri.png";

import dialogue from "../assets/company/dialogue.png";
import it_central from "../assets/company/it_central.png";
import schoola from "../assets/company/schoola.svg";
import krpc from "../assets/company/krpc.png";

export const personalInfo = {
  name: "Muhammed Ladan",
  role: "Software Developer (React, React Native, Node.js)",
  summary:
    "Software developer with 4+ years of experience building scalable web and mobile applications using React, React Native, and Node.js. Proven track record leading frontend development, mentoring developers, and delivering production-grade systems including LMS platforms and AI-powered tools.",
  email: "mdcarliey@gmail.com",
  phone: "+2347036215851",
  location: "Nigeria",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammed-ladan",
    platform: "linkedin",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    url: "https://github.com/mdcarliey",
    platform: "github",
    color: "#ffffff",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@mdcarliey",
    platform: "tiktok",
    color: "#ff0050",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mdcarliey",
    platform: "instagram",
    color: "#E4405F",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@mdcarliey",
    platform: "youtube",
    color: "#FF0000",
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React.js Web Developer",
    icon: react,
  },
  {
    title: "React Native Mobile Developer",
    icon: reactnative,
  },
  {
    title: "Node.js / Express Backend Developer",
    icon: express,
  },
  {
    title: "Tech Lead & Tutor",
    icon: teach,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer & Senior Partner",
    company_name: "IT CENTRAL LIMITED",
    icon: it_central,
    iconBg: "#0E5FAF",
    date: "Jan 2022 – Present",
    points: [
      "Built client-facing web and mobile applications using React.js, TypeScript, and React Native across 8+ client projects.",
      "Mentored 5 interns, improving their code quality and development workflow.",
      "Trained 40+ students in web development across multiple bootcamps.",
      "Key Projects: Simplifi (Finance Mobile Application), Nigerian Air Force Air Warfare Center LMS.",
    ],
  },
  {
    title: "Mobile App Developer (Contract/Part-time)",
    company_name: "TRAVEL PLUS",
    icon: mobile,
    iconBg: "#1d1836",
    date: "Sept 2025 – Present",
    points: [
      "Built cross-platform mobile applications using React Native for logistics and ride-booking workflows.",
      "Integrated RESTful APIs to support trip booking, payments, and real-time updates.",
      "Managed Play Store releases, ensuring consistent updates and stability.",
    ],
  },
  {
    title: "Full-Stack Mobile Developer (Contract/Part-time)",
    company_name: "DINKI APP LIMITED",
    icon: backend,
    iconBg: "#1d1836",
    date: "Dec 2024 – Jan 2026",
    points: [
      "Contributed to the development of cross-platform mobile applications using React Native, delivering 20+ user-facing features.",
      "Designed, built, and updated REST APIs using Node.js and Express.js to support new mobile features.",
      "Managed CI/CD pipelines and cloud infrastructure on AWS, enabling automated deployments.",
      "Managed Play Store deployments and release cycles, ensuring continuous delivery.",
    ],
  },
  {
    title: "Frontend Lead",
    company_name: "Schoola",
    icon: schoola,
    iconBg: "#ffffff",
    date: "Sep 2022 – Feb 2026",
    points: [
      "Led the redevelopment of the School Record System (SRC) frontend using React.js, implementing 10+ core modules (student management, attendance, report sheets, etc.).",
      "Built the frontend and landing page for Curri AI, an AI-powered platform used by 3,000+ teachers.",
      "Contributed to frontend systems supporting 15K+ students across 150+ schools.",
      "Improved system stability by implementing a suite of unit and integration tests using Jest and React Testing Library (80% critical workflow coverage).",
    ],
  },
  {
    title: "Web Development Tutor (Contract)",
    company_name: "Dialogue Academy Kaduna",
    icon: dialogue,
    iconBg: "#ffffff",
    date: "May 2024 – July 2024",
    points: [
      "Taught foundational web development concepts to 30+ students as part of a pilot curriculum program.",
      "Guided students in building practical projects using HTML, CSS, and JavaScript.",
    ],
  },
  {
    title: "IT Technical Support Intern",
    company_name: "Kaduna Refining & Petrochemical Company (KRPC)",
    icon: krpc,
    iconBg: "#ffffff",
    date: "March 2017 – March 2019",
    points: [
      "Provided IT technical support, promptly addressing software and hardware issues.",
      "Conducted quarterly inventory checks of computer resources allocated to various departments, ensuring optimal resource allocation and maintenance.",
    ],
  },
];

export interface ProjectItem {
  id: string;
  name: string;
  category: "Web Application" | "Mobile Application";
  type: "web" | "mobile";
  description: string;
  longDescription: string;
  features: string[];
  tags: { name: string; color: string }[];
  image: string;
  screenshots: string[];
  source_code_link: string;
  project_link: string;
}

const projects: ProjectItem[] = [
  {
    id: "curri-ai",
    name: "Curri AI",
    category: "Web Application",
    type: "web",
    description:
      "An ed-tech platform that gives teachers the ability to generate lesson plans, lesson notes, and questions 45x faster. Used by over 3,000+ teachers.",
    longDescription:
      "Curri AI is an ed-tech solution designed for teachers and educators. It enables teachers to generate comprehensive lesson notes, structured lesson plans, quizzes, and curriculum resources 45x faster than manual preparation.",
    features: [
      "Instant lesson plan & notes generation",
      "Customizable curriculum templates aligned with school standards",
      "Interactive quiz & assessment builder",
      "Empowers 3,000+ teachers across schools",
      "Seamless integration with Schoola Edtech ecosystem",
    ],
    tags: [
      { name: "web-app", color: "blue-text-gradient" },
    ],
    image: schoola_curri,
    screenshots: [schoola_curri, schoola_landing],
    source_code_link: "",
    project_link: "https://curri.schoola.app",
  },
  {
    id: "simplifi-finance",
    name: "Simplifi Finance",
    category: "Mobile Application",
    type: "mobile",
    description:
      "Cross-platform mobile finance application (iOS & Android). Integrates secure APIs, payment gateways, and real-time transaction analytics.",
    longDescription:
      "Simplifi is a modern cross-platform financial application built to deliver smooth wallet transactions, balance management, and real-time analytics for mobile users across iOS & Android.",
    features: [
      "Cross-platform mobile iOS & Android application",
      "Secure API communication & encrypted local storage",
      "Real-time wallet balance & spending breakdown analytics",
      "Instant peer-to-peer transfers & payment receipts",
      "Managed Play Store and App Store release pipelines",
    ],
    tags: [
      { name: "mobile-app", color: "green-text-gradient" },
    ],
    image: simplifi_app,
    screenshots: [simplifi_app],
    source_code_link: "",
    project_link: "",
  },
  {
    id: "travel-plus",
    name: "Travel Plus Logistics",
    category: "Mobile Application",
    type: "mobile",
    description:
      "Cross-platform mobile ride-booking and logistics app. Features real-time GPS trip tracking, interactive route mapping, automated payment processing, and dispatch.",
    longDescription:
      "Travel Plus is a logistics and ride-hailing application providing real-time driver dispatch, automated trip booking, and live GPS map tracking.",
    features: [
      "Live interactive map tracking and route navigation",
      "Real-time driver dispatch & trip booking workflows",
      "In-app payments & automated fare calculation",
      "Push notifications for trip status updates",
      "Managed Play Store releases & production stability",
    ],
    tags: [
      { name: "mobile-app", color: "green-text-gradient" },
    ],
    image: travel_plus,
    screenshots: [travel_plus],
    source_code_link: "",
    project_link: "",
  },
  {
    id: "dinki-app",
    name: "Dinki App Platform",
    category: "Mobile Application",
    type: "mobile",
    description:
      "Full-stack mobile solution delivering 20+ user-facing features across iOS & Android with scalable APIs and automated cloud pipelines.",
    longDescription:
      "Dinki App is a versatile mobile application suite featuring over 20+ user-facing features. Powered by robust backend microservices and deployed seamlessly using automated cloud pipelines.",
    features: [
      "Delivered 20+ user-facing mobile features across multiple release cycles",
      "Designed and built scalable backend APIs",
      "Automated CI/CD pipelines & cloud deployments",
      "Play Store release management & continuous delivery",
      "Comprehensive unit & integration test coverage",
    ],
    tags: [
      { name: "mobile-app", color: "green-text-gradient" },
    ],
    image: dinki_app,
    screenshots: [dinki_app],
    source_code_link: "",
    project_link: "",
  },
  {
    id: "naf-awc",
    name: "NAF Air Warfare Center LMS",
    category: "Web Application",
    type: "web",
    description:
      "Official landing page and comprehensive school management system engineered for the Nigerian Air Force Air Warfare Center.",
    longDescription:
      "A tailored educational portal and Learning Management System (LMS) engineered for the Nigerian Air Force Air Warfare Center. Facilitates institutional records, student management, course materials, and administrative workflows.",
    features: [
      "Official Nigerian Air Force institutional portal",
      "Comprehensive school & course management workflows",
      "Role-based authorization for students, officers, and commandants",
      "Responsive user interface & state management",
      "High performance & enterprise-grade security standards",
    ],
    tags: [
      { name: "web-app", color: "blue-text-gradient" },
    ],
    image: naf_awc,
    screenshots: [naf_awc],
    source_code_link: "https://github.com/itcentralng/awc-portal",
    project_link: "https://awc.airforce.mil.ng/",
  },
  {
    id: "schoola-src",
    name: "Schoola Record System (SRC)",
    category: "Web Application",
    type: "web",
    description:
      "Enterprise K-12 school management system handling student records, attendance tracking, and report card generation across 150+ schools.",
    longDescription:
      "Schoola SRC is a comprehensive school administrative management platform serving over 150 schools. It automates 10+ core administrative modules including student enrollment, daily attendance logging, grade compilation, fee collection, and report card printing.",
    features: [
      "Engineered 10+ core administrative modules for K-12 schools",
      "Supports 15,000+ active students across 150+ schools",
      "Automated result compilation & printable report sheets",
      "High-speed data grid & multi-level search filters",
      "Synchronized state management & clean web UI",
    ],
    tags: [
      { name: "web-app", color: "blue-text-gradient" },
    ],
    image: schoola_src,
    screenshots: [schoola_src, schoola_lms],
    source_code_link: "https://github.com/schoolaltd/web-src",
    project_link: "https://schoola-src.netlify.app/",
  },
  {
    id: "schoola-landing",
    name: "Schoola Landing Page",
    category: "Web Application",
    type: "web",
    description:
      "Public marketing web portal and interactive showcase for the Schoola Edtech company.",
    longDescription:
      "The primary web landing page for Schoola Edtech company, featuring dynamic product highlights, parent/school onboarding, and modern responsive design.",
    features: [
      "SEO-optimized web architecture",
      "Custom responsive components & clean layouts",
      "Interactive solution demos & lead capture forms",
      "Fast page load speed & modern visual aesthetic",
    ],
    tags: [
      { name: "web-app", color: "blue-text-gradient" },
    ],
    image: schoola_landing,
    screenshots: [schoola_landing],
    source_code_link: "https://github.com/schoolaltd/web-schoola-website",
    project_link: "https://schoola.app/",
  },
  {
    id: "schoola-lms",
    name: "Schoola LMS",
    category: "Web Application",
    type: "web",
    description:
      "Interactive online learning management system supporting digital classrooms and e-learning for 15,000+ students.",
    longDescription:
      "Schoola LMS provides digital classroom tools for teachers and students. Features virtual assignments, online quizzes, study materials, and progress analytics.",
    features: [
      "Interactive digital study modules & classroom tools",
      "Teacher assignment grading & feedback portal",
      "Automated quiz scoring & student performance analytics",
      "Modular web interface & frontend state management",
    ],
    tags: [
      { name: "web-app", color: "blue-text-gradient" },
    ],
    image: schoola_lms,
    screenshots: [schoola_lms],
    source_code_link: "https://github.com/schoolaltd/web-src",
    project_link: "https://schoola.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
};
