import { useEffect, useState } from "react";
import { chapterStages } from "../constants";

const ChapterRail = () => {
  const [activeId, setActiveId] = useState<string>(chapterStages[0].id);

  useEffect(() => {
    const sections = chapterStages
      .map((stage) => document.getElementById(stage.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const handleSnapChange = (event: Event) => {
      const snapTarget = (event as unknown as { snapTargetBlock?: Element | null })
        .snapTargetBlock;
      if (snapTarget?.id) {
        setActiveId(snapTarget.id);
      }
    };

    const hasNativeSnapChange = "onscrollsnapchange" in document;
    if (hasNativeSnapChange) {
      document.addEventListener("scrollsnapchange", handleSnapChange);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -35% 0px",
        threshold: [0.1, 0.4, 0.7],
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      if (hasNativeSnapChange) {
        document.removeEventListener("scrollsnapchange", handleSnapChange);
      }
      observer.disconnect();
    };
  }, []);

  const handleJump = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.focus({ preventScroll: true });
    setActiveId(id);
  };

  return (
    <aside
      aria-label="Page chapters"
      className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex"
    >
      {chapterStages.map((stage) => {
        const isActive = activeId === stage.id;
        return (
          <button
            key={stage.id}
            type="button"
            onClick={() => handleJump(stage.id)}
            aria-current={isActive ? "location" : undefined}
            aria-label={`Jump to chapter ${stage.num}: ${stage.label}`}
            className="group flex items-center gap-2.5 py-1 text-right focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00cea8]"
          >
            <span
              className={`font-mono-tech text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                isActive
                  ? "translate-x-0 text-[#00cea8] opacity-100"
                  : "translate-x-2 text-[#aaa6c3] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              {stage.label}
            </span>
            <span
              className={`font-mono-tech flex h-7 items-center rounded-full border px-2 text-[10px] transition-all duration-300 ${
                isActive
                  ? "border-[#00cea8] bg-[#00cea8]/15 font-semibold text-white"
                  : "border-white/10 bg-[#100d25]/70 text-[#aaa6c3] group-hover:border-[#915EFF]/60 group-hover:text-white"
              }`}
            >
              {stage.num}
            </span>
          </button>
        );
      })}
    </aside>
  );
};

export default ChapterRail;

