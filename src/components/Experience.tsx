import { Link } from "react-router-dom";
import { capabilities, experiences } from "../constants";
import { track } from "../lib/analytics";

const Experience = () => {
  return (
    <section
      id="experience"
      tabIndex={-1}
      className="snap-stage relative flex min-h-[100dvh] w-full flex-col justify-center border-t border-white/[0.06] bg-gradient-to-b from-[#050816] via-[#090325] to-[#050816] py-20 outline-none sm:py-24"
    >
      <div
        aria-hidden="true"
        data-parallax-speed="18"
        className="parallax-layer-slow pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-[#915EFF]/10 blur-[110px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-10">
        <div className="stage-reveal flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono-tech text-xs font-semibold uppercase tracking-[0.22em] text-[#00cea8]">
              03 // Track Record
            </p>
            <h2 className="type-section mt-2 text-white">
              Experience &amp; Capabilities
            </h2>
          </div>

          <Link
            to="/cv"
            onClick={() => track("cv_link_click", { source: "experience_stage" })}
            className="inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-[#915EFF]/45 bg-[#100d25] px-5 text-sm font-semibold text-white transition-colors hover:border-[#00cea8] hover:bg-[#151030] sm:self-auto"
          >
            View full CV dossier
            <span aria-hidden="true" className="text-[#00cea8]">→</span>
          </Link>
        </div>

        {/* Asymmetric 12-Col Dossier */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left: Clean Experience Ledger (Organisation · Role · Period ONLY) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#aaa6c3]">
                Roles &amp; Organisations
              </h3>
              <span className="font-mono-tech text-[11px] text-[#00cea8]">
                {experiences.length} Positions
              </span>
            </div>

            <ol className="divide-y divide-white/[0.08]">
              {experiences.map((exp, idx) => (
                <li
                  key={exp.id}
                  className="group grid grid-cols-1 gap-2 py-4 transition-colors sm:grid-cols-12 sm:items-center sm:gap-4 sm:py-5"
                >
                  <div className="flex items-center gap-3.5 sm:col-span-6">
                    <span className="font-mono-tech hidden text-xs text-white/30 sm:inline">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 p-1.5"
                      style={{ backgroundColor: exp.iconBg }}
                    >
                      <img
                        src={exp.icon}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="font-display text-base font-semibold text-white">
                      {exp.company_name}
                    </p>
                  </div>

                  <p className="text-sm font-medium text-[#dfd9ff] sm:col-span-4">
                    {exp.title}
                  </p>

                  <p className="font-mono-tech text-xs text-[#aaa6c3] sm:col-span-2 sm:text-right">
                    {exp.date}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: Architectural Capabilities Index */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-[#100d25]/85 p-6 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#aaa6c3]">
                  What I Bring
                </h3>
                <span className="font-mono-tech text-[11px] text-[#915EFF]">
                  Core Systems
                </span>
              </div>

              <div className="mt-5 space-y-5">
                {capabilities.slice(0, 4).map((pillar, idx) => (
                  <div
                    key={pillar.id}
                    className="border-b border-white/[0.06] pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono-tech text-xs font-semibold text-[#00cea8]">
                        0{idx + 1}
                      </span>
                      <h4 className="font-display text-base font-semibold text-white">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="mt-1.5 pl-7 text-sm leading-relaxed text-[#aaa6c3]">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
