import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { personalInfo, socialLinks } from "../constants";
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
          <h2 className={styles.sectionHeadText}>Let's Connect & Collaborate.</h2>
          <p className="text-secondary text-[16px] mt-4 leading-relaxed">
            I'm always open to discussing web & mobile development projects, technical leadership, consulting, or general inquiries. Reach out to me via any of the channels below!
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-4 p-5 rounded-2xl bg-tertiary border border-white/5 hover:border-[#915EFF] hover:bg-tertiary/90 transition-all duration-300 group shadow-md"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#915EFF]/20 flex items-center justify-center text-[#915EFF] group-hover:scale-110 transition-transform">
              <EmailIcon className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-secondary font-medium">Direct Email</span>
              <p className="text-white font-bold text-base mt-0.5">{personalInfo.email}</p>
            </div>
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-4 p-5 rounded-2xl bg-tertiary border border-white/5 hover:border-[#00cea8] hover:bg-tertiary/90 transition-all duration-300 group shadow-md"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#00cea8]/20 flex items-center justify-center text-[#00cea8] group-hover:scale-110 transition-transform">
              <PhoneIcon className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-secondary font-medium">Phone & WhatsApp</span>
              <p className="text-white font-bold text-base mt-0.5">{personalInfo.phone}</p>
            </div>
          </a>
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
                className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-tertiary border border-white/5 hover:border-[#915EFF] hover:bg-tertiary/90 text-white transition-all duration-300 group shadow-md hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${social.color}20`, color: social.color }}
                >
                  {getSocialIcon(social.platform)}
                </div>
                <span className="text-sm font-semibold tracking-wide">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper({ Component: Contact, idName: "contact" });
