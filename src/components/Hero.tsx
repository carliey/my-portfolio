import { Link } from "react-router-dom";
import { heroBgImage, heroContent, personalInfo, profileImage } from "../constants";
import { track } from "../lib/analytics";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.focus({ preventScroll: true });
    }
  };

  return (
    <section
      id="hero"
      tabIndex={-1}
      className="snap-stage relative flex min-h-[100dvh] w-full flex-col justify-between overflow-hidden bg-[#050816] outline-none"
    >
      {/* Preserved Hero Background Image with Parallax Depth & Obsidian Scrim */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={heroBgImage}
          alt=""
          aria-hidden="true"
          data-parallax-speed="28"
          className="parallax-hero-bg h-full w-full object-cover object-center opacity-75"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 via-[#050816]/75 to-[#050816]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(145,94,255,0.16),transparent_55%)]"
        />
      </div>

      {/* Main Editorial Grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-5 pb-12 pt-24 sm:px-10 lg:grid-cols-12 lg:gap-12 lg:pt-28">
        {/* Left: Core Positioning + CTAs + Minimalist Proof Bar */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.22em] text-[#00cea8]">
              01 // Introduction
            </span>
            <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
            <span className="font-mono-tech inline-flex items-center gap-2 text-xs text-[#aaa6c3]">
              <span className="h-2 w-2 rounded-full bg-[#00cea8]" aria-hidden="true" />
              {personalInfo.location}
            </span>
          </div>

          <h1 className="type-hero mt-5 text-white">
            {heroContent.headline}
          </h1>

          <p className="type-prose mt-5 text-[#dfd9ff]/90">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={() => {
                track("hero_cta_click", { target: "contact" });
                scrollToSection("contact");
              }}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#915EFF] px-7 text-sm font-semibold text-white shadow-lg shadow-[#915EFF]/25 transition-all hover:bg-[#7d48f5]"
            >
              Let&apos;s Build Together
            </button>

            <button
              type="button"
              onClick={() => {
                track("hero_cta_click", { target: "projects" });
                scrollToSection("projects");
              }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-[#100d25]/80 px-6 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:border-[#00cea8] hover:bg-[#151030]"
            >
              See My Work
              <span aria-hidden="true" className="text-[#00cea8]">↓</span>
            </button>

            <Link
              to="/cv"
              onClick={() => track("hero_cta_click", { target: "cv" })}
              className="inline-flex min-h-12 items-center px-3 text-sm font-medium text-[#aaa6c3] underline decoration-white/25 underline-offset-4 transition-colors hover:text-[#00cea8] hover:decoration-[#00cea8]"
            >
              View CV
            </Link>
          </div>

          {/* Minimalist 3-Stat Bar — Numbers & Labels Only */}
          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-7 sm:gap-8">
            {personalInfo.stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-xs font-medium text-[#aaa6c3] sm:text-sm">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: Studio Portrait Architectural Frame */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <div
            data-parallax-speed="-16"
            className="parallax-layer-slow relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]"
          >
            {/* Subtle offset framing accent */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] border border-[#915EFF]/25 bg-gradient-to-br from-[#915EFF]/10 via-transparent to-[#00cea8]/10"
            />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#100d25] shadow-2xl shadow-black/70">
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#100d25]">
                <img
                  src={profileImage}
                  alt="Studio portrait of Muhammed Ladan"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 pb-4 pt-6">
                <div>
                  <p className="font-display text-sm font-semibold text-white">
                    {personalInfo.name}
                  </p>
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#00cea8]">
                    Web · Mobile · AI · Backend
                  </p>
                </div>
                <span className="font-mono-tech rounded-full border border-white/15 bg-[#050816]/80 px-2.5 py-1 text-[10px] text-[#dfd9ff] backdrop-blur-md">
                  NG · Remote
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
