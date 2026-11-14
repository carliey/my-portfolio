import portfolioContent from "./muhammed_ladan_portfolio_content.json";
import cvPdfUrl from "./Muhammed Ladan - CV.pdf";

import {
  me,
  herobg,
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
  travelplus_1,
  travelplus_2,
  simplifi_cover,
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
  distress_1,
  distress_2,
  distress_3,
  distress_4,
  hiprep_0,
  hiprep_1,
  hiprep_2,
  aeromedical_cover,
  aeromedical_crest,
  bibliory_1,
  bibliory_2,
  bibliory_3,
  bibliory_4,
  bibliory_5,
  bibliory_6,
  instafood_cover,
  instafood_1,
  instafood_2,
  instafood_logo,
  lrcn_cover,
  lrcn_1,
  lrcn_2,
  lrcn_logo,
  primetech_1,
  primetech_2,
  primetech_3,
  nafcons_cbt,
  nafcons_header,
  haja_1,
  haja_2,
  haja_3,
  haja_4,
  haja_5,
  dinki_0,
  dinki_1,
  dinki_2,
  dinki_3,
  dinki_4,
  dinki_icon,
  naf_awc_cover,
  awc_2,
  awc_3,
  awc_4,
  awc_admin,
  awc_admin_6,
  awc_admin_5,
  lumi_cover,
  lumi_1,
  lumi_2,
  lumi_3,
  lumi_4,
  lumi_5,
  lumi_6,
  lumi_7,
  curri_cover,
  curri_cover_2,
  curri_cover_4,
  curri_1,
  curri_2,
  curri_3,
  schoola_landing,
  schoola_src_1,
  schoola_src_2,
  schoola_lms_cover,
  schoola_lms_1,
  schoola_lms_2,
  schoola_lms_4,
  schoola_lms_6,
  lessonthon_1,
  lessonthon_2,
  lessonthon_3,
  lessonthon_4,
} from "../assets";

import dialogue from "../assets/company/dialogue.png";
import it_central from "../assets/company/it_central.png";
import schoola from "../assets/company/schoola.svg";
import krpc from "../assets/company/krpc.png";
import nestjs from "../assets/nest_logo.svg";

export { portfolioContent, cvPdfUrl };
export const profileImage = me;
export const heroBgImage = herobg;

// -------------------------------------------------------------
// DERIVED SITE METADATA & PERSONAL INFO (from content JSON)
// -------------------------------------------------------------
interface HomeHeroContent {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  description?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  socials?: string[];
}

interface HomeSelectedContent {
  heading?: string;
  intro?: string;
  projectIds?: string[];
  maxItems?: number;
}

interface CapabilityItemJson {
  id: string;
  title: string;
  description: string;
  examples?: string[];
}

interface HomeCapabilitiesContent {
  heading?: string;
  intro?: string;
  items?: CapabilityItemJson[];
}

interface LeadershipHighlightJson {
  value: string;
  label: string;
  description: string;
}

interface HomeLeadershipContent {
  heading?: string;
  intro?: string;
  highlights?: LeadershipHighlightJson[];
  featuredMedia?: ContactFeaturedMedia | null;
}

export interface ContactFeaturedMedia {
  type: string;
  platform: string;
  eyebrow: string;
  heading: string;
  description: string;
  embedUrl: string;
  videoId?: string;
  title?: string;
}

export interface ContactContent {
  heading: string;
  description: string;
  email?: string;
  phone?: string;
  featuredMedia?: ContactFeaturedMedia | null;
}

interface GenericSection<T = unknown> {
  id: string;
  order?: number;
  type?: string;
  content?: T;
}

interface JsonProjectLink {
  label: string;
  url: string;
}

interface JsonProject {
  id: string;
  name: string;
  category: string;
  status: string;
  role?: string;
  shortDescription?: string;
  overview?: string;
  coreFeatures?: string[];
  contributions?: string[];
  technologies?: string[];
  links?: JsonProjectLink[];
  thumbnail?: string | null;
  screenshots?: string[];
}

interface JsonExperience {
  id: string;
  organisation: string;
  role: string;
  period: string;
  summary: string;
  highlights?: string[];
  relatedProjectIds?: string[];
}

interface JsonCollaboration {
  id: string;
  name: string;
  relationshipDescription?: string | null;
  relatedProjectIds?: string[];
}

const homePage = portfolioContent.pages.find((p) => p.id === "home");
const homeSections = (homePage?.sections || []) as unknown as GenericSection[];

const homeHero = homeSections.find((s) => s.id === "hero")
  ?.content as HomeHeroContent | undefined;

export const heroContent = {
  eyebrow: homeHero?.eyebrow || "Muhammed Ladan",
  headline:
    homeHero?.headline ||
    "Have an idea for a web or mobile product?",
  subheadline:
    homeHero?.subheadline ||
    "Product development · Technical integration · Engineering leadership",
  description:
    homeHero?.description ||
    "I'm a software engineer who can help you shape it, build it, and launch it. Let's turn what you're imagining into something people can use.",
};
const homeSelectedSection = homeSections.find((s) => s.id === "selected-projects")
  ?.content as HomeSelectedContent | undefined;
const homeCapabilitiesSection = homeSections.find((s) => s.id === "capabilities")
  ?.content as HomeCapabilitiesContent | undefined;
const homeLeadershipSection = homeSections.find(
  (s) => s.id === "leadership-knowledge-sharing"
)?.content as HomeLeadershipContent | undefined;
const homeContactSection = homeSections.find((s) => s.id === "contact")
  ?.content as ContactContent | undefined;

export const personalInfo = {
  name: portfolioContent.site.name,
  role: portfolioContent.site.positioning,
  tagline: homeHero?.subheadline || "Product development · Technical integration · Engineering leadership",
  summary: homeHero?.description || "Building web and mobile products from idea to production.",
  email: portfolioContent.site.contact.email,
  phone: portfolioContent.site.contact.phone,
  location: portfolioContent.site.contact.location,
  cvUrl: "/cv",
  cvPdfUrl,
  stats: [
    {
      value: "4+",
      label: "Years Experience",
    },
    {
      value: "15+",
      label: "Products Shipped",
    },
    {
      value: "100+",
      label: "Students & Interns Taught",
    },
  ],
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: portfolioContent.site.socials.linkedin,
    platform: "linkedin",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    url: portfolioContent.site.socials.github,
    platform: "github",
    color: "#ffffff",
  },
  {
    name: "TikTok",
    url: portfolioContent.site.socials.tiktok,
    platform: "tiktok",
    color: "#ff0050",
  },
  {
    name: "Instagram",
    url: portfolioContent.site.socials.instagram,
    platform: "instagram",
    color: "#E4405F",
  },
  {
    name: "YouTube",
    url: portfolioContent.site.socials.youtube,
    platform: "youtube",
    color: "#FF0000",
  },
];

export const navLinks = [
  { id: "projects", title: "Work", href: "/#projects", route: "/projects" },
  { id: "capabilities", title: "Services", href: "/#capabilities" },
  { id: "experience", title: "Experience", href: "/#experience" },
  { id: "cv", title: "CV", href: "/cv", route: "/cv" },
  { id: "contact", title: "Contact", href: "/#contact" },
];

export const chapterStages = [
  { id: "hero", num: "01", label: "Intro" },
  { id: "projects", num: "02", label: "Work" },
  { id: "capabilities", num: "03", label: "Services" },
  { id: "experience", num: "04", label: "Experience" },
  { id: "mentorship", num: "05", label: "Beyond Builds" },
  { id: "contact", num: "06", label: "Contact" },
];

// -------------------------------------------------------------
// CAPABILITIES (from content JSON home capabilities section)
// -------------------------------------------------------------
export interface CapabilityPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
}

export const capabilities: CapabilityPillar[] = (
  homeCapabilitiesSection?.items || []
).map((item: CapabilityItemJson) => ({
  id: item.id,
  title: item.title,
  tagline: item.description,
  description: item.description,
  technologies: item.examples || [],
}));

// -------------------------------------------------------------
// COLLABORATIONS (from content JSON collaborations array)
// -------------------------------------------------------------
export interface CollaborationItem {
  id: string;
  name: string;
  badge: string;
  type: string;
  description: string;
  impact: string;
  relatedProjectIds?: string[];
}

const collabBadgeMap: Record<string, string> = {
  "it-central": "Senior Partner & Engineering Collaborator",
  "royalstone-technology": "Technology Collaboration Partner",
  "3logy": "Software Engineering Partner",
};

const collabDescMap: Record<string, string> = {
  "it-central":
    "Core technology collaboration delivering 12+ enterprise platforms, CBT testing engines, and mobile products for corporate, educational, and defense clients.",
  "royalstone-technology":
    "Collaborated on enterprise digital transformation, institutional management platforms, and secure multi-role administrative portals.",
  "3logy":
    "Collaborated on mission-critical software engineering, resilient API design, and distributed system integrations.",
};

const collabImpactMap: Record<string, string> = {
  "it-central": "12+ Delivered Client Platforms across Web, Mobile & Defense",
  "royalstone-technology": "Enterprise Systems & Digital Transformation",
  "3logy": "Mission-Critical Systems & API Integration",
};

export const collaborations: CollaborationItem[] = (
  (portfolioContent.collaborations || []) as unknown as JsonCollaboration[]
).map((collab: JsonCollaboration) => ({
  id: collab.id,
  name: collab.name,
  badge: collabBadgeMap[collab.id] || "Collaboration Partner",
  type: "Technology Hub",
  description: collab.relationshipDescription || collabDescMap[collab.id] || "Professional engineering collaboration.",
  impact: collabImpactMap[collab.id] || "Enterprise Software Delivery",
  relatedProjectIds: collab.relatedProjectIds || [],
}));

// -------------------------------------------------------------
// MENTORSHIP & LEADERSHIP (from content JSON leadership section)
// -------------------------------------------------------------
export interface MentorshipItem {
  metric: string;
  title: string;
  role: string;
  description: string;
}

const mentorshipRoleMap: Record<string, string> = {
  "Developer Interns Mentored": "Senior Engineering Mentor (iT Central)",
  "Developer interns mentored": "Senior Engineering Mentor (iT Central)",
  "Students Taught & Trained": "Bootcamps, Dialogue & AFIT ICT",
  "Students taught & trained": "Bootcamps, Dialogue & AFIT ICT",
  "Students Trained & Taught": "Bootcamps, Dialogue & AFIT ICT",
  "Students trained & taught": "Bootcamps, Dialogue & AFIT ICT",
  "Technical Content & Community": "Tech Content Creator (@carliey_)",
  "Technical content & community": "Tech Content Creator (@carliey_)",
  "Social Media Community": "Tech Content Creator (@carliey_)",
  "Social media community": "Tech Content Creator (@carliey_)",
};

export const mentorshipData: MentorshipItem[] = (
  homeLeadershipSection?.highlights || []
).map((h: LeadershipHighlightJson) => ({
  metric: h.value,
  title: h.label,
  role: mentorshipRoleMap[h.label] || "Technical Mentorship",
  description: h.description,
}));

export const knowledgeSharingContent = {
  heading: homeLeadershipSection?.heading || "Leadership & Knowledge Sharing",
  intro:
    homeLeadershipSection?.intro ||
    "I value contributing to the growth of other developers and making practical technology skills more accessible.",
  highlights: mentorshipData,
  featuredMedia: homeLeadershipSection?.featuredMedia || null,
};

// -------------------------------------------------------------
// WORK EXPERIENCE (from content JSON experience array)
// -------------------------------------------------------------
export interface ExperienceItem {
  id: string;
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  summary: string;
  points: string[];
  relatedProjectIds?: string[];
}

const companyIconMap: Record<string, { icon: string; iconBg: string }> = {
  "it-central": { icon: it_central, iconBg: "#0E5FAF" },
  "schoola": { icon: schoola, iconBg: "#ffffff" },
  "royalstone": { icon: mobile, iconBg: "#1d1836" },
  "travel-plus": { icon: mobile, iconBg: "#1d1836" },
  "dinki": { icon: dinki_icon, iconBg: "#E02A09" },
  "dialogue-academy": { icon: dialogue, iconBg: "#ffffff" },
  "krpc": { icon: krpc, iconBg: "#ffffff" },
};

export const experiences: ExperienceItem[] = (
  (portfolioContent.experience || []) as unknown as JsonExperience[]
).map((exp: JsonExperience) => {
  const meta = companyIconMap[exp.id] || { icon: web, iconBg: "#1d1836" };
  return {
    id: exp.id,
    title: exp.role,
    company_name: exp.organisation,
    icon: meta.icon,
    iconBg: meta.iconBg,
    date: exp.period,
    summary: exp.summary,
    points: exp.highlights || [],
    relatedProjectIds: exp.relatedProjectIds || [],
  };
});

// -------------------------------------------------------------
// CONTACT SECTION CONTENT (from content JSON contact section)
// -------------------------------------------------------------
export const contactContent = {
  eyebrow:
    (homeContactSection as (ContactContent & { eyebrow?: string }) | undefined)
      ?.eyebrow || "Get In Touch",
  heading: homeContactSection?.heading || "Tell Me What You're Building.",
  description:
    homeContactSection?.description ||
    "Starting something new or improving a product you already have? I'd love to hear about it. Send me a message and let's talk through the next step.",
  email: homeContactSection?.email || portfolioContent.site.contact.email,
  phone: "+2347036215851",
  featuredMedia: homeContactSection?.featuredMedia || null,
};

// -------------------------------------------------------------
// PROJECTS (from content JSON projects array + asset maps)
// -------------------------------------------------------------
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
  isPlaceholderImage?: boolean;
  description: string;
  role?: string;
  result?: string;
  problem?: string;
  contributions?: string[];
  featured?: boolean;
  longDescription: string;
  features: string[];
  tags: { name: string; color: string }[];
  technologies?: string[];
  image: string;
  screenshots: string[];
  source_code_link: string;
  project_link: string;
  play_store_link?: string;
  app_store_link?: string;
  whatsapp_link?: string;
  whatsapp_number?: string;
}

const projectAssetsMap: Record<
  string,
  { image: string; screenshots: string[]; whatsapp_number?: string }
> = {
  "koyo-app": {
    image: koyo_display,
    screenshots: [
      koyo_display,
      koyo_live,
      koyo_live_chat,
      koyo_lessons,
      koyo_play_1,
      koyo_play_2,
    ],
  },
  "hajamarketplace": {
    image: haja_1,
    screenshots: [haja_1, haja_2, haja_3, haja_4, haja_5],
    whatsapp_number: "+234 814 180 4421",
  },
  "curri-ai": {
    image: curri_cover,
    screenshots: [
      curri_cover,
      curri_1,
      curri_2,
      curri_3,
      curri_cover_2,
      curri_cover_4,
    ],
  },
  "schoola-src": {
    image: schoola_src_1,
    screenshots: [schoola_src_1, schoola_src_2],
  },
  "dinki-app": {
    image: dinki_0,
    screenshots: [dinki_0, dinki_1, dinki_2, dinki_3, dinki_4, dinki_icon],
  },
  "nafcons-cbt": {
    image: nafcons_cbt,
    screenshots: [nafcons_cbt, nafcons_header],
  },
  "distress-sale": {
    image: distress_1,
    screenshots: [distress_1, distress_2, distress_3, distress_4],
  },
  "lessonthon": {
    image: lessonthon_1,
    screenshots: [lessonthon_1, lessonthon_2, lessonthon_3, lessonthon_4],
  },
  "lrcn-backend": {
    image: lrcn_cover,
    screenshots: [lrcn_cover, lrcn_1, lrcn_2, lrcn_logo],
  },
  "instafood": {
    image: instafood_cover,
    screenshots: [instafood_cover, instafood_1, instafood_2, instafood_logo],
  },
  "primetech-cms": {
    image: primetech_1,
    screenshots: [primetech_1, primetech_2, primetech_3],
  },
  "bibliory": {
    image: bibliory_1,
    screenshots: [
      bibliory_1,
      bibliory_2,
      bibliory_3,
      bibliory_4,
      bibliory_5,
      bibliory_6,
    ],
  },
  "aeromedicals": {
    image: aeromedical_cover,
    screenshots: [aeromedical_cover, aeromedical_crest],
  },
  "hiprep-mobile": {
    image: hiprep_0,
    screenshots: [hiprep_0, hiprep_1, hiprep_2],
  },
  "simplifi-finance": {
    image: simplifi_cover,
    screenshots: [
      simplifi_cover,
      simplifi_1,
      simplifi_2,
      simplifi_3,
      simplifi_4,
    ],
  },
  "travel-plus": {
    image: travelplus_1,
    screenshots: [travelplus_1, travelplus_2],
  },
  "naf-awc": {
    image: naf_awc_cover,
    screenshots: [
      naf_awc_cover,
      awc_2,
      awc_3,
      awc_4,
      awc_admin,
      awc_admin_6,
      awc_admin_5,
    ],
  },
  "lumi-ai": {
    image: lumi_cover,
    screenshots: [
      lumi_cover,
      lumi_1,
      lumi_2,
      lumi_3,
      lumi_4,
      lumi_5,
      lumi_6,
      lumi_7,
    ],
  },
  "schoola-landing": {
    image: schoola_landing,
    screenshots: [schoola_landing],
  },
  "schoola-lms": {
    image: schoola_lms_cover,
    screenshots: [
      schoola_lms_cover,
      schoola_lms_1,
      schoola_lms_2,
      schoola_lms_4,
      schoola_lms_6,
    ],
  },
};

const categoryDisplayMap: Record<string, ProjectItem["category"]> = {
  mobile: "Mobile Application",
  web: "Web Application",
  automation: "WhatsApp Automation & Backend",
};

const statusBadgeMap: Record<string, string> = {
  "live-ios-android": "Live on iOS & Android",
  "whatsapp-cloud-api": "WhatsApp Cloud API",
  "predecessor-to-flip": "Predecessor to Flip",
  "live-institutional-portal": "Live Institutional Portal",
  "cross-platform-suite": "Mobile & Web Suite",
  "initial-version-v1": "NAF AWC Portal v1",
  "live-operational": "Live Institutional LMS",
  "live-platform": "Live",
  "live": "Live",
  "active": "Live",
  "active-beta": "Active Beta (Pre-release)",
  "live-site": "Live Website",
  "concluded": "Concluded Event",
  "discontinued": "Discontinued",
  "web-active-app-discontinued": "Web Active (App Discontinued)",
  "archived": "Portfolio Showcase",
};

const projectResultMap: Record<string, string> = {
  "koyo-app": "Live classes & AI curriculum",
  "hajamarketplace": "3-bot marketplace engine",
  "curri-ai": "Used by 3,000+ teachers",
  "schoola-src": "Supporting 150+ schools",
  "dinki-app": "Mobile, web, admin & backend",
  "nafcons-cbt": "Live admissions portal",
  "distress-sale": "Automated deal engine",
  "simplifi-finance": "Active budgeting & finance app",
  "travel-plus": "Ride booking in active beta",
  "naf-awc": "Defense training portal v1",
  "lrcn-backend": "Automated Remita RRR engine",
  "schoola-lms": "Live LMS (demo.schoola.app)",
  "instafood": "Complete restaurant ordering system",
  "hiprep-mobile": "Web active at hipreponline.com",
};

const selectedProjectIds = new Set(
  homeSelectedSection?.projectIds || [
    "koyo-app",
    "hajamarketplace",
    "curri-ai",
    "schoola-src",
    "dinki-app",
    "simplifi-finance",
  ]
);

export const projects: ProjectItem[] = (
  (portfolioContent.projects || []) as unknown as JsonProject[]
).map((p: JsonProject) => {
  const assets = projectAssetsMap[p.id] || {
    image: web,
    screenshots: [],
  };
  const isFeatured = selectedProjectIds.has(p.id);

  const playStoreLink = p.links?.find((l: JsonProjectLink) =>
    /play/i.test(l.label)
  )?.url;
  const appStoreLink = p.links?.find((l: JsonProjectLink) =>
    /app store/i.test(l.label)
  )?.url;
  const whatsappLink = p.links?.find((l: JsonProjectLink) =>
    /whatsapp/i.test(l.label)
  )?.url;
  const projectLink =
    p.links?.find(
      (l: JsonProjectLink) =>
        !/play|app store|whatsapp|github|source|repo/i.test(l.label)
    )?.url || "";

  const result =
    projectResultMap[p.id] ||
    statusBadgeMap[p.status] ||
    (p.category === "mobile" ? "Mobile Application" : "Production Platform");

  return {
    id: p.id,
    name: p.name,
    category: categoryDisplayMap[p.category] || "Web Application",
    type: p.category as "web" | "mobile" | "automation",
    featured: isFeatured,
    statusBadge: statusBadgeMap[p.status] || p.status,
    description: p.shortDescription || p.overview || "",
    role: p.role,
    result: result,
    problem: p.overview || p.shortDescription || "",
    contributions: p.contributions || [],
    longDescription: p.overview || p.shortDescription || "",
    features: p.coreFeatures || p.contributions || [],
    tags: (p.technologies || []).map((tech: string) => ({
      name: tech.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      color: "blue-text-gradient",
    })),
    technologies: p.technologies || [],
    image: assets.image,
    screenshots:
      assets.screenshots.length > 0 ? assets.screenshots : [assets.image],
    source_code_link: "",
    project_link: projectLink,
    play_store_link: playStoreLink,
    app_store_link: appStoreLink,
    whatsapp_link: whatsappLink,
    whatsapp_number: assets.whatsapp_number,
  };
});

// -------------------------------------------------------------
// LEGACY COMPATIBILITY EXPORTS (Tech / Services)
// -------------------------------------------------------------
const services = [
  {
    title: "Web applications",
    description: "Next.js & React customer-facing portals, CMS dashboards, CBT engines, and internal tools.",
    icon: web,
  },
  {
    title: "Mobile applications",
    description: "Cross-platform iOS and Android apps in React Native and Expo built for real-world scale.",
    icon: mobile,
  },
  {
    title: "WhatsApp & workflow automation",
    description: "Conversational marketplace bots, Cloud API state machines, OTP auth, and catalog sync.",
    icon: whatsapp_automation,
  },
  {
    title: "AI & real-time integrations",
    description: "Claude & Gemini content workflows, 100ms live video sessions, and Socket.IO instant streams.",
    icon: ai_realtime,
  },
  {
    title: "Backends, APIs & payments",
    description: "Scalable Node.js & NestJS services with Remita, Paystack, and Stripe payment gateways.",
    icon: backend,
  },
  {
    title: "Technical leadership & mentoring",
    description: "Clear engineering direction, Jest testing standards, and hands-on mentoring to help teams ship.",
    icon: creator,
  },
];

const technologies = [
  { name: "React JS", icon: reactjs },
  { name: "React Native", icon: reactjs },
  { name: "Next.js", icon: nextjsIcon },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "Node JS", icon: nodejs },
  { name: "Nest JS", icon: nestjs },
  { name: "WhatsApp Cloud API", icon: whatsappIcon },
  { name: "AI Workflows", icon: aiIcon },
  { name: "WebSockets & 100ms", icon: realtimeIcon },
  { name: "Remita & Paystack", icon: paymentsIcon },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Redux Toolkit", icon: redux },
  { name: "MongoDB", icon: mongodb },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Three JS", icon: threejs },
];

export { services, technologies };

// -------------------------------------------------------------
// STRUCTURED CV DOSSIER (verbatim alignment with Muhammed Ladan - CV.pdf)
// -------------------------------------------------------------
export interface CvExperienceEntry {
  organisation: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface CvEducationEntry {
  degree: string;
  institution: string;
  period: string;
}

export const cvData = {
  name: "Muhammed Ladan",
  headline: "Software Developer (React, React Native, Node.js)",
  phone: "+2347036215851",
  email: "mdcarliey@gmail.com",
  location: "Kaduna, Nigeria",
  summary:
    "Software developer with 4+ years of experience building scalable web and mobile applications using React, React Native, and Node.js. Proven track record leading frontend development, mentoring developers, and delivering production-grade systems including LMS platforms and AI-powered tools. Strong focus on performance, responsive, and maintainable architecture.",
  technicalSkills: [
    {
      group: "Frontend",
      items: "React.js, JavaScript (ES6+), TypeScript, Next.js, Redux Toolkit, RTK Query, Tailwind CSS, Material UI, Styled Components, SEO",
    },
    {
      group: "Mobile",
      items: "React Native (Expo & React Native CLI)",
    },
    {
      group: "Backend",
      items: "Node.js, Express.js, Nest.js",
    },
    {
      group: "Testing",
      items: "Jest, React Testing Library, TDD, Unit & Integration Testing",
    },
    {
      group: "Databases",
      items: "MongoDB, MySQL, Firebase",
    },
    {
      group: "Cloud & Deployment",
      items: "AWS, Google Cloud, VPS, Dokploy, Vercel, Netlify",
    },
    {
      group: "Tools & Workflow",
      items: "Git, GitHub, Postman, Hoppscotch, Jira, ClickUp",
    },
  ],
  experience: [
    {
      organisation: "Schoola",
      role: "Frontend Lead",
      period: "Sep 2022 – Present",
      bullets: [
        "Re-engineered the Schoola SRC frontend architecture into 5 role-tailored micro-applications, driving user adoption across 150+ educational institutions (15,000+ users).",
        "Built and maintained the frontend architecture for Curri AI, powering curriculum generation workflows used by 3,000+ teachers.",
        "Implemented automated unit and integration tests using Jest & React Testing Library, covering 80% of critical user workflows in Curri AI.",
      ],
    },
    {
      organisation: "iT Central Limited",
      role: "Software Developer & Senior Partner",
      period: "Jan 2022 – Oct 2026",
      bullets: [
        "Engineered client-facing web and mobile applications using React, TypeScript, and React Native across 8+ production projects.",
        "Mentored developer interns in production code quality, state management patterns, and Git workflows, and trained students across technical bootcamps.",
        "Notable deliverables include the Simplifi finance mobile application and the NAF Air Warfare Center LMS.",
      ],
    },
    {
      organisation: "Dinki App Limited",
      role: "Full-Stack Mobile Developer (Contract/Part-time)",
      period: "Dec 2024 – Jan 2026",
      bullets: [
        "Built cross-platform React Native applications delivering 20+ user-facing mobile features.",
        "Developed and maintained Node.js & Express REST APIs, AWS CI/CD pipelines, and Google Play Store releases.",
      ],
    },
    {
      organisation: "Royalstone Technology Solutions Limited",
      role: "Mobile App Developer (NYSC)",
      period: "Aug 2024 – Aug 2025",
      bullets: [
        "Built cross-platform React Native applications for the logistics and ride-booking workflows of the Travel Plus mobile app.",
        "Integrated RESTful APIs for trip booking, real-time status updates, and payment processing alongside Play Store releases.",
      ],
    },
    {
      organisation: "Dialogue Academy Kaduna",
      role: "Web Development Tutor (Contract)",
      period: "May 2024 – Jul 2024",
      bullets: [
        "Taught foundational HTML, CSS, and JavaScript and guided cohorts through building practical web projects.",
      ],
    },
    {
      organisation: "Kaduna Refining and Petrochemical Company (KRPC)",
      role: "IT Technical Support Intern",
      period: "Mar 2017 – Mar 2019",
      bullets: [
        "Delivered workstation and network IT technical support and assisted with quarterly hardware/software inventory checks.",
      ],
    },
  ] as CvExperienceEntry[],
  education: [
    {
      degree: "Master's in Artificial Intelligence (In progress)",
      institution: "Nigerian Defence Academy",
      period: "Expected – 2027",
    },
    {
      degree: "B.Sc. Computer Science (CGPA: 3.92/5.00)",
      institution: "Kaduna State University",
      period: "2023",
    },
    {
      degree: "ND Computer Science (CGPA: 3.43/4.00)",
      institution: "Kaduna Polytechnic",
      period: "2016",
    },
  ] as CvEducationEntry[],
  certifications: [
    "MERN Stack Course (Building your own Instagram) – Udemy (2020)",
    "Most Dedicated Team Member – iT Central (2022)",
    "Frontend Developer (React) Certificate – HackerRank (2024)",
  ],
};
