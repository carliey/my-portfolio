import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks, personalInfo, profileImage } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isProjectsRoute = location.pathname.startsWith("/projects");
  const isCvRoute = location.pathname === "/cv";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setToggle(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!toggle) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setToggle(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggle]);

  const handleHashLink = (sectionId: string) => {
    setToggle(false);
    if (!isHome) {
      navigate(`/#${sectionId}`);
      return;
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.focus({ preventScroll: true });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#050816]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-[#050816]/85 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-10">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex min-h-11 items-center gap-3 rounded-full pr-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00cea8]"
          aria-current={isHome ? "page" : undefined}
        >
          <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#915EFF]/50 bg-[#100d25] ring-2 ring-white/10 transition-transform duration-300 group-hover:scale-105">
            <img
              src={profileImage}
              alt={personalInfo.name}
              className="h-full w-full object-cover object-top"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm font-bold tracking-tight text-white sm:text-base">
              {personalInfo.name}
            </span>
            <span className="font-mono-tech mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#00cea8]">
              Software Engineer
            </span>
          </span>
        </Link>

        {/* Desktop Minimal Nav (4 essential routes only) */}
        <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.id === "cv") {
                return (
                  <li key={link.id}>
                    <Link
                      to="/cv"
                      aria-current={isCvRoute ? "page" : undefined}
                      className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition-colors ${
                        isCvRoute
                          ? "bg-white/10 text-white"
                          : "text-[#aaa6c3] hover:bg-white/[0.05] hover:text-white"
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              }

              if (link.id === "contact") {
                return (
                  <li key={link.id} className="ml-2">
                    <button
                      type="button"
                      onClick={() => handleHashLink("contact")}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#915EFF]/50 bg-[#100d25]/90 px-5 text-sm font-semibold text-white transition-all hover:border-[#00cea8] hover:bg-[#151030]"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-[#00cea8]"
                        aria-hidden="true"
                      />
                      Let&apos;s Talk
                    </button>
                  </li>
                );
              }

              const isWorkActive = link.id === "projects" && isProjectsRoute;
              return (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleHashLink(link.id)}
                    aria-current={isWorkActive ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition-colors ${
                      isWorkActive
                        ? "bg-white/10 text-white"
                        : "text-[#aaa6c3] hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    {link.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="relative md:hidden">
          <button
            type="button"
            onClick={() => setToggle((prev) => !prev)}
            aria-expanded={toggle}
            aria-controls="mobile-nav-drawer"
            aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#100d25]/90 text-white"
          >
            <img
              src={toggle ? close : menu}
              alt=""
              aria-hidden="true"
              className="h-5 w-5 object-contain"
            />
          </button>

          {toggle && (
            <nav
              id="mobile-nav-drawer"
              aria-label="Mobile navigation"
              className="absolute right-0 top-14 z-50 w-[min(86dvw,18rem)] rounded-2xl border border-white/10 bg-[#100d25]/95 p-4 shadow-2xl shadow-black/60 backdrop-blur-xl"
            >
              <ul className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  if (link.id === "cv") {
                    return (
                      <li key={link.id}>
                        <Link
                          to="/cv"
                          aria-current={isCvRoute ? "page" : undefined}
                          onClick={() => setToggle(false)}
                          className={`flex min-h-11 items-center justify-between rounded-xl px-4 text-sm font-medium ${
                            isCvRoute
                              ? "bg-[#915EFF]/20 text-white"
                              : "text-[#dfd9ff] hover:bg-white/[0.06]"
                          }`}
                        >
                          <span>View &amp; Download CV</span>
                          <span className="font-mono-tech text-[11px] text-[#00cea8]">
                            PDF
                          </span>
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li key={link.id}>
                      <button
                        type="button"
                        onClick={() => handleHashLink(link.id)}
                        className="flex min-h-11 w-full items-center rounded-xl px-4 text-left text-sm font-medium text-[#dfd9ff] hover:bg-white/[0.06] hover:text-white"
                      >
                        {link.id === "contact" ? "Let's Talk" : link.title}
                      </button>
                    </li>
                  );
                })}
                <li className="mt-1 border-t border-white/10 pt-2">
                  <Link
                    to="/projects"
                    onClick={() => setToggle(false)}
                    className="flex min-h-11 items-center justify-between rounded-xl px-4 text-sm font-medium text-[#aaa6c3] hover:bg-white/[0.06] hover:text-white"
                  >
                    <span>All 20 Projects Archive</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
