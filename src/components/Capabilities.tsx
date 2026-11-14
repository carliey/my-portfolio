import { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { capabilities } from "../constants";
import { track } from "../lib/analytics";

const tierTags = [
  "Core Build",
  "End-to-End",
  "API & AI Layer",
  "Team Growth",
];

const tiltOptions = {
  max: 14,
  scale: 1.02,
  speed: 400,
};

const Capabilities = () => {
  const pillars = capabilities.slice(0, 4);
  const deckRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = deckRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-cap-index]"));
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) {
          const idx = Number((best.target as HTMLElement).dataset.capIndex);
          if (!Number.isNaN(idx)) setActiveIndex(idx);
        }
      },
      { root: container, threshold: [0.55, 0.8] }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [pillars.length]);

  const scrollToCard = (targetIdx: number) => {
    const container = deckRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(pillars.length - 1, targetIdx));
    const card = container.querySelector<HTMLElement>(`[data-cap-index="${clamped}"]`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActiveIndex(clamped);
    }
  };

  const scrollToContact = (pillarId: string) => {
    track("capability_cta_click", { capability: pillarId });
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.focus({ preventScroll: true });
    }
  };

  return (
    <section
      id="capabilities"
      tabIndex={-1}
      className="relative w-full border-t border-white/[0.06] bg-gradient-to-b from-[#050816] via-[#090325] to-[#050816] py-16 outline-none sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-[#915EFF]/10 blur-[110px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-10">
        <div className="mx-auto max-w-2xl text-left md:text-center">
          <p className="font-mono-tech text-xs font-semibold uppercase tracking-[0.22em] text-[#00cea8]">
            03 // Services
          </p>
          <h2 className="type-section mt-2 text-white">
            Services
          </h2>
          <p className="type-prose mt-3 text-[#aaa6c3] md:mx-auto">
            Focused engineering tracks to take your product from idea to launch.
          </p>
        </div>

        {/* Plan / Pricing Style Side-by-Side Tilt Cards */}
        <div
          ref={deckRef}
          aria-label="Services overview"
          className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4"
        >
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              data-cap-index={idx}
              className="flex w-[80dvw] max-w-[310px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink"
            >
              <Tilt options={tiltOptions} className="flex w-full">
                <article className="relative flex w-full flex-col justify-between rounded-3xl border border-white/10 bg-[#100d25]/85 p-6 transition-colors duration-300 hover:border-[#915EFF]/60 hover:bg-[#151030]/95">
                  <div>
                    {/* Top Plan Tier Label */}
                    <span className="font-mono-tech text-[11px] font-semibold uppercase tracking-[0.16em] text-[#00cea8]">
                      0{idx + 1} · {tierTags[idx] || "Service"}
                    </span>

                    {/* Plan Title & Summary */}
                    <h3 className="mt-3 font-display text-xl font-bold leading-snug text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#aaa6c3]">
                      {pillar.description}
                    </p>

                    {/* Divider & Feature Checklist (no heading label) */}
                    <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
                      {pillar.technologies.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs leading-relaxed text-[#dfd9ff]/90 sm:text-sm"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#00cea8]/15 text-[10px] font-bold text-[#00cea8]"
                          >
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="mt-7 pt-2">
                    <button
                      type="button"
                      onClick={() => scrollToContact(pillar.id)}
                      className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-[#050816]/75 text-xs font-semibold text-[#dfd9ff] transition-colors hover:border-[#00cea8] hover:bg-[#915EFF] hover:text-white sm:text-sm"
                    >
                      <span>Start a conversation</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </article>
              </Tilt>
            </div>
          ))}
        </div>

        {/* Mobile Side-by-Side Card Controls (< md) */}
        <div className="mt-4 flex items-center justify-between md:hidden">
          <div className="flex items-center gap-1.5" role="group" aria-label="Service cards">
            {pillars.map((pillar, idx) => (
              <button
                key={pillar.id}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`Show ${pillar.title}`}
                aria-current={activeIndex === idx ? "true" : undefined}
                className="flex h-11 min-w-[24px] items-center justify-center px-1"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-6 bg-[#00cea8]" : "w-1.5 bg-white/25"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono-tech text-[11px] text-[#aaa6c3]">
              0{activeIndex + 1} / 0{pillars.length}
            </span>
            <button
              type="button"
              onClick={() => scrollToCard(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous service card"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#100d25] text-sm text-white transition-colors hover:border-[#00cea8] disabled:opacity-35"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollToCard(activeIndex + 1)}
              disabled={activeIndex === pillars.length - 1}
              aria-label="Next service card"
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

export default Capabilities;
