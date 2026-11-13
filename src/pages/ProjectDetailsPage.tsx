import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../components";
import { projects } from "../constants";
import {
  ExternalLinkIcon,
  WhatsAppIcon,
  PlayStoreIcon,
  AppStoreIcon,
} from "../components/SocialIcons";
import { track } from "../lib/analytics";

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const projectIndex = projects.findIndex((item) => item.id === id);
  const project = projects[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
    document.title = project ? `${project.name} | Muhammed Ladan` : "Project not found | Muhammed Ladan";
    if (project) {
      track("project_view", { id: project.id, name: project.name, category: project.category });
    }
    return () => { document.title = "Muhammed Ladan"; };
  }, [id, project]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-primary px-6 text-center">
        <h1 className="text-3xl font-bold text-white">Project not found</h1>
        <p className="mt-3 text-secondary">This project page is unavailable. Explore the other work in my portfolio.</p>
        <Link to="/projects" className="mt-7 rounded-xl bg-[#915EFF] px-6 py-3 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b79bff]">View all projects</Link>
      </div>
    );
  }

  const screenshots = project.screenshots.length ? project.screenshots : [project.image];
  const activeImage = screenshots[activeImageIndex] ?? screenshots[0];
  const previous = projects[(projectIndex - 1 + projects.length) % projects.length];
  const next = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-primary">
      <a href="#project-content" className="skip-link">Skip to content</a>
      <Navbar />

      <main id="project-content" className="mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pt-30">
        <Link to="/projects" className="inline-flex min-h-11 items-center text-sm font-medium text-secondary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b79bff]">
          <span aria-hidden="true" className="mr-2">←</span> All projects
        </Link>

        <header className="mt-7 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#00cea8]">
              {project.category}
            </p>
            {project.role && (
              <span className="rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 px-3 py-1 text-xs font-semibold text-[#dfd9ff]">
                {project.role}
              </span>
            )}
            {project.statusBadge && (
              <span className="rounded-full border border-[#00cea8]/40 bg-[#00cea8]/10 px-3 py-1 text-xs font-semibold text-[#00cea8]">
                {project.statusBadge}
              </span>
            )}
          </div>
          <h1 className="mt-3 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary sm:text-lg">
            {project.description}
          </p>

          {(project.whatsapp_link ||
            project.project_link ||
            project.play_store_link ||
            project.app_store_link ||
            project.source_code_link) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.whatsapp_link && (
                <a
                  href={project.whatsapp_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("outbound_click", {
                      target: "whatsapp_bot",
                      project: project.id,
                      url: project.whatsapp_link ?? "",
                    })
                  }
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-[#04180d] transition-colors hover:bg-[#1ebe5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp ({project.whatsapp_number ?? "Open Bot"})
                </a>
              )}
              {project.project_link && (
                <a
                  href={project.project_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("outbound_click", {
                      target: "live_app",
                      project: project.id,
                      url: project.project_link,
                    })
                  }
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-[#915EFF] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#804dee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b79bff]"
                >
                  <ExternalLinkIcon className="h-5 w-5" />
                  View live project
                </a>
              )}
              {project.play_store_link && (
                <a
                  href={project.play_store_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("outbound_click", {
                      target: "play_store",
                      project: project.id,
                      url: project.play_store_link ?? "",
                    })
                  }
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-xl border border-white/20 bg-tertiary px-6 py-3 font-semibold text-white transition-colors hover:border-[#915EFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b79bff]"
                >
                  <PlayStoreIcon className="h-5 w-5" />
                  Google Play
                </a>
              )}
              {project.app_store_link && (
                <a
                  href={project.app_store_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("outbound_click", {
                      target: "app_store",
                      project: project.id,
                      url: project.app_store_link ?? "",
                    })
                  }
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-xl border border-white/20 bg-tertiary px-6 py-3 font-semibold text-white transition-colors hover:border-[#915EFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b79bff]"
                >
                  <AppStoreIcon className="h-5 w-5" />
                  App Store
                </a>
              )}
            </div>
          )}

          {project.whatsapp_link && project.whatsapp_number && (
            <div className="mt-6 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 p-4 sm:p-5">
              <p className="text-sm leading-relaxed text-white/90">
                Try the chatbot directly on WhatsApp:{" "}
                <a
                  href={project.whatsapp_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("outbound_click", {
                      target: "whatsapp_number_link",
                      project: project.id,
                      url: project.whatsapp_link ?? "",
                    })
                  }
                  className="font-bold text-[#25D366] underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                >
                  {project.whatsapp_number}
                </a>{" "}
                <span className="text-secondary">
                  — tap to start listing inventory or searching products via chat.
                </span>
              </p>
            </div>
          )}
        </header>

        <section aria-label={`${project.name} images`} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-tertiary p-3 sm:rounded-3xl sm:p-4">
            <div className="flex h-[240px] items-center justify-center overflow-hidden rounded-xl bg-[#080914] sm:h-[380px] lg:h-[460px]">
              <img
                src={activeImage}
                alt={`${project.name} preview ${activeImageIndex + 1} of ${screenshots.length}`}
                width={1100}
                height={580}
                decoding="async"
                {...({ fetchpriority: "high" } as Record<string, string>)}
                className="h-full w-full object-contain"
              />
            </div>
            {project.isPlaceholderImage && activeImageIndex === 0 && (
              <p className="pt-2.5 text-center text-xs text-secondary">
                Concept preview placeholder — live product screenshots can be swapped in anytime.
              </p>
            )}
            {screenshots.length > 1 && (
                <div className="flex flex-wrap justify-center gap-2 pt-3" role="group" aria-label="Choose project preview">
                  {screenshots.map((src, index) => (
                    <button key={`${src}-${index}`} type="button" onClick={() => setActiveImageIndex(index)}
                      aria-label={`Show preview ${index + 1} of ${screenshots.length}`} aria-pressed={activeImageIndex === index}
                      className={`h-14 w-20 overflow-hidden rounded-lg border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b79bff] ${activeImageIndex === index ? "border-[#915EFF]" : "border-white/20 hover:border-white/60"}`}>
                      <img src={src} alt="" width={80} height={56} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
            )}
          </div>
        </section>

        {/* Product Overview */}
        <section aria-labelledby="overview-heading" className="mt-12 max-w-4xl">
          <h2 id="overview-heading" className="text-2xl font-bold text-white sm:text-3xl">
            Overview
          </h2>
          <div className="mt-4 rounded-2xl bg-tertiary border border-white/10 p-5 sm:p-6">
            <p className="text-base leading-relaxed text-[#dfd9ff] sm:text-lg">
              {project.longDescription || project.description}
            </p>
          </div>
        </section>

        {/* Technologies Used */}
        {project.technologies && project.technologies.length > 0 && (
          <section aria-labelledby="tech-heading" className="mt-10 max-w-4xl">
            <h2 id="tech-heading" className="text-lg font-bold uppercase tracking-wider text-secondary">
              Technologies & Tools
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-xl bg-tertiary border border-white/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Key Engineering Contributions */}
        {project.contributions && project.contributions.length > 0 && (
          <section aria-labelledby="contributions-heading" className="mt-12 max-w-4xl">
            <h2 id="contributions-heading" className="text-2xl font-bold text-white sm:text-3xl">
              Key Engineering Contributions
            </h2>
            <ul className="mt-4 space-y-3">
              {project.contributions.map((c, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl bg-tertiary/70 border border-white/5 p-4 text-white/90">
                  <span className="text-[#00cea8] font-bold mt-0.5">▸</span>
                  <span className="leading-relaxed text-sm sm:text-base">{c}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-10 flex max-w-4xl flex-col items-start gap-1 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="text-lg font-semibold text-white">Have a project in mind?</p>
          <a href="/#contact" className="inline-flex min-h-11 items-center font-semibold text-[#b79bff] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b79bff]">
            Let’s talk <span aria-hidden="true" className="ml-2">→</span>
          </a>
        </div>

        <nav aria-label="More projects" className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <Link to={`/projects/${previous.id}`} className="group rounded-2xl border border-white/10 bg-tertiary p-6 transition-colors hover:border-[#915EFF]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b79bff]">
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">← Previous</span>
              <span className="mt-2 block text-xl font-bold text-white group-hover:text-[#b79bff]">{previous.name}</span>
            </Link>
            <Link to={`/projects/${next.id}`} className="group rounded-2xl border border-white/10 bg-tertiary p-6 transition-colors hover:border-[#915EFF]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b79bff] sm:text-right">
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">Next →</span>
              <span className="mt-2 block text-xl font-bold text-white group-hover:text-[#b79bff]">{next.name}</span>
            </Link>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default ProjectDetailsPage;
