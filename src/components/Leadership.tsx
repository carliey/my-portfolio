import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { knowledgeSharingContent, portfolioContent } from "../constants";
import { TikTokIcon } from "./SocialIcons";
import { track } from "../lib/analytics";

const Leadership = () => {
  const { highlights, featuredMedia } = knowledgeSharingContent;

  return (
    <>
      <div className="max-w-3xl">
        <p className={styles.sectionSubText}>Community & Impact</p>
        <h2 className={styles.sectionHeadText}>Knowledge Sharing.</h2>
        <p className="mt-3 text-secondary text-base leading-relaxed">
          Contributing to the growth of other developers and making practical technology skills more accessible — through hands-on mentoring, classroom teaching, and technical breakdowns.
        </p>
      </div>

      {/* Mentorship & Teaching Metric Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-tertiary p-6 transition-all duration-300 hover:border-[#915EFF]/50 hover:shadow-lg hover:shadow-[#915EFF]/10 group"
          >
            <div>
              <span className="text-3xl sm:text-4xl font-black text-[#915EFF]">
                {item.metric}
              </span>
              <h3 className="mt-2 text-lg font-bold text-white group-hover:text-[#b79bff] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-semibold text-[#00cea8] mt-0.5">
                {item.role}
              </p>
              <p className="mt-2.5 text-xs sm:text-sm text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Beyond the Build - Featured TikTok Engineering Breakdown */}
      {featuredMedia && (
        <div className="mt-8 rounded-2xl border border-white/10 bg-tertiary p-6 sm:p-8 transition-all duration-300 hover:border-[#915EFF]/40">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-center">
            <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-primary shadow-2xl">
              <iframe
                src={featuredMedia.embedUrl}
                title={featuredMedia.title || "Beyond the Build video by Muhammed Ladan"}
                loading="lazy"
                allow="fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="aspect-[9/16] w-full border-0"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-[#00cea8]/10 border border-[#00cea8]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#00cea8]">
                <span>{featuredMedia.eyebrow}</span>
              </div>

              <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
                {featuredMedia.heading}
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-secondary max-w-xl">
                {featuredMedia.description}
              </p>

              <div className="mt-6">
                <a
                  href={portfolioContent.site.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("social_click", {
                      network: "tiktok",
                      source: "beyond_the_build",
                    })
                  }
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#ff0050]/15 border border-[#ff0050]/30 hover:border-[#ff0050] hover:bg-[#ff0050]/25 px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                >
                  <TikTokIcon className="w-4 h-4 text-[#ff0050]" />
                  <span>Watch more on TikTok (@carliey_)</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const WrappedLeadership = SectionWrapper({ Component: Leadership, idName: "mentorship" });
export default WrappedLeadership;
