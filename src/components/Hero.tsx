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
      className="relative flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden bg-[#050816] outline-none"
    >
      {/* Preserved Hero Background Image & Obsidian Scrim */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={heroBgImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-75"
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
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 pb-14 pt-24 sm:px-10 sm:pb-16 sm:pt-28 lg:grid-cols-12 lg:gap-12 lg:pt-28">
        {/* Left: Core Positioning + CTAs + Responsive Bento Proof Bar */}
        <div className="flex flex-col justify-center lg:col-span-7">
          {/* Mobile & Tablet Clean Portrait Bar (< lg only, zero text overlay on image) */}
          <div className="mb-6 flex items-center gap-4 lg:hidden">
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-[#100d25] shadow-lg shadow-black/60 sm:h-24 sm:w-24">
              <img
                src={profileImage}
                alt="Portrait of Muhammed Ladan"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="min-w-0">
              <p className="font-mono-tech text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00cea8]">
                01 // Introduction
              </p>
              <p className="font-display mt-1 text-lg font-bold text-white sm:text-xl">
                {personalInfo.name}
              </p>
              <p className="font-mono-tech mt-0.5 text-[11px] uppercase tracking-[0.14em] text-[#aaa6c3]">
                Software Engineer
              </p>
            </div>
          </div>

          <p className="font-mono-tech hidden text-xs font-semibold uppercase tracking-[0.22em] text-[#00cea8] lg:block">
            01 // Introduction
          </p>

          <h1 className="type-hero text-white lg:mt-4">
            {heroContent.headline}
          </h1>

          <p className="type-prose mt-4 text-[#dfd9ff]/90 sm:mt-5">
            {heroContent.description}
          </p>

          {/* Ergonomic Touch-Friendly Action Group */}
          <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-3.5">
            <button
              type="button"
              onClick={() => {
                track("hero_cta_click", { target: "contact" });
                scrollToSection("contact");
              }}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#915EFF] px-7 text-sm font-semibold text-white shadow-lg shadow-[#915EFF]/25 transition-all hover:bg-[#7d48f5] sm:w-auto"
            >
              Let&apos;s Build Together
            </button>

            <button
              type="button"
              onClick={() => {
                track("hero_cta_click", { target: "projects" });
                scrollToSection("projects");
              }}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-[#100d25]/80 px-6 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:border-[#00cea8] hover:bg-[#151030] sm:w-auto"
            >
              <span>See My Work</span>
              <span aria-hidden="true" className="text-[#00cea8]">↓</span>
            </button>
          </div>

          {/* 2+1 Mobile Bento Proof Bar -> 3-Column Desktop Bar */}
          <dl className="mt-8 grid max-w-2xl grid-cols-2 gap-3 border-t border-white/10 pt-6 sm:mt-10 sm:grid-cols-3 sm:gap-8 sm:pt-7">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`rounded-2xl border border-white/[0.07] bg-[#100d25]/60 p-3.5 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 ${
                  idx === 2 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
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

        {/* Right: Clean Desktop Studio Portrait Frame (zero overlay text on picture) */}
        <div className="hidden justify-center lg:col-span-5 lg:flex lg:justify-end">
          <div className="relative w-full max-w-[400px]">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
