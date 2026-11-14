import { knowledgeSharingContent, socialLinks } from "../constants";
import { SocialPlatformIcon } from "./SocialIcons";
import { track } from "../lib/analytics";

const Leadership = () => {
  const { featuredMedia, highlights } = knowledgeSharingContent;
  const communityHighlight = highlights[1] || highlights[0];

  return (
    <section
      id="mentorship"
      tabIndex={-1}
      className="relative w-full border-t border-white/[0.06] bg-gradient-to-b from-[#050816] via-[#090325]/65 to-[#050816] py-16 outline-none sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-[#00cea8]/10 blur-[110px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-10 lg:grid-cols-12 lg:gap-12">
        {/* Left: Beyond the Builds */}
        <div className="lg:col-span-6">
          <p className="font-mono-tech text-xs font-semibold uppercase tracking-[0.22em] text-[#00cea8]">
            05 // Content &amp; Community
          </p>
          <h2 className="type-section mt-2 text-white">
            Beyond the Builds
          </h2>
          <p className="type-prose mt-4 text-[#aaa6c3]">
            {featuredMedia?.description ||
              "I share short videos breaking down the tools, engineering trade-offs, and practical decisions behind building web and mobile software."}
          </p>

          {communityHighlight && (
            <div className="mt-7 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-[#100d25]/90 px-5 py-4">
              <span className="font-display text-3xl font-bold text-[#915EFF]">
                {communityHighlight.metric}
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-white sm:text-base">
                  {communityHighlight.title}
                </p>
                <p className="text-xs text-[#aaa6c3]">
                  Across TikTok, Instagram, YouTube &amp; LinkedIn
                </p>
              </div>
            </div>
          )}

          {/* Community Channels */}
          <div className="mt-6 flex flex-wrap items-center gap-2 sm:mt-7 sm:gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  track("social_click", {
                    platform: social.platform,
                    source: "beyond_builds_stage",
                  })
                }
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-[#100d25] px-3.5 text-xs font-medium text-[#dfd9ff] transition-colors hover:border-[#00cea8] hover:text-white sm:px-4"
              >
                <SocialPlatformIcon platform={social.platform} className="h-4 w-4" />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Featured Short Video */}
        {featuredMedia && (
          <div className="flex justify-center px-3 sm:px-0 lg:col-span-6 lg:justify-end">
            <div className="w-full max-w-[270px] rounded-3xl border border-white/10 bg-[#100d25] p-3.5 shadow-2xl shadow-black/50 sm:max-w-[350px] sm:p-5">
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

              {featuredMedia.videoId && (
                <div className="mt-3 flex items-center justify-end px-1 sm:mt-3.5">
                  <a
                    href={`https://www.tiktok.com/@muhammedladan/video/${featuredMedia.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-xs font-semibold text-[#00cea8] hover:underline"
                  >
                    Watch on TikTok ↗
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Leadership;
