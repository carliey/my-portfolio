import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../components";
import { projects } from "../constants";
import {
  AppStoreIcon,
  ExternalLinkIcon,
  PlayStoreIcon,
  WhatsAppIcon,
} from "../components/SocialIcons";
import { track } from "../lib/analytics";

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const lightboxRef = useRef<HTMLDialogElement>(null);

  const projectIndex = projects.findIndex((item) => item.id === id);
  const project = projects[projectIndex];

  const screenshots = project
    ? project.screenshots.length
      ? project.screenshots
      : [project.image]
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
    if (lightboxRef.current?.open) {
      lightboxRef.current.close();
    }
    document.title = project
      ? `${project.name} | Muhammed Ladan`
      : "Project not found | Muhammed Ladan";
    if (project) {
      track("project_view", {
        id: project.id,
        name: project.name,
        category: project.category,
      });
    }
    return () => {
      document.title = "Muhammed Ladan";
    };
  }, [id, project]);

  // Arrow-key gallery stepping
  useEffect(() => {
    if (screenshots.length <= 1) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) => (prev + 1) % screenshots.length);
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex(
          (prev) => (prev - 1 + screenshots.length) % screenshots.length,
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [screenshots.length]);

  // Progressive enhancement fallback for browsers without native dialog[closedby="any"]
  useEffect(() => {
    const dialog = lightboxRef.current;
    if (!dialog || "closedBy" in HTMLDialogElement.prototype) return;

    let pressedOutside = false;
    const isOutside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      );
    };

    const onPointerDown = (e: PointerEvent) => {
      pressedOutside = isOutside(e);
    };
    const onPointerUp = (e: PointerEvent) => {
      if (pressedOutside && isOutside(e)) dialog.close();
    };

    dialog.addEventListener("pointerdown", onPointerDown);
    dialog.addEventListener("pointerup", onPointerUp);
    return () => {
      dialog.removeEventListener("pointerdown", onPointerDown);
      dialog.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#050816] px-6 text-center text-white">
        <Navbar />
        <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#00cea8]">
          404 // Not Found
        </p>
        <h1 className="type-section mt-2">Project unavailable</h1>
        <p className="mt-3 max-w-md text-sm text-[#aaa6c3]">
          Explore the complete engineering archive to browse shipped platforms
          and systems.
        </p>
        <Link
          to="/projects"
          className="mt-7 inline-flex min-h-11 items-center rounded-full bg-[#915EFF] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#7d48f5]"
        >
          Back to Archive
        </Link>
      </div>
    );
  }

  const activeImage = screenshots[activeImageIndex] ?? screenshots[0];
  const previous =
    projects[(projectIndex - 1 + projects.length) % projects.length];
  const next = projects[(projectIndex + 1) % projects.length];

  const actionCells: {
    key: string;
    label: string;
    sublabel: string;
    href: string;
    icon: "web" | "whatsapp" | "play" | "apple";
    targetName: string;
  }[] = [];

  if (project.project_link) {
    actionCells.push({
      key: "live",
      label: "Open Live Product",
      sublabel: "Web Deployment",
      href: project.project_link,
      icon: "web",
      targetName: "live_app",
    });
  }
  if (project.whatsapp_link) {
    actionCells.push({
      key: "whatsapp",
      label: "Launch WhatsApp Bot",
      sublabel: project.whatsapp_number || "WhatsApp Cloud API",
      href: project.whatsapp_link,
      icon: "whatsapp",
      targetName: "whatsapp_bot",
    });
  }
  if (project.play_store_link) {
    actionCells.push({
      key: "play",
      label: "Google Play",
      sublabel: "Android Build",
      href: project.play_store_link,
      icon: "play",
      targetName: "play_store",
    });
  }
  if (project.app_store_link) {
    actionCells.push({
      key: "apple",
      label: "App Store",
      sublabel: "iOS Build",
      href: project.app_store_link,
      icon: "apple",
      targetName: "app_store",
    });
  }

  const openLightbox = () => {
    const dialog = lightboxRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050816] text-white">
      <a href="#project-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />

      <div
        aria-hidden="true"
        className="bg-architectural-grid pointer-events-none fixed inset-0 opacity-25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-32 left-1/2 h-[30rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#915EFF]/10 blur-[150px]"
      />

      <main
        id="project-content"
        className="relative z-10 mx-auto max-w-6xl px-4 pt-24 sm:px-10 sm:pt-32"
        style={{
          paddingBottom: "max(4.5rem, env(safe-area-inset-bottom, 0px))",
        }}
      >
        {/* Top Sub-Navigation Utility Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <Link
            to="/projects"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#aaa6c3] transition-colors hover:text-[#00cea8]"
          >
            <span aria-hidden="true">←</span>
            <span>All Projects</span>
          </Link>

          <span className="hidden font-mono-tech text-xs text-[#aaa6c3]/80 sm:inline">
            archive / {project.id}
          </span>

          <div className="flex items-center gap-2">
            <span className="font-mono-tech text-xs text-[#dfd9ff]">
              {String(projectIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
            <Link
              to={`/projects/${previous.id}`}
              aria-label={`Previous: ${previous.name}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#100d25] text-xs text-white transition-colors hover:border-[#00cea8]"
            >
              ←
            </Link>
            <Link
              to={`/projects/${next.id}`}
              aria-label={`Next: ${next.name}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#100d25] text-xs text-white transition-colors hover:border-[#00cea8]"
            >
              →
            </Link>
          </div>
        </div>

        {/* Monolith Case Study Title Header */}
        <header className="mt-8">
          {/* Hairline-divided specification bar replacing floating pills */}
          <dl className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-white/10 pb-5 font-mono-tech text-xs uppercase tracking-[0.15em]">
            <div className="flex items-center gap-2">
              <dt className="text-[#aaa6c3]">Domain</dt>
              <dd className="text-white">{project.category}</dd>
            </div>
            {project.role && (
              <div className="flex items-center gap-2">
                <dt className="text-[#aaa6c3]">Role</dt>
                <dd className="text-[#915EFF]">{project.role}</dd>
              </div>
            )}
            {project.statusBadge && (
              <div className="flex items-center gap-2">
                <dt className="text-[#aaa6c3]">Status</dt>
                <dd className="inline-flex items-center gap-1.5 text-[#00cea8]">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#00cea8]"
                  />
                  {project.statusBadge}
                </dd>
              </div>
            )}
          </dl>

          <h1
            className="mt-6 font-display font-bold tracking-tight text-white"
            style={{
              fontSize: "clamp(2.25rem, 1.35rem + 3.4vw, 4.4rem)",
              lineHeight: 1.04,
            }}
          >
            {project.name}
          </h1>

          {/* Split-Cell Architectural Launch Dock */}
          {actionCells.length > 0 && (
            <div
              className="mt-7 grid overflow-hidden rounded-2xl border border-white/15 bg-[#100d25]/90 divide-y divide-white/10 sm:divide-x sm:divide-y-0"
              style={{
                gridTemplateColumns:
                  actionCells.length > 1
                    ? `repeat(${Math.min(actionCells.length, 3)}, minmax(0, 1fr))`
                    : "minmax(0, 1fr)",
              }}
            >
              {actionCells.map((cell) => (
                <a
                  key={cell.key}
                  href={cell.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("outbound_click", {
                      target: cell.targetName,
                      project: project.id,
                      url: cell.href,
                    })
                  }
                  className="group flex min-h-16 items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-[#151030]"
                >
                  <div className="flex min-w-0 items-center gap-3.5">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        cell.icon === "whatsapp"
                          ? "bg-[#25D366]/15 text-[#25D366]"
                          : "bg-[#915EFF]/15 text-[#00cea8]"
                      }`}
                    >
                      {cell.icon === "web" && (
                        <ExternalLinkIcon className="h-4 w-4" />
                      )}
                      {cell.icon === "whatsapp" && (
                        <WhatsAppIcon className="h-4 w-4" />
                      )}
                      {cell.icon === "play" && (
                        <PlayStoreIcon className="h-4 w-4" />
                      )}
                      {cell.icon === "apple" && (
                        <AppStoreIcon className="h-4 w-4" />
                      )}
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono-tech truncate text-[10px] uppercase tracking-[0.16em] text-[#aaa6c3]">
                        {cell.sublabel}
                      </p>
                      <p className="truncate font-display text-sm font-bold text-white group-hover:text-[#00cea8] sm:text-base">
                        {cell.label}
                      </p>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-sm text-[#aaa6c3] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Studio Light-Table Gallery + Native Dialog Lightbox */}
        <section aria-label={`${project.name} visuals`} className="mt-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(145,94,255,0.14),rgba(5,8,22,1)_72%)] p-3 sm:p-6">
            <div className="relative flex aspect-[16/10] max-h-[540px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050816]">
              <img
                src={activeImage}
                alt={`${project.name} screenshot ${activeImageIndex + 1} of ${screenshots.length}`}
                width={1200}
                height={700}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-contain"
              />

              {/* Expand Fullscreen Lightbox Trigger */}
              <button
                type="button"
                onClick={openLightbox}
                aria-label="Inspect screenshot fullscreen"
                className="font-mono-tech absolute right-3 top-3 inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/15 bg-[#050816]/85 px-3.5 text-[11px] font-medium text-white backdrop-blur-md transition-colors hover:border-[#00cea8] hover:text-[#00cea8]"
              >
                <span>Expand</span>
                <span aria-hidden="true">⤢</span>
              </button>

              {screenshots.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIndex(
                        (prev) =>
                          (prev - 1 + screenshots.length) % screenshots.length,
                      )
                    }
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#050816]/80 text-white backdrop-blur-md transition-colors hover:border-[#00cea8] sm:inline-flex"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIndex(
                        (prev) => (prev + 1) % screenshots.length,
                      )
                    }
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#050816]/80 text-white backdrop-blur-md transition-colors hover:border-[#00cea8] sm:inline-flex"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            {/* Filmstrip Switcher Bar */}
            {screenshots.length > 1 && (
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div
                  role="group"
                  aria-label="Project gallery frames"
                  className="no-scrollbar flex items-center gap-2.5 overflow-x-auto py-1"
                >
                  {screenshots.map((src, index) => {
                    const active = activeImageIndex === index;
                    return (
                      <button
                        key={`${src}-${index}`}
                        type="button"
                        onClick={() => setActiveImageIndex(index)}
                        aria-label={`View frame ${index + 1}`}
                        aria-pressed={active}
                        className={`group relative h-14 w-24 shrink-0 overflow-hidden rounded-xl border transition-all ${
                          active
                            ? "border-[#00cea8] ring-2 ring-[#00cea8]/30"
                            : "border-white/10 opacity-55 hover:border-white/40 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={src}
                          alt=""
                          width={96}
                          height={56}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                        <span className="font-mono-tech absolute bottom-1 left-1.5 rounded bg-[#050816]/85 px-1 text-[9px] text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between gap-3 sm:justify-end">
                  <span className="font-mono-tech text-xs text-[#aaa6c3]">
                    Frame {String(activeImageIndex + 1).padStart(2, "0")} of{" "}
                    {String(screenshots.length).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-2 sm:hidden">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex(
                          (prev) =>
                            (prev - 1 + screenshots.length) %
                            screenshots.length,
                        )
                      }
                      aria-label="Previous screenshot"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#100d25] text-sm text-white"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex(
                          (prev) => (prev + 1) % screenshots.length,
                        )
                      }
                      aria-label="Next screenshot"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#100d25] text-sm text-white"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Native Modal Lightbox for Inspecting Screenshots */}
        <dialog
          ref={lightboxRef}
          aria-label={`${project.name} fullscreen image preview`}
          {...({ closedby: "any" } as Record<string, string>)}
          className="m-auto w-[min(94dvw,72rem)] max-w-none overflow-hidden rounded-3xl border border-white/15 bg-[#050816] p-3 text-white shadow-2xl sm:p-5"
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
            <p className="font-mono-tech text-xs text-[#dfd9ff]">
              {project.name} — Frame {activeImageIndex + 1} /{" "}
              {screenshots.length}
            </p>
            <form method="dialog">
              <button
                type="submit"
                autoFocus
                aria-label="Close fullscreen preview"
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/15 bg-[#100d25] px-4 text-xs font-semibold text-white hover:border-[#00cea8]"
              >
                <span>Close</span>
                <span aria-hidden="true">✕</span>
              </button>
            </form>
          </div>

          <div className="mt-3 flex max-h-[75dvh] items-center justify-center overflow-hidden rounded-2xl bg-[#070a1c]">
            <img
              src={activeImage}
              alt={`${project.name} fullscreen frame ${activeImageIndex + 1}`}
              className="max-h-[75dvh] w-full object-contain"
            />
          </div>

          {screenshots.length > 1 && (
            <div className="mt-3 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex(
                    (prev) =>
                      (prev - 1 + screenshots.length) % screenshots.length,
                  )
                }
                aria-label="Previous fullscreen frame"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-[#100d25] px-5 text-xs font-semibold text-white hover:border-[#00cea8]"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((prev) => (prev + 1) % screenshots.length)
                }
                aria-label="Next fullscreen frame"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-[#100d25] px-5 text-xs font-semibold text-white hover:border-[#00cea8]"
              >
                Next →
              </button>
            </div>
          )}
        </dialog>

        {/* Hierarchical Case Study Body: Overview -> Core Features -> Contributions */}
        <article className="mt-14 max-w-4xl space-y-10 border-t border-white/10 pt-10">
          {/* 01: Overview */}
          <section aria-labelledby="overview-heading">
            <div className="flex items-center gap-3">
              <span className="font-mono-tech text-xs font-semibold tracking-[0.18em] text-[#00cea8]">
                01
              </span>
              <h2
                id="overview-heading"
                className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl"
              >
                Overview
              </h2>
            </div>
            <p className="mt-3 border-l-2 border-[#00cea8]/60 pl-4 text-base leading-[1.75] text-[#dfd9ff] sm:pl-6 sm:text-lg">
              {project.longDescription || project.description}
            </p>
          </section>

          {/* 02: Core Features */}
          {project.features && project.features.length > 0 && (
            <section
              aria-labelledby="features-heading"
              className="border-t border-white/10 pt-9"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono-tech text-xs font-semibold tracking-[0.18em] text-[#00cea8]">
                  02
                </span>
                <h2
                  id="features-heading"
                  className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl"
                >
                  Core Features
                </h2>
              </div>
              <ul className="mt-4 space-y-3 pl-2 sm:pl-5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#dfd9ff]/95 sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00cea8]"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 03: Contributions */}
          {project.contributions && project.contributions.length > 0 && (
            <section
              aria-labelledby="contributions-heading"
              className="border-t border-white/10 pt-9"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono-tech text-xs font-semibold tracking-[0.18em] text-[#915EFF]">
                  03
                </span>
                <h2
                  id="contributions-heading"
                  className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl"
                >
                  Contributions
                </h2>
              </div>
              <ul className="mt-4 space-y-3 pl-2 sm:pl-5">
                {project.contributions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#dfd9ff]/95 sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#915EFF]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>

        {/* Visual Case-Study Pager */}
        <nav
          aria-label="More projects"
          className="mt-16 border-t border-white/10 pt-10"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              to={`/projects/${previous.id}`}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#100d25]/80 p-4 transition-colors hover:border-[#915EFF]/60 sm:p-5"
            >
              <img
                src={previous.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-14 w-20 shrink-0 rounded-xl border border-white/10 object-cover object-top"
              />
              <div className="min-w-0">
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#aaa6c3]">
                  ← Previous Case
                </span>
                <span className="mt-1 block truncate font-display text-base font-bold text-white group-hover:text-[#00cea8] sm:text-lg">
                  {previous.name}
                </span>
              </div>
            </Link>

            <Link
              to={`/projects/${next.id}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#100d25]/80 p-4 text-right transition-colors hover:border-[#915EFF]/60 sm:p-5"
            >
              <div className="min-w-0 flex-1">
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#aaa6c3]">
                  Next Case →
                </span>
                <span className="mt-1 block truncate font-display text-base font-bold text-white group-hover:text-[#00cea8] sm:text-lg">
                  {next.name}
                </span>
              </div>
              <img
                src={next.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-14 w-20 shrink-0 rounded-xl border border-white/10 object-cover object-top"
              />
            </Link>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default ProjectDetailsPage;
