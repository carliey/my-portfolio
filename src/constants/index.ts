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
    title: "Reactjs Developer",
    icon: react,
  },
  {
    title: "React Native Developer",
    icon: reactnative,
  },
  {
    title: "ExpressJs Developer",
    icon: express,
  },
  {
    title: "Tutor",
    icon: teach,
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
    title: "Web Development tutor(contract)",
    company_name: "Dialogue Academy Kaduna",
    icon: dialogue,
    iconBg: "white",
    date: "May 2024 - July 2024",
    points: [
      "Participated as a tutor in a pilot program introduced to adopt Web development into the school's curriculum.",
    ],
  },
  {
    title: "Frontend Lead",
    company_name: "Schoola",
    icon: schoola,
    iconBg: "white",
    date: "September 2022 - Present",
    points: [
      "Developing and maintaining Ed-tech web applications using React.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "iT Central",
    icon: it_central,
    iconBg: "#0E5FAF",
    date: "Jan 2022 - Present",
    points: [
      "Providing mentorship and guidance to junior developers, fostering a collaborative and supportive learning environment within the team.",
      "Tutoring in web development bootcamps hosted by the company",
      "Developing and maintaining web applications for clients using React.js.",
      "Collaborating with cross-functional teams including designers, product managers, other developers and clients to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT Support Intern",
    company_name: "Petroleum Products Marketing Company Kaduna",
    icon: krpc,
    iconBg: "white",
    date: "March 2017 - March 2019",
    points: [
      "Provided IT technical support, promptly addressing software and hardware issues raised by staff.",
      "Conducted quarterly inventory checks of computer resources allocated to various offices, ensuring optimal resource allocation and maintenance",
    ],
  },
];

const projects = [
  {
    name: "Curri AI",
    description:
      "An ed tech platform that gives teachers the ability to generate lesson plans, lesson notes and questions 45x faster",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: schoola_curri,
    source_code_link: "",
    project_link: "https://curri.schoola.app",
  },
  {
    name: "NAF Air warfare center",
    description:
      "Landing page, and a school management system for the Nigerian airforce Air Warfare Center",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: naf_awc,
    source_code_link: "https://github.com/itcentralng/awc-portal",
    project_link: "https://awc.airforce.mil.ng/",
  },
  {
    name: "Schoola SRC",
    description:
      "A school management system that manages k-12 schools activities from student enrollment to result compilation",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: schoola_src,
    source_code_link: "https://github.com/schoolaltd/web-src",
    project_link: "https://schoola-src.netlify.app/",
  },
  {
    name: "Schoola Landing Page",
    description: "The main landing page of the Schoola company",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
    ],
    image: schoola_landing,
    source_code_link: "https://github.com/schoolaltd/web-schoola-website",
    project_link: "https://schoola.app/",
  },
  {
    name: "Schoola LMS",
    description:
      "The learning management web application of the schoola edtech company",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: schoola_lms,
    source_code_link: "https://github.com/schoolaltd/web-src",
    project_link: "https://schoola.app/",
  },
];

export { services, technologies, experiences, projects };
