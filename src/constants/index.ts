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
  web,
  creator,
  whatsapp_automation,
  ai_realtime,
  whatsappIcon,
  aiIcon,
  realtimeIcon,
  paymentsIcon,
  nextjsIcon,
  travel_plus,
  dinki_app,
  simplifi_1,
  simplifi_2,
  simplifi_3,
  simplifi_4,
  koyo_display,
  koyo_live,
  koyo_live_chat,
  koyo_lessons,
  koyo_play_1,
  koyo_play_2,
  flip_preview,
  flip_logo,
  flip_play_1,
  flip_play_2,
  flip_play_3,
  flip_play_4,
  hiprep_placeholder,
  hiprep_illustration,
  aeromedical_placeholder,
  aeromedical_crest,
  bibliory_placeholder,
  instafood_preview,
  instafood_logo,
  lrcn_preview,
  lrcn_logo,
  primetech_hq,
  primetech_cms,
  nafcons_preview,
  nafcons_cbt,
  nafcons_header,
  haja_whatsapp,
} from "../assets";

import naf_awc from "../assets/projects/naf_awc.png";
import schoola_src from "../assets/projects/schoola_src.png";
import schoola_lms from "../assets/projects/schoola_lms.png";
import schoola_landing from "../assets/projects/schoola_landing.png";
import schoola_curri from "../assets/projects/schoola_curri.png";

import dialogue from "../assets/company/dialogue.png";
import it_central from "../assets/company/it_central.png";
import schoola from "../assets/company/schoola.svg";
import krpc from "../assets/company/krpc.png";

import lumi_ai from "../assets/projects/lumi/lumi_ai.png";

import nestjs from "../assets/nest_logo.svg";

export const personalInfo = {
  name: "Muhammed Ladan",
  role: "Full-Stack & Mobile Engineer (React, React Native, NestJS)",
  summary:
    "Software Engineer with 4+ years of experience building production web platforms, cross-platform mobile apps, and automated backend workflows using React, React Native, Next.js, Node.js, and NestJS. Proven track record integrating live video classrooms (100ms), WebSockets, AI content pipelines, WhatsApp Business automation, and payment gateways including Remita, Paystack, and Stripe.",
  email: "mdcarliey@gmail.com",
  phone: "+2347036215851",
  location: "Nigeria",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammed-ladan-1a1086173/",
    platform: "linkedin",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    url: "https://github.com/carliey",
    platform: "github",
    color: "#ffffff",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@carliey_",
    platform: "tiktok",
    color: "#ff0050",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/carliey_",
    platform: "instagram",
    color: "#E4405F",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@carliey",
    platform: "youtube",
    color: "#FF0000",
  },
];

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web applications",
    description:
      "Next.js & React customer-facing portals, CMS dashboards, CBT engines, and internal tools.",
    icon: web,
  },
  {
    title: "Mobile applications",
    description:
      "Cross-platform iOS and Android apps in React Native and Expo built for real-world scale.",
    icon: mobile,
  },
  {
    title: "WhatsApp & workflow automation",
    description:
      "Conversational marketplace bots, Cloud API state machines, OTP auth, and catalog sync.",
    icon: whatsapp_automation,
  },
  {
    title: "AI & real-time integrations",
    description:
      "Claude & Gemini content workflows, 100ms live video sessions, and Socket.IO instant streams.",
    icon: ai_realtime,
  },
  {
    title: "Backends, APIs & payments",
    description:
      "Scalable Node.js & NestJS services with Remita, Paystack, and Stripe payment gateways.",
    icon: backend,
  },
  {
    title: "Technical leadership & mentoring",
    description:
      "Clear engineering direction, Jest testing standards, and hands-on mentoring to help teams ship.",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjsIcon,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "WhatsApp Cloud API",
    icon: whatsappIcon,
  },
  {
    name: "AI Workflows",
    icon: aiIcon,
  },
  {
    name: "WebSockets & 100ms",
    icon: realtimeIcon,
  },
  {
    name: "Remita & Paystack",
    icon: paymentsIcon,
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
    name: "MongoDB",
    icon: mongodb,
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
];

const experiences = [
  {
    title: "Software Engineer & Senior Partner",
    company_name: "IT CENTRAL LIMITED",
    icon: it_central,
    iconBg: "#0E5FAF",
    date: "Jan 2022 – Present",
    points: [
      "Built client-facing web, CMS, CBT, and mobile applications using React.js, Next.js, TypeScript, NestJS, and React Native across 12+ projects.",
      "Mentored 5 interns, improving their code quality and development workflow.",
      "Trained 40+ students in web development across multiple bootcamps.",
      "Key Projects: Simplifi (Finance Mobile App), NAF Air Warfare Center LMS, NAFCONS Applicant & CBT Portal, AeroMedical, PrimeTech CMS, Bibliory, Instafood.",
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
  category:
    | "Web Application"
    | "Mobile Application"
    | "WhatsApp Automation & Backend"
    | "Backend & Payment API";
  type: "web" | "mobile" | "automation";
  statusBadge?: string;
  tech_stack?: string[];
  isPlaceholderImage?: boolean;
  description: string;
  role?: string;
  result?: string;
  longDescription: string;
  features: string[];
  tags: { name: string; color: string }[];
  image: string;
  screenshots: string[];
  source_code_link: string;
  project_link: string;
  play_store_link?: string;
  app_store_link?: string;
  whatsapp_link?: string;
  whatsapp_number?: string;
}

const projects: ProjectItem[] = [
  {
    id: "koyo-app",
    name: "Koyo App",
    category: "Mobile Application",
    type: "mobile",
    statusBadge: "Live on iOS & Android",
    tech_stack: [
      "React Native",
      "100ms Live Video",
      "Anthropic Claude AI",
      "NestJS",
      "Next.js",
      "MySQL",
      "Firebase",
      "Stripe",
    ],
    description:
      "Nigerian language learning mobile app (Yoruba, Igbo, Hausa) with integrated 100ms live tutoring video sessions and an AI-powered lesson creation workflow.",
    role: "Mobile, Live Video & AI",
    result: "Live classes & AI curriculum",
    longDescription:
      "Koyo App helps learners worldwide master Nigerian languages through structured interactive lessons, Koyology live cohort sessions, and conversational practice. Alongside mobile engineering, I integrated real-time live video classrooms with 100ms and built an Anthropic Claude AI curriculum generation pipeline with human review and multi-language sibling syncing.",
    features: [
      "Integrated 100ms live video sessions (@100mslive/react-native-hms & room-kit) for Koyology interactive cohorts",
      "Session recording playback and synchronized live call chat transcripts across mobile and admin tools",
      "Engineered Anthropic Claude AI lesson generation pipeline with preflight curriculum checks and multi-language syncing",
      "Interactive audio drills, streaks, XP tracking, push notifications, and Stripe subscription support",
      "Published across Google Play and the Apple App Store",
    ],
    tags: [{ name: "mobile-app", color: "green-text-gradient" }],
    image: koyo_display,
    screenshots: [
      koyo_display,
      koyo_live,
      koyo_live_chat,
      koyo_lessons,
      koyo_play_1,
      koyo_play_2,
    ],
    source_code_link: "",
    project_link: "https://koyoapp.com",
    play_store_link:
      "https://play.google.com/store/apps/details?id=com.koyo.koyoapp",
    app_store_link:
      "https://apps.apple.com/ng/app/koyo-learn-nigerian-languages/id6744146311",
  },
  {
    id: "haja-whatsapp",
    name: "Haja WhatsApp Marketplace Chatbot",
    category: "WhatsApp Automation & Backend",
    type: "automation",
    statusBadge: "WhatsApp Cloud API",
    tech_stack: [
      "NestJS",
      "Meta WhatsApp Cloud API",
      "MongoDB",
      "Gemini & Wit.ai NLU",
      "Sharp & Cloudinary",
      "Next.js",
    ],
    isPlaceholderImage: true,
    description:
      "WhatsApp-native local marketplace powered by a 3-bot automation engine where sellers list inventory and buyers discover items via natural-language chat.",
    role: "Backend & Bot Architecture",
    result: "3-bot marketplace engine",
    longDescription:
      "Haja turns WhatsApp into a structured local marketplace without requiring sellers or buyers to install a heavy app. Message the Haja bot on +234 703 621 5851 to onboard products step-by-step, search listings in English or Nigerian languages, and connect directly with verified sellers via instant WhatsApp links.",
    features: [
      "Chat live with Haja on WhatsApp (+234 703 621 5851) to test seller onboarding and product discovery",
      "3-bot WhatsApp Cloud API architecture: Haja List (seller intake), Haja Finder (instant search), and Haja Matchmaker (saved alerts)",
      "Hybrid NLU parsing (Wit.ai, Gemini & local LLM fallback) understanding Nigerian Pidgin, Hausa, Yoruba, and Igbo queries",
      "Asynchronous Sharp WebP image optimization, Cloudinary CDN storage, and Meta IG/FB catalog syndication",
      "Passwordless WhatsApp OTP authentication paired with a Next.js searchable web directory",
    ],
    tags: [{ name: "whatsapp-bot", color: "pink-text-gradient" }],
    image: haja_whatsapp,
    screenshots: [haja_whatsapp],
    source_code_link: "",
    project_link: "",
    whatsapp_number: "+234 703 621 5851",
    whatsapp_link:
      "https://wa.me/2347036215851?text=Hi%20Haja!%20I%20want%20to%20list%20or%20search%20products.",
  },
  {
    id: "flip-app",
    name: "Flip (Distress Sale App)",
    category: "Mobile Application",
    type: "mobile",
    statusBadge: "Rebranded from Distress Sale",
    tech_stack: [
      "React Native",
      "AI Request Categorization",
      "Real-Time Chat",
      "Push Notifications",
      "Google Play & App Store",
    ],
    description:
      "Formerly Distress Sale App — mobile marketplace and voice-first local discovery platform live across Nigeria for quick classifieds, urgent deals, and service requests.",
    role: "Mobile App Development",
    result: "Live on Play & App Store",
    longDescription:
      "Originally built as Distress Sale App and rebranded to Flip (flipnow.ng), this cross-platform mobile application connects buyers, sellers, and local service providers across all 36 Nigerian states and the FCT. Users can post items for urgent sale, speak requests with AI categorization, and negotiate in real time.",
    features: [
      "Built core mobile app experience from Distress Sale through rebrand to Flip on iOS and Android",
      "AI-powered request understanding and category matching across vehicles, real estate, electronics, and services",
      "Nationwide location filtering covering 36 Nigerian states and Abuja",
      "In-app buyer/seller messaging and push notifications for instant deal responses",
    ],
    tags: [{ name: "mobile-app", color: "green-text-gradient" }],
    image: flip_preview,
    screenshots: [
      flip_preview,
      flip_play_1,
      flip_play_2,
      flip_play_3,
      flip_play_4,
      flip_logo,
    ],
    source_code_link: "",
    project_link: "https://flipnow.ng/",
    play_store_link:
      "https://play.google.com/store/apps/details?id=ng.flipnow.app",
    app_store_link:
      "https://apps.apple.com/us/app/flip-find-local-help/id6743342719",
  },
  {
    id: "curri-ai",
    name: "Curri AI",
    category: "Web Application",
    type: "web",
    tech_stack: ["React.js", "TypeScript", "AI Prompts", "Tailwind CSS"],
    description:
      "An ed-tech platform that gives teachers the ability to generate lesson plans, lesson notes, and questions 45x faster. Used by over 3,000+ teachers.",
    role: "Frontend engineering",
    result: "Used by 3,000+ teachers",
    longDescription:
      "Curri AI is an ed-tech solution designed for teachers and educators. It enables teachers to generate comprehensive lesson notes, structured lesson plans, quizzes, and curriculum resources 45x faster than manual preparation.",
    features: [
      "Instant lesson plan & notes generation",
      "Customizable curriculum templates aligned with school standards",
      "Interactive quiz & assessment builder",
      "Seamless integration with Schoola Edtech ecosystem",
    ],
    tags: [{ name: "web-app", color: "blue-text-gradient" }],
    image: schoola_curri,
    screenshots: [schoola_curri, schoola_landing],
    source_code_link: "",
    project_link: "https://curri.schoola.app",
  },
  {
    id: "schoola-src",
    name: "Schoola Record System (SRC)",
    category: "Web Application",
    type: "web",
    tech_stack: [
      "React.js",
      "Redux Toolkit",
      "Jest & React Testing Library",
      "Tailwind CSS",
    ],
    description:
      "Enterprise K-12 school management system handling student records, attendance tracking, and report card generation across 150+ schools.",
    role: "Frontend lead",
    result: "Supporting 150+ schools",
    longDescription:
      "Schoola SRC is a comprehensive school administrative management platform serving over 150 schools. It automates 10+ core administrative modules including student enrollment, daily attendance logging, grade compilation, fee collection, and report card printing.",
    features: [
      "Engineered 10+ core administrative modules for K-12 schools",
      "Supports 15,000+ active students across 150+ schools",
      "Automated result compilation & printable report sheets",
      "High-speed data grid & multi-level search filters",
      "Synchronized state management & clean web UI",
    ],
    tags: [{ name: "web-app", color: "blue-text-gradient" }],
    image: schoola_src,
    screenshots: [schoola_src, schoola_lms],
    source_code_link: "",
    project_link: "https://demo.schoola.app",
  },
  {
    id: "dinki-app",
    name: "Dinki App Platform",
    category: "Mobile Application",
    type: "mobile",
    tech_stack: ["React Native", "Node.js", "Express.js", "AWS CI/CD"],
    description:
      "Full-stack mobile solution delivering 20+ user-facing features across iOS & Android with scalable APIs and automated cloud pipelines.",
    role: "Mobile and backend development",
    result: "20+ mobile features delivered",
    longDescription:
      "Dinki App is a versatile mobile application suite featuring over 20+ user-facing features. Powered by robust backend microservices and deployed seamlessly using automated cloud pipelines.",
    features: [
      "Designed and built scalable backend APIs",
      "Automated CI/CD pipelines & cloud deployments",
      "Play Store release management & continuous delivery",
      "Comprehensive unit & integration test coverage",
    ],
    tags: [{ name: "mobile-app", color: "green-text-gradient" }],
    image: dinki_app,
    screenshots: [dinki_app],
    source_code_link: "",
    project_link: "",
  },
  {
    id: "nafcons-cbt",
    name: "NAFCONS Applicant & CBT Portal",
    category: "Web Application",
    type: "web",
    statusBadge: "Live Institutional Portal",
    tech_stack: [
      "React.js",
      "Redux Toolkit",
      "Paystack",
      "UTME CBT Engine",
      "Tailwind CSS",
    ],
    description:
      "Applicant admissions workflow, Paystack fee verification, JAMB candidate screening, and Computer-Based Testing (CBT) portal built for Nigerian Air Force College of Nursing Sciences (NAFCONS).",
    longDescription:
      "Engineered the applicant processing pipeline and UTME Computer-Based Test (CBT) engine for the Nigerian Air Force College of Nursing Sciences (NAFCONS). The platform guides prospective nursing students from application fee payment through document verification, exam unlock codes, and timed CBT assessments.",
    features: [
      "End-to-end applicant onboarding dashboard with Paystack payment verification guards",
      "JAMB registration lookup, screening eligibility checks, and admission status tracking",
      "Timed Computer-Based Testing (CBT) exam runner with secure candidate unlock flows",
      "Administrative quiz & CBT question bank management tools for college staff",
    ],
    tags: [{ name: "web-app", color: "blue-text-gradient" }],
    image: nafcons_preview,
    screenshots: [nafcons_preview, nafcons_cbt, nafcons_header],
    source_code_link: "",
    project_link: "https://nafcons.edu.ng/",
  },
  {
    id: "lrcn-backend",
    name: "LRCN Registry & Remita Backend",
    category: "Backend & Payment API",
    type: "automation",
    statusBadge: "Production API",
    tech_stack: [
      "NestJS",
      "MongoDB & Mongoose",
      "Remita SHA-512 Gateway",
      "Cloudflare R2 / S3",
      "ClamAV",
      "JWT",
    ],
    description:
      "Backend platform and Remita RRR payment integration powering librarian registration, license renewals, induction payments, and verified registry lookup for LRCN.",
    longDescription:
      "Architected core backend modules for the Librarians' Registration Council of Nigeria (LRCN). Integrated the Remita payment gateway with SHA-512 request signing, Remita Retrieval Reference (RRR) generation, and authenticated webhook settlement alongside secure document verification.",
    features: [
      "Remita payment gateway integration with SHA-512 hash signing, RRR generation, and webhook verification",
      "Supports multi-tier registration workflows: application fees, induction fees, and annual license renewals",
      "ClamAV virus scanning and presigned Cloudflare R2 / AWS S3 document uploads for applicant credentials",
      "Public searchable registry data pipelines and Excel member roster synchronization",
    ],
    tags: [{ name: "backend-api", color: "pink-text-gradient" }],
    image: lrcn_preview,
    screenshots: [lrcn_preview, lrcn_logo],
    source_code_link: "",
    project_link: "https://lrcn.gov.ng/",
  },
  {
    id: "instafood",
    name: "Instafood Web & Kitchen Socket",
    category: "Web Application",
    type: "web",
    statusBadge: "Real-time WebSocket App",
    tech_stack: [
      "React.js",
      "Socket.IO WebSockets",
      "Paystack",
      "Redux",
      "Material UI",
    ],
    description:
      "Food ordering web platform and restaurant admin console featuring real-time Socket.IO WebSockets for instant incoming order delivery and kitchen sound alerts.",
    longDescription:
      "Built frontend customer and restaurant admin experiences for Instafood. Customers place dine-in QR or delivery orders paid via Paystack, while cashier and kitchen dashboards receive orders instantaneously over persistent Socket.IO WebSocket connections with real-time audio alerts and receipt printing.",
    features: [
      "Real-time WebSocket (socket.io-client) order stream pushed straight to kitchen and cashier consoles",
      "Instant sound notifications (use-sound), bulk order management, and POS receipt printing",
      "QR code table ordering, cart management, and Paystack checkout flows on the customer portal",
      "Inventory tracking, menu customization, and branch analytics dashboards",
    ],
    tags: [{ name: "web-app", color: "blue-text-gradient" }],
    image: instafood_preview,
    screenshots: [instafood_preview, instafood_logo],
    source_code_link: "",
    project_link: "",
  },
  {
    id: "primetech-cms",
    name: "PrimeTech Web & CMS",
    category: "Web Application",
    type: "web",
    statusBadge: "Live Enterprise Site",
    tech_stack: [
      "React.js",
      "Redux Toolkit / RTK Query",
      "Material UI",
      "TinyMCE Editor",
      "Chart.js",
      "Drag & Drop",
    ],
    description:
      "Custom content management system (CMS) built for PrimeTech Design & Engineering (Julius Berger Group) to manage projects, careers, media, and editorial content.",
    longDescription:
      "Developed the custom administrative CMS powering PrimeTech Design and Engineering Nigeria Limited. The dashboard gives non-technical editors full control over engineering project case studies, rich-text news articles, job openings, business segments, media assets, and traffic analytics.",
    features: [
      "Full CMS control over portfolio projects, reference items, newsroom posts, and open career roles",
      "Rich-text authoring powered by TinyMCE alongside drag-and-drop content ordering",
      "Centralized media gallery manager, contact inquiries, and SEO metadata controls",
      "RTK Query cached state synchronization and Chart.js visitor analytics",
    ],
    tags: [{ name: "web-app", color: "blue-text-gradient" }],
    image: primetech_cms,
    screenshots: [primetech_cms, primetech_hq],
    source_code_link: "",
    project_link: "https://primetech-solutions.com/",
  },
  {
    id: "bibliory",
    name: "Bibliory Digital Library",
    category: "Web Application",
    type: "web",
    isPlaceholderImage: true,
    tech_stack: [
      "React.js",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "Material UI",
      "react-pdf",
      "Chart.js",
    ],
    description:
      "Digital academic library and institutional repository frontend with full-text resource search, embedded PDF document viewer, reading lists, and editor analytics.",
    longDescription:
      "Built the frontend for Bibliory, a digital library platform hosting books, peer-reviewed journals, and academic publications. Readers can search and filter catalogs seamlessly and read documents directly inside an embedded paginated PDF viewer without external downloads.",
    features: [
      "Embedded paginated PDF reader (react-pdf) with smooth navigation and viewport controls",
      "Faceted search and categorization across books, academic journals, and institutional collections",
      "Personal saved resources library and institutional access request workflows",
      "Admin and editor dashboards powered by RTK Query and Chart.js publication analytics",
    ],
    tags: [{ name: "web-app", color: "blue-text-gradient" }],
    image: bibliory_placeholder,
    screenshots: [bibliory_placeholder],
    source_code_link: "",
    project_link: "",
  },
  {
    id: "aeromedicals",
    name: "AeroMedical App & Clinical Suite",
    category: "Mobile Application",
    type: "mobile",
    statusBadge: "061 NAF AeroMedical Centre",
    tech_stack: [
      "React Native / Next.js",
      "Redux Toolkit",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
    ],
    isPlaceholderImage: true,
    description:
      "Mobile and clinical digitization experience for 061 NAF AeroMedical Centre Kaduna supporting aircrew medical assessments, 8 specialist departments, and appointment flows.",
    longDescription:
      "Worked on mobile and frontend patient/clinical workflows for the 061 Nigerian Air Force AeroMedical Centre in Kaduna. Digitized multi-step aircrew medical screening questionnaires with draft persistence, clinic appointments, investigation requests, and multi-department clinical clearance across 8 aviation medicine units.",
    features: [
      "Multi-step aircrew medical screening wizard with schema validation (Zod) and draft recovery",
      "Workflow routing across 8 specialist departments including Ophthalmology, ENT, Radiology, Cardiology, and Aviation Review",
      "Applicant appointment booking, medical investigation ordering, and fitness certificate review",
      "Patient assessment timeline tracking from intake to final medical clearance",
    ],
    tags: [{ name: "mobile-app", color: "green-text-gradient" }],
    image: aeromedical_placeholder,
    screenshots: [aeromedical_placeholder, aeromedical_crest],
    source_code_link: "",
    project_link: "",
  },
  {
    id: "hiprep-mobile",
    name: "HiPrep Mobile App",
    category: "Mobile Application",
    type: "mobile",
    statusBadge: "Pre-launch (Unreleased)",
    tech_stack: [
      "React Native",
      "Expo Router",
      "NativeWind",
      "Redux Toolkit",
      "TypeScript",
    ],
    isPlaceholderImage: true,
    description:
      "Cross-platform Expo mobile app connecting parents and verified home tutors with dual-role booking, availability scheduling, and verification flows (unreleased).",
    longDescription:
      "Built the React Native & Expo mobile application for HiPrep — an unreleased tutoring marketplace designed for both parents booking lessons and tutors managing schedules, demo classes, and payouts. Development completed core dual-role mobile journeys prior to project pause.",
    features: [
      "Dual-role experience for Parents (discover tutors, manage child profiles, book lessons) and Tutors",
      "Multi-step tutor onboarding with academic credential uploads, demo lessons, and payout bank setup",
      "Booking cart, OTP-verified payment workflow, and tutor weekly availability planner",
      "Built with Expo Router, TypeScript, Redux Toolkit, and NativeWind",
    ],
    tags: [{ name: "mobile-app", color: "green-text-gradient" }],
    image: hiprep_placeholder,
    screenshots: [hiprep_placeholder, hiprep_illustration],
    source_code_link: "",
    project_link: "",
  },
  {
    id: "simplifi-finance",
    name: "Simplifi Finance",
    category: "Mobile Application",
    type: "mobile",
    tech_stack: ["React Native", "TypeScript", "REST APIs", "Payment Gateways"],
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
    tags: [{ name: "mobile-app", color: "green-text-gradient" }],
    image: simplifi_1,
    screenshots: [simplifi_1, simplifi_2, simplifi_3, simplifi_4],
    source_code_link: "",
    project_link: "",
  },
  {
    id: "travel-plus",
    name: "Travel Plus Logistics",
    category: "Mobile Application",
    type: "mobile",
    tech_stack: ["React Native", "GPS Mapping", "Payment APIs", "Play Store CI"],
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
    tags: [{ name: "mobile-app", color: "green-text-gradient" }],
    image: travel_plus,
    screenshots: [travel_plus],
    source_code_link: "",
    project_link: "",
  },
  {
    id: "naf-awc",
    name: "NAF Air Warfare Center LMS",
    category: "Web Application",
    type: "web",
    tech_stack: ["React.js", "TypeScript", "Role-Based Auth", "Tailwind CSS"],
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
    tags: [{ name: "web-app", color: "blue-text-gradient" }],
    image: naf_awc,
    screenshots: [naf_awc],
    source_code_link: "https://github.com/itcentralng/awc-portal",
    project_link: "https://awc.airforce.mil.ng/",
  },
  {
    id: "lumi-ai",
    name: "Lumi AI",
    category: "Web Application",
    type: "web",
    tech_stack: ["React.js", "Voice & Chat AI", "Vision/Image Input"],
    description:
      "An interactive learning assistant that helps students learn through focused lessons, conversation, and visual support.",
    longDescription:
      "Lumi AI guides students through complex topics with short, focused lessons and interactive questions. Students can use voice, chat, and images to explore concepts and get help with homework.",
    features: [
      "Voice-based interactive learning assistant for students",
      "Chat based AI tutor for personalized learning experiences",
      "Image support for assistance with homework and visual learning",
    ],
    tags: [{ name: "web-app", color: "blue-text-gradient" }],
    image: lumi_ai,
    screenshots: [lumi_ai],
    source_code_link: "",
    project_link: "https://lumiai.hipreponline.com/",
  },
  {
    id: "schoola-landing",
    name: "Schoola Landing Page",
    category: "Web Application",
    type: "web",
    tech_stack: ["React.js", "Tailwind CSS", "SEO"],
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
    tags: [{ name: "web-app", color: "blue-text-gradient" }],
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
    tech_stack: ["React.js", "Redux", "Digital Classrooms"],
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
    tags: [{ name: "web-app", color: "blue-text-gradient" }],
    image: schoola_lms,
    screenshots: [schoola_lms],
    source_code_link: "https://github.com/schoolaltd/web-src",
    project_link: "https://schoola.app/",
  },
];

export { services, technologies, experiences, projects };
