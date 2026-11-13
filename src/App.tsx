import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  Capabilities,
  Collaborations,
  Leadership,
} from "./components";
import { navLinks, personalInfo, socialLinks } from "./constants";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import { track } from "./lib/analytics";
import usePageView from "./hooks/usePageView";
import {
  TikTokIcon,
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  GitHubIcon,
} from "./components/SocialIcons";

/** Captures a pageview for every client-side route change. */
const AnalyticsTracker = () => {
  usePageView();
  return null;
};

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navLinks.map((nav) => nav.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "tiktok":
        return <TikTokIcon className="w-4 h-4" />;
      case "linkedin":
        return <LinkedInIcon className="w-4 h-4" />;
      case "instagram":
        return <InstagramIcon className="w-4 h-4" />;
      case "youtube":
        return <YouTubeIcon className="w-4 h-4" />;
      case "github":
        return <GitHubIcon className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <a href="#main-content" className="skip-link">Skip to content</a>

      {/* Floating Side Dot Navigation */}
      <nav
        aria-label="Section shortcuts"
        className="fixed top-[50%] -translate-y-1/2 right-4 z-40 hidden md:flex flex-col gap-3.5 bg-tertiary/60 backdrop-blur-md p-2.5 rounded-full border border-white/10 shadow-xl"
      >
        {navLinks.map((nav) => {
          const isActive = activeSection === nav.id;
          return (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              title={nav.title}
              aria-label={`Jump to ${nav.title}`}
              aria-current={isActive ? "true" : undefined}
              className="group relative flex items-center justify-center p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00cea8]"
            >
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#00cea8] scale-150 ring-2 ring-[#00cea8]/40"
                    : "bg-secondary/40 group-hover:bg-[#915EFF] group-hover:scale-125"
                }`}
              />
              <span className="absolute right-8 px-2.5 py-1 bg-black-100/95 text-white text-xs font-semibold rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-white/10 shadow-lg">
                {nav.title}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Hero Section */}
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      <main id="main-content">
        {/* 02 · Selected Projects */}
        <Works />

        {/* 03 · Professional Experience */}
        <Experience />

        {/* 04 · Capabilities & Technical Depth */}
        <Capabilities />

        {/* 05 · Professional Collaborations */}
        <Collaborations />

        {/* 06 · Mentorship & Knowledge Sharing */}
        <Leadership />

        {/* 07 · Contact / Let's Work Together */}
        <div className="relative z-0">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/10 bg-[#080914] mt-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#915EFF] flex items-center justify-center font-bold text-white text-xs">
              ML
            </div>
            <p className="text-secondary text-sm font-medium text-center sm:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="text-white font-semibold">
                {personalInfo.name}
              </span>
              . Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                aria-label={social.name}
                onClick={() =>
                  track("social_click", {
                    network: social.name,
                    source: "footer",
                  })
                }
                className="w-9 h-9 rounded-xl bg-tertiary border border-white/5 flex items-center justify-center text-secondary hover:text-white hover:border-[#915EFF] hover:bg-[#915EFF]/20 transition-all duration-200 hover:scale-110"
              >
                {getSocialIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
