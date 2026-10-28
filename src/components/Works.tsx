import { Link } from "react-router-dom";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { track } from "../lib/analytics";

const featuredWork: Record<string, { role: string; result: string }> = {
  "curri-ai": {
    role: "Frontend engineering",
    result: "Used by 3,000+ teachers",
  },
  "dinki-app": {
    role: "Mobile and backend development",
    result: "20+ mobile features delivered",
  },
  "schoola-src": {
    role: "Frontend lead",
    result: "Supporting 150+ schools",
  },
};

const featuredProjects = projects.filter((project) => featuredWork[project.id]);

const Works = () => (
  <>
    <div className="max-w-3xl">
      <p className={styles.sectionSubText}>Selected Work</p>
      <h2 className={styles.sectionHeadText}>Projects with real impact.</h2>
      <p className="mt-4 text-secondary text-base sm:text-lg leading-relaxed">
        A few products I helped bring to life, from AI tools for teachers to
        mobile platforms and school systems.
      </p>
    </div>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {featuredProjects.map((project) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          onClick={() =>
            track("project_card_click", {
              id: project.id,
              name: project.name,
              source: "home_featured",
            })
          }
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-tertiary transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#915EFF]/60 hover:shadow-xl hover:shadow-[#915EFF]/10"
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={`${project.name} application preview`}
              width={640}
              height={400}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-primary/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              {project.category}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#00cea8]">
              {featuredWork[project.id].role}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white transition-colors group-hover:text-[#b79bff]">
              {project.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-secondary line-clamp-3">
              {project.description}
            </p>
            <div className="mt-auto pt-6">
              <div className="border-t border-white/10 pt-4 flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-white">
                  {featuredWork[project.id].result}
                </span>
                <span aria-hidden="true" className="text-[#b79bff] text-xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>

    <div className="mt-10 flex justify-start">
      <Link
        to="/projects"
        onClick={() => track("cta_click", { label: "view_all_projects" })}
        className="inline-flex items-center gap-3 rounded-xl border border-[#915EFF]/50 bg-[#915EFF]/15 px-6 py-3.5 font-semibold text-white transition-[background-color,border-color] hover:bg-[#915EFF]/30 hover:border-[#915EFF]"
      >
        View All Projects ({projects.length}) <span aria-hidden="true">→</span>
      </Link>
    </div>
  </>
);

export default SectionWrapper({ Component: Works, idName: "projects" });
