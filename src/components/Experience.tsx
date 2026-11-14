import { Link } from "react-router-dom";
import { experiences } from "../constants";
import { track } from "../lib/analytics";

const Experience = () => {
  return (
    <section
      id="experience"
      tabIndex={-1}
      className="relative w-full border-t border-white/[0.06] bg-[#050816] py-16 outline-none sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-1/4 h-80 w-80 rounded-full bg-[#00cea8]/8 blur-[110px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono-tech text-xs font-semibold uppercase tracking-[0.22em] text-[#00cea8]">
              04 // Experience
            </p>
            <h2 className="type-section mt-2 text-white">
              Where I&apos;ve Built &amp; Contributed
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

        {/* Redesigned Architectural Career Grid — Organisation · Role · Period cleanly */}
        <ol className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {experiences.map((exp, idx) => (
            <li
              key={exp.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.09] bg-[#100d25]/85 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#915EFF]/55 hover:bg-[#151030] sm:p-6"
            >
              {/* Subtle top accent bar */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#915EFF]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div>
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 p-2"
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

                  <span className="font-mono-tech rounded-full border border-white/10 bg-[#050816]/80 px-3 py-1 text-[11px] font-medium text-[#00cea8]">
                    {exp.date}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-white sm:text-xl">
                  {exp.company_name}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-[#dfd9ff]/85">
                  {exp.title}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-3.5">
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#aaa6c3]">
                  Role {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-[#915EFF]">
                  {/present/i.test(exp.date) ? "Current" : "Completed"}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
