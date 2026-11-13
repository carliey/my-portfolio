import { useEffect } from "react";

/**
 * Progressive enhancement parallax fallback for browsers without native CSS
 * Scroll-Driven Animations (`animation-timeline: view()` and `animation-range: entry`).
 * Respects `prefers-reduced-motion` and only writes a composited `--parallax-y` custom property.
 */
export const useParallaxFallback = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const supportsScrollDriven =
      typeof CSS !== "undefined" &&
      CSS.supports("(animation-timeline: view()) and (animation-range: entry)");
    if (supportsScrollDriven) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax-speed]")
    );
    if (!targets.length) return;

    const active = new Set<HTMLElement>();
    let rafId = 0;

    const updateTransforms = () => {
      rafId = 0;
      const vh = window.innerHeight || 1;
      active.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerOffset = (rect.top + rect.height * 0.5 - vh * 0.5) / vh;
        const speed = Number(el.dataset.parallaxSpeed || 24);
        const shift = Math.max(-42, Math.min(42, centerOffset * speed));
        el.classList.add("parallax-fallback-active");
        el.style.setProperty("--parallax-y", `${shift.toFixed(1)}px`);
      });
    };

    const scheduleUpdate = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateTransforms);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            active.add(el);
          } else {
            active.delete(el);
          }
        });
        scheduleUpdate();
      },
      { rootMargin: "15% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    scheduleUpdate();

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      targets.forEach((el) => {
        el.classList.remove("parallax-fallback-active");
        el.style.removeProperty("--parallax-y");
      });
    };
  }, []);
};

