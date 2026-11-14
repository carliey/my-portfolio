import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  Capabilities,
  ChapterRail,
  Contact,
  Experience,
  Hero,
  Leadership,
  Navbar,
  Works,
} from "./components";
import CvPage from "./pages/CvPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ProjectsPage from "./pages/ProjectsPage";
import usePageView from "./hooks/usePageView";

/** Captures a pageview for every client-side route change. */
const AnalyticsTracker = () => {
  usePageView();
  return null;
};

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          target.focus({ preventScroll: true });
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="relative z-0 min-h-screen bg-[#050816]">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Navbar />
      <ChapterRail />

      <main id="main-content">
        <Hero />
        <Works />
        <Capabilities />
        <Experience />
        <Leadership />
        <Contact />
      </main>
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
        <Route path="/cv" element={<CvPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
