import { useEffect, useRef, useState } from "react";
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
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-project-index]"));
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) {
          const idx = Number((best.target as HTMLElement).dataset.projectIndex);
          if (!Number.isNaN(idx)) setActiveCardIndex(idx);
        }
      },
      { root: container, threshold: [0.55, 0.8] }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [notableProjects.length]);

  const scrollToCard = (targetIdx: number) => {
    const container = trackRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(notableProjects.length - 1, targetIdx));
    const card = container.querySelector<HTMLElement>(`[data-project-index="${clamped}"]`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActiveCardIndex(clamped);
    }
  };

  return (
    <section
      id="projects"
      tabIndex={-1}
      className="relative w-full border-t border-white/[0.06] bg-[#050816] py-16 outline-none sm:py-24"
    >
      <div
        aria-hidden="true"
        className="bg-architectural-grid pointer-events-none absolute inset-0 opacity-45"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-10">
        {/* Editorial Stage Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono-tech text-xs font-semibold uppercase tracking-[0.22em] text-[#00cea8]">
              02 // Selected Work
            </p>
            <h2 className="type-section mt-2 text-white">
              Shipped Products
            </h2>
          </div>

          <div className="flex items-center justify-between gap-4 sm:justify-end">
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

        {/* Mobile Horizontal Snap Deck (< md) transforming cleanly into 3x2 Showcase Grid (md+) */}
        <div
          ref={trackRef}
          aria-label="Notable projects showcase"
          className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:mt-10 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
        >
          {notableProjects.map((project, index) => (
            <Link
              key={project.id}
              data-project-index={index}
              to={`/projects/${project.id}`}
              onClick={() =>
                track("project_card_click", { id: project.id, source: "home_notable" })
              }
              className="project-card-shell group flex w-[82dvw] max-w-[335px] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#100d25]/85 transition-all duration-300 hover:-translate-y-1 hover:border-[#915EFF]/55 hover:bg-[#151030] md:w-auto md:max-w-none md:shrink"
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
                <div className="flex flex-wrap items-start justify-between gap-2">
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
                  <span>View details</span>
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

        {/* Mobile Carousel Controls & Snap Synchronized Dots (< md only) */}
        <div className="mt-4 flex items-center justify-between md:hidden">
          <div className="flex items-center gap-1.5" role="group" aria-label="Project slides">
            {notableProjects.map((project, idx) => (
              <button
                key={project.id}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`Show project ${idx + 1}: ${project.name}`}
                aria-current={activeCardIndex === idx ? "true" : undefined}
                className="flex h-11 min-w-[24px] items-center justify-center px-1"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    activeCardIndex === idx
                      ? "w-6 bg-[#00cea8]"
                      : "w-1.5 bg-white/25"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono-tech text-[11px] text-[#aaa6c3]">
              {String(activeCardIndex + 1).padStart(2, "0")} / {String(notableProjects.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => scrollToCard(activeCardIndex - 1)}
              disabled={activeCardIndex === 0}
              aria-label="Previous project"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#100d25] text-sm text-white transition-colors hover:border-[#00cea8] disabled:opacity-35"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollToCard(activeCardIndex + 1)}
              disabled={activeCardIndex === notableProjects.length - 1}
              aria-label="Next project"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#100d25] text-sm text-white transition-colors hover:border-[#00cea8] disabled:opacity-35"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
