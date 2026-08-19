import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Works } from "./components";
import { navLinks, personalInfo, socialLinks } from "./constants";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import {
  TikTokIcon,
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  GitHubIcon,
} from "./components/SocialIcons";

const LandingPage = () => {
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
      {/* Floating Side Dot Navigation */}
      <div className="fixed top-[50%] -translate-y-1/2 right-4 z-40 hidden md:flex flex-col gap-4 bg-tertiary/40 backdrop-blur-md p-2.5 rounded-full border border-white/10 shadow-lg">
        {navLinks.map((nav) => (
          <a key={nav.id} href={`#${nav.id}`} title={nav.title} className="group relative flex items-center justify-center">
            <div className="w-3 h-3 bg-secondary/50 group-hover:bg-[#915EFF] group-hover:scale-125 rounded-full transition-all duration-300" />
            <span className="absolute right-7 px-2.5 py-1 bg-black-100/90 text-white text-xs font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-white/10 shadow-md">
              {nav.title}
            </span>
          </a>
        ))}
      </div>

      {/* Hero Section */}
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      {/* Portfolio Content Sections */}
      <About />
      <Experience />
      <Works />

      <div className="relative z-0">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 bg-black-100/80 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-secondary text-sm font-medium text-center sm:text-left">
              © {new Date().getFullYear()} <span className="text-white font-semibold">{personalInfo.name}</span>. All rights reserved.
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
                className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center text-secondary hover:text-white hover:bg-[#915EFF] transition-all duration-300 hover:scale-110"
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
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
