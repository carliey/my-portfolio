import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import { personalInfo, projects } from "../constants";
import { track } from "../lib/analytics";

type ProjectFilter = "all" | "web" | "mobile" | "automation";

const categoryLabel = (type: "web" | "mobile" | "automation") => {
  if (type === "mobile") return "Mobile";
  if (type === "automation") return "Automation";
  return "Web";
};

const isLiveStatus = (badge?: string) =>
  Boolean(badge && /^live/i.test(badge));

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Projects | Muhammed Ladan";
    return () => {
      document.title = "Muhammed Ladan";
    };
  }, []);

  const matchesQuery = (project: (typeof projects)[number], query: string) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      project.name.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.category.toLowerCase().includes(q) ||
      Boolean(project.role?.toLowerCase().includes(q)) ||
      Boolean(project.statusBadge?.toLowerCase().includes(q)) ||
      Boolean(project.technologies?.some((t) => t.toLowerCase().includes(q)))
    );
  };

  useEffect(() => {
    const term = searchTerm.trim();
    if (term.length < 3) return;
    const timeout = setTimeout(() => {
      const matches = projects.filter((project) =>
        matchesQuery(project, term)
      ).length;
      track("search_used", { term, results: matches });
    }, 800);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = matchesQuery(project, searchTerm);
    const matchesFilter = activeFilter === "all" || project.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const filterTabs: { id: ProjectFilter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "automation", label: "Automation" },
  ];

  const trackProjectOpen = (project: (typeof projects)[number]) => {
    track("project_card_click", {
      id: project.id,
      name: project.name,
      source: "all_projects",
    });
  };

  return (
    <div className="relative min-h-screen bg-[#050816] text-white">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />

      <div
        aria-hidden="true"
        className="bg-architectural-grid pointer-events-none fixed inset-0 opacity-25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-[#915EFF]/10 blur-[140px]"
      />

      <main
        id="main-content"
        className="relative z-10 mx-auto max-w-7xl px-4 pt-24 sm:px-10 sm:pt-32"
        style={{
          paddingBottom: "max(4.5rem, env(safe-area-inset-bottom, 0px))",
        }}
      >
        {/* Clean Editorial Header */}
        <header>
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#aaa6c3] transition-colors hover:text-[#00cea8]"
          >
            <span aria-hidden="true">←</span>
            <span>Back to portfolio</span>
          </Link>

          <h1 className="type-hero mt-4 text-white">Projects</h1>
          <p className="type-prose mt-3 max-w-2xl text-[#aaa6c3]">
            Web platforms, mobile apps, and automation workflows shipped across education, commerce, finance, and enterprise teams.
          </p>
        </header>

        {/* Simple Filter Pills & Search */}
        <search
          aria-label="Filter and search projects"
          className="mt-8 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between"
        >
          <div
            role="group"
            aria-label="Filter by product type"
            className="no-scrollbar flex items-center gap-2 overflow-x-auto"
          >
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => {
                    setActiveFilter(tab.id);
                    track("filter_used", { filter: tab.id });
                  }}
                  className={`inline-flex min-h-10 shrink-0 items-center rounded-full px-4 text-xs font-semibold transition-colors sm:text-sm ${
                    isSelected
                      ? "bg-[#915EFF] text-white"
                      : "border border-white/10 bg-[#100d25]/80 text-[#aaa6c3] hover:border-white/25 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <label htmlFor="project-search" className="sr-only">
              Search projects
            </label>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#aaa6c3]"
            >
              <circle
                cx="9"
                cy="9"
                r="6"
                stroke="currentColor"
                strokeWidth="1.75"
              />
              <path
                d="M13.5 13.5L17 17"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
            <input
              id="project-search"
              type="search"
              name="project-search"
              autoComplete="off"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search projects…"
              className="min-h-11 w-full rounded-full border border-white/10 bg-[#100d25]/80 pl-10 pr-9 text-sm text-white placeholder:text-[#aaa6c3]/70 focus:border-[#00cea8] focus:outline-none"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-xs text-[#aaa6c3] hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </search>

        {/* Uniform 3-Column Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => {
              const live = isLiveStatus(project.statusBadge);

              return (
                <article
                  key={project.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#100d25]/80 transition-colors duration-200 hover:border-[#915EFF]/55 hover:bg-[#151030]/95"
                >
                  {/* 1. Clean Preview */}
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#070a1c]">
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      loading={index < 3 ? undefined : "lazy"}
                      fetchPriority={index === 0 ? "high" : undefined}
                      decoding="async"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* 2. Title & Concise Summary + 3. Quiet Footer */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h2 className="font-display text-lg font-bold tracking-tight text-white transition-colors group-hover:text-[#00cea8] sm:text-xl">
                        <Link
                          to={`/projects/${project.id}`}
                          onClick={() => trackProjectOpen(project)}
                          className="after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none"
                        >
                          {project.name}
                        </Link>
                      </h2>

                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#aaa6c3]">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/[0.07] pt-3.5 text-xs">
                      <span className="inline-flex items-center gap-2 text-[#aaa6c3]">
                        <span>{categoryLabel(project.type)}</span>
                        {live && (
                          <span className="inline-flex items-center gap-1.5 text-[#00cea8]">
                            <span aria-hidden="true">·</span>
                            <span
                              aria-hidden="true"
                              className="h-1.5 w-1.5 rounded-full bg-[#00cea8]"
                            />
                            <span>Live</span>
                          </span>
                        )}
                      </span>

                      <span className="font-medium text-white transition-colors group-hover:text-[#00cea8]">
                        View details →
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-white/10 bg-[#100d25]/60 px-6 py-16 text-center">
            <h2 className="font-display text-lg font-bold text-white">
              No matching projects
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-[#aaa6c3]">
              Try another keyword or clear your active filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("all");
              }}
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#915EFF] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#7d48f5]"
            >
              Reset
            </button>
          </div>
        )}

        <p className="mt-14 text-center font-mono-tech text-xs text-[#aaa6c3]/70">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </main>
    </div>
  );
};

export default ProjectsPage;
