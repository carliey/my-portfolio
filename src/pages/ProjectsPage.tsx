import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "../components";
import { projects } from "../constants";
import { styles } from "../style";
import { track } from "../lib/analytics";

type ProjectFilter = "all" | "web" | "mobile" | "automation";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const matchesQuery = (project: (typeof projects)[number], query: string) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      project.name.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.category.toLowerCase().includes(q) ||
      Boolean(project.statusBadge?.toLowerCase().includes(q)) ||
      Boolean(project.tech_stack?.some((t) => t.toLowerCase().includes(q)))
    );
  };

  // Debounced so typing doesn't fire an event per keystroke.
  useEffect(() => {
    const term = searchTerm.trim();
    if (term.length < 3) return;

    const timeout = setTimeout(() => {
      const matches = projects.filter((project) =>
        matchesQuery(project, term),
      ).length;

      track("search_used", { term, results: matches });
    }, 800);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = matchesQuery(project, searchTerm);
    const matchesFilter =
      activeFilter === "all" || project.type === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const webCount = projects.filter((p) => p.type === "web").length;
  const mobileCount = projects.filter((p) => p.type === "mobile").length;
  const automationCount = projects.filter(
    (p) => p.type === "automation",
  ).length;

  const filterTabs: { id: ProjectFilter; label: string; count: number }[] = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "web", label: "Web Apps", count: webCount },
    { id: "mobile", label: "Mobile Apps", count: mobileCount },
    { id: "automation", label: "Automation & APIs", count: automationCount },
  ];

  const trackProjectOpen = (project: (typeof projects)[number]) => {
    track("project_card_click", {
      id: project.id,
      name: project.name,
      source: "all_projects",
    });
  };

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mb-6 px-4 py-2 rounded-xl bg-tertiary border border-white/10 hover:border-[#915EFF] text-secondary hover:text-white text-sm font-medium transition-all inline-flex items-center gap-2"
          >
            <span aria-hidden="true">←</span> Back to Home
          </button>

          <p className={styles.sectionSubText}>Portfolio Showcase</p>
          <h1 className={styles.sectionHeadText}>All Projects.</h1>
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Explore {projects.length} web, mobile, AI, WhatsApp automation, and
            payment backend solutions built across ed-tech, healthcare,
            e-commerce, and enterprise domains.
          </p>
        </motion.div>

        {/* Filter Tabs & Search Bar */}
        <search
          aria-label="Filter and search projects"
          className="mt-10 flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 bg-tertiary/60 p-4 rounded-2xl border border-white/10 backdrop-blur-md"
        >
          {/* Single-row scrollable Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-1 lg:pb-0">
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
                  className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                    isSelected
                      ? "bg-[#915EFF] text-white border-b-[#00cea8] shadow-md shadow-[#915EFF]/20"
                      : "bg-black-100/60 text-secondary hover:text-white border border-white/5 border-b-transparent"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative flex-1 lg:max-w-sm">
            <label htmlFor="project-search" className="sr-only">
              Search projects by name, category, or stack
            </label>
            <input
              id="project-search"
              type="search"
              name="project-search"
              autoComplete="off"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search projects, AI, Remita, WhatsApp…"
              className="w-full bg-black-100/80 text-white placeholder:text-secondary px-4 py-2.5 rounded-xl outline-none border border-white/10 focus:border-[#915EFF] text-sm transition-colors"
            />
          </div>
        </search>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(index, 8) * 0.04 }}
              className="group relative bg-tertiary p-5 rounded-2xl border border-white/10 hover:border-[#915EFF]/50 hover:shadow-xl hover:shadow-[#915EFF]/10 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="relative w-full h-[220px] rounded-2xl overflow-hidden bg-[#080914]">
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    width={640}
                    height={400}
                    loading={index < 3 ? undefined : "lazy"}
                    decoding="async"
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  {project.statusBadge && (
                    <span className="absolute top-3 right-3 rounded-full border border-[#00cea8]/40 bg-primary/90 px-2.5 py-1 text-[10px] font-semibold text-[#00cea8] backdrop-blur-md">
                      {project.statusBadge}
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <span className="text-[11px] font-bold text-[#00cea8] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h2 className="text-white font-bold text-[20px] tracking-wide mt-1">
                    <Link
                      to={`/projects/${project.id}`}
                      onClick={() => trackProjectOpen(project)}
                      className="hover:text-[#b79bff] transition-colors after:content-[''] after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-[#b79bff]"
                    >
                      {project.name}
                    </Link>
                  </h2>
                  <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="mt-6 w-full py-2.5 rounded-xl bg-black-100 group-hover:bg-[#915EFF] text-white text-xs font-semibold tracking-wider uppercase border border-white/10 group-hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>View Project Details</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-tertiary/30 rounded-3xl border border-white/10 mt-10">
            <h2 className="text-white text-xl font-bold">
              No matching projects found
            </h2>
            <p className="text-secondary text-sm mt-2">
              Try adjusting your search query or selecting a different filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("all");
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#915EFF] text-white text-sm font-semibold hover:opacity-90 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectsPage;
