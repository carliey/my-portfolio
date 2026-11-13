import { knowledgeSharingContent, socialLinks } from "../constants";
import { SocialPlatformIcon } from "./SocialIcons";
import { track } from "../lib/analytics";

const Leadership = () => {
  const { featuredMedia, highlights } = knowledgeSharingContent;
  const teachingHighlight = highlights[0];
  const communityHighlight = highlights[1];

  return (
    <section
      id="mentorship"
      tabIndex={-1}
      className="snap-stage relative flex min-h-[100dvh] w-full flex-col justify-center border-t border-white/[0.06] bg-[#050816] py-20 outline-none sm:py-24"
    >
      <div
        aria-hidden="true"
        data-parallax-speed="-20"
        className="parallax-layer-slow pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-[#00cea8]/10 blur-[110px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-10 lg:grid-cols-12">
        {/* Left: Teaching & Community Footprint */}
        <div className="stage-reveal lg:col-span-6">
          <p className="font-mono-tech text-xs font-semibold uppercase tracking-[0.22em] text-[#00cea8]">
            04 // Knowledge Sharing
          </p>
          <h2 className="type-section mt-2 text-white">
            Teaching &amp; Beyond the Build
          </h2>
          <p className="type-prose mt-4 text-[#aaa6c3]">
            {knowledgeSharingContent.intro}
          </p>

          {/* Focused 2-Metric Row (Interns + Bootcamps unified into 100+) */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {teachingHighlight && (
              <div className="rounded-2xl border border-white/10 bg-[#100d25]/90 p-5">
                <p className="font-display text-3xl font-bold text-[#00cea8]">
                  {teachingHighlight.metric}
                </p>
                <p className="mt-1 font-display text-base font-semibold text-white">
                  {teachingHighlight.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#aaa6c3]">
                  Girls Tech Bootcamp, Dialogue Academy, AFIT ICT workshops &amp; iT Central internships.
                </p>
              </div>
            )}

            {communityHighlight && (
              <div className="rounded-2xl border border-white/10 bg-[#100d25]/90 p-5">
                <p className="font-display text-3xl font-bold text-[#915EFF]">
                  {communityHighlight.metric}
                </p>
                <p className="mt-1 font-display text-base font-semibold text-white">
                  {communityHighlight.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#aaa6c3]">
                  Short practical videos breaking down React Native, tooling &amp; engineering decisions.
                </p>
              </div>
            )}
          </div>

          {/* Community Channels */}
          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  track("social_click", {
                    platform: social.platform,
                    source: "knowledge_stage",
                  })
                }
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-[#100d25] px-4 text-xs font-medium text-[#dfd9ff] transition-colors hover:border-[#00cea8] hover:text-white"
              >
                <SocialPlatformIcon platform={social.platform} className="h-4 w-4" />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Featured Beyond the Build Short Video */}
        {featuredMedia && (
          <div className="flex justify-center lg:col-span-6 lg:justify-end">
            <div className="w-full max-w-[360px] rounded-3xl border border-white/10 bg-[#100d25] p-4 shadow-2xl shadow-black/50 sm:p-5">
              <div className="mb-3 flex items-center justify-between gap-2 px-1">
                <div>
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#00cea8]">
                    {featuredMedia.eyebrow}
                  </p>
                  <h3 className="font-display text-sm font-semibold text-white">
                    {featuredMedia.heading}
                  </h3>
                </div>
                <SocialPlatformIcon
                  platform={featuredMedia.platform}
                  className="h-5 w-5 shrink-0 text-[#dfd9ff]"
                />
              </div>

              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#050816]">
                <iframe
                  src={featuredMedia.embedUrl}
                  title={featuredMedia.title || featuredMedia.heading}
                  className="h-full w-full"
                  loading="lazy"
                  allow="encrypted-media; fullscreen"
                  allowFullScreen
                />
              </div>

              <div className="mt-3.5 flex items-center justify-between gap-3 px-1">
                <p className="line-clamp-2 text-xs text-[#aaa6c3]">
                  {featuredMedia.description}
                </p>
                {featuredMedia.videoId && (
                  <a
                    href={`https://www.tiktok.com/@muhammedladan/video/${featuredMedia.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs font-semibold text-[#00cea8] hover:underline"
                  >
                    Open ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Leadership;
