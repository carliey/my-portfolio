import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../style";
import { close, menu } from "../assets";
import { navLinks, personalInfo } from "../constants";
import { DownloadIcon } from "./SocialIcons";
import { track } from "../lib/analytics";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver scrollspy to mirror active section with aria-current
  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = navLinks.map((nav) => nav.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHomePage]);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-md shadow-lg border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className={`${styles.paddingX} w-full flex justify-between items-center max-w-7xl mx-auto`}>
        {/* Brand / Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00cea8]"
          onClick={() => {
            setActiveSection("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#915EFF] flex items-center justify-center font-black text-white shadow-md shadow-[#915EFF]/30 group-hover:scale-105 transition-transform">
            ML
          </div>
          <div className="flex flex-col">
            <span className="text-white text-base sm:text-lg font-bold flex items-center tracking-wide leading-tight">
              {personalInfo.name}
            </span>
            <span className="text-[11px] text-[#00cea8] font-semibold tracking-wider uppercase">
              Full-Stack & Mobile
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary site navigation"
          className="hidden lg:flex items-center gap-7"
          style={{ scrollTargetGroup: "auto" } as React.CSSProperties}
        >
          <ul className="list-none flex flex-row items-center gap-6">
            {navLinks.map((nav) => {
              const isActive = activeSection === nav.id;
              const href = isHomePage ? `#${nav.id}` : `/#${nav.id}`;
              return (
                <li key={nav.id}>
                  <a
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => {
                      setActiveSection(nav.id);
                      track("nav_click", { section: nav.id });
                    }}
                    className={`relative py-1 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00cea8] ${
                      isActive
                        ? "text-white"
                        : "text-secondary hover:text-white"
                    }`}
                  >
                    {nav.title}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00cea8] rounded-full"
                      />
                    )}
                  </a>
                </li>
              );
            })}

            <li>
              <Link
                to="/projects"
                onClick={() => track("nav_click", { section: "all_projects_btn" })}
                className="text-xs font-bold uppercase tracking-wider text-[#dfd9ff] bg-tertiary hover:bg-[#232631] px-3.5 py-2 rounded-lg border border-white/10 hover:border-[#915EFF] transition-colors"
              >
                All Projects (20)
              </Link>
            </li>

            <li>
              <a
                href={personalInfo.cvUrl || "#"}
                download
                onClick={() => track("cta_click", { label: "nav_download_cv" })}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black bg-[#00cea8] hover:bg-[#00cea8]/90 px-3.5 py-2 rounded-lg shadow-sm transition-all hover:scale-105"
              >
                <DownloadIcon className="w-3.5 h-3.5" />
                <span>CV</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={toggle}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-tertiary border border-white/10 text-white hover:border-[#915EFF] transition-colors"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt=""
              aria-hidden="true"
              width="24"
              height="24"
              className="w-6 h-6 object-contain"
            />
          </button>

          {/* Mobile Dropdown Menu */}
          <div
            id="mobile-navigation"
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#100d25] absolute top-20 right-4 left-4 z-50 rounded-2xl border border-white/10 shadow-2xl flex-col gap-4 backdrop-blur-xl`}
          >
            <ul className="list-none flex flex-col gap-3">
              {navLinks.map((nav) => {
                const isActive = activeSection === nav.id;
                const href = isHomePage ? `#${nav.id}` : `/#${nav.id}`;
                return (
                  <li key={nav.id}>
                    <a
                      href={href}
                      aria-current={isActive ? "page" : undefined}
                      className={`block rounded-xl px-4 py-3 font-medium text-base transition-colors ${
                        isActive
                          ? "bg-[#915EFF]/20 text-white font-bold border-l-4 border-[#00cea8]"
                          : "text-secondary hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => {
                        setToggle(false);
                        setActiveSection(nav.id);
                        track("nav_click", { section: nav.id, mobile: true });
                      }}
                    >
                      {nav.title}
                    </a>
                  </li>
                );
              })}

              <li className="pt-2 border-t border-white/10 flex flex-col gap-2">
                <Link
                  to="/projects"
                  className="block rounded-xl px-4 py-3 text-center font-bold text-sm bg-tertiary text-white border border-white/10"
                  onClick={() => setToggle(false)}
                >
                  Explore All 20 Projects
                </Link>

                <a
                  href={personalInfo.cvUrl || "#"}
                  download
                  className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-center font-bold text-sm bg-[#00cea8] text-black"
                  onClick={() => {
                    setToggle(false);
                    track("cta_click", { label: "mobile_download_cv" });
                  }}
                >
                  <DownloadIcon className="w-4 h-4" />
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
