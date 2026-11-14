import { contactContent, personalInfo } from "../constants";
import { EmailIcon, PhoneIcon, WhatsAppIcon } from "./SocialIcons";
import { track } from "../lib/analytics";

const Contact = () => {
  const email = contactContent.email || personalInfo.email;
  const phone = contactContent.phone || "+2347036215851";
  const whatsappNumber = phone.replace(/[^0-9]/g, "");

  return (
    <section
      id="contact"
      tabIndex={-1}
      className="relative w-full border-t border-white/[0.06] bg-gradient-to-b from-[#050816] via-[#100d25]/80 to-[#050816] pt-16 outline-none sm:pt-24"
      style={{
        paddingBottom: "max(4.5rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(ellipse_at_bottom,rgba(0,206,168,0.12),transparent_65%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-10">
        {/* Centered Header & Subheader for Clear Reading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono-tech text-xs font-semibold uppercase tracking-[0.22em] text-[#00cea8]">
            06 // {contactContent.eyebrow}
          </p>
          <h2 className="type-hero mt-3 text-white">
            {contactContent.heading}
          </h2>
          <p className="type-prose mx-auto mt-4 text-[#aaa6c3] sm:mt-5">
            {contactContent.description}
          </p>
        </div>

        {/* Direct Channels Card arranged cleanly below */}
        <div className="mx-auto mt-10 rounded-3xl border border-white/10 bg-[#100d25]/90 p-5 shadow-2xl shadow-black/40 sm:p-8">
          <h3 className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#aaa6c3]">
            Direct Channels
          </h3>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Direct Email */}
            <a
              href={`mailto:${email}`}
              onClick={() => track("email_click", { source: "contact_card" })}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-white/[0.08] bg-[#050816]/65 p-4 transition-colors hover:border-[#915EFF]/55 sm:p-5"
            >
              <div className="flex min-w-0 items-center gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#915EFF]/15 text-[#915EFF]">
                  <EmailIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-[#aaa6c3]">
                    Direct Email
                  </p>
                  <p className="mt-0.5 break-all text-sm font-semibold text-white group-hover:text-[#00cea8]">
                    {email}
                  </p>
                </div>
              </div>
              <span
                aria-hidden="true"
                className="shrink-0 text-[#00cea8] transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>

            {/* Phone & WhatsApp */}
            <div className="flex flex-col justify-between gap-3 rounded-2xl border border-white/[0.08] bg-[#050816]/65 p-4 sm:flex-row sm:items-center sm:p-5">
              <div className="flex min-w-0 items-center gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00cea8]/15 text-[#00cea8]">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-[#aaa6c3]">
                    Phone &amp; WhatsApp
                  </p>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="font-mono-tech mt-0.5 block text-sm font-semibold text-white hover:text-[#00cea8]"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { source: "contact_card" })}
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-1.5 rounded-xl border border-[#00cea8]/35 bg-[#00cea8]/10 px-3.5 text-xs font-semibold text-[#00cea8] transition-colors hover:bg-[#00cea8]/20"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
