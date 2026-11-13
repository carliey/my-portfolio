import { Link } from "react-router-dom";
import { projects } from "../constants";
import { track } from "../lib/analytics";

const categoryShortLabel = (type: "web" | "mobile" | "automation") => {
  if (type === "mobile") return "Mobile";
  if (type === "automation") return "Automation";
  return "Web";
};

const Works = () => {
  const notableProjects = projects.filter((project) => project.featured).slice(0, 6);

  return (
    <section
      id="projects"
      tabIndex={-1}
      className="snap-stage relative flex min-h-[100dvh] w-full flex-col justify-center border-t border-white/[0.06] bg-[#050816] py-20 outline-none sm:py-24"
    >
      <div
        aria-hidden="true"
        className="bg-architectural-grid pointer-events-none absolute inset-0 opacity-45"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-10">
        {/* Editorial Stage Header */}
        <div className="stage-reveal flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono-tech text-xs font-semibold uppercase tracking-[0.22em] text-[#00cea8]">
              02 // Selected Work
            </p>
            <h2 className="type-section mt-2 text-white">
              Shipped Products
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/projects"
              onClick={() => track("browse_all_projects_click", { source: "works_stage" })}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-[#100d25] px-5 text-sm font-medium text-[#dfd9ff] transition-colors hover:border-[#00cea8] hover:text-white"
            >
              Explore all {projects.length} projects
              <span aria-hidden="true" className="text-[#00cea8]">→</span>
            </Link>
          </div>
        </div>

        {/* Clean 3x2 Showcase Grid — No skill badges on cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notableProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              onClick={() =>
                track("project_card_click", { id: project.id, source: "home_notable" })
              }
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#100d25]/85 transition-all duration-300 hover:-translate-y-1 hover:border-[#915EFF]/55 hover:bg-[#151030]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#090325]">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100d25] via-transparent to-transparent opacity-70"
                />
                <span className="font-mono-tech absolute left-3.5 top-3.5 rounded-full border border-white/15 bg-[#050816]/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#dfd9ff] backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")} · {categoryShortLabel(project.type)}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold tracking-tight text-white transition-colors group-hover:text-[#00cea8] sm:text-xl">
                    {project.name}
                  </h3>
                  {project.statusBadge && (
                    <span className="shrink-0 rounded-full border border-[#00cea8]/30 bg-[#00cea8]/10 px-2.5 py-0.5 text-[10px] font-medium text-[#00cea8]">
                      {project.statusBadge}
                    </span>
                  )}
                </div>

                {project.role && (
                  <p className="font-mono-tech mt-1.5 text-[11px] uppercase tracking-[0.1em] text-[#915EFF]">
                    {project.role}
                  </p>
                )}

                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#aaa6c3]">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-5 text-xs font-semibold text-[#dfd9ff]">
                  <span>{project.result || "View case details"}</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#00cea8]"
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
