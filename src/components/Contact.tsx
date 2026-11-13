import { useState } from "react";
import { Link } from "react-router-dom";
import { contactContent, cvPdfUrl, personalInfo, socialLinks } from "../constants";
import {
  DownloadIcon,
  EmailIcon,
  PhoneIcon,
  SocialPlatformIcon,
  WhatsAppIcon,
} from "./SocialIcons";
import { track } from "../lib/analytics";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = contactContent.email || personalInfo.email;
  const phone = contactContent.phone || personalInfo.phone;
  const whatsappNumber = phone.replace(/[^0-9]/g, "");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      track("copy_email", { source: "contact_stage" });
      setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section
      id="contact"
      tabIndex={-1}
      className="snap-stage relative flex min-h-[100dvh] w-full flex-col justify-between border-t border-white/[0.06] bg-gradient-to-b from-[#050816] via-[#100d25]/80 to-[#050816] pt-24 pb-10 outline-none sm:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(ellipse_at_bottom,rgba(0,206,168,0.12),transparent_65%)]"
      />

      {/* Main Conversion Canvas */}
      <div className="relative z-10 mx-auto my-auto w-full max-w-7xl px-5 sm:px-10">
        <div className="stage-reveal grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono-tech text-xs font-semibold uppercase tracking-[0.22em] text-[#00cea8]">
              05 // Let&apos;s Work Together
            </p>
            <h2 className="type-hero mt-3 text-white">
              {contactContent.heading}
            </h2>
            <p className="type-prose mt-5 text-[#aaa6c3]">
              {contactContent.description}
            </p>

            {/* Primary Contact Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={`mailto:${email}`}
                onClick={() => track("email_click", { source: "contact_stage" })}
                className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-[#915EFF] px-7 text-sm font-semibold text-white shadow-lg shadow-[#915EFF]/25 transition-colors hover:bg-[#7d48f5]"
              >
                <EmailIcon className="h-4 w-4" />
                <span>Send an Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 bg-[#100d25] px-5 text-sm font-medium text-[#dfd9ff] transition-colors hover:border-[#00cea8] hover:text-white"
              >
                <span>{copied ? "Copied email!" : email}</span>
              </button>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { source: "contact_stage" })}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#00cea8]/40 bg-[#00cea8]/10 px-5 text-sm font-semibold text-[#00cea8] transition-colors hover:bg-[#00cea8]/20"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: Direct Dossier & CV Quick Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-[#100d25]/90 p-6 sm:p-7">
              <h3 className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#aaa6c3]">
                Direct Coordinates &amp; CV
              </h3>

              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] pb-3.5">
                  <dt className="flex items-center gap-2.5 text-[#aaa6c3]">
                    <PhoneIcon className="h-4 w-4 text-[#00cea8]" />
                    <span>Phone</span>
                  </dt>
                  <dd>
                    <a
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="font-mono-tech font-medium text-white hover:text-[#00cea8]"
                    >
                      {phone}
                    </a>
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] pb-3.5">
                  <dt className="text-[#aaa6c3]">Based in</dt>
                  <dd className="font-medium text-white">{personalInfo.location}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/cv"
                  onClick={() => track("cv_link_click", { source: "contact_stage" })}
                  className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-white/15 bg-[#151030] px-4 text-sm font-semibold text-white transition-colors hover:border-[#915EFF]"
                >
                  Inspect CV in App
                </Link>
                <a
                  href={cvPdfUrl}
                  download="Muhammed_Ladan_CV.pdf"
                  onClick={() => track("cv_download", { source: "contact_stage" })}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-[#050816] transition-colors hover:bg-[#00cea8]"
                >
                  <DownloadIcon className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Editorial Colophon Footer */}
      <footer className="relative z-10 mx-auto mt-16 flex w-full max-w-7xl flex-col items-start justify-between gap-5 border-t border-white/10 px-5 pt-7 sm:flex-row sm:items-center sm:px-10">
        <p className="font-mono-tech text-xs text-[#aaa6c3]">
          © {new Date().getFullYear()} {personalInfo.name}. Engineered with React &amp; TypeScript.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-[#aaa6c3] transition-colors hover:text-[#00cea8]"
            >
              <SocialPlatformIcon platform={social.platform} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
};

export default Contact;
