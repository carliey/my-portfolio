import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../components";
import { projects } from "../constants";
import { ExternalLinkIcon } from "../components/SocialIcons";
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
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#00cea8]">{project.category}</p>
          <h1 className="mt-3 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">{project.name}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary sm:text-lg">{project.description}</p>

          {(project.project_link || project.source_code_link) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.project_link && (
                <a href={project.project_link} target="_blank" rel="noopener noreferrer"
                  onClick={() => track("outbound_click", { target: "live_app", project: project.id, url: project.project_link })}
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-[#915EFF] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#804dee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b79bff]">
                  <ExternalLinkIcon className="h-5 w-5" />View live project
                </a>
              )}
              {project.source_code_link && (
                <a href={project.source_code_link} target="_blank" rel="noopener noreferrer"
                  onClick={() => track("outbound_click", { target: "source_code", project: project.id, url: project.source_code_link })}
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-xl border border-white/20 bg-tertiary px-6 py-3 font-semibold text-white transition-colors hover:border-[#915EFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b79bff]">
                  <ExternalLinkIcon className="h-5 w-5" />View source code
                </a>
              )}
            </div>
          )}
        </header>

        <section aria-label={`${project.name} images`} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-tertiary p-3 sm:rounded-3xl sm:p-4">
            <div className="flex h-[240px] items-center justify-center overflow-hidden rounded-xl bg-[#080914] sm:h-[380px] lg:h-[460px]">
              <img src={activeImage} alt={`${project.name} preview ${activeImageIndex + 1} of ${screenshots.length}`}
                width={1100} height={580} decoding="async" className="h-full w-full object-contain" />
            </div>
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

        <section aria-labelledby="highlights-heading" className="mt-12 max-w-4xl">
          <h2 id="highlights-heading" className="text-2xl font-bold text-white sm:text-3xl">Highlights</h2>
          <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-4 py-4">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#915EFF]" />
                <span className="leading-relaxed text-white/90">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

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
