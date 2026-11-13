import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import { cvData, cvPdfUrl, socialLinks } from "../constants";
import { DownloadIcon, EmailIcon, PhoneIcon } from "../components/SocialIcons";
import { track } from "../lib/analytics";

type ViewMode = "dossier" | "pdf";

const CvPage = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("dossier");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Curriculum Vitae | Muhammed Ladan";
    return () => {
      document.title = "Muhammed Ladan";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />

      <main id="main-content" className="mx-auto max-w-5xl px-5 pb-24 pt-28 sm:px-10">
        {/* Top Action & View Mode Bar */}
        <div className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              to="/"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#aaa6c3] transition-colors hover:text-[#00cea8]"
            >
              <span aria-hidden="true">←</span>
              <span>Back to portfolio</span>
            </Link>
            <p className="font-mono-tech mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#00cea8]">
              Curriculum Vitae
            </p>
            <h1 className="type-section mt-1.5 text-white">{cvData.name}</h1>
            <p className="mt-1 text-sm font-medium text-[#dfd9ff] sm:text-base">
              {cvData.headline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div
              role="tablist"
              aria-label="CV view format"
              className="inline-flex rounded-full border border-white/10 bg-[#100d25] p-1"
            >
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === "dossier"}
                onClick={() => setViewMode("dossier")}
                className={`min-h-10 rounded-full px-4 text-xs font-semibold transition-colors ${
                  viewMode === "dossier"
                    ? "bg-[#915EFF] text-white"
                    : "text-[#aaa6c3] hover:text-white"
                }`}
              >
                Interactive View
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === "pdf"}
                onClick={() => setViewMode("pdf")}
                className={`min-h-10 rounded-full px-4 text-xs font-semibold transition-colors ${
                  viewMode === "pdf"
                    ? "bg-[#915EFF] text-white"
                    : "text-[#aaa6c3] hover:text-white"
                }`}
              >
                PDF Preview
              </button>
            </div>

            <a
              href={cvPdfUrl}
              download="Muhammed_Ladan_CV.pdf"
              onClick={() => track("cv_download", { source: "cv_page" })}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#00cea8] px-6 text-sm font-bold text-[#050816] transition-opacity hover:opacity-90"
            >
              <DownloadIcon className="h-4 w-4" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* View 1: Responsive Interactive Dossier */}
        {viewMode === "dossier" ? (
          <article className="mt-10 space-y-10 rounded-3xl border border-white/10 bg-[#100d25]/90 p-6 shadow-2xl shadow-black/50 sm:p-10">
            {/* Contact Strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-white/10 pb-6 text-sm text-[#dfd9ff]">
              <a
                href={`mailto:${cvData.email}`}
                className="inline-flex items-center gap-2 hover:text-[#00cea8]"
              >
                <EmailIcon className="h-4 w-4 text-[#00cea8]" />
                <span>{cvData.email}</span>
              </a>
              <a
                href={`tel:${cvData.phone.replace(/\s+/g, "")}`}
                className="font-mono-tech inline-flex items-center gap-2 hover:text-[#00cea8]"
              >
                <PhoneIcon className="h-4 w-4 text-[#00cea8]" />
                <span>{cvData.phone}</span>
              </a>
              {socialLinks
                .filter((s) => s.platform === "linkedin" || s.platform === "github")
                .map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#aaa6c3] underline decoration-white/20 underline-offset-4 hover:text-white"
                  >
                    {social.name} ↗
                  </a>
                ))}
            </div>

            {/* Summary */}
            <section aria-labelledby="cv-summary-heading">
              <h2
                id="cv-summary-heading"
                className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-[#00cea8]"
              >
                Professional Summary
              </h2>
              <p className="type-prose mt-3 text-[#dfd9ff]">{cvData.summary}</p>
            </section>

            {/* Technical Skills */}
            <section aria-labelledby="cv-skills-heading" className="border-t border-white/10 pt-8">
              <h2
                id="cv-skills-heading"
                className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-[#00cea8]"
              >
                Technical Skills
              </h2>
              <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {cvData.technicalSkills.map((skill) => (
                  <div
                    key={skill.group}
                    className="rounded-2xl border border-white/[0.07] bg-[#151030]/75 p-4"
                  >
                    <dt className="font-display text-sm font-bold text-white">
                      {skill.group}
                    </dt>
                    <dd className="mt-1 text-xs leading-relaxed text-[#aaa6c3] sm:text-sm">
                      {skill.items}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Detailed Work Experience */}
            <section aria-labelledby="cv-exp-heading" className="border-t border-white/10 pt-8">
              <h2
                id="cv-exp-heading"
                className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-[#00cea8]"
              >
                Experience
              </h2>
              <div className="mt-5 space-y-7">
                {cvData.experience.map((entry) => (
                  <div
                    key={`${entry.organisation}-${entry.period}`}
                    className="border-b border-white/[0.06] pb-6 last:border-b-0 last:pb-0"
                  >
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">
                          {entry.organisation}
                        </h3>
                        <p className="text-sm font-medium text-[#915EFF]">{entry.role}</p>
                      </div>
                      <span className="font-mono-tech text-xs text-[#aaa6c3]">
                        {entry.period}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-2">
                      {entry.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-[#dfd9ff]/90"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00cea8]"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-8 md:grid-cols-2">
              <section aria-labelledby="cv-edu-heading">
                <h2
                  id="cv-edu-heading"
                  className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-[#00cea8]"
                >
                  Education
                </h2>
                <ul className="mt-4 space-y-4">
                  {cvData.education.map((edu) => (
                    <li key={edu.degree}>
                      <p className="font-display text-sm font-bold text-white sm:text-base">
                        {edu.degree}
                      </p>
                      <p className="text-xs text-[#aaa6c3] sm:text-sm">
                        {edu.institution} · <span className="font-mono-tech">{edu.period}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="cv-cert-heading">
                <h2
                  id="cv-cert-heading"
                  className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-[#00cea8]"
                >
                  Certifications &amp; Awards
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {cvData.certifications.map((cert) => (
                    <li key={cert} className="flex items-start gap-2.5 text-sm text-[#dfd9ff]">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#915EFF]"
                      />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </article>
        ) : (
          /* View 2: Native Embedded PDF Preview */
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#100d25] p-3 shadow-2xl shadow-black/50 sm:p-4">
            <object
              data={`${cvPdfUrl}#view=FitH`}
              type="application/pdf"
              aria-label="Muhammed Ladan CV PDF Preview"
              className="h-[78dvh] w-full rounded-2xl bg-[#050816]"
            >
              <div className="flex flex-col items-center justify-center gap-4 px-6 py-20 text-center">
                <p className="font-display text-lg font-bold text-white">
                  Inline PDF preview is unavailable in this browser.
                </p>
                <p className="max-w-md text-sm text-[#aaa6c3]">
                  Switch back to Interactive View to read every detail on screen, or download the original PDF directly.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setViewMode("dossier")}
                    className="min-h-11 rounded-full border border-white/15 bg-[#151030] px-5 text-sm font-semibold text-white"
                  >
                    Switch to Interactive View
                  </button>
                  <a
                    href={cvPdfUrl}
                    download="Muhammed_Ladan_CV.pdf"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#00cea8] px-6 text-sm font-bold text-[#050816]"
                  >
                    <DownloadIcon className="h-4 w-4" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </object>
          </div>
        )}
      </main>
    </div>
  );
};

export default CvPage;

