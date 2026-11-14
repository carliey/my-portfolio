import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "../components";
import { personalInfo, projects } from "../constants";
import { track } from "../lib/analytics";

type ProjectFilter = "all" | "web" | "mobile" | "automation";
type ArchiveViewMode = "bento" | "index";

const categoryShortLabel = (type: "web" | "mobile" | "automation") => {
  if (type === "mobile") return "Mobile App";
  if (type === "automation") return "Automation & API";
  return "Web Platform";
};

const isLiveStatus = (badge?: string) =>
  Boolean(badge && /^live/i.test(badge));

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [viewMode, setViewMode] = useState<ArchiveViewMode>("bento");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Projects Archive | Muhammed Ladan";
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

  const webCount = projects.filter((p) => p.type === "web").length;
  const mobileCount = projects.filter((p) => p.type === "mobile").length;
  const automationCount = projects.filter((p) => p.type === "automation").length;

  const filterTabs: { id: ProjectFilter; code: string; label: string; count: number }[] = [
    { id: "all", code: "01", label: "All Systems", count: projects.length },
    { id: "web", code: "02", label: "Web Platforms", count: webCount },
    { id: "mobile", code: "03", label: "Mobile Apps", count: mobileCount },
    { id: "automation", code: "04", label: "Automation & APIs", count: automationCount },
  ];

  const isDefaultUnfilteredBento =
    viewMode === "bento" && activeFilter === "all" && !searchTerm.trim();

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
        className="bg-architectural-grid pointer-events-none fixed inset-0 opacity-30"
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
        {/* Architectural Masthead Header */}
        <header className="border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#aaa6c3] transition-colors hover:text-[#00cea8]"
            >
              <span aria-hidden="true">←</span>
              <span>Back to portfolio</span>
            </Link>

            <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#00cea8]">
              INDEX // {String(projects.length).padStart(2, "0")} SYSTEMS DELIVERED
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="type-hero text-white">
                Work Archive
              </h1>
              <p className="type-prose mt-3 text-[#aaa6c3]">
                Web applications, React Native mobile apps, AI workflows, WhatsApp bots, and payment APIs shipped across education, commerce, finance, and enterprise teams.
              </p>
            </div>

            {/* Editorial View Density Switcher */}
            <div
              role="group"
              aria-label="Layout mode"
              className="inline-flex self-start rounded-full border border-white/10 bg-[#100d25]/90 p-1 lg:self-auto"
            >
              <button
                type="button"
                aria-pressed={viewMode === "bento"}
                onClick={() => setViewMode("bento")}
                className={`min-h-10 rounded-full px-4 text-xs font-semibold transition-colors ${
                  viewMode === "bento"
                    ? "bg-[#915EFF] text-white shadow-sm"
                    : "text-[#aaa6c3] hover:text-white"
                }`}
              >
                Showcase Grid
              </button>
              <button
                type="button"
                aria-pressed={viewMode === "index"}
                onClick={() => setViewMode("index")}
                className={`min-h-10 rounded-full px-4 text-xs font-semibold transition-colors ${
                  viewMode === "index"
                    ? "bg-[#915EFF] text-white shadow-sm"
                    : "text-[#aaa6c3] hover:text-white"
                }`}
              >
                Index Table
              </button>
            </div>
          </div>
        </header>

        {/* Flush Sticky Command Bar Filter & Search */}
        <search
          aria-label="Filter and search projects"
          className="sticky top-[64px] z-30 -mx-4 border-b border-white/10 bg-[#050816]/90 px-4 py-3 backdrop-blur-xl sm:top-[72px] sm:mx-0 sm:px-0"
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Segmented Border-Bottom Filter Tabs */}
            <div
              role="group"
              aria-label="Filter by product domain"
              className="no-scrollbar flex items-center gap-1 overflow-x-auto sm:gap-2"
            >
              {filterTabs.map((tab) => {
                const isSelected = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={(e) => {
                      setActiveFilter(tab.id);
                      e.currentTarget.scrollIntoView({
                        block: "nearest",
                        inline: "nearest",
                      });
                      track("filter_used", { filter: tab.id });
                    }}
                    className={`relative inline-flex min-h-11 shrink-0 items-center gap-2 px-3.5 text-xs font-semibold transition-colors sm:px-4 ${
                      isSelected
                        ? "text-white"
                        : "text-[#aaa6c3] hover:text-white"
                    }`}
                  >
                    <span className="font-mono-tech text-[10px] text-[#00cea8]/80">
                      {tab.code}
                    </span>
                    <span>{tab.label}</span>
                    <span className="font-mono-tech rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] text-[#dfd9ff]">
                      {tab.count}
                    </span>
                    {isSelected && (
                      <motion.span
                        layoutId="archiveTabUnderline"
                        className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-[#00cea8]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Minimal Borderless Command Search Input */}
            <div className="flex items-center gap-3 lg:w-80">
              <div className="relative flex-1">
                <label htmlFor="project-search" className="sr-only">
                  Search projects by name, role, category, or stack
                </label>
                <span
                  aria-hidden="true"
                  className="font-mono-tech pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[#00cea8]"
                >
                  /
                </span>
                <input
                  id="project-search"
                  type="search"
                  name="project-search"
                  autoComplete="off"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search stack, product, role…"
                  className="min-h-11 w-full rounded-xl border border-white/10 bg-[#100d25]/80 pl-8 pr-9 text-sm text-white placeholder:text-[#aaa6c3]/70 focus:border-[#00cea8] focus:outline-none"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    aria-label="Clear search"
                    className="absolute right-1.5 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-xs text-[#aaa6c3] hover:bg-white/10 hover:text-white"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>
        </search>

        {/* Results Feed */}
        {filteredProjects.length > 0 ? (
          viewMode === "bento" ? (
            /* Asymmetric Container-Query Bento Showcase */
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {filteredProjects.map((project, index) => {
                const isSpotlight = isDefaultUnfilteredBento && index < 2;
                const live = isLiveStatus(project.statusBadge);

                return (
                  <article
                    key={project.id}
                    className={`project-card-shell group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-[#100d25]/80 transition-all duration-300 hover:border-[#915EFF]/60 hover:bg-[#151030]/95 ${
                      isSpotlight ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="project-bento-inner h-full">
                      {/* Studio Image Stage */}
                      <div
                        className={`relative overflow-hidden bg-[#070a1c] p-3 sm:p-5 ${
                          isSpotlight ? "min-h-[240px] sm:min-h-[300px]" : "aspect-[16/10]"
                        }`}
                      >
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(145,94,255,0.14),transparent_70%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                        />
                        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#050816]">
                          <img
                            src={project.image}
                            alt={`${project.name} preview`}
                            loading={index < 2 ? undefined : "lazy"}
                            fetchPriority={index === 0 ? "high" : undefined}
                            decoding="async"
                            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                      </div>

                      {/* Editorial Content Dossier */}
                      <div className="flex flex-col justify-between p-5 sm:p-7">
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="font-mono-tech text-[11px] font-medium uppercase tracking-[0.16em] text-[#aaa6c3]">
                              #{String(index + 1).padStart(2, "0")} · {categoryShortLabel(project.type)}
                            </span>

                            {project.statusBadge && (
                              <span className="inline-flex items-center gap-1.5 font-mono-tech text-[11px] font-medium text-[#00cea8]">
                                {live && (
                                  <span
                                    aria-hidden="true"
                                    className="h-1.5 w-1.5 rounded-full bg-[#00cea8]"
                                  />
                                )}
                                <span>{project.statusBadge}</span>
                              </span>
                            )}
                          </div>

                          <h2
                            className={`mt-3 font-display font-bold tracking-tight text-white transition-colors group-hover:text-[#00cea8] ${
                              isSpotlight ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                            }`}
                          >
                            <Link
                              to={`/projects/${project.id}`}
                              onClick={() => trackProjectOpen(project)}
                              className="after:absolute after:inset-0 after:rounded-3xl after:content-[''] focus-visible:outline-none"
                            >
                              {project.name}
                            </Link>
                          </h2>

                          {project.role && (
                            <p className="font-mono-tech mt-1 text-xs uppercase tracking-[0.12em] text-[#915EFF]">
                              {project.role}
                            </p>
                          )}

                          <p
                            className={`mt-3 text-sm leading-relaxed text-[#aaa6c3] ${
                              isSpotlight ? "line-clamp-3 sm:text-base" : "line-clamp-2"
                            }`}
                          >
                            {project.description}
                          </p>
                        </div>

                        {/* Bottom hairline spec bar + Circular Arrow Disc */}
                        <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-4">
                          <p className="font-mono-tech truncate text-[11px] text-[#dfd9ff]/75">
                            {(project.technologies || []).slice(0, 3).join(" · ") ||
                              project.category}
                          </p>

                          <span
                            aria-hidden="true"
                            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#050816] text-sm text-white transition-all duration-300 group-hover:border-[#00cea8] group-hover:bg-[#00cea8] group-hover:text-[#050816]"
                          >
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* Architectural Compact Index Table View */
            <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-[#100d25]/70">
              <div className="hidden grid-cols-12 gap-4 border-b border-white/10 px-6 py-3.5 font-mono-tech text-[11px] uppercase tracking-[0.16em] text-[#aaa6c3] lg:grid">
                <span className="col-span-4">Project</span>
                <span className="col-span-3">Role</span>
                <span className="col-span-3">Stack</span>
                <span className="col-span-2 text-right">Status</span>
              </div>

              <ol className="divide-y divide-white/[0.07]">
                {filteredProjects.map((project, index) => (
                  <li key={project.id} className="group relative transition-colors hover:bg-[#151030]/80">
                    <Link
                      to={`/projects/${project.id}`}
                      onClick={() => trackProjectOpen(project)}
                      className="grid grid-cols-1 items-center gap-3 px-4 py-4 sm:px-6 lg:grid-cols-12 lg:gap-4"
                    >
                      <div className="flex items-center gap-3.5 lg:col-span-4">
                        <span className="font-mono-tech w-6 shrink-0 text-xs text-white/35">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <img
                          src={project.image}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className="h-11 w-16 shrink-0 rounded-lg border border-white/10 object-cover object-top"
                        />
                        <div className="min-w-0">
                          <p className="truncate font-display text-base font-bold text-white transition-colors group-hover:text-[#00cea8]">
                            {project.name}
                          </p>
                          <p className="font-mono-tech text-[10px] uppercase tracking-[0.12em] text-[#aaa6c3]">
                            {categoryShortLabel(project.type)}
                          </p>
                        </div>
                      </div>

                      <p className="truncate pl-9 text-xs font-medium text-[#dfd9ff] sm:text-sm lg:col-span-3 lg:pl-0">
                        {project.role || "Software Engineering"}
                      </p>

                      <p className="truncate pl-9 font-mono-tech text-[11px] text-[#aaa6c3] lg:col-span-3 lg:pl-0">
                        {(project.technologies || []).slice(0, 3).join(" · ")}
                      </p>

                      <div className="flex items-center justify-between pl-9 lg:col-span-2 lg:justify-end lg:gap-3 lg:pl-0">
                        <span className="font-mono-tech text-xs font-medium text-[#00cea8]">
                          {project.statusBadge || "Shipped"}
                        </span>
                        <span
                          aria-hidden="true"
                          className="text-sm text-[#aaa6c3] transition-transform group-hover:translate-x-1 group-hover:text-white"
                        >
                          →
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          )
        ) : (
          <div className="mt-10 rounded-3xl border border-white/10 bg-[#100d25]/60 px-6 py-16 text-center">
            <h2 className="font-display text-xl font-bold text-white">
              No matching systems found
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-[#aaa6c3]">
              Try a different search keyword or reset the active domain filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("all");
              }}
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#915EFF] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#7d48f5]"
            >
              Reset Filters
            </button>
          </div>
        )}

        <p className="mt-12 text-center font-mono-tech text-xs text-[#aaa6c3]/70">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </main>
    </div>
  );
};

export default ProjectsPage;
