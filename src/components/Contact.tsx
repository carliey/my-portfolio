import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { personalInfo, socialLinks } from "../constants";
import { track } from "../lib/analytics";
import {
  TikTokIcon,
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  GitHubIcon,
  EmailIcon,
  PhoneIcon,
} from "./SocialIcons";

const Contact = () => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "tiktok":
        return <TikTokIcon className="w-6 h-6" />;
      case "linkedin":
        return <LinkedInIcon className="w-6 h-6" />;
      case "instagram":
        return <InstagramIcon className="w-6 h-6" />;
      case "youtube":
        return <YouTubeIcon className="w-6 h-6" />;
      case "github":
        return <GitHubIcon className="w-6 h-6" />;
      default:
        return <EmailIcon className="w-6 h-6" />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-black-100/90 border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl backdrop-blur-xl relative overflow-hidden"
      >
        {/* Background glow decoration */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#915EFF]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#00cea8]/10 blur-3xl pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto">
          <p className={styles.sectionSubText}>Get In Touch</p>
          <h2 className={styles.sectionHeadText}>Tell Me What You're Building.</h2>
          <p className="text-secondary text-[16px] mt-4 leading-relaxed">
            Starting something new or improving a product you already have? I'd
            love to hear about it. Send me a message and let's talk through the
            next step.
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          <a
            href={`mailto:${personalInfo.email}`}
            onClick={() => track("contact_click", { method: "email" })}
            className="flex items-center gap-4 p-5 rounded-2xl bg-tertiary border border-white/5 hover:border-[#915EFF] hover:bg-tertiary/90 transition-all duration-300 group shadow-md"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#915EFF]/20 flex items-center justify-center text-[#915EFF] group-hover:scale-110 transition-transform">
              <EmailIcon className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-secondary font-medium">
                Direct Email
              </span>
              <p className="text-white font-bold text-base mt-0.5">
                {personalInfo.email}
              </p>
            </div>
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            onClick={() => track("contact_click", { method: "phone" })}
            className="flex items-center gap-4 p-5 rounded-2xl bg-tertiary border border-white/5 hover:border-[#00cea8] hover:bg-tertiary/90 transition-all duration-300 group shadow-md"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#00cea8]/20 flex items-center justify-center text-[#00cea8] group-hover:scale-110 transition-transform">
              <PhoneIcon className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-secondary font-medium">
                Phone & WhatsApp
              </span>
              <p className="text-white font-bold text-base mt-0.5">
                {personalInfo.phone}
              </p>
            </div>
          </a>
        </div>

        {/* One featured video above the social profiles. */}
        <div className="mt-12 border-t border-white/10 pt-10">
          <div className="grid gap-8 rounded-2xl border border-white/10 bg-tertiary/70 p-5 sm:p-8 md:grid-cols-[minmax(0,280px)_1fr] md:items-center">
            <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-xl border border-white/10 bg-primary">
              <iframe
                src="https://www.tiktok.com/player/v1/7698042073831738632?description=0&music_info=0&rel=0"
                title="React Native setup tip by Muhammed Ladan"
                loading="lazy"
                allow="fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="aspect-[9/16] w-full border-0"
              />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00cea8]">
                Beyond the build
              </p>
              <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
                Practical tech tips, one video at a time.
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-secondary">
                I share short videos on the tools and decisions behind building
                software. This one explains why Expo makes getting started with
                React Native easier.
              </p>
            </div>
          </div>
        </div>

        {/* Social Platforms Grid */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <h3 className="text-white font-bold text-center text-lg mb-6 uppercase tracking-wider text-secondary">
            Find Me On Social Media
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  track("social_click", {
                    network: social.name,
                    source: "contact",
                  })
                }
                className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-tertiary border border-white/5 hover:border-[#915EFF] hover:bg-tertiary/90 text-white transition-all duration-300 group shadow-md hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${social.color}20`,
                    color: social.color,
                  }}
                >
                  {getSocialIcon(social.platform)}
                </div>
                <span className="text-sm font-semibold tracking-wide">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper({ Component: Contact, idName: "contact" });
