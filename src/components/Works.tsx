import { Link } from "react-router-dom";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import {
  ExternalLinkIcon,
  WhatsAppIcon,
  PlayStoreIcon,
  AppStoreIcon,
} from "./SocialIcons";
import { track } from "../lib/analytics";

const featuredProjects = projects.filter((project) => project.featured);

const Works = () => (
  <>
    <div className="max-w-3xl">
      <p className={styles.sectionSubText}>Proof of Capability</p>
      <h2 className={styles.sectionHeadText}>Selected Projects.</h2>
      <p className="mt-4 text-secondary text-base sm:text-lg leading-relaxed">
        High-impact products delivered across mobile applications, conversational AI,
        live video classrooms, and enterprise administrative platforms.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {featuredProjects.map((project) => (
        <article
          key={project.id}
          className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-tertiary transition-[border-color,transform,box-shadow] duration-300 hover:border-[#915EFF]/60 hover:shadow-2xl hover:shadow-[#915EFF]/10"
        >
          {/* Card Media Preview */}
          <Link
            to={`/projects/${project.id}`}
            onClick={() =>
              track("project_card_click", {
                id: project.id,
                name: project.name,
                source: "home_featured",
              })
            }
            className="relative block overflow-hidden bg-[#080914]"
          >
            <img
              src={project.image}
              alt={`${project.name} preview`}
              width={720}
              height={450}
              loading="lazy"
              decoding="async"
              className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-primary/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              {project.category}
            </span>
            {project.statusBadge && (
              <span className="absolute right-4 top-4 max-w-[50%] truncate rounded-full border border-[#00cea8]/40 bg-primary/90 px-3 py-1 text-[11px] font-semibold text-[#00cea8] backdrop-blur-md">
                {project.statusBadge}
              </span>
            )}
          </Link>

          {/* Card Details */}
          <div className="flex flex-1 flex-col p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00cea8]">
                {project.role}
              </span>
              {project.result && (
                <span className="rounded-md bg-[#915EFF]/15 border border-[#915EFF]/30 px-2.5 py-0.5 text-xs font-semibold text-[#dfd9ff]">
                  {project.result}
                </span>
              )}
            </div>

            <h3 className="mt-3 text-2xl font-bold text-white transition-colors group-hover:text-[#b79bff]">
              <Link
                to={`/projects/${project.id}`}
                onClick={() =>
                  track("project_card_click", {
                    id: project.id,
                    name: project.name,
                    source: "home_featured_title",
                  })
                }
              >
                {project.name}
              </Link>
            </h3>

            {/* Crisp 1-2 sentence description */}
            <p className="mt-3 text-secondary text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Key Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-md bg-primary/70 border border-white/5 px-2.5 py-1 text-xs font-medium text-[#dfd9ff]"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="rounded-md bg-primary/40 border border-white/5 px-2 py-1 text-xs text-secondary">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            )}

            {/* Card Footer Actions */}
            <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <Link
                to={`/projects/${project.id}`}
                onClick={() =>
                  track("project_card_click", {
                    id: project.id,
                    name: project.name,
                    source: "case_study_cta",
                  })
                }
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#b79bff] hover:text-white transition-colors"
              >
                <span>Full Case Study</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </Link>

              {/* Direct links if available */}
              <div className="flex items-center gap-2">
                {project.play_store_link && (
                  <a
                    href={project.play_store_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Google Play Store"
                    onClick={() =>
                      track("outbound_click", {
                        target: "card_play_store",
                        project: project.id,
                        url: project.play_store_link ?? "",
                      })
                    }
                    className="p-2 rounded-lg bg-primary/80 border border-white/10 text-secondary hover:text-white hover:border-[#00cea8] transition-colors"
                  >
                    <PlayStoreIcon className="w-4 h-4" />
                  </a>
                )}
                {project.app_store_link && (
                  <a
                    href={project.app_store_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Apple App Store"
                    onClick={() =>
                      track("outbound_click", {
                        target: "card_app_store",
                        project: project.id,
                        url: project.app_store_link ?? "",
                      })
                    }
                    className="p-2 rounded-lg bg-primary/80 border border-white/10 text-secondary hover:text-white hover:border-[#00cea8] transition-colors"
                  >
                    <AppStoreIcon className="w-4 h-4" />
                  </a>
                )}
                {project.whatsapp_link && (
                  <a
                    href={project.whatsapp_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Chat on WhatsApp"
                    onClick={() =>
                      track("outbound_click", {
                        target: "card_whatsapp",
                        project: project.id,
                        url: project.whatsapp_link ?? "",
                      })
                    }
                    className="p-2 rounded-lg bg-primary/80 border border-white/10 text-[#25D366] hover:bg-[#25D366] hover:text-black transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                )}
                {project.project_link && (
                  <a
                    href={project.project_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Web Application"
                    onClick={() =>
                      track("outbound_click", {
                        target: "card_web",
                        project: project.id,
                        url: project.project_link,
                      })
                    }
                    className="p-2 rounded-lg bg-primary/80 border border-white/10 text-secondary hover:text-white hover:border-[#915EFF] transition-colors"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>

    {/* View All Projects Button */}
    <div className="mt-12 flex justify-start sm:justify-center">
      <Link
        to="/projects"
        onClick={() => track("cta_click", { label: "home_view_all_projects" })}
        className="inline-flex items-center gap-3 rounded-xl border border-[#915EFF]/50 bg-[#915EFF]/15 px-8 py-4 font-bold text-white transition-all hover:bg-[#915EFF]/30 hover:border-[#915EFF] hover:scale-[1.02] shadow-lg shadow-[#915EFF]/10"
      >
        <span>Explore All 20 Projects in Full Archive</span>
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  </>
);

const WrappedWorks = SectionWrapper({ Component: Works, idName: "projects" });
export default WrappedWorks;
